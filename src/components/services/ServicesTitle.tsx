import React from "react";

const ServicesTitle = ({
  title,
  count,
  isActive = false,
}: {
  title: string;
  count: string;
  isActive?: boolean;
}) => {
  return (
    <div className="flex items-start gap-2">
      <h3
        className={`font-bebas text-6xl md:text-8xl tracking-[-2px] cursor-pointer ${
          isActive ? "text-foreground" : "text-[#C5C5C5]"
        }`}
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
