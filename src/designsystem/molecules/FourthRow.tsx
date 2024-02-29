import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface FourthRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const FourthRow: React.FC<FourthRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[18]?.block}
          isFloating={true}
          isSelected={periodicTableData[18]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[18]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[18]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[18]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[18]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[18]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[19]?.block}
          isFloating={true}
          isSelected={periodicTableData[19]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[19]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[19]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[19]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[19]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[19]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[20]?.block}
          isFloating={true}
          isSelected={periodicTableData[20]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[20]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[20]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[20]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[20]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[20]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[21]?.block}
          isFloating={true}
          isSelected={periodicTableData[21]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[21]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[21]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[21]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[21]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[21]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[22]?.block}
          isFloating={true}
          isSelected={periodicTableData[22]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[22]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[22]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[22]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[22]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[22]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[23]?.block}
          isFloating={true}
          isSelected={periodicTableData[23]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[23]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[23]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[23]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[23]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[23]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[24]?.block}
          isFloating={true}
          isSelected={periodicTableData[24]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[24]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[24]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[24]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[24]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[24]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[25]?.block}
          isFloating={true}
          isSelected={periodicTableData[25]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[25]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[25]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[25]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[25]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[25]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[26]?.block}
          isFloating={true}
          isSelected={periodicTableData[26]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[26]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[26]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[26]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[26]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[26]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[27]?.block}
          isFloating={true}
          isSelected={periodicTableData[27]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[27]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[27]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[27]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[27]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[27]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[28]?.block}
          isFloating={true}
          isSelected={periodicTableData[28]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[28]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[28]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[28]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[28]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[28]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[29]?.block}
          isFloating={true}
          isSelected={periodicTableData[29]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[29]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[29]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[29]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[29]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[29]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[30]?.block}
          isFloating={true}
          isSelected={periodicTableData[30]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[30]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[30]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[30]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[30]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[30]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[31]?.block}
          isFloating={true}
          isSelected={periodicTableData[31]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[31]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[31]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[31]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[31]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[31]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[32]?.block}
          isFloating={true}
          isSelected={periodicTableData[32]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[32]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[32]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[32]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[32]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[32]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[33]?.block}
          isFloating={true}
          isSelected={periodicTableData[33]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[33]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[33]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[33]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[33]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[33]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[34]?.block}
          isFloating={true}
          isSelected={periodicTableData[34]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[34]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[34]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[34]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[34]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[34]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          block={periodicTableData[35].block}
          isFloating={true}
          isSelected={periodicTableData[35]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[35]?.block)}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[35]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[35]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[35]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[35]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default FourthRow;
