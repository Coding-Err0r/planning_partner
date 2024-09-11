"use client";
import { apiRoutes } from "@/config/apiRoutes";
import useGet from "@/hooks/use-get";

const AddressData = () => {
  const { data, isLoading } = useGet(apiRoutes.address.GET);
  return (
    <div className="lg:py-10 py-6">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Address</h1>
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
                <th className="px-4 py-3">Street Address</th>
                <th className="px-4 py-3">Apartment Floor</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">State</th>
                <th className="px-4 py-3">Zip Code</th>
                <th className="px-4 py-3">Country</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => (
                <tr className="text-gray-700" key={item.id}>
                  <td className="px-4 py-3 text-sm border">
                    {item.streetAddress}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {item.apartmentFloor}
                  </td>
                  <td className="px-4 py-3 text-sm border">{item.city}</td>
                  <td className="px-4 py-3 text-sm border">{item.state}</td>
                  <td className="px-4 py-3 text-sm border">{item.zipCode}</td>
                  <td className="px-4 py-3 text-sm border">{item.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AddressData;
