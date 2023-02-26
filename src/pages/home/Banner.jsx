import { Center } from "@mantine/core";
import Content from "../../components/header/banner/Contect";

export default function Banner() {
  return (
    <div className="h-[90vh] md:h-[70vh] bg-gradient-to-l from-main-5 to-white  w-full p-2 sm:p-4 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-h-full overflow-hidden h-full ">
        <Center className="bg-main-5 p-6 sm:p-12">
          <Content
            position="text-center top-0 right-0 left-0 bottom-0 flex justify-center items-center"
            text="Bringing You The Smile You Need On Your Face."
            buttonText="Make A Booking"
          />
        </Center>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-2 h-full -mt-20 sm:mt-0">
          <img
            alt="Student"
            src="https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className=" w-full object-cover h-full "
          />

          <img
            alt="Student"
            src="https://images.pexels.com/photos/4270362/pexels-photo-4270362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" w-full object-cover object-bottom h-full hidden xs:block "
          />
        </div>
      </div>
    </div>
  );
}
