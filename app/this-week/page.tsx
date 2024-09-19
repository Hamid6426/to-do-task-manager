import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import AllTasks from "../components/AllTasks";
import MobileBar from "../components/MobileBar";

// import Image from "next/image";
export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <div className="w-screen px-4">
        <MobileBar />
      </div>
      <div className="flex flex-row w-screen gap-4 px-4 justify-center">
        <Sidebar />
        <AllTasks />
      </div>
    </div>
  );
}
