import React from "react";
import { PeriodicTableType } from "../../types/periodic-table";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ElementFilled,
  SmallTitle,
} from "../atoms";

interface SixthRowProps {
  periodicTableData: PeriodicTableType;
}

const SixthRow: React.FC<SixthRowProps> = ({ periodicTableData }) => {
  return (
    <div className=" flex">
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[54]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[54]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[54]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[54]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[54]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[55]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-s-800">
            {periodicTableData[55]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-s-800">
            {periodicTableData[55]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-s-800">
            {periodicTableData[55]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-s-800">
            {periodicTableData[55]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled className="" block={"d"} isFloating={true}>
          <BodyMedium type="p" className="text-block-d-800">
            Lanthanides
          </BodyMedium>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[71]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[71]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[71]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[71]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[71]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[72]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[72]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[72]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[72]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[72]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[73]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[73]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[73]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[73]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[73]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[74]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[74]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[74]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[74]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[74]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[75]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[75]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[75]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[75]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[75]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[76]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[76]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[76]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[76]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[76]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
      <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
        <ElementFilled
          className=""
          block={periodicTableData[77]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[77]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[77]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[77]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[77]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[78]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[78]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[78]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[78]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[78]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[79]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-d-800">
            {periodicTableData[79]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-d-800">
            {periodicTableData[79]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-d-800">
            {periodicTableData[79]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-d-800">
            {periodicTableData[79]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
        <ElementFilled
          className=""
          block={periodicTableData[80]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[80]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[80]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[80]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[80]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[81]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[81]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[81]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[81]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[81]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[82]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[82]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[82]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[82]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[82]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[83]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[83]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[83]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[83]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[83]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled
          className=""
          block={periodicTableData[84]?.block}
          isFloating={true}
        >
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[84]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[84]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[84]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[84]?.atomicWeight}
          </BodySmall>
        </ElementFilled>

        <ElementFilled block={periodicTableData[85].block} isFloating={true}>
          <BodyLarge type="span" className=" text-block-p-800">
            {periodicTableData[85]?.atomicNumber}
          </BodyLarge>
          <SmallTitle className=" text-block-p-800">
            {periodicTableData[85]?.symbol}
          </SmallTitle>
          <BodyMedium type="p" className="text-block-p-800">
            {periodicTableData[85]?.name}
          </BodyMedium>
          <BodySmall type="span" className="text-block-p-800">
            {periodicTableData[85]?.atomicWeight}
          </BodySmall>
        </ElementFilled>
      </div>
    </div>
  );
};

export default SixthRow;
