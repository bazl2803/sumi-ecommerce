import React from "react";

export const PageFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <footer>{children}</footer>;
};
