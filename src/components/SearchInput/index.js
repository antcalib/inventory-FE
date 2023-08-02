import React from "react";
import { Input, Button } from "../../components";

import "./index.css";

const Search = (props) => {
  const inputChange = (e) => {
    props.onChange(e, e.target.value);
  };

  return (
    <div className="searchContainer">
      <Input placeholder={'Search for SKU'} value={props?.value} onChange={inputChange} />
      <Button onClick={props?.onClick}>Search</Button>
    </div>
  );
};

export default React.memo(Search);
