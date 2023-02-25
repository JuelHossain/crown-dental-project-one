import { ActionIcon, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { FaTrash } from "react-icons/fa";

import { useDeleteReviewMutation } from "../../../../../features/reviews/reviewsApi";

export default function DeleteRating({ id, name }) {
  const [deleteReview] = useDeleteReviewMutation();
  const openDeleteModal = () =>
    openConfirmModal({
      title: `Delete Rating for ${name}`,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your Rating? You Can not undo this action later . please think twice
        </Text>
      ),
      labels: { confirm: "Delete Rating", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        deleteReview(id);
      },
    });
  return (
    <ActionIcon onClick={openDeleteModal} variant="light" color="red">
      <FaTrash size={18} />
    </ActionIcon>
  );
}
