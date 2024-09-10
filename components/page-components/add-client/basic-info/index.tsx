import DatePicker from "@/components/utils/date-picker";
import CustomInput from "@/components/utils/input";
import { MultiSelect } from "@/components/utils/multiselect";
import SaveButton from "@/components/utils/save-button";
import CustomSelect from "@/components/utils/select";
import { data } from "@/config/data";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/utils/loader";
import { apiRoutes } from "@/config/apiRoutes";
import { AddressProps, PersonalInformationProps } from "@/config/types";
import {
  addressInitialValue,
  personalInformationInitialValue,
} from "@/config/initialValues";

const BasicInfo = () => {
  const [isLoading, setIsLoading] = useState({ id: 0, value: false });
  const { toast } = useToast();
  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformationProps>(personalInformationInitialValue);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [addressData, setAddressData] =
    useState<AddressProps>(addressInitialValue);

  const processPersonalInformationForm = async () => {
    setIsLoading({ id: 0, value: true });
    try {
      await axios.post(
        apiRoutes.personalInformation.POST,
        personalInformationData
      );
      toast({
        title: "Success",
        description: "Data uploaded successfully",
      });
      setPersonalInformationData(personalInformationInitialValue);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload data",
        variant: "destructive",
      });
    } finally {
      setIsLoading({ id: 0, value: false });
    }
  };

  const processAddressForm = async () => {
    setIsLoading({ id: 1, value: true });
    try {
      await axios.post(apiRoutes.address.POST, addressData);
      toast({
        title: "Success",
        description: "Data uploaded successfully",
      });
      setAddressData(addressInitialValue);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload data",
        variant: "destructive",
      });
    } finally {
      setIsLoading({ id: 1, value: false });
    }
  };

  const handlePersonalInfoInputChange =
    (fieldName: keyof typeof personalInformationData) => (value: string) => {
      setPersonalInformationData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };

  const handleAddressInputChange =
    (fieldName: keyof typeof addressData) => (value: string) => {
      setAddressData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };

  return (
    <div className="flex flex-col lg:space-y-12 space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Personal Information</h1>
          {isLoading.value && isLoading.id === 0 ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processPersonalInformationForm} />
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
          _onChange={handlePersonalInfoInputChange("firstName")}
        />
        <CustomInput
          htmlFor={"lastName"}
          label={"LAST NAME"}
          placeholder={"Last Name"}
          type={"text"}
          _onChange={handlePersonalInfoInputChange("lastName")}
        />
        <CustomSelect
          htmlFor={"gender"}
          label={"GENDER"}
          placeholder={"Select Gender"}
          _onChange={handlePersonalInfoInputChange("gender")}
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
          _onChange={handlePersonalInfoInputChange("dateOfBirth")}
        />
        <CustomInput
          htmlFor={"socialSecurityNumber"}
          label={"SOCIAL SECURITY NUMBER"}
          placeholder={"987 65 4321"}
          type={"text"}
          _onChange={handlePersonalInfoInputChange("socialSecurityNumber")}
        />
        <CustomSelect
          htmlFor={"servicePreferences"}
          label={"SERVICE PREFERENCE"}
          placeholder={"Regular Policy Reviews"}
          _onChange={handlePersonalInfoInputChange("servicePreferences")}
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
          _onChange={handlePersonalInfoInputChange("contactMethod")}
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
          _onChange={handlePersonalInfoInputChange("emailAddress")}
        />
        <CustomInput
          htmlFor={"phoneNumber"}
          label={"PHONE NUMBER"}
          placeholder={"+1 555 244 1139"}
          type={"text"}
          _onChange={handlePersonalInfoInputChange("phoneNumber")}
        />
        <CustomSelect
          htmlFor={"referralSource"}
          label={"REFERRAL SOURCE"}
          placeholder={"Colleague"}
          _onChange={handlePersonalInfoInputChange("referralSource")}
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
          {isLoading.value && isLoading.id === 1 ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processAddressForm} />
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
          _onChange={handleAddressInputChange("streetAddress")}
        />
        <CustomInput
          htmlFor={"apartmentFloor"}
          label={"APARTMENT/FLOOR"}
          placeholder={"Apt 404"}
          type={"text"}
          _onChange={handleAddressInputChange("apartmentFloor")}
        />
        <CustomInput
          htmlFor={"city"}
          label={"CITY"}
          placeholder={"Beverly Hills"}
          type={"text"}
          _onChange={handleAddressInputChange("city")}
        />
        <CustomSelect
          htmlFor={"state"}
          label={"STATE"}
          placeholder={"California (CA)"}
          _onChange={handleAddressInputChange("state")}
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
          _onChange={handleAddressInputChange("zipCode")}
        />
        <CustomSelect
          htmlFor={"country"}
          label={"COUNTRY"}
          placeholder={"United States"}
          _onChange={handleAddressInputChange("country")}
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
          {isLoading.value && isLoading.id === 2 ? (
            <Loader title={"Uploading..."} />
          ) : (
            <SaveButton _onSubmit={processAddressForm} />
          )}
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
