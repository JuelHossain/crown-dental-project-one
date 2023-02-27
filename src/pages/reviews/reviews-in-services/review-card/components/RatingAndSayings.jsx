import { Rating, Text } from "@mantine/core";

export default function RatingAndSayings({ rating, sayings }) {
  return (
    <div className="space-y-2">
      <Rating color="main" size="xl" readOnly value={rating} />
      <Text className="line-clamp-2 text-xl">{sayings}</Text>
    </div>
  );
}
