import { Button, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { FaTrash } from "react-icons/fa";
import { useDeleteServiceMutation } from "../../../../../features/services/servicesApi";

export default function DeleteService({ serviceId }) {
  console.log("serviceId :>> ", serviceId);
  const [deleteService] = useDeleteServiceMutation();
  const openDeleteModal = () =>
    openConfirmModal({
      title: "Delete This Service",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete This Service? You Cannot restore your data after deleting this
        </Text>
      ),
      labels: { confirm: "Delete Service", cancel: "No don't delete it" },
      confirmProps: { color: "red" },

      onConfirm: async () => {
        await deleteService(serviceId);
      },
    });

  return (
    <Button variant="light" color="red.4" className="flex-1" onClick={openDeleteModal} leftIcon={<FaTrash size={18} />}>
      Delete
    </Button>
  );
}
