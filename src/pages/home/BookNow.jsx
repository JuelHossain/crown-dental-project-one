/* eslint-disable consistent-return */
import { Box, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaRegClock, FaRegCreditCard, FaRegHeart, FaRegStar } from "react-icons/fa";

const nothing = [
  {
    Icon: <FaRegClock className="text-main-5" size={40} />,
    text: "Book a 90-minute new patient visit",
  },
  {
    Icon: <FaRegStar className="text-main-5" size={50} />,
    text: "Get high-quality dental care for the whole family",
  },
  {
    Icon: <FaRegHeart className="text-main-5" size={50} />,
    text: "Feel safe with air purification & medical-grade sterilization",
  },
  {
    Icon: <FaRegCreditCard className="text-main-5" size={40} />,
    text: "Know you’re covered — most insurance accepted!",
  },
];

export default function BookNow() {
  const smallerThen = useMediaQuery("(max-width: 765px)");
  const hereIsNothing = nothing.map(({ Icon, text }, index) => (
    <Group
      sx={(theme) => {
        const border = {
          borderRight: `2px solid ${theme.colors.dark[5]}`,
        };
        const borderBottom = {
          borderBottom: `2px solid ${theme.colors.dark[5]}`,
        };
        if (smallerThen) {
          if (index === 0) return { ...border, ...borderBottom };
          if (index === 1) return borderBottom;
          if (index === 2) return border;
        } else if (index !== nothing.length - 1) return border;
      }}
      noWrap
      key={text}
      className="items-start  text-start p-4 sm:p-8"
    >
      {Icon}
      <h3 className="text-sm lg:text-xl">{text}</h3>
    </Group>
  ));
  return (
    <Box className="bg-main-0 text-center grid grid-cols-2 sm:grid-cols-4 text-neu-7 py-4 sm:py-8">{hereIsNothing}</Box>
  );
}
