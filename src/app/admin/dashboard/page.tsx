import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <section className="m-10 flex flex-col gap-10 bg-orange-300">
      <section className="grid grid-cols-5 gap-5">
        Dashboard Page Sections to display:
      </section>
      <section className=" grid grid-cols-6 gap-2">
        <div className="col-span-4 text-blue-300">
          Scrapint Chart
        </div>
        <div className="col-span-2 text-blue-300">
          Scraping Queue
        </div>
      </section>
    </section>
  );
};

export default DashboardPage;
