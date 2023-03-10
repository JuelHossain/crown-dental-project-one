import { Stack } from "@mantine/core";
import useAuth from "../../../../hooks/auth/useAuth";
import { ReviewFormProvider } from "../../../reviews/context/reviewFormContext";
import ReviewForm from "../../../reviews/modify-reviews/ReviewForm/ReviewForm";
import OtherService from "./components/OtherService";

export default function Sidebar() {
  const { admin } = useAuth() || {};
  console.log("admin :>> ", admin);
  return (
    <ReviewFormProvider>
      <Stack className="w-full sm:w-auto min-w-[250px]">
        <ReviewForm />
        <OtherService />
      </Stack>
    </ReviewFormProvider>
  );
}
