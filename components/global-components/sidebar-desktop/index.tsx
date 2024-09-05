import CustomBtn from "@/components/utils/button";
import { data } from "@/config/data";

const SidebarDesktop = () => {
  return (
    <aside className="w-64 max-w-xs h-screen fixed left-0 top-0 bg-[#0a1214] z-40">
      <div className="h-full p-4 relative">
        <div className="flex flex-col">
          <h1 className="text-[#00e0a4] text-[1.75rem]">PLANNING</h1>
          <h1 className="text-white text-[2rem] -mt-3">PARTNER</h1>
        </div>
        <div className="flex flex-col gap-4 md:py-3">
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
        <div className="flex flex-col gap-4 pb-4 absolute bottom-0 items-start ">
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
    </aside>
  );
};

export default SidebarDesktop;
