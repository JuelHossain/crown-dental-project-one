import { Button } from "@mantine/core";
import { useAuthFormContext } from "../context/authFormContext";
import useLogin from "../context/hooks/useLogin";

export default function AuthTitle() {
  const { emailStatus } = useAuthFormContext();
  const title = emailStatus ? "Please Login" : "Please Register";
  const login = useLogin();

  const text = emailStatus ? (
    <p className="text-sm">
      If You want to check the admin features{" "}
      <Button
        onClick={() => login({ email: "jrrahman01@gmail.com", password: "rahman" })}
        compact
        size="xs"
        variant="subtle"
      >
        Login As Admin
      </Button>
    </p>
  ) : (
    <p className="text-sm">oops, Looks like you are not an user, please register</p>
  );
  return (
    <>
      <div className=" sm:space-y-2 z-[2000] text-center max-w-sm">
        <h2 className=" text-sec-5  text-4xl">{title}</h2>
        <div>{text}</div>
      </div>
      {/* <Arch svgClass="rotate-[16deg] sm:rotate-0 sm:w-[600px] z-10 " /> */}
    </>
  );
}
