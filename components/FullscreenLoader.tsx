import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const FullscreenLoader = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <SyncLoader color="#005c98" />
    </div>
  );
};

export default FullscreenLoader;
