import React from "react";

const Table = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <table className="shadow-md rounded-md table-fixed">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-900 rounded-tl-md">
                Song
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-900">
                Artist
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-slate-900 rounded-tr-md">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                Malcolm Lockyer
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">1961</td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                Witchy Woman
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">The Eagles</td>
              <td className="px-6 py-4 text-sm text-slate-900">1972</td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                Shining Star
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                Earth, Wind, and Fire
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">1975</td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                Shining Star
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                Earth, Wind, and Fire
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">1975</td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                Shining Star
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                Earth, Wind, and Fire
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">1975</td>
            </tr>
            <tr className="odd:bg-white even:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900 rounded-bl-md">
                Shining Star
              </td>
              <td className="px-6 py-4 text-sm text-slate-900">
                Earth, Wind, and Fire
              </td>
              <td className="px-6 py-4 text-sm text-slate-900 rounded-br-md">
                1975
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>1</div>
    </div>
  );
};

export default Table;
