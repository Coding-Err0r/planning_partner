"use client";

import { useEffect, useState } from "react";
import { data } from "@/config/data";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import CustomBtn from "@/components/utils/button";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-10 h-10 ml-3 mt-3">
          <Icon path={mdiMenu} size={1} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        hideCloseBtn={true}
        className="px-3 py-4 bg-[#0a1214]"
      >
        <SheetHeader className="flex items-end ">
          <SheetClose asChild>
            <Button className="w-10 h-10 bg-white text-black">
              <Icon path={mdiClose} size={1} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="h-full px-2 relative flex flex-col items-start">
          <div className="flex flex-col">
            <h1 className="text-[#00e0a4] text-[1.75rem]">PLANNING</h1>
            <h1 className="text-white text-[2rem] -mt-3">PARTNER</h1>
          </div>
          <div className="flex flex-col gap-2">
            {data.sidebarTop.map((_data: any, index: number) => (
              <CustomBtn
                key={index}
                iconLeft={_data.iconLeft}
                showText={_data.showText}
                text={_data.text}
                css={_data.css}
                icon={_data.icon} // Passing the icon component
                showBorders={_data.showBorders}
                href={_data.href}
                showNotifications={_data.showNotifications}
                notifications={_data.notifications}
                userInitials={_data.userInitials}
                showAvatar={_data.showAvatar}
                iconSize={_data.iconSize}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2 bottom-0 absolute mb-16">
            {data.sidebarBottom.map((_data: any, index: number) => (
              <CustomBtn
                key={index}
                iconLeft={_data.iconLeft}
                showText={_data.showText}
                text={_data.text}
                css={_data.css}
                icon={_data.icon} // Passing the icon component
                showBorders={_data.showBorders}
                href={_data.href}
                showNotifications={_data.showNotifications}
                notifications={_data.notifications}
                userInitials={_data.userInitials}
                showAvatar={_data.showAvatar}
                iconSize={_data.iconSize}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
