import DatePicker from "@/components/utils/date-picker";
import CustomInput from "@/components/utils/input";
import { MultiSelect } from "@/components/utils/multiselect";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import { data } from "@/config/data";
import { useState } from "react";

const BasicInfo = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  return (
    <div className="flex flex-col lg:space-y-12 space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Personal Information</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="md:grid 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:items-start">
        <CustomInput
          htmlFor={"firstname"}
          label={"FIRST NAME"}
          placeholder={"First Name"}
          type={"text"}
          name={"firstname"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"lastname"}
          label={"LAST NAME"}
          placeholder={"Last Name"}
          type={"text"}
          name={"lastname"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"gender"}
          label={"GENDER"}
          placeholder={"Select Gender"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Gender"}
          data={[
            {
              title: "Male",
              value: "male",
            },
            {
              title: "Female",
              value: "female",
            },
            {
              title: "I rather not say",
              value: "i rather not say",
            },
          ]}
        />
        <DatePicker
          htmlFor={"date_of_birth"}
          label={"DATE OF BIRTH"}
          placeholder={"October 18. 1992"}
          _onChange={(value) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"social_security"}
          label={"SOCIAL SECURITY NUMBER"}
          placeholder={"987 65 4321"}
          type={"text"}
          name={"social_security"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"service"}
          label={"SERVICE PREFERENCE"}
          placeholder={"Regular Policy Reviews"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Service"}
          data={[
            {
              title: "Service 1",
              value: "service 1",
            },
            {
              title: "Service 2",
              value: "service 2",
            },
            {
              title: "Service 3",
              value: "service 3",
            },
          ]}
        />
        <CustomSelect
          htmlFor={"contact_method"}
          label={"PREFERRED CONTACT METHOD"}
          placeholder={"Email"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Contact Method"}
          data={[
            {
              title: "Email",
              value: "email",
            },
            {
              title: "Phone",
              value: "phone",
            },
          ]}
        />
        <CustomInput
          htmlFor={"email"}
          label={"EMAIL ADDRESS"}
          placeholder={"bogdan@skyforest.com"}
          type={"email"}
          name={"email"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"phone"}
          label={"PHONE NUMBER"}
          placeholder={"+1 555 244 1139"}
          type={"text"}
          name={"phone"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"referral"}
          label={"REFERRAL SOURCE"}
          placeholder={"Colleague"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Referral"}
          data={[
            {
              title: "Colleague",
              value: "colleague",
            },
            {
              title: "Teacher",
              value: "teacher",
            },
          ]}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Address</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:items-start">
        <CustomInput
          htmlFor={"street"}
          label={"STREET ADDRESS"}
          placeholder={"694 Canis Heights Drive"}
          type={"text"}
          name={"street"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"apartment"}
          label={"APARTMENT/FLOOR"}
          placeholder={"Apt 404"}
          type={"text"}
          name={"apartment"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomInput
          htmlFor={"city"}
          label={"CITY"}
          placeholder={"Beverly Hills"}
          type={"text"}
          name={"city"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"state"}
          label={"STATE"}
          placeholder={"California (CA)"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select State"}
          data={[
            {
              title: "California (CA)",
              value: "california (CA)",
            },
            {
              title: "New York (NY)",
              value: "new york (NY)",
            },
          ]}
        />
        <CustomInput
          htmlFor={"zip"}
          label={"ZIP CODE"}
          placeholder={"90230"}
          type={"text"}
          name={"zip"}
          _onChange={(value: any) => console.log("Input value:", value)}
        />
        <CustomSelect
          htmlFor={"country"}
          label={"COUNTRY"}
          placeholder={"United States"}
          _onChange={(value: any) => console.log("Selected value:", value)}
          selectLabel={"Select Country"}
          data={[
            {
              title: "United States",
              value: "united States",
            },
            {
              title: "Bangladesh",
              value: "Bangladesh",
            },
          ]}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Interests and Preferences</h1>
          <SaveButton />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <MultiSelect
        options={data.preferences}
        onValueChange={setSelectedPreferences}
        defaultValue={selectedPreferences}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={3}
        label={"INTERESTS AND PREFERENCES"}
      />
      <p className="text-gray-400 text-sm">
        Draft last saved today (May 6, 2024) at 10:10 AM.
      </p>
    </div>
  );
};

export default BasicInfo;
