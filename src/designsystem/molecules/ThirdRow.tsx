import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface ThirdRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const ThirdRow: React.FC<ThirdRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex gap-1 md:gap-2">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <ElementFilled
          className=""
          block={periodicTableData[10]?.block}
          isFloating={true}
          isSelected={periodicTableData[10]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[10]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[10]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[10]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[10]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[10]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[11]?.block}
          isFloating={true}
          isSelected={periodicTableData[11]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[11]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[11]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[11]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[11]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[11]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <ElementFilled
          className=""
          block={periodicTableData[12]?.block}
          isFloating={true}
          isSelected={periodicTableData[12]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[12]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[12]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[12]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[12]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[12]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[13]?.block}
          isFloating={true}
          isSelected={periodicTableData[13]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[13]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[13]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[13]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[13]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[13]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[14]?.block}
          isFloating={true}
          isSelected={periodicTableData[14]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[14]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[14]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[14]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[14]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[14]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[15]?.block}
          isFloating={true}
          isSelected={periodicTableData[15]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[15]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[15]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[16]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[16]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[16]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[16]?.block}
          isFloating={true}
          isSelected={periodicTableData[16]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[16]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[16]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[16]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[16]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[16]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          block={periodicTableData[17].block}
          isFloating={true}
          isSelected={periodicTableData[17]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[17]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[17]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[17]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[17]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[17]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default ThirdRow;
