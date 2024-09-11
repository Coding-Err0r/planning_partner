"use client";
import Loader from "@/components/utils/loader";
import { MultiSelect } from "@/components/utils/multiselect";
import SaveButton from "@/components/utils/save-button";
import { apiRoutes } from "@/config/apiRoutes";
import { data } from "@/config/data";
import { interestInitialValue } from "@/config/initialValues";
import { AddressProps } from "@/config/types";
import usePost from "@/hooks/use-post";
import React, { useState } from "react";

const InterestPreference = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const {
    isLoading,
    data: FormData,
    setData,
    processForm,
  } = usePost(apiRoutes.interestPreference.POST, interestInitialValue);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Interests and Preferences</h1>
          {isLoading ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processForm} />
          )}
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <MultiSelect
        options={data.preferences}
        onValueChange={(value) => {
          setSelectedPreferences(value);
          setData((prevFormData: any) => ({
            interests: value,
          }));
        }}
        defaultValue={selectedPreferences}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={3}
        label={"INTERESTS AND PREFERENCES"}
      />
    </div>
  );
};

export default InterestPreference;
