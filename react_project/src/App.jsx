import { Route, Routes } from "react-router-dom";
import Layout from "./routes/layout";
import Table from "./routes/table";
import NotFoundPage from "./routes/notFoundPage";
import SearchBar from "./routes/searchbar";
import HomePage from "./routes/homePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="table" element={<Table />} />
        <Route path="searchBar" element={<SearchBar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
