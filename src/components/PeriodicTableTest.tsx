// PeriodicTable.tsx
import React from 'react';
import { PeriodicTableType, PeriodicTableElementType } from '../types/periodic-table';
import data from "../data/periodic-table-data.json";
import { PeriodicTableRow } from '../designsystem/molecules';

const PeriodicTable: React.FC = () => {
    const periodicTableData: PeriodicTableType = data as PeriodicTableType;

    // Group elements by row
    const rows = periodicTableData.reduce<Record<number, PeriodicTableElementType[]>>((acc, element) => {
        if (!acc[element.row]) {
            acc[element.row] = [];
        }
        acc[element.row].push(element);
        return acc;
    }, {});

    return (
        <section className='py-4 px-4'>
            {Object.values(rows).map((rowElements, index) => (
                <PeriodicTableRow key={index} elements={rowElements} />
            ))}
        </section>
    );
}

export default PeriodicTable;
