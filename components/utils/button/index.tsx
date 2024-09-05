import React from "react";
import Icon from "@mdi/react";
import Link from "next/link";

interface Props {
  iconLeft: boolean;
  showText: boolean;
  text: string;
  css: string;
  icon: React.ComponentType | any; // This allows any React component to be passed
  showBorders: boolean;
  href: string;
  showNotifications: boolean;
  notifications: number;
  userInitials: string;
  showAvatar: boolean;
  iconSize: number;
}

const CustomBtn: React.FC<Props> = ({
  iconLeft,
  showText,
  text,
  css,
  icon,
  showBorders,
  href,
  showNotifications,
  notifications,
  userInitials,
  showAvatar,
  iconSize,
}) => {
  return (
    <Link
      className={`flex gap-2 sm:p-2 p-1 ${css} hover:text-[#00e0a4] hover:cursor-pointer items-center focus:outline-none ${
        showBorders &&
        "border-[1px] border-[#5b706f] rounded-sm w-fit hover:border-[#00e0a4] hover:text-[#00e0a4]"
      }`}
      href={""}
    >
      {showAvatar ? (
        <div className="w-5 h-5 rounded-full bg-[#00e0a4] text-[0.7rem] flex justify-center items-center text-white ">
          <p>{userInitials}</p>
        </div>
      ) : (
        iconLeft && (
          <div className="flex">
            <Icon path={icon} size={iconSize} />
            {showNotifications && (
              <div className="w-[14px] h-[14px] bg-orange-600 rounded-full text-[0.7rem] text-center flex justify-center items-center text-white -ml-3 -mt-1">
                <p>{notifications}</p>
              </div>
            )}
          </div>
        )
      )}

      {showText && <span>{text}</span>}
      {!iconLeft && (
        <div className="flex">
          <Icon path={icon} size={iconSize} />
          {showNotifications && (
            <div className="w-[14px] h-[14px] bg-orange-600 rounded-full text-[0.7rem] text-center flex justify-center items-center text-white -ml-3 -mt-1">
              <p>{notifications}</p>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export default CustomBtn;
