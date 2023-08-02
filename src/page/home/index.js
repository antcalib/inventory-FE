import React from "react";
import Axios from "axios";
import { SearchInput } from "../../components";

import "./index.css";

const Home = () => {
  const [search, setSearch] = React.useState("");
  const [searchData, setSearchData] = React.useState({
    data: {},
    error: "",
  });

  const searchOnChange = (e, value) => {
    setSearch(value);
  };

  const searchList = async () => {
    try {
      if (search) {
        const { data } = await Axios.get(
          "https://weary-zipper-frog.cyclic.cloud/api/inventory",
          {
            params: {
              sku: search,
            },
          }
        );
        setSearchData(() => ({ error: "", data }));
      } else {
        setSearchData((prev) => ({
          ...prev,
          error: "Search box should not be empty",
        }));
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        setSearchData((prev) => ({
          data: {},
          error: err?.response?.data?.message,
        }));
      }
    }
  };

  return (
    <div>
      <SearchInput
        value={search}
        onChange={(e, v) => searchOnChange(e, v)}
        onClick={searchList}
      />
      {!!Object.values(searchData.data).length && (
        <div className="homeListContainer">
          <span>Search key: {searchData.data.sku}</span>
          <span>Quantity: {searchData.data.qty}</span>
        </div>
      )}
      {searchData.error && (
        <div className="homeListContainer">
          <span>{searchData.error}</span>
        </div>
      )}
    </div>
  );
};

export default React.memo(Home);
