import React from "react";

const ServicesTitle = ({
  title,
  count,
  titleColour = "text-[#C5C5C5]",
}: {
  title: string;
  count: string;
  titleColour?: string;
}) => {
  return (
    <div className="flex items-start gap-2">
      {/* <h3 className={`font-bebas text-8xl tracking-[-2px] ${titleColour}`}> */}
      <h3
        className={`font-bebas text-6xl md:text-8xl tracking-[-2px] ${titleColour}`}
      >
        {title}
      </h3>
      <div className="bg-secondary min-w-6 min-h-6 rounded-full text-center text-white">
        <span>{count}</span>
      </div>
    </div>
  );
};

export default ServicesTitle;
