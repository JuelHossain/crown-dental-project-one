/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../features/auth/authSelector";
import { useAddReviewMutation, useModifyReviewMutation } from "../../../features/reviews/reviewsApi";

export default function useSubmitHandler({ onSubmit, review, serviceId, getting }) {
  const { email, photoURL, displayName } = useSelector(selectUser) || {};

  const [addReview, { isLoading: adding }] = useAddReviewMutation();
  const [modifyReview, { isLoading: modifying }] = useModifyReviewMutation();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (email) {
      const userDetails = { email, photoURL, displayName };
      onSubmit(async (form) => {
        const rating = { ...form, serviceId, userDetails, ratedAt: new Date(), ratingBy: email };
        if (review) {
          await modifyReview({ ...form, id: review._id });
        } else {
          await addReview(rating);
        }
      })(e);
    } else {
      e.preventDefault();
      navigate("/authentication");
    }
  };

  const loading = adding || modifying || getting;
  return { submitHandler, loading };
}
