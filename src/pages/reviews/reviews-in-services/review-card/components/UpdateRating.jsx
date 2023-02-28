import { ActionIcon, Title } from "@mantine/core";
import { openModal } from "@mantine/modals";
import { FaPencilAlt } from "react-icons/fa";

import { ReviewFormProvider } from "../../../context/reviewFormContext";
import ReviewForm from "../../../modify-reviews/ReviewForm/ReviewForm";

export default function UpdateRating({ name }) {
  const openDeleteModal = () =>
    openModal({
      title: <Title order={4}>Review for {name}</Title>,
      centered: true,
      children: (
        <ReviewFormProvider>
          <ReviewForm />
        </ReviewFormProvider>
      ),
      size: 500,
    });
  return (
    <ActionIcon
      onClick={() => {
        openDeleteModal();
      }}
      variant="light"
      color="red"
    >
      <FaPencilAlt size={18} />
    </ActionIcon>
  );
}
