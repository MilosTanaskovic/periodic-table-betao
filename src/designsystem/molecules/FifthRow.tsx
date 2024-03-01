import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface FifthRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const FifthRow: React.FC<FifthRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex gap-1 md:gap-2">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <ElementFilled
          className=""
          block={periodicTableData[36]?.block}
          isFloating={true}
          isSelected={periodicTableData[36]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[36]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[18]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[36]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[36]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[36]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[37]?.block}
          isFloating={true}
          isSelected={periodicTableData[37]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[37]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[37]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[37]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[37]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[37]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[38]?.block}
          isFloating={true}
          isSelected={periodicTableData[38]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[38]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[38]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[38]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[38]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[38]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[39]?.block}
          isFloating={true}
          isSelected={periodicTableData[39]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[39]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[39]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[39]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[39]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[39]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[40]?.block}
          isFloating={true}
          isSelected={periodicTableData[40]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[40]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[40]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[40]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[40]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[40]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[41]?.block}
          isFloating={true}
          isSelected={periodicTableData[41]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[41]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[41]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[41]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[41]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[41]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[42]?.block}
          isFloating={true}
          isSelected={periodicTableData[42]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[42]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[42]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[42]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[42]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[42]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[43]?.block}
          isFloating={true}
          isSelected={periodicTableData[43]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[43]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[43]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[43]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[43]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[43]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[44]?.block}
          isFloating={true}
          isSelected={periodicTableData[44]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[44]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[44]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[44]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[44]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[44]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 gap-2">
        <ElementFilled
          className=""
          block={periodicTableData[45]?.block}
          isFloating={true}
          isSelected={periodicTableData[45]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[45]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[45]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[45]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[45]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[45]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[46]?.block}
          isFloating={true}
          isSelected={periodicTableData[46]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[46]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[46]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[46]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[46]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[46]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[47]?.block}
          isFloating={true}
          isSelected={periodicTableData[47]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[47]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[47]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[47]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[47]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[47]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[48]?.block}
          isFloating={true}
          isSelected={periodicTableData[48]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[48]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[48]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[48]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[48]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[48]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[49]?.block}
          isFloating={true}
          isSelected={periodicTableData[49]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[49]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[49]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[49]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[49]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[49]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[50]?.block}
          isFloating={true}
          isSelected={periodicTableData[50]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[50]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[50]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[50]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[50]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[50]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[51]?.block}
          isFloating={true}
          isSelected={periodicTableData[51]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[51]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[51]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[51]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[51]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[51]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[52]?.block}
          isFloating={true}
          isSelected={periodicTableData[52]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[52]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[52]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[52]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[52]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[52]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          block={periodicTableData[53].block}
          isFloating={true}
          isSelected={periodicTableData[53]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[53]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[53]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[53]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[53]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[53]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default FifthRow;
