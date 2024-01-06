"use client";

import Board from "@/components/Board";
import DashboardTopItems from "@/components/atom/DashboardTopItems";

const DashboardPage = () => {
  return (
    <section className="paddingY paddingX">
      {/* Top */}
      <DashboardTopItems />

      <Board />
      {/* <IntroCard /> */}
    </section>
  );
};

export default DashboardPage;
