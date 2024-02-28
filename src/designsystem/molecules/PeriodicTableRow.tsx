// PeriodicTableRow.tsx
import React from "react";
import { PeriodicTableElementType } from "../../types/periodic-table";
import { BodyLarge, BodyMedium, BodySmall, ElementFilled, SmallTitle } from "../atoms";

interface PeriodicTableRowProps {
  elements: PeriodicTableElementType[];
}

const PeriodicTableRow: React.FC<PeriodicTableRowProps> = ({ elements }) => {
  return (
    <div className="flex justify-center space-x-2">
      {elements.sort((a, b) => a.column - b.column).map((element) => (
        <ElementFilled key={element.atomicNumber} block={element.block} isFloating={true} className={`text-block-${element.block}-800`}>
          <BodyLarge type="span">
            {element.atomicNumber}
          </BodyLarge>
          <SmallTitle>{element.symbol}</SmallTitle>
          <BodyMedium type="p">
            {element.name}
          </BodyMedium>
          <BodySmall type="span">
            {element.atomicWeight}
          </BodySmall>
        </ElementFilled>
      ))}
    </div>
  );
};

export default PeriodicTableRow;
