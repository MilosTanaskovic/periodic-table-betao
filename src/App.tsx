import "./App.css";
import { Header, PeriodicTable, PeriodicTableTest } from "./components";


export default function App() {
  return (
    <div className=" flex flex-col gap-24">
      {/* <Header /> */}
      <Header />
      {/* Periodic Table */}
      <PeriodicTable />
      {/* <PeriodicTableTest /> */}
      {/* <Footer /> */}
    </div>
  );
}
