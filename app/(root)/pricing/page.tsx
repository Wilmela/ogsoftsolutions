import MaxWidthContainer from "@/components/MaxWidthContainer";
import PricingCard from "@/components/atom/PricingCard";
import { Countries, CountryProps } from "@/type/type";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing",
};

const getCountries = async () => {
  const data = await fetch(
    process.env.URL as string,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.KEY as string,
        "X-RapidAPI-Host": process.env.HOST as string,
      },
    }
  );
  if(!data) return notFound();
  const res = data.json();
  return res
};

const PricingPage = async() => {

  // const { data } = await getCountries();
  // Pace data to pricing component as prop to use it

  return (
    <MaxWidthContainer className="paddingY flex flex-col items-center pricing">
      <h1 className="main-heading">Pricing</h1>
      <h3 className="main-desc">
        {" "}
        Kindly fill the form below to get a befitting offer.
      </h3>
      <PricingCard />
    </MaxWidthContainer>
  );
};

export default PricingPage;
