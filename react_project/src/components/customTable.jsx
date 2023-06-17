import { useState } from "react";
import _ from "lodash";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function CustomTable({ data }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (columnName) => {
    let newSortOrder = "asc";
    if (sortColumn === columnName && sortOrder === "asc") {
      newSortOrder = "desc";
    }

    const sorted = _.orderBy(sortedData, [columnName], [newSortOrder]);

    setSortedData(sorted);
    setSortColumn(columnName);
    setSortOrder(newSortOrder);
  };
  return (
    <>
      {!data ? (
        <div dir="rtl" className="w-full font-dana-medium relative ">
          <div className="w-full flex justify-center items-center text-white">
            ... loading
          </div>
        </div>
      ) : (
        <div dir="rtl" className="w-full font-dana-medium relative ">
          <div className="bg-indigo-100  px-4  pt-4  pb-12 overflow-y-auto shadow-lg rounded-lg">
            <table className="w-full whitespace-nowrap">
              <thead className=" w-full relative">
                <tr className="h-16 w-full text-sm leading-none text-gray-900 ">
                  <th
                    className="font-bold w-1/5 cursor-pointer"
                    onClick={() => handleSort("number")}
                  >
                    <div className="flex gap-2 justify-start">
                      {sortColumn === "number" && sortOrder === "asc" && (
                        <AiOutlineArrowUp />
                      )}
                      {sortColumn === "number" && sortOrder === "desc" && (
                        <AiOutlineArrowDown />
                      )}
                      <span>ردیف</span>
                    </div>
                  </th>
                  <th
                    className="font-bold text-center cursor-pointer  w-1/5"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex gap-2 justify-center">
                      {sortColumn === "name" && sortOrder === "asc" && (
                        <AiOutlineArrowUp />
                      )}
                      {sortColumn === "name" && sortOrder === "desc" && (
                        <AiOutlineArrowDown />
                      )}
                      <span>نام و نام خانوادگی</span>
                    </div>
                  </th>
                  <th
                    className="font-bold cursor-pointer w-1/5"
                    onClick={() => handleSort("personalCode")}
                  >
                    <div className="flex gap-2 justify-center">
                      {sortColumn === "personalCode" && sortOrder === "asc" && (
                        <AiOutlineArrowUp />
                      )}
                      {sortColumn === "personalCode" &&
                        sortOrder === "desc" && <AiOutlineArrowDown />}
                      <span>شماره پرسنلی</span>
                    </div>
                  </th>

                  <th
                    className="font-bold cursor-pointer w-1/5"
                    onClick={() => handleSort("date")}
                  >
                    <div className="flex gap-2 justify-center ">
                      {sortColumn === "date" && sortOrder === "asc" && (
                        <AiOutlineArrowUp />
                      )}
                      {sortColumn === "date" && sortOrder === "desc" && (
                        <AiOutlineArrowDown />
                      )}
                      <span>تاریخ استخدام</span>
                    </div>
                  </th>

                  <th
                    className="font-bold cursor-pointer  w-1/5"
                    onClick={() => handleSort("works")}
                  >
                    <div className="flex gap-2 justify-center ">
                      {sortColumn === "works" && sortOrder === "asc" && (
                        <AiOutlineArrowUp />
                      )}
                      {sortColumn === "works" && sortOrder === "desc" && (
                        <AiOutlineArrowDown />
                      )}
                      <span>سابقه خدمات</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full text-gray-700">
                {sortedData?.map((d) => {
                  return (
                    <tr
                      key={d.id}
                      className="h-14 text-sm leading-none transform-gpu border-b border-t border-gray-800 "
                    >
                      <td className="">
                        <div className="flex items-start text-center">
                          <div className="pr-2 flex flex-row gap-1">
                            <p>{d.number}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <p className="text-sm leading-none text-center">
                          {d.name}
                        </p>
                      </td>
                      <td className="text-center">
                        <p className="text-sm leading-none">{d.personalCode}</p>
                      </td>
                      <td className="text-center">
                        <p>{new Date(d.date).toLocaleDateString("fa-IR")}</p>
                      </td>
                      <td className="text-center">
                        <p>{d.works}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomTable;
