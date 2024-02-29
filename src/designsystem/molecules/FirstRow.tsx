import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface FirstRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const FirstRow: React.FC<FirstRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 ">
        {/* first element - Hydrogen */}
        <ElementFilled
          className=""
          block={periodicTableData[0]?.block}
          isFloating={true}
          isSelected={periodicTableData[0]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[0]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[0]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[0]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[0]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[0]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 ">
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        {/* secound element - Helium */}
        <ElementFilled
          block={periodicTableData[1]?.block}
          isFloating={true}
          isSelected={periodicTableData[1]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[0]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[1]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[1]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[1]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[1]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default FirstRow;
