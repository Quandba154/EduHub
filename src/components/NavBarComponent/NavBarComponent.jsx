import { Checkbox } from "antd";
import { Rate } from "antd";
import {
  WrapperLableText,
  WrapperTextValue,
  WrapperContent,
  WrapperPriceText,
} from "./NavBarComponentStyle";

function NavBarComponent() {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((op) => {
          return <WrapperTextValue key={op}>{op}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {options.map((op) => (
              <Checkbox key={op.value} value={op.value}>
                {op.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "start":
        return options.map((op) => {
          return (
            <div
              key={op}
              style={{ display: "flex", gap: "4px", alignItems: "center" }}
            >
              <Rate style={{ fontSize: "12px" }} disabled defaultValue={op} />
              <span>{`từ ${op} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((op) => {
          return <WrapperPriceText key={op}>{op}</WrapperPriceText>;
        });

      default:
        return {};
    }
  };
  const subject = ["Toán", "Hoá", "Sinh"];
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <WrapperLableText>NavBarComponent</WrapperLableText>
      <WrapperContent>
        {renderContent("text", subject)}
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}
        {renderContent("start", [3, 4, 5])}
        {renderContent("price", ["dưới 40.000", "trên 50.000"])}
      </WrapperContent>
    </div>
  );
}

export default NavBarComponent;
