import React from 'react';
import { PeriodicTableType } from '../types/periodic-table';

import data from "../data/periodic-table-data.json";

type PeriodicTableProps = {};

const PeriodicTable: React.FC<PeriodicTableProps> = ({}) => {
    // Use type assertion to check the data against the PeriodicTable type
    const periodicTableData: PeriodicTableType = data as PeriodicTableType;

    console.log("data", periodicTableData);
  
  return (
    <div className=' py-4 px-4'>PeriodicTable</div>
  );
}

export default PeriodicTable;
