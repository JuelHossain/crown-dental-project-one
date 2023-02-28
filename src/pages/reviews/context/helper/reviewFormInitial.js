import { isNotEmpty } from "@mantine/form";

const reviewFormInitial = {
  initialValues: { rating: 0, sayings: "" },
  validate: {
    rating: isNotEmpty("Select A Star from one to five"),
    sayings: isNotEmpty("You have to say something"),
  },
};
export default reviewFormInitial;
