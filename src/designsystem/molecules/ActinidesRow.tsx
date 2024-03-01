import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface LanthanidesRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const LanthanidesRow: React.FC<LanthanidesRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex gap-1 md:gap-2">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

        <ElementFilled
          className=""
          block={periodicTableData[89]?.block}
          isFloating={true}
          isSelected={periodicTableData[89]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[89]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[89]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[89]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[89]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[89]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[90]?.block}
          isFloating={true}
          isSelected={periodicTableData[90]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[90]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[90]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[90]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[90]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[90]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[91]?.block}
          isFloating={true}
          isSelected={periodicTableData[91]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[91]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[91]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[91]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[91]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[91]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[92]?.block}
          isFloating={true}
          isSelected={periodicTableData[92]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[92]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[92]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[92]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[92]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[92]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[93]?.block}
          isFloating={true}
          isSelected={periodicTableData[93]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[93]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[93]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[93]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[93]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[93]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[94]?.block}
          isFloating={true}
          isSelected={periodicTableData[94]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[94]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[94]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[94]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[94]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[94]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <ElementFilled
          className=""
          block={periodicTableData[95]?.block}
          isFloating={true}
          isSelected={periodicTableData[95]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[95]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[95]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[95]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[95]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[95]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[96]?.block}
          isFloating={true}
          isSelected={periodicTableData[96]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[96]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[96]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[96]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[96]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[96]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[97]?.block}
          isFloating={true}
          isSelected={periodicTableData[97]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[97]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[97]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[97]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[97]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[97]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[98]?.block}
          isFloating={true}
          isSelected={periodicTableData[98]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[98]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[98]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[98]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[98]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[98]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[99]?.block}
          isFloating={true}
          isSelected={periodicTableData[99]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[99]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[99]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[99]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[99]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[99]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[100]?.block}
          isFloating={true}
          isSelected={periodicTableData[100]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[100]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[100]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[100]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[100]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[100]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[101]?.block}
          isFloating={true}
          isSelected={periodicTableData[101]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[101]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[101]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[101]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[101]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[101]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[102]?.block}
          isFloating={true}
          isSelected={periodicTableData[102]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[102]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[102]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[102]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[102]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[102]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <div className=""></div>
      </div>
    </div>
  );
};

export default LanthanidesRow;
