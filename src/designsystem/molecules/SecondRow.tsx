import React from "react";
import { PeriodicTableType } from "../../types/periodic-table";
import { BodyLarge, BodyMedium, BodySmall, ElementFilled, SmallTitle } from "../atoms";

interface SecondRowProps {
  periodicTableData: PeriodicTableType;
};

const SecondRow: React.FC<SecondRowProps> = ({ periodicTableData }) => {
  console.log("color", periodicTableData[5]?.block)
  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        {/* secound row */}
        <ElementFilled className="" block={periodicTableData[2]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[2]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">{periodicTableData[2]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
          {periodicTableData[2]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
          {periodicTableData[2]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[3]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[3]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">{periodicTableData[3]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
          {periodicTableData[3]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
          {periodicTableData[3]?.atomicWeight}
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
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9 ">
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <ElementFilled className="" block={periodicTableData[4]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[4]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[4]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[4]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[4]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[5]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[5]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[5]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[5]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[5]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[6]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[6]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[6]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[6]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[6]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[7]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[7]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[7]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[7]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[7]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[8]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[8]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[8]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[8]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[8]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
  
        <ElementFilled block={periodicTableData[9].block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[9]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[9]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[9]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[9]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default SecondRow;
