import { FileInput } from "@mantine/core";
import { FaUpload } from "react-icons/fa";

import { useServiceFormContext } from "../../context/serviceFormContext";

export default function Image() {
  const { setValues, uploadImage, errors } = useServiceFormContext();

  const uploadHandler = async (file) => {
    if (file) {
      const imageLink = await uploadImage(file);
      setValues({ imageLink });
    } else {
      setValues({ imageLink: "" });
    }
  };

  return (
    <FileInput
      label="Image"
      placeholder="only jpg and png"
      onChange={uploadHandler}
      icon={<FaUpload size={14} />}
      accept="image/png,image/jpeg"
      clearable
      error={errors.imageLink}
    />
  );
}
