import { Stack } from "@mantine/core";
import CardWrapper from "./components/CardWrapper";
import RatingActions from "./components/RatingActions";
import RatingAndSayings from "./components/RatingAndSayings";
import UserDetails from "./components/UserDetails";

export default function ReviewCard(review) {
  return (
    <CardWrapper>
      <Stack className="w-full relative p-2 sm:p-4 justify-between h-full">
        <RatingAndSayings {...review} />
        <div className="space-y-4">
          <UserDetails {...review} />
          <RatingActions {...review} /> 
        </div>
      </Stack>
    </CardWrapper>
  );
}
