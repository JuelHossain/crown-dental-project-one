import { Button, Paper } from "@mantine/core";
import { useGetServicesQuery } from "../../../features/services/servicesApi";
import CardPlaceHolder from "../../services/components/service-card/components/CardPlaceHolder";
import ServiceCard from "../../services/components/service-card/ServiceCard";

export default function ServiceOverview() {
  const { data, isLoading } = useGetServicesQuery({ page: 0, size: 4 });
  console.log(data);

  const services = data?.map((service) => <ServiceCard key={Math.random()} {...service} />);
  const skeleton = [1, 2, 3, 4].map((n) => <CardPlaceHolder key={n} />);
  return (
    <section>
      <div className="py-2 sm:py-4 md:py-10 mx-auto bg-gradient-to-t from-sec-5 via-main-5 to-main-2 ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:items-stretch  ">
          <Paper className="grid p-2 md:bg-gradient-to-tl md:from-main-1/50 dark:from-main-9/25   place-content-center sm:p-4 m-2 sm:m-4 rounded-md">
            <div className="max-w-sm md:max-w-md mx-auto text-center md:text-left md:-ml-16 lg:-ml-32 xl:-ml-40 2xl:-ml-72 p-5  md:p-10 md:shadow-md shadow-main-5/15 rounded ">
              <header>
                <h2 className="text-xl font-bold sm:text-3xl">Services</h2>

                <p className="mt-4 text-gray-500">
                  Her is all of the service we provide to you. if you are looking for other services please click on the
                  button below this text.
                </p>
              </header>

              <Button className="inline-block px-12 py-3 mt-8 font-medium  transition  rounded hover:shadow focus:outline-none focus:ring">
                See All
              </Button>
            </div>
          </Paper>

          <div className="col-span-1 rounded md:py-10  md:-ml-32 lg:-ml-44 xl:-ml-60 2xl:-ml-96 px-2 sm:px-4">
            <div className="grid grid-cols-1  xs:grid-cols-2 gap-4">{isLoading ? skeleton : services}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
