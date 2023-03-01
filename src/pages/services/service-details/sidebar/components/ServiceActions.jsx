import { Button, Group } from "@mantine/core";
import { FaPencilAlt } from "react-icons/fa";
import openServiceModal from "../../../../../components/modals/serviceFormModal";
import useAuth from "../../../../../hooks/auth/useAuth";
import DeleteService from "./DeleteService";

export default function ServiceActions({ serviceId }) {
  console.log("🚀 ~ file: ServiceActions.jsx:8 ~ ServiceActions ~ serviceId:", serviceId)
  const user = useAuth();
  return (
    user && (
      <Group className="w-full mt-4">
        <Button
          variant="light"
          className="flex-1"
          onClick={() => openServiceModal(serviceId)}
          leftIcon={<FaPencilAlt size={18} />}
        >
          Edit
        </Button>
        <DeleteService serviceId={serviceId} />
      </Group>
    )
  );
}
