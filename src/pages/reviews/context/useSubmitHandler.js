/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import { useLocation, useNavigate } from "react-router-dom";
import { useAddReviewMutation, useModifyReviewMutation } from "../../../features/reviews/reviewsApi";
import useAuth from "../../../hooks/auth/useAuth";

export default function useSubmitHandler({ onSubmit, review, serviceId, getting }) {
  const { email, photoURL, displayName } = useAuth() || {};

  const [addReview, { isLoading: adding }] = useAddReviewMutation();
  const [modifyReview, { isLoading: modifying }] = useModifyReviewMutation();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (email) {
      const userDetails = { email, photoURL, displayName };
      onSubmit(async (form) => {
        const rating = { ...form, serviceId, userDetails, ratedAt: new Date(), ratingBy: email };
        if (review) {
          await modifyReview({ ...form, id: review._id, editedBy: email, editedAt: new Date() });
        } else {
          await addReview(rating);
        }
      })(e);
    } else {
      e.preventDefault();
      navigate("/authentication", { state: { from: pathname }, replace: true });
    }
  };

  const loading = adding || modifying || getting;
  return { submitHandler, loading, review };
}
