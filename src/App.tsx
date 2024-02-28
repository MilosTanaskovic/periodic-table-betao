import "./App.css";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  SmallTitle,
} from "./designsystem/atoms";

export default function App() {
  return (
    <div>
      <BodyLarge type="span" className=" text-block-s-500">
        21
      </BodyLarge>
      <SmallTitle className=" text-block-s-500">Be</SmallTitle>
      <BodyMedium type="p" className="text-block-s-500">
        Beryllium
      </BodyMedium>
      <BodySmall type="span" className="text-block-s-500">
        9.0122
      </BodySmall>
    </div>
  );
}
