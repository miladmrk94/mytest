import { useQuery } from "@tanstack/react-query";
import Accordion from "../components/accordion";
import { baseURL } from "../components/utility ";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, data, isError } = useQuery(
    ["data", searchTerm],
    () => fetchData(searchTerm),
    {
      enabled: searchTerm.length >= 3,
    }
  );

  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchData = async (myQuery) => {
    const response = await fetch(baseURL + `/?q=${myQuery}`);
    const data = await response.json();
    return data.data;
  };

  return (
    <article className="p-3 w-full flex  items-center flex-col">
      <input
        autoFocus
        type="text"
        placeholder="Search..."
        onChange={inputChangeHandler}
        className=" py-3 px-4  w-1/2 xs:w-full font-medium text-lg border-gray-200 rounded-xl  focus:border-blue-500 focus:ring-blue-500 "
      />
      <div className="flex flex-col gap-4 mt-5 w-1/2 xs:w-full ">
        {isError ? (
          <span className="text-center text-red-400">
            خطا در دریافت اطلاعات
          </span>
        ) : (
          data?.results.map((i) => (
            <Accordion
              key={i.item.code}
              title={i.item.name}
              countryCode={i.item.code}
            />
          ))
        )}
      </div>
    </article>
  );
};

export default SearchBar;
