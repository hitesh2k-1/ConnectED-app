import Column1 from "./Components/Column1";
import Column2 from "./Components/Column2";
import Column3 from "./Components/column3";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col md:flex-row justify-evenly w-[90vw] my-8 gap-6 m-auto ">
      <Column1/>
      <Column2/>
      <Column3/>
      </div>
    </div>
  );
}
