import { Button, Center, Title } from "@mantine/core";

export default function Content({ text, buttonText, onButtonClick }) {
  return (
    <Center className="flex flex-col text-center z-10 gap-2">
      <Title className=" max-w-xs sm:max-w-xl font-main text-4xl sm:text-6xl text-main-2/90 ">{text}</Title>
      <div>
        <Button
          size="xl"
          onClick={onButtonClick}
          className="bg-gradient-to-r from-main-5/25 via-sec-5/50 to-main-5/25 "
        >
          {buttonText}
        </Button>
      </div>
    </Center>
  );
}
