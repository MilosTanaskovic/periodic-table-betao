import { useState } from "react";
import "./App.css";
import { Header, PeriodicTable } from "./components";

export default function App() {
  const [isInverted, setIsInverted] = useState<boolean>(false);

  const handleInvertClick = () => {
    setIsInverted(!isInverted); // Toggle the isInverted state;
  };
  return (
    <div className=" flex flex-col gap-24">
      {/* <Header /> */}
      <Header isInverted={isInverted} onInvertClick={handleInvertClick} />
      {/* Periodic Table */}
      <PeriodicTable isInverted={isInverted} />
      {/* <PeriodicTableTest /> */}
      {/* <Footer /> */}
    </div>
  );
}
