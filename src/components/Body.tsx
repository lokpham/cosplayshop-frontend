import { ReactNode } from "react";

type prop = {
  children: ReactNode;
};

const Body = ({ children }: prop) => {
  return (
    <div className="grow container mx-auto p-2 pt-[160px]">{children}</div>
  );
};

export default Body;
