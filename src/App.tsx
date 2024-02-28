import "./App.css";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ButtonFilled,
  SmallTitle,
} from "./designsystem/atoms";

export default function App() {
  return (
    <div className="flex gap-2">
      <ButtonFilled className="bg-block-s-500">
        <BodyLarge type="span" className=" text-block-s-800">
          21
        </BodyLarge>
        <SmallTitle className=" text-block-s-800">Be</SmallTitle>
        <BodyMedium type="p" className="text-block-s-800">
          Beryllium
        </BodyMedium>
        <BodySmall type="span" className="text-block-s-800">
          9.0122
        </BodySmall>
      </ButtonFilled>

      <ButtonFilled className="bg-block-d-500">
        <BodyLarge type="span" className=" text-block-d-800">
          21
        </BodyLarge>
        <SmallTitle className=" text-block-d-800">Be</SmallTitle>
        <BodyMedium type="p" className="text-block-d-800">
          Beryllium
        </BodyMedium>
        <BodySmall type="span" className="text-block-d-800">
          9.0122
        </BodySmall>
      </ButtonFilled>

      <ButtonFilled className="bg-block-p-500">
        <BodyLarge type="span" className=" text-block-p-800">
          21
        </BodyLarge>
        <SmallTitle className=" text-block-p-800">Be</SmallTitle>
        <BodyMedium type="p" className="text-block-p-800">
          Beryllium
        </BodyMedium>
        <BodySmall type="span" className="text-block-p-800">
          9.0122
        </BodySmall>
      </ButtonFilled>

      <ButtonFilled className="bg-block-f-500">
        <BodyLarge type="span" className=" text-block-f-800">
          21
        </BodyLarge>
        <SmallTitle className=" text-block-f-800">Be</SmallTitle>
        <BodyMedium type="p" className="text-block-f-800">
          Beryllium
        </BodyMedium>
        <BodySmall type="span" className="text-block-f-800">
          9.0122
        </BodySmall>
      </ButtonFilled>
    </div>
  );
}
