"use client";

import AddressData from "./address-data";
import InterestPreferenceData from "./interest-preference-data";
import PersonalInformationData from "./personal-information-data";

const ViewData = () => {
  return (
    <div>
      <PersonalInformationData />
      <AddressData />
      <InterestPreferenceData />
    </div>
  );
};

export default ViewData;
