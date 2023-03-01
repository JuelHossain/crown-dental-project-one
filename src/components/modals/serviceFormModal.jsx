import { Title } from "@mantine/core";
import { openModal } from "@mantine/modals";
import { ServiceFormProvider } from "../../pages/services/context/serviceFormContext";
import ServiceForm from "../../pages/services/modify-services/ServiceForm";

export default function openServiceModal(serviceId) {
  openModal({
    children: (
      <ServiceFormProvider serviceId={serviceId}>
        <ServiceForm />
      </ServiceFormProvider>
    ),
    size: 800,
    overlayBlur: 1,
    zIndex: 10000,
    title: <Title order={4}>Please Update This Service,</Title>,
    classNames: { header: "items-start" },
    centered: true,
    closeOnClickOutside: false,
  });
}
