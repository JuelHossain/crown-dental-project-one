import { Button, Checkbox, Group } from "@mantine/core";
import { openTermsModal } from "../../../components/modals/TermsModal";
import { useAuthFormContext } from "../context/authFormContext";

export default function TermsAndConditions() {
  const { values, setFieldValue, errors, getInputProps } = useAuthFormContext();
  return (
    <>
      <Group spacing={2}>
        <Button onClick={openTermsModal} variant="light">
          Read Terms & Conditions
        </Button>
        <Button
          onClick={() => setFieldValue("terms", !values.terms)}
          rightIcon={<Checkbox {...getInputProps("terms", { type: "checkbox" })} size="xs" />}
          variant="light"
        >
          Accept
        </Button>
      </Group>
      {errors?.terms && <p className="text-xs ml-2 text-red-400">{errors.terms}</p>}
    </>
  );
}
