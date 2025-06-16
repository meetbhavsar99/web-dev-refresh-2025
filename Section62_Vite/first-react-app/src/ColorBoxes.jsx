import ColorBox from "./ColorBox";

export default function ColorBoxes({ colors }) {
  return (
    <div className="ColorBoxes">
      <div style={{ display: "flex" }}>
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
      <div style={{ display: "flex" }}>
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
      <div style={{ display: "flex" }}>
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
      <div style={{ display: "flex" }}>
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
      <div style={{ display: "flex" }}>
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
        <ColorBox colors={colors} />
      </div>
    </div>
  );
}
