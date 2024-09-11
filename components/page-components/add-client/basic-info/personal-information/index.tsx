"use client";
import DatePicker from "@/components/utils/date-picker";
import CustomInput from "@/components/utils/input";
import Loader from "@/components/utils/loader";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import { apiRoutes } from "@/config/apiRoutes";
import { personalInformationInitialValue } from "@/config/initialValues";
import { PersonalInformationProps } from "@/config/types";
import usePost from "@/hooks/use-post";
import React, { useState } from "react";

const PersonalInformation = () => {
  const { isLoading, data, setData, processForm } = usePost(
    apiRoutes.personalInformation.POST,
    personalInformationInitialValue
  );

  const handleInputChange =
    (fieldName: keyof typeof data) => (value: string) => {
      setData((prevFormData: any) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Personal Information</h1>
          {isLoading ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processForm} />
          )}
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="md:grid 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:items-start">
        <CustomInput
          htmlFor={"firstName"}
          label={"FIRST NAME"}
          placeholder={"First Name"}
          type={"text"}
          _onChange={handleInputChange("firstName")}
        />
        <CustomInput
          htmlFor={"lastName"}
          label={"LAST NAME"}
          placeholder={"Last Name"}
          type={"text"}
          _onChange={handleInputChange("lastName")}
        />
        <CustomSelect
          htmlFor={"gender"}
          label={"GENDER"}
          placeholder={"Select Gender"}
          _onChange={handleInputChange("gender")}
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
          htmlFor={"dateOfBirth"}
          label={"DATE OF BIRTH"}
          placeholder={"October 18. 1992"}
          _onChange={handleInputChange("dateOfBirth")}
        />
        <CustomInput
          htmlFor={"socialSecurityNumber"}
          label={"SOCIAL SECURITY NUMBER"}
          placeholder={"987 65 4321"}
          type={"text"}
          _onChange={handleInputChange("socialSecurityNumber")}
        />
        <CustomSelect
          htmlFor={"servicePreferences"}
          label={"SERVICE PREFERENCE"}
          placeholder={"Regular Policy Reviews"}
          _onChange={handleInputChange("servicePreferences")}
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
          htmlFor={"contactMethod"}
          label={"PREFERRED CONTACT METHOD"}
          placeholder={"Email"}
          _onChange={handleInputChange("contactMethod")}
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
          htmlFor={"emailAddress"}
          label={"EMAIL ADDRESS"}
          placeholder={"bogdan@skyforest.com"}
          type={"email"}
          _onChange={handleInputChange("emailAddress")}
        />
        <CustomInput
          htmlFor={"phoneNumber"}
          label={"PHONE NUMBER"}
          placeholder={"+1 555 244 1139"}
          type={"text"}
          _onChange={handleInputChange("phoneNumber")}
        />
        <CustomSelect
          htmlFor={"referralSource"}
          label={"REFERRAL SOURCE"}
          placeholder={"Colleague"}
          _onChange={handleInputChange("referralSource")}
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
    </div>
  );
};

export default PersonalInformation;
