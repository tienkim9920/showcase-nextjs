'use client';

import { IcLogoHeader } from "@/public/icons/IcLogoHeader";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="mt-3 px-10 flex justify-between items-center absolute w-full">
      <IcLogoHeader width="100px" height="32px" display="flex" />

      <div className="flex">
        <Button color="primary" width="110px" onClick={() => console.log('hello')}>Sign In</Button>
      </div>
    </div>
  )
};