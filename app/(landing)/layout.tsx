"use client";
import SidebarDesktop from "@/components/global-components/sidebar-desktop";
import SidebarMobile from "@/components/global-components/sidebar-mobile";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Provider } from "react-redux";
import { store } from "../../Redux/store/index";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Provider store={store}>
      <div className="w-full h-full relative ">
        {isDesktop ? <SidebarDesktop /> : <SidebarMobile />}
        <div className="sm:ml-64 sm:p-8 p-4">{children}</div>
      </div>
    </Provider>
  );
};

export default LandingLayout;
