import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/utils/input";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import React from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const FamilyInformation = () => {
  return (
    <div className="flex flex-col lg:space-y-12 space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Spouse/Partner</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="lg:flex w-full h-full gap-2 lg:items-center lg:space-y-0 space-y-2">
        <CustomSelect
          htmlFor={"marital_status"}
          label={"MARITAL STATUS"}
          placeholder={"Select Marital Status"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Marital Status"}
          data={[
            {
              title: "Single",
              value: "single",
            },
            {
              title: "Married",
              value: "married",
            },
            {
              title: "Unmarried",
              value: "unmarried",
            },
          ]}
        />
        <CustomInput
          htmlFor={"partner_firstname"}
          label={"FIRST NAME OF SPOUSE/PARTNER"}
          placeholder={"Spouse/Partner's First Name"}
          type={"text"}
          name={"partner_firstname"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"partner_lastname"}
          label={"LAST NAME OF SPOUSE/PARTNER"}
          placeholder={"Spouse/Partner's Last Name"}
          type={"text"}
          name={"partner_lastname"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <div className="flex items-center space-x-3 w-fit whitespace-nowrap mt-6 lg:ml-0 ml-1">
          <Checkbox id="terms" />
          <p className="text-sm text-gray-500">Primary Decision Maker</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Spouse/Partner</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
        <button className="flex items-center space-x-4 border-[#2aa87e] border p-4 rounded-sm text-[#2aa87e] hover:bg-[#2aa87e] hover:text-white">
          <Icon path={mdiPlus} size={1} />
          <p>Add Children</p>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Important Dates</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
        <button className="flex items-center space-x-4 border-[#2aa87e] border p-4 rounded-sm text-[#2aa87e] hover:bg-[#2aa87e] hover:text-white">
          <Icon path={mdiPlus} size={1} />
          <p>Add Date</p>
        </button>
      </div>
      <p className="text-gray-400 text-sm">
        Draft last saved today (May 6, 2024) at 10:10 AM.
      </p>
    </div>
  );
};

export default FamilyInformation;
