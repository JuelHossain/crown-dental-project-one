import { Text, Title } from "@mantine/core";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function Heading() {
  const { review } = useReviewFormContext() ?? {};
  
  return (
    <div>
      <Title order={4}>{review ? "Update Your Review" : "Give us a Review"}</Title>
      <Text>Say something if you took this service</Text>
    </div>
  );
}
