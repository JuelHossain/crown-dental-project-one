import { Button, Center, List } from "@mantine/core";
import { FaArrowCircleUp, FaDotCircle } from "react-icons/fa";

export default function ComeVisitUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full h-full relative order-2 ">
        <Center className="bg-white p-10 sm:p-16 max-md:h-96 md:absolute w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1597413545419-4013431dbfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="child smile"
            className=" object-cover w-full h-full max-w-[600px] "
          />
        </Center>
      </div>
      <div className="bg-main-5 p-10 sm:p-16 text-white space-y-5 md:order-2">
        <div className="space-y-3">
          <h2>Family Dentistry</h2>
          <div className="space-y-3">
            <p>
              All the care your family needs — all under one roof. From your infant’s first dental exam to teeth
              whitening before your wedding day, you’ll be glad Bowles Dental is where you chose to call home for your
              whole family’s dental health needs.
            </p>
            <p>
              Your treatment is tailored to you, nothing is cookie-cutter or one-size-fits-all. Your dentist will work
              closely with you to create the treatment plan that addresses your concerns and prepares you for a lifetime
              of smiles.
            </p>
            <p>
              A little nervous about your visit? No problem! We take extra pride in treating patients who are
              “dental-phobic” or who haven’t seen the dentist in years. There’s no judgment, just a friendly approach to
              family dental care you won’t find anywhere else.
            </p>
          </div>
        </div>
        <div className="space-y-3 text-white">
          <h2>Come See Us If...</h2>
          <List icon={<FaDotCircle size={10} />} className="text-white">
            <List.Item>You’re looking for a dentist who can care for your whole family</List.Item>
            <List.Item>You don’t like the idea of shuttling your family around town to different dentists</List.Item>
            <List.Item>You want to feel comfortable and welcomed by a friendly team that cares about you</List.Item>
            <List.Item>You want to experience the best family dentistry in Overland Park</List.Item>
          </List>
        </div>
        <Button size="md" rightIcon={<FaArrowCircleUp />} variant="white">
          Book Now
        </Button>
      </div>
    </div>
  );
}
