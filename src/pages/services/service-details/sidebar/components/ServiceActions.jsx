import { Button, Group } from "@mantine/core";
import { IconPencil } from "@tabler/icons";
import { useSelector } from "react-redux";
import UpdateServiceModal from "../../../../../components/modify-services/UpdateServiceModal";
import { selectUser } from "../../../../../features/auth/authSelector";
import DeleteService from "./DeleteService";

export default function ServiceActions() {
  const user = useSelector(selectUser);

  return (
    user && (
      <Group className="w-full">
        <Button className="flex-1" onClick={open} leftIcon={<IconPencil size={18} />}>
          Edit
        </Button>
        <DeleteService />
        <UpdateServiceModal />
      </Group>
    )
  );
}
