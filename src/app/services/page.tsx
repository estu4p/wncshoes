import ServicesList from "@/components/services/ServicesList";
import { FaShoppingBag } from "react-icons/fa";
import { GiFullMotorcycleHelmet, GiRunningShoe } from "react-icons/gi";

const ServicesPage = () => {
  return (
    <div className="mt-[170px] px-6 lg:px-20 3xl:px-0 w-full">
      <div className="text-center">
        <h1 className="font-bebas text-7xl leading-[0.9]">
          Complete Care for What You Wear
        </h1>
        <span className="text-gray text-2xl">
          Sneaker and apparel care — cleaning, repair, repaint, and more.
        </span>
      </div>
      <div className="mt-25 space-y-10">
        <ServicesList
          icon={<GiRunningShoe />}
          title="Shoes Cleaning"
          sections={[
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
          ]}
        />
        <ServicesList
          icon={<FaShoppingBag />}
          title="Bag Cleaning"
          sections={[
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
          ]}
        />
        <ServicesList
          icon={<GiFullMotorcycleHelmet />}
          title="Bag Cleaning"
          sections={[
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
            {
              subtitle: "Deep Cleaning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat incidunt eaque magnam velit non veniam corrupti consectetur unde doloremque eius suscipit soluta sint commodi? Eligendi aliquam quos architecto officiis?",
            },
          ]}
        />
      </div>
      {/*  */}
    </div>
  );
};

export default ServicesPage;
