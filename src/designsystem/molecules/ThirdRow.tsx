import React from "react";
import { PeriodicTableType } from "../../types/periodic-table";
import { BodyLarge, BodyMedium, BodySmall, ElementFilled, SmallTitle } from "../atoms";

interface ThirdRowProps {
  periodicTableData: PeriodicTableType;
};

const ThirdRow: React.FC<ThirdRowProps> = ({ periodicTableData }) => {

  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        
        <ElementFilled className="" block={periodicTableData[10]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[10]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">{periodicTableData[10]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
          {periodicTableData[10]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
          {periodicTableData[10]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled className="" block={periodicTableData[11]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[11]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">{periodicTableData[11]?.symbol}</SmallTitle>
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
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <div className=""> </div>
        <div className=""> </div>
        <div className=""> </div>
        <ElementFilled className="" block={periodicTableData[12]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[12]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[12]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[12]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[12]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled className="" block={periodicTableData[13]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[13]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[13]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[13]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[13]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled className="" block={periodicTableData[14]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[14]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[14]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[14]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[14]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled className="" block={periodicTableData[15]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[15]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[16]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[16]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[16]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled className="" block={periodicTableData[16]?.block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[16]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[16]?.symbol}</SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
          {periodicTableData[16]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
          {periodicTableData[16]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
  
        <ElementFilled block={periodicTableData[17].block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[17]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">{periodicTableData[17]?.symbol}</SmallTitle>
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
