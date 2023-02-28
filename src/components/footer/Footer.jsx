/* eslint-disable no-shadow */
import { Card } from "@mantine/core";
import React from "react";
import { useMatch } from "react-router-dom";
import fixedPhoto from "../../assets/gallery/benyamin-bohlouli-B_sK_xgzwVA-unsplash.jpg";
import CallUs from "./CallUs";
import Company from "./Company";
import FooterImage from "./FooterImage";
import LinksAndCopyRight from "./LinksAndCopyRight";
import Services from "./Services";
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Footer() {
  const home = useMatch("/");
  return (
    <footer aria-label="Site Footer reliative">
      {home && <FixedImage fixedPhoto={fixedPhoto} />}
      {/* <Schedule /> */}
      <Card className=" lg:grid lg:grid-cols-5 p-2 sm:p-4">
        <FooterImage />

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 bg-main-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <CallUs />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Services />

              <Company />
            </div>
          </div>

          <LinksAndCopyRight />
        </div>
      </Card>
    </footer>
  );
}

function FixedImage({ fixedPhoto }) {
  return (
    <div className="fixed bottom-0 z-0 h-screen w-full">
      <img src={fixedPhoto} alt="fixed" className="w-full h-full object-cover " />
    </div>
  );
}
