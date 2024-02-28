// PeriodicTable is organism level
import React from "react";
import { PeriodicTableType } from "../types/periodic-table";

import data from "../data/periodic-table-data.json";
import {
  FifthRow,
  FirstRow,
  FourthRow,
  SecondRow,
  SeventhRow,
  SixthRow,
  ThirdRow,
} from "../designsystem/molecules";

type PeriodicTableProps = {};

const PeriodicTable: React.FC<PeriodicTableProps> = ({}) => {
  // Use type assertion to check the data against the PeriodicTable type
  const periodicTableData: PeriodicTableType = data as PeriodicTableType;

  console.log("data", periodicTableData);

  return (
    <section className=" py-4 px-4">
      <FirstRow periodicTableData={periodicTableData} />
      <SecondRow periodicTableData={periodicTableData} />
      <ThirdRow periodicTableData={periodicTableData} />
      <FourthRow periodicTableData={periodicTableData} />
      <FifthRow periodicTableData={periodicTableData} />
      <SixthRow periodicTableData={periodicTableData} />
      <SeventhRow periodicTableData={periodicTableData} />
    </section>
  );
};

export default PeriodicTable;
