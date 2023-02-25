import { Button, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDeleteServiceMutation } from "../../../../../features/services/servicesApi";
import useServiceId from "../../../../../hooks/services/useServiceId";

export default function DeleteService() {
  const serviceId = useServiceId();
  const [deleteService] = useDeleteServiceMutation();
  const navigate = useNavigate();
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
        navigate("/services");
      },
    });

  return (
    <Button className="flex-1" onClick={openDeleteModal} leftIcon={<FaTrash size={18} />}>
      Delete
    </Button>
  );
}
