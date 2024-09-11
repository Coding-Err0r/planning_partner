import PersonalInformation from "./personal-information";
import Address from "./address";
import InterestPreference from "./interest-preference";

const BasicInfo = () => {
  return (
    <div className="flex flex-col lg:space-y-12 space-y-4">
      <PersonalInformation />
      <Address />
      <InterestPreference />
      <p className="text-gray-400 text-sm">
        Draft last saved today (May 6, 2024) at 10:10 AM.
      </p>
    </div>
  );
};

export default BasicInfo;
