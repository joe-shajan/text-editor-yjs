import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/editor?id=12345")}>Go to editor</button>
    </div>
  );
};

export default Landing;
