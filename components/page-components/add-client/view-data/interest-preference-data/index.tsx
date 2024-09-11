"use client";
import { apiRoutes } from "@/config/apiRoutes";
import useGet from "@/hooks/use-get";
import { useEffect } from "react";

const InterestPreferenceData = () => {
  const { data, isLoading } = useGet(apiRoutes.interestPreference.GET);
  useEffect(() => {
    data.map((value, key) => {
      console.log(value.interests); // Use this value to display in your component.
    });
  }, [data]);
  return (
    <div className="lg:py-10 py-6">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-md">Interest Preference</h1>
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
                <th className="px-4 py-3">Interests</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => (
                <tr className="text-gray-700" key={item.id}>
                  {item.interests.map((interest: any) => (
                    <td className="px-4 py-3 text-sm border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {interest}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default InterestPreferenceData;
