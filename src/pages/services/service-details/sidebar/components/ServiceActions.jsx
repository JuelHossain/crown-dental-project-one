import { Button, Group } from "@mantine/core";
import { FaPencilAlt } from "react-icons/fa";
import openServiceModal from "../../../../../components/modals/serviceFormModal";
import useAuth from "../../../../../hooks/auth/useAuth";
import DeleteService from "./DeleteService";

export default function ServiceActions() {
  const user = useAuth();
  return (
    user && (
      <Group className="w-full">
        <Button className="flex-1" onClick={openServiceModal} leftIcon={<FaPencilAlt size={18} />}>
          Edit
        </Button>
        <DeleteService />
      </Group>
    )
  );
}
