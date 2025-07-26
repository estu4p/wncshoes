import { ReactElement } from "react";

type ServicesListProps = {
  title: string;
  icon: ReactElement;
  sections: {
    subtitle: string;
    desc: string;
  }[];
};

const ServicesList = ({ icon, title, sections }: ServicesListProps) => {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <div className="text-3xl">{icon}</div>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      {sections.map((section, index) => (
        <div className="space-y-3 mt-6" key={index}>
          <h3 className="text-2xl font-bold">
            {index + 1}. {section.subtitle}
          </h3>
          <p className="text-justify text-lg leading-[1.8] text-gray-600">
            {section.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
