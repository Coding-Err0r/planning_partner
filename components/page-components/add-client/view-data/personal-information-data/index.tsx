"use client";

import { apiRoutes } from "@/config/apiRoutes";
import useGet from "@/hooks/use-get";

const PersonalInformationData = () => {
  const { data, isLoading } = useGet(apiRoutes.personalInformation.GET);
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Personal Information</h1>
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-200  w-full my-3" />
      </div>
      <div className="w-full">
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">First Name</th>
                <th className="px-4 py-3">Last Name</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Date Of Birth</th>
                <th className="px-4 py-3">Social Security Number</th>
                <th className="px-4 py-3">Service Preference</th>
                <th className="px-4 py-3">Contact Method</th>
                <th className="px-4 py-3">Email Address</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Referral Source</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => (
                <tr className="text-gray-700" key={item.id}>
                  <td className="px-4 py-3 text-sm border">{item.firstName}</td>
                  <td className="px-4 py-3 text-sm border">{item.lastName}</td>
                  <td className="px-4 py-3 text-sm border">{item.gender}</td>
                  <td className="px-4 py-3 text-sm border">
                    {item.dateOfBirth}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.socialSecurityNumber}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.servicePreferences}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.contactMethod}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.emailAddress}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.phoneNumber}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.referralSource}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PersonalInformationData;
