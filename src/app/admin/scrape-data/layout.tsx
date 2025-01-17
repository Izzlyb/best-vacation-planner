
import Sidebar from "@/app/components/admin/sidebar/sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <section className="bg-[#f5f5fe] flex text-purple-700">
      <Sidebar  />
      <section className="flex-1 flex flex-col">
        <div className="h-48 bg-[#0E1428] text-white flex justify-center flex-col px-10 gap-3">
          <h1 className="text-5xl">Scrape Data</h1>
          <p>The scraping engine is powered by Bright Data</p>
        </div>
        {children}
      </section>
    </section>
  );
};

export default DashboardLayout;
