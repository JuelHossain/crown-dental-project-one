import DentalIcon from "../../icons/DentalIcon";

export default function SideLogo({ size }) {
  return (
    <div className={`relative ${size === "md" ? "w-60" : "w-40"}`}>
      <DentalIcon size={size} />
      <h2
        className={`font-logo absolute font-bold text-sec-5 ${
          size === "md" ? "left-[49px] bottom-[3px]" : " left-[40px]  bottom-[3.5px] text-md"
        }`}
      >
        Crown Dental
      </h2>
      <p
        className={`font-logo font-thin absolute  text-main-5  ${
          size === "md" ? "left-[50px]  bottom-[-3px] text-[7px] " : " left-[40px]  bottom-[-3px] text-[7px] "
        } `}
      >
        Looking forward to make you smile
      </p>
    </div>
  );
}
