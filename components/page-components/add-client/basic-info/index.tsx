import DatePicker from "@/components/utils/date-picker";
import CustomInput from "@/components/utils/input";
import { MultiSelect } from "@/components/utils/multiselect";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import { data } from "@/config/data";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type PersonalInformationInput = {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  socialSecurityNumber: string;
  servicePreferences: string;
  contactMethod: string;
  emailAddress: string;
  phoneNumber: string;
  referralSource: string;
};
const BasicInfo = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformationInput>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInformationInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      socialSecurityNumber: "",
      servicePreferences: "",
      contactMethod: "",
      emailAddress: "",
      phoneNumber: "",
      referralSource: "",
    },
  });

  const processPersonalInformationForm: SubmitHandler<
    PersonalInformationInput
  > = (data) => {
    setPersonalInformationData(data);
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:space-y-12 space-y-4">
      <p>Data</p>
      <p>{JSON.stringify(personalInformationData)}</p>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Personal Information</h1>
          <SaveButton
            _onSubmit={handleSubmit(processPersonalInformationForm)}
          />
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <form className="md:grid 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:items-start">
        <CustomInput
          htmlFor={"firstname"}
          label={"FIRST NAME"}
          placeholder={"First Name"}
          type={"text"}
          {...register("firstName", { required: "First Name is required" })}
          _onChange={
            (value: any) => {}
            // setFormData((prevFormData) => ({
            //   ...prevFormData,
            //   lastName: value,
            // }))
          }
        />
        <CustomInput
          htmlFor={"lastname"}
          label={"LAST NAME"}
          placeholder={"Last Name"}
          type={"text"}
          _onChange={(value: any) => (value: any) => {}}
        />
        <CustomSelect
          htmlFor={"gender"}
          label={"GENDER"}
          placeholder={"Select Gender"}
          _onChange={(value: any) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              gender: value,
            }))
          }
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
          _onChange={
            (value: any) => (value: any) => {}
            // setFormData((prevFormData) => ({
            //   ...prevFormData,
            //   dateOfBirth: new Date(value).toLocaleDateString("en-US"),
            // }))
          }
        />
        <CustomInput
          htmlFor={"social_security"}
          label={"SOCIAL SECURITY NUMBER"}
          placeholder={"987 65 4321"}
          type={"text"}
          _onChange={(value: any) => (value: any) => {}}
        />
        <CustomSelect
          htmlFor={"service"}
          label={"SERVICE PREFERENCE"}
          placeholder={"Regular Policy Reviews"}
          _onChange={(value: any) => (value: any) => {}}
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
          _onChange={(value: any) => (value: any) => {}}
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
          _onChange={(value: any) => (value: any) => {}}
        />
        <CustomInput
          htmlFor={"phone"}
          label={"PHONE NUMBER"}
          placeholder={"+1 555 244 1139"}
          type={"text"}
          _onChange={(value: any) => (value: any) => {}}
        />
        <CustomSelect
          htmlFor={"referral"}
          label={"REFERRAL SOURCE"}
          placeholder={"Colleague"}
          _onChange={(value: any) => (value: any) => {}}
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
      </form>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Address</h1>
          <SaveButton _onSubmit={() => console.log("Clicked")} />
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
          <SaveButton _onSubmit={() => console.log("Clicked")} />
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
