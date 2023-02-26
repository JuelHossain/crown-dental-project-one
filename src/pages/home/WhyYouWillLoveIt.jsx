import { Box, Card, Center, Stack } from "@mantine/core";
import { AiOutlineCrown } from "react-icons/ai";
import { FaRegBookmark, FaRegCalendar, FaRegHandPaper, FaRegThumbsUp } from "react-icons/fa";

export default function WhyYouWillLoveIt() {
  const why = [
    {
      Icon: FaRegCalendar,
      title: "Care ON Your Schedule",
      text: "Book a visit, complete paperwork, and pay your bill…all online. Text, email, or call us. Be confident that your visit will run on time — get in and out efficiently and safely.",
    },
    {
      Icon: FaRegBookmark,
      title: "Safety Comes First",
      text: "You’re in good hands. Find peace of mind with a built-in air purification system, medical-grade sterilization protocols, clean patient rooms, and the latest and greatest dental tech.",
    },
    {
      Icon: FaRegThumbsUp,
      title: "Every Mouth Welcome",
      text: "Your health is important — no matter your age, income, or dental health history. Enjoy an inclusive approach and high-quality care backed by years of experience and expertise.",
    },
    {
      Icon: FaRegHandPaper,
      title: "Insurance Friendly",
      text: "We’re in-network with most major providers and will work with you to maximize your benefits. No insurance? No problem. Ask about our in-house membership program & payment options.",
    },
  ];
  const thisIsWhy = why.map(({ Icon, title, text }) => (
    <Card radius={0} shadow="md" key={text} className="flex gap-4 p-8 sm:p-16 relative">
      <Icon size={40} />
      <Stack className="">
        <h2>{title}</h2>
        <p>{text}</p>
      </Stack>
      <div className="absolute rotate-45 top-5 right-10">
        <AiOutlineCrown className="text-main-5" size={50} />
      </div>
    </Card>
  ));
  return (
    <div className="bg-gradient-to-b from-white dark:from-sec-5 via-main-0/50 dark:via-main-9/50 dark:to-sec-5 to-white pb-10">
      <Center className="bg-main-0 py-10 sm:py-20 text-center flex-col">
        <h2 className="text-4xl text-neu-7">Why you'll Love it here</h2>
        <div className="h-1 w-full bg-sec-5 max-w-sm " />
      </Center>
      <Box className="p-4 sm:p-8 -mt-10 sm:-mt-20 grid grid-cols-1 md:grid-cols-2 gap-4  ">{thisIsWhy}</Box>
    </div>
  );
}
