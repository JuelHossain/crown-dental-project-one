import Arch from "../../../components/icons/Arch";
import { useAuthFormContext } from "../context/authFormContext";

export default function AuthTitle() {
  const { emailStatus } = useAuthFormContext();
  const title = emailStatus ? "Please Login" : "Please Register";

  const text = emailStatus
    ? "Please answer the question to login"
    : "oops, Looks like you are not an user, please register";
  return (
    <>
      <div className="-mb-36 space-y-2 z-[200] text-center max-w-sm">
        <h2 className=" text-sec-5 text-4xl">{title}</h2>
        <p className="">{text}</p>
      </div>
      <Arch svgClass="w-[600px] z-10 " />
    </>
  );
}
