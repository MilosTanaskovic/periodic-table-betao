import React from "react";
import { BlockType, PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface SeventhRowProps {
  periodicTableData: PeriodicTableType;
  selectedBlock?: BlockType | null;
  onElementClick: (blockType: BlockType) => void;
}

const SeventhRow: React.FC<SeventhRowProps> = ({
  periodicTableData,
  selectedBlock,
  onElementClick,
}) => {
  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[86]?.block}
          isFloating={true}
          isSelected={periodicTableData[86]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[86]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[86]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[86]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[86]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[86]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[87]?.block}
          isFloating={true}
          isSelected={periodicTableData[87]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[87]?.block)}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[87]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[87]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[87]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[87]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[88]?.block}
          isFloating={true}
          isSelected={periodicTableData[88]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[88]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[88]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[88]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[88]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[88]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[103]?.block}
          isFloating={true}
          isSelected={periodicTableData[103]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[103]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[103]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[103]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[103]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[103]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[104]?.block}
          isFloating={true}
          isSelected={periodicTableData[104]?.block === selectedBlock}
          handleBtnClick={() => onElementClick(periodicTableData[104]?.block)}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[104]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[104]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[104]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[104]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[105]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[105]?.block)}
          isSelected={periodicTableData[105]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[105]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[105]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[105]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[105]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[106]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[106]?.block)}
          isSelected={periodicTableData[106]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[106]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[106]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[106]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[106]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[107]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[107]?.block)}
          isSelected={periodicTableData[107]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[107]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[107]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[107]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[107]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[108]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[108]?.block)}
          isSelected={periodicTableData[108]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[108]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[108]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[108]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[108]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[109]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[109]?.block)}
          isSelected={periodicTableData[109]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[109]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[109]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[109]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[109]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[110]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[110]?.block)}
          isSelected={periodicTableData[110]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[110]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[110]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[110]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[110]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[111]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[111]?.block)}
          isSelected={periodicTableData[111]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[111]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[111]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[111]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[111]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[112]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[112]?.block)}
          isSelected={periodicTableData[112]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[112]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[112]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[112]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[112]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[113]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[113]?.block)}
          isSelected={periodicTableData[113]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[113]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[113]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[113]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[113]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[114]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[114]?.block)}
          isSelected={periodicTableData[114]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[114]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[114]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[114]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[114]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[115]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[115]?.block)}
          isSelected={periodicTableData[115]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[115]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[115]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[115]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[115]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[116]?.block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[116]?.block)}
          isSelected={periodicTableData[116]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[116]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[116]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[116]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[116]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          block={periodicTableData[117].block}
          isFloating={true}
          handleBtnClick={() => onElementClick(periodicTableData[117]?.block)}
          isSelected={periodicTableData[117]?.block === selectedBlock}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[117]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[117]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[117]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[117]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default SeventhRow;
