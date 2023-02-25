import { openModal } from "@mantine/modals";
import Terms from "../terms&conditions/Terms";

export const openTermsModal = () =>
  openModal({
    children: <Terms />,
    size: 1200,
    overlayBlur: 1,
    zIndex: 10000,
  });

export const hello = "";
