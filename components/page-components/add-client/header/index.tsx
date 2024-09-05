import Icon from "@mdi/react";
import { mdiDotsHorizontal, mdiCheck, mdiClose } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/Redux/slice/active-tab";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  href: string;
  selected: boolean;
  progress: { inProgress: boolean; complete: boolean; error: boolean };
  id: number;
}

const Header = ({ title, href, progress, selected, id }: Props) => {
  const activeTab = useSelector((state: any) => state.activeTab);

  const dispatch = useDispatch();
  const { inProgress, complete, error } = progress;

  // Determine the appropriate icon based on the progress state
  const iconPath = error ? mdiClose : complete ? mdiCheck : mdiDotsHorizontal;

  // Determine the appropriate border color based on the progress state
  const borderColor = error
    ? "border-red-500 text-red-500 "
    : complete
    ? "border-green-500 text-green-500"
    : "border-gray-500 text-gray-800";
  const textColor = error
    ? "text-red-500 "
    : complete
    ? "text-green-500"
    : "text-gray-800";
  const bgColor = error ? "bg-red-500" : complete ? " bg-green-500" : "";

  return (
    <button
      className="w-fit flex flex-col"
      onClick={() => dispatch(setActiveTab(title.toLowerCase()))}
    >
      <div className="flex items-center gap-2">
        <div
          className={`border rounded-full w-4 h-4 flex items-center justify-center ${borderColor}`}
        >
          <Icon path={iconPath} size={0.5} />
        </div>
        <p className={`text-sm ${textColor}`}>{title}</p>
      </div>

      {String(activeTab.title.toLowerCase()) === title.toLowerCase() ? (
        <div className={`w-full h-1  bg-green-500`} />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Header;
