"use client";
import CustomInput from "@/components/utils/input";
import CustomSelect from "@/components/utils/select";
import Header from "./header";
import { data } from "@/config/data";
import FamilyInformation from "./family-information";
import BasicInfo from "./basic-info";
import { useSelector } from "react-redux";
import ViewData from "./view-data";

const AddClient = () => {
  const activeTab = useSelector((state: any) => state.activeTab);

  const renderComponent = () => {
    switch (activeTab.title) {
      case "basic info":
        return <BasicInfo />;
      case "family information":
        return <FamilyInformation />;
      case "view data":
        return <ViewData />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 items-start">
      <div className="lg:flex w-full h-full gap-2 ">
        <CustomInput
          htmlFor={"added_by"}
          label={"ADDED BY"}
          placeholder={"David Lovejoy"}
          type={"text"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"agent_assigned"}
          label={"AGENT ASSIGNED"}
          placeholder={"Search for agent to assign"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Agent"}
          data={[
            {
              title: "John",
              value: "john",
            },
            {
              title: "James",
              value: "james",
            },
            {
              title: "Mike",
              value: "mike",
            },
          ]}
        />
        <CustomSelect
          htmlFor={"status"}
          label={"STATUS"}
          placeholder={"In Progress"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select status"}
          data={[
            {
              title: "In Progress",
              value: "in_progress",
            },
            {
              title: "Completed",
              value: "completed",
            },
            {
              title: "Pending",
              value: "pending",
            },
          ]}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="xl:flex lg:gap-x-8 lg:ml-3 ml-1 xl:gap-x-12">
          {data.headers.map((_d: any, index: number) => (
            <Header
              key={index}
              title={_d.title}
              href={_d.href}
              progress={{
                inProgress: _d.inProgress,
                complete: _d.complete,
                error: _d.error,
              }}
              selected={_d.selected}
              id={index}
            />
          ))}
        </div>
        <hr className="h-0.5 border-t-0 bg-green-500  w-full" />
      </div>
      <div className="p-6 bg-white w-full h-full border-[1px] rounded-md">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AddClient;
