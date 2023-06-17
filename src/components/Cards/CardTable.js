import React from "react";
import Table from "../Tables/Table";

export default function CardTable({ feedbackObjByCategory }) {
  const headerTitlesArr = ["Category", "Students", "Percentage"];

  const formatTableData = (feedbackObj) =>
    Object.entries(feedbackObj).map(([k, v]) => {
      const stPerCat = v.length,
        stTotal = feedbackObj.total.length;

      return {
        category: k,
        students: stPerCat,
        percentage: (100 * stPerCat) / stTotal,
      };
    });

  return (
    <Table headerTitlesArr={headerTitlesArr}>
      {formatTableData(feedbackObjByCategory).map(
        ({ category, students, percentage }, i) => (
          <tr
            key={i}
            className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer bg-lightComponents dark:bg-darkComponents`}
          >
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
              {category.toUpperCase()}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {students}
            </td>
            <td className="w-[60%] border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">{percentage}%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${percentage}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${category}`}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
    </Table>
  );
}
