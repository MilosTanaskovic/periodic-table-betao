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
import { MediumTitle } from "../designsystem/atoms";

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
      id="periodic-table"
      className={`py-4 px-4 ${isInverted ? "flex flex-col-reverse" : ""}`}
    >
      <div id="period-1">
        <MediumTitle className="md:hidden">Period 1</MediumTitle>
        <FirstRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-2">
        <MediumTitle className="md:hidden">Period 2</MediumTitle>
        <SecondRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-3">
        <MediumTitle className="md:hidden">Period 3</MediumTitle>
        <ThirdRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-4">
        <MediumTitle className="md:hidden">Period 4</MediumTitle>
        <FourthRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-5">
        <MediumTitle className="md:hidden">Period 5</MediumTitle>
        <FifthRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-6">
        <MediumTitle className="md:hidden">Period 6</MediumTitle>
        <SixthRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="period-7">
        <MediumTitle className="md:hidden">Period 7</MediumTitle>
        <SeventhRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="lanthanides">
        <MediumTitle className="md:hidden">Lanthanides</MediumTitle>
        <LanthanidesRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
      <div id="actinides">
        <MediumTitle className="md:hidden">Actinides</MediumTitle>
        <ActinidesRow
          periodicTableData={periodicTableData}
          selectedBlock={selectedBlock}
          onElementClick={handleElementClick}
        />
      </div>
    </section>
  );
};

export default PeriodicTable;
