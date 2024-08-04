import React, { ReactNode } from "react";

type prop = {
  children: ReactNode;
};

const Body = ({ children }: prop) => {
  return <div className="grow container mx-auto">{children}</div>;
};

export default Body;
