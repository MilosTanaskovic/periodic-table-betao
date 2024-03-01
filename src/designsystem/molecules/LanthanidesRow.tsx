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
          block={periodicTableData[57]?.block}
          isFloating={true}
          isSelected={periodicTableData[57]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[57]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[57]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[57]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[57]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[57]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[58]?.block}
          isFloating={true}
          isSelected={periodicTableData[58]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[58]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[58]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[58]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[58]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[58]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[59]?.block}
          isFloating={true}
          isSelected={periodicTableData[59]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[59]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[59]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[59]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[59]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[59]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[60]?.block}
          isFloating={true}
          isSelected={periodicTableData[60]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[60]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[60]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[60]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[60]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[60]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[61]?.block}
          isFloating={true}
          isSelected={periodicTableData[61]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[61]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[61]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[61]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[61]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[61]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[62]?.block}
          isFloating={true}
          isSelected={periodicTableData[62]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[62]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[62]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[62]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[62]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[62]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <ElementFilled
          className=""
          block={periodicTableData[63]?.block}
          isFloating={true}
          isSelected={periodicTableData[63]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[63]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[63]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[63]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[63]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[63]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[64]?.block}
          isFloating={true}
          isSelected={periodicTableData[64]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[64]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[64]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[64]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[64]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[64]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[65]?.block}
          isFloating={true}
          isSelected={periodicTableData[65]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[65]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[65]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[65]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[65]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[65]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[66]?.block}
          isFloating={true}
          isSelected={periodicTableData[66]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[66]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[66]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[66]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[66]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[66]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[67]?.block}
          isFloating={true}
          isSelected={periodicTableData[67]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[67]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[67]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[67]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[67]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[67]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[68]?.block}
          isFloating={true}
          isSelected={periodicTableData[68]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[68]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[68]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[68]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[68]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[68]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[69]?.block}
          isFloating={true}
          isSelected={periodicTableData[69]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[69]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[69]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[69]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[69]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[69]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[70]?.block}
          isFloating={true}
          isSelected={periodicTableData[70]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[70]?.block)}
        >
          <BodyLarge type="span" className=" text-block-f-800">
            {periodicTableData[70]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-f-800">
            {periodicTableData[70]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-f-800">
            {periodicTableData[70]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-f-800">
            {periodicTableData[70]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <div className=""></div>
      </div>
    </div>
  );
};

export default LanthanidesRow;
