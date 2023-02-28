import { BackgroundImage, Stack } from "@mantine/core";

export default function Topper() {
  return (
    <BackgroundImage
      src="https://cdn.pixabay.com/photo/2016/03/13/04/01/certificate-1253260_960_720.png"
      className="h-72  flex  items-center  pt-16 bg-filled bg-no-repeat bg-bottom "
    >
      <Stack className="max-w-4xl p-4  sm:p-8 ">
        <h2 className="text-2xl sm:text-3xl text-neu-6">
          We Are Giving You <span className="text-main-5 text-3xl sm:text-4xl">20% </span> Discount
        </h2>
        <p className="text-lg line-clamp-2 text-neu-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem temporibus repellendus similique
          laudantium facilis enim doloremque explicabo reprehenderit rem voluptatibus, blanditiis corporis. Cum libero
          hic repellat suscipit rem unde?
        </p>
      </Stack>
    </BackgroundImage>
  );
}
