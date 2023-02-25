import { hasLength, isNotEmpty } from "@mantine/form";

const serviceFormInitial = {
  // initial form values
  initialValues: {
    name: "",
    cost: "",
    short: "",
    description: "",
    imageLink: "",
  },

  // form validation
  validate: {
    name: isNotEmpty("Service name is required"),
    cost: isNotEmpty("Service cost is Required"),
    short: hasLength({ min: 100 }, "Maximum 100 character please"),
    description: hasLength({ max: 100 }, "minimum 100 character please"),
    imageLink: isNotEmpty("Image Link is required"),
  },
};
export default serviceFormInitial;
