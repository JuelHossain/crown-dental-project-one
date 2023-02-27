import { Button, Group } from "@mantine/core";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import openServiceModal from "../../../../../components/modals/serviceFormModal";
import { selectUser } from "../../../../../features/auth/authSelector";
import DeleteService from "./DeleteService";

export default function ServiceActions() {
  const user = useSelector(selectUser);
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
