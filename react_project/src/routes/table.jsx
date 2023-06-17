import CustomTable from "../components/customTable";

const data = [
  {
    id: 100,
    number: 9,
    name: "vahid",
    personalCode: 523456,
    date: "1982/05/10",
    works: "aimmigo.org",
  },
  {
    id: 101,
    number: 5,
    name: "sara",
    personalCode: 923456,
    date: "1981/04/10",
    works: "dimmigo.org",
  },
  {
    id: 102,
    number: 3,
    name: "milad",
    personalCode: 623456,
    date: "1980/03/10",
    works: "cimmigo.org",
  },
  {
    id: 103,
    number: 7,
    name: "jon",
    personalCode: 793456,
    date: "1979/02/10",
    works: "aimmigo.org",
  },
  {
    id: 104,
    number: 2,
    name: "amir",
    personalCode: 654456,
    date: "1979/02/10",
    works: "aimmigo.org",
  },
  {
    id: 105,
    number: 1,
    name: "ali",
    personalCode: 235456,
    date: "1971/02/10",
    works: "aimmigo.org",
  },
  {
    id: 106,
    number: 8,
    name: "ehsan",
    personalCode: 748456,
    date: "1972/02/10",
    works: "aimmigo.org",
  },
  {
    id: 107,
    number: 4,
    name: "negin",
    personalCode: 698456,
    date: "1973/02/10",
    works: "ai5mmigo.org",
  },
  {
    id: 108,
    number: 6,
    name: "mahdi",
    personalCode: 630456,
    date: "1976/02/10",
    works: "6immigo.org",
  },
];

const Table = () => {
  return (
    <article className="w-full md:pl-9 sm:pl-2 xs:pl-1 ">
      <CustomTable data={data} />
    </article>
  );
};

export default Table;
