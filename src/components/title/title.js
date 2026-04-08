import "./style.css";
import { getDrawById } from "../../assets/draw/draws.config";

const Title = ({ text, leftDrawId, rightDrawId }) => {
  const LeftDraw = leftDrawId ? getDrawById(leftDrawId) : null;
  const RightDraw = rightDrawId ? getDrawById(rightDrawId) : null;

  return (
    <div className="title">
      {LeftDraw && <LeftDraw id="left-title-draw" />}
      {RightDraw && <RightDraw id="right-title-draw" />}
      <h2>{text}</h2>
    </div>
  );
};

export { Title };
