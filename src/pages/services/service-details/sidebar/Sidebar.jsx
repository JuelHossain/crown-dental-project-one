import { Stack } from "@mantine/core";
import { ReviewFormProvider } from "../../../reviews/context/reviewFormContext";
import ReviewForm from "../../../reviews/modify-reviews/ReviewForm/ReviewForm";
import OtherService from "./components/OtherService";
import ServiceActions from "./components/ServiceActions";

export default function Sidebar() {
  return (
    <ReviewFormProvider>
      <Stack className="w-full sm:w-auto">
        <ServiceActions />
        <ReviewForm />
        <OtherService />
      </Stack>
    </ReviewFormProvider>
  );
}
