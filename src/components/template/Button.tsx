import React from "react";

type ButtonTemplateProps = {
  text?: string;
  disabled?: boolean;
  width?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  text,
  disabled,
  width,
  onClick,
  icon,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`text-white ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-slate-600 hover:bg-slate-700 active:bg-slate-600 duration-150 focus:outline-none focus:ring focus:ring-slate-300"
        } py-1.5 px-4 rounded-lg w-${width} shadow-sm`}
        disabled={disabled}>
        <p className="text-sm font-semibold">
          {text} {icon}
        </p>
      </button>
    </>
  );
};

export default ButtonTemplate;
