import React from "react";
import { useSearchParams } from "react-router-dom";

const Editor = () => {
  const [searchParams] = useSearchParams();

  return <div>{searchParams.get("id")}</div>;
};

export default Editor;
