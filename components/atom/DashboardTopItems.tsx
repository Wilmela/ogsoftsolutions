'use client'

import { useDashboardContext } from "@/context";
import InfoCard from "./InfoCard";

const DashboardTopItems = () => {
  
     const {
       clients,
       newsLetterSubscriptions,
       totalOpenIssues,
      //  totalClosedIssues,
     } = useDashboardContext();

     const INFO = [
       {
         title: "Clients",
         value: clients,
         desc: "Total clients",
       },
       {
         title: "News Letter",
         value: newsLetterSubscriptions,
         desc: "Total news letter sign up",
       },
       {
         title: "Open Issues",
         value: totalOpenIssues,
         desc: "Total open issues",
       },
      //  {
      //    title: "Closed Issues",
      //    value: totalClosedIssues,
      //    desc: "Total closed issues",
      //  },
     ];
  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4 mb-6">
      {INFO.map((info) => (
        <InfoCard
          key={info.title}
          title={info.title}
          value={info.value}
          desc={info.desc}
        />
      ))}
    </div>
  );
}

export default DashboardTopItems