import React from "react";

type ContainerTemplateProps = {
  children: React.ReactNode;
};

const ContainerTemplate: React.FC<ContainerTemplateProps> = ({ children }) => {
  return <div className="px-5 md:px-10 h-auto mb-10">{children}</div>;
};

export default ContainerTemplate;
