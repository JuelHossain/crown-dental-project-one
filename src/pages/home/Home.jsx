import Banner from "./Banner";
import { logos, titleLogos } from "./companyImages";
import Companys from "./Companys";
import Gallery from "./Gallery";
import ServiceOverview from "./services-overview/ServiceOverview";

export default function Home() {
  return (
    <div>
      <Banner />
      <Companys images={logos} />
      <ServiceOverview />
      <Companys images={titleLogos} />
      <Gallery />
    </div>
  );
}
