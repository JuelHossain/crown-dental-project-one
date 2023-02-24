import Arch from "../../../components/icons/Arch";

export default function AuthTitle() {
  return (
    <>
      <div className="-mb-36 space-y-2 z-[200] text-center max-w-sm">
        <h2 className=" text-sec-5 text-4xl">Please Login</h2>
        <p className="">Please answer the question to login or register.</p>
      </div>
      <Arch svgClass="w-[600px] z-10 " />
    </>
  );
}
