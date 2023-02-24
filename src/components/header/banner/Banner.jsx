import { BackgroundImage } from "@mantine/core";
import bannerImage from "../../../assets/pexels-anna-shvets-3845981.jpg";
import BannerOverlay from "./BannerOverlay";
import Content from "./Contect";

export default function Banner() {
  return (
    <BackgroundImage className="bg-fit bg-left w-screen h-screen flex items-center justify-end" src={bannerImage}>
      <BannerOverlay />
      <Content
        position="text-center top-0 right-0 left-0 bottom-0 flex justify-center items-center"
        text="Bringing You The Smile You Need On Your FAce."
        buttonText="Make A Booking"
      />
    </BackgroundImage>
  );
}
