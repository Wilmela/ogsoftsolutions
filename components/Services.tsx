import { services } from "@/constants/services";
import React from "react";
import Service from "./atom/Service";
import MaxWidthContainer from "./MaxWidthContainer";

const Services = () => {
  return (
    <MaxWidthContainer className="paddingY">
      <div>
        <h1 className="main-heading">
          Our Services
        </h1>
        <h3 className="main-desc">
          Get familiar with our top-notch services.
        </h3>
      </div>
      {services.map((service) => {
        return (
          <Service
            key={service.title}
            imgPath={service.imgPath}
            title={service.title}
            desc={service.desc}
            // url={service.url}
          />
        );
      })}
    </MaxWidthContainer>
  );
};

export default Services;
