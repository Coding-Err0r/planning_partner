"use client";
import CustomInput from "@/components/utils/input";
import Loader from "@/components/utils/loader";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import { apiRoutes } from "@/config/apiRoutes";
import { addressInitialValue } from "@/config/initialValues";
import { AddressProps } from "@/config/types";
import usePost from "@/hooks/use-post";
import React, { useState } from "react";

const Address = () => {
  const { isLoading, data, setData, processForm } = usePost(
    apiRoutes.address.POST,
    addressInitialValue
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
          <h1 className="lg:text-2xl text-md">Address</h1>
          {isLoading ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processForm} />
          )}
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:items-start">
        <CustomInput
          htmlFor={"streetAddress"}
          label={"STREET ADDRESS"}
          placeholder={"694 Canis Heights Drive"}
          type={"text"}
          _onChange={handleInputChange("streetAddress")}
        />
        <CustomInput
          htmlFor={"apartmentFloor"}
          label={"APARTMENT/FLOOR"}
          placeholder={"Apt 404"}
          type={"text"}
          _onChange={handleInputChange("apartmentFloor")}
        />
        <CustomInput
          htmlFor={"city"}
          label={"CITY"}
          placeholder={"Beverly Hills"}
          type={"text"}
          _onChange={handleInputChange("city")}
        />
        <CustomSelect
          htmlFor={"state"}
          label={"STATE"}
          placeholder={"California (CA)"}
          _onChange={handleInputChange("state")}
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
          htmlFor={"zipCode"}
          label={"ZIP CODE"}
          placeholder={"90230"}
          type={"text"}
          _onChange={handleInputChange("zipCode")}
        />
        <CustomSelect
          htmlFor={"country"}
          label={"COUNTRY"}
          placeholder={"United States"}
          _onChange={handleInputChange("country")}
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
    </div>
  );
};

export default Address;
