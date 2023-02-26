import { Skeleton } from "@mantine/core";
import CardWrapper from "./CardWrapper";

export default function CardPlaceHolder (){
  return (
    <CardWrapper>
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </CardWrapper>
  );
};