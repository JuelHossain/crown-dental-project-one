import Banner from "./Banner";
import BookNow from "./BookNow";
import ComeVisitUs from "./ComeVisitUs";
import { logos, titleLogos } from "./companyImages";
import Companys from "./Companys";
import Gallery from "./Gallery";
import HomePageReviews from "./HomePageReviews";
import Schedule from "./Schedule";
import ServiceOverview from "./services-overview/ServiceOverview";
import WhyYouWillLoveIt from "./WhyYouWillLoveIt";

export default function Home() {
  return (
    <div className="z-10 relative">
      <Banner />
      <Companys images={logos} />
      <ServiceOverview />
      <Companys images={titleLogos} />
      <Gallery />
      <HomePageReviews />
      <BookNow />
      <WhyYouWillLoveIt />
      <ComeVisitUs />
      <Schedule />
      {/* <div className="h-[500px]" /> */}
    </div>
  );
}
