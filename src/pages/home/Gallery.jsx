import { Carousel } from "@mantine/carousel";
import gallery2 from "../../assets/gallery/benyamin-bohlouli-B_sK_xgzwVA-unsplash.jpg";
import gallery3 from "../../assets/gallery/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg";
import gallery4 from "../../assets/gallery/jose-vazquez-4SUyx4KQ5Ik-unsplash.jpg";
import gallery5 from "../../assets/gallery/lafayett-zapata-montero-XBFk6NFB_yg-unsplash.jpg";
import gallery1 from "../../assets/gallery/pexels-anna-shvets-3845981.jpg";
import gallery6 from "../../assets/gallery/quang-tri-nguyen-jmGrEfias_c-unsplash.jpg";

export default function Gallery() {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  const slides = gallery.map((img) => (
    <Carousel.Slide key={Math.random()} className="bg-sec-5 relative ">
      <div className="py-2 mb-14 md:mb-4 bottom-0 absolute z-10 p-2 sm:p-4 max-w-md line-clamp-2 text-main-9">
        <h3>Image Title</h3>p Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae velit veritatis
        molestias iusto omnis harum doloremque quae? Voluptate, consectetur nobis! Fugit quasi expedita amet quo ab
        repellendus molestiae quas.
      </div>

      <img src={img} className="h-[600px] w-full object-cover object-center " alt="gallery" />
    </Carousel.Slide>
  ));
  return (
    <Carousel mx="auto" withIndicators withControls={false} className="relative">
      {slides}
    </Carousel>
  );
}
