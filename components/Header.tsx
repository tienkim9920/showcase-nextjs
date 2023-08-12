import { IcLogoHeader } from "@/public/icons/IcLogoHeader";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <IcLogoHeader width="100px" height="32px" display="flex" />

      <div className="flex">
        <Button color="accent" width="110px">Sign In</Button>
      </div>
    </div>
  )
};