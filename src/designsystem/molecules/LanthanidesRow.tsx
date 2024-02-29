import React from "react";
import { PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface LanthanidesRowProps {
  periodicTableData: PeriodicTableType;
}

const LanthanidesRow: React.FC<LanthanidesRowProps> = ({ periodicTableData }) => {
  return (
    <div className=" flex mt-5">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

        <ElementFilled
          className=""
          block={periodicTableData[57]?.block}
          isFloating={true}
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
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[63]?.block}
          isFloating={true}
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