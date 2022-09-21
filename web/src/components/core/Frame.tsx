import React, { ReactNode } from "react";

interface FrameProps {
  children?: ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return <div className="laptop-frame">{children}</div>;
};

export default Frame;
