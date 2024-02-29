// PeriodicTable is organism level
import React, { useState } from "react";
import { BlockType, PeriodicTableType } from "../types/periodic-table";

import data from "../data/periodic-table-data.json";
import {
  ActinidesRow,
  FifthRow,
  FirstRow,
  FourthRow,
  LanthanidesRow,
  SecondRow,
  SeventhRow,
  SixthRow,
  ThirdRow,
} from "../designsystem/molecules";

interface PeriodicTableProps {
  isInverted?: boolean;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ isInverted }) => {
  const [selectedBlock, setSelectedBlock] = useState<null | BlockType>(null);
  // Use type assertion to check the data against the PeriodicTable type
  const periodicTableData: PeriodicTableType = data as PeriodicTableType;

  const handleElementClick = (blockType: BlockType) => {
    setSelectedBlock(blockType);
  };

  console.log("data", periodicTableData);

  return (
    <section
      className={`py-4 px-4 ${isInverted ? "flex flex-col-reverse" : ""}`}
    >
      <FirstRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <SecondRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <ThirdRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <FourthRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <FifthRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <SixthRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <SeventhRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />

      <LanthanidesRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
      <ActinidesRow
        periodicTableData={periodicTableData}
        selectedBlock={selectedBlock}
        onElementClick={handleElementClick}
      />
    </section>
  );
};

export default PeriodicTable;
