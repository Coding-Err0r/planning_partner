"use client";
import CustomBtn from "@/components/utils/button";
import {
  mdiChevronLeft,
  mdiNoteEditOutline,
  mdiCreationOutline,
  mdiChevronRight,
} from "@mdi/js";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });
  return (
    <div className="w-full">
      <div className="w-full lg:flex items-center justify-between">
        <h1 className="text-3xl text-gray-700">New Client</h1>
        <div className="flex  gap-x-3 items-center py-4 lg:py-0">
          <CustomBtn
            iconLeft={false}
            showText={false}
            text={""}
            css={"text-gray-700"}
            icon={mdiChevronLeft}
            showBorders={true}
            href={""}
            showNotifications={false}
            notifications={0}
            userInitials={""}
            showAvatar={false}
            iconSize={isDesktop ? 1 : 0.8}
          />
          <CustomBtn
            iconLeft={true}
            showText={true}
            text={"Notes"}
            css={"text-gray-700 text-[0.6rem] md:text-sm"}
            icon={mdiNoteEditOutline}
            showBorders={true}
            href={""}
            showNotifications={false}
            notifications={0}
            userInitials={""}
            showAvatar={false}
            iconSize={isDesktop ? 1 : 0.8}
          />
          <CustomBtn
            iconLeft={true}
            showText={true}
            text={"AI Analysis"}
            css={"text-gray-700 text-[0.6rem] md:text-sm"}
            icon={mdiCreationOutline}
            showBorders={true}
            href={""}
            showNotifications={false}
            notifications={0}
            userInitials={""}
            showAvatar={false}
            iconSize={isDesktop ? 1 : 0.8}
          />
          <CustomBtn
            iconLeft={false}
            showText={true}
            text={"Next Step"}
            css={
              "text-white bg-[#2aa87e] hover:text-white hover:border-white text-[0.6rem] md:text-sm"
            }
            icon={mdiChevronRight}
            showBorders={true}
            href={""}
            showNotifications={false}
            notifications={0}
            userInitials={""}
            showAvatar={false}
            iconSize={isDesktop ? 1 : 0.8}
          />
        </div>
      </div>
      <hr className="md:my-6 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10 w-full my-3" />
    </div>
  );
};

export default Navbar;
