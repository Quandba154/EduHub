import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function ButtonInputSearch(props) {
  const { size, placeholder, textButton, bordered = false } = props;
  return (
    <div
      className="border-[2px] rounded-[12px] border-black"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        className="bg-white  border border-gray-400 "
      />
      <Button
        size={size}
        style={{
          border: bordered ? "1px solid #ccc" : "none",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
        className="bg-[#FF9966] !rounded-r-[10px] shadow-none font-medium transition-colors hover:bg-[#FF7844]"
        icon={
          <SearchOutlined className="text-[#000]  group-hover:text-[#FF7844]" />
        }
      >
        {textButton}
      </Button>
    </div>
  );
}

ButtonInputSearch.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  textButton: PropTypes.string,
  bordered: PropTypes.bool,
};

export default ButtonInputSearch;

//bg-[#FF9966] rounded-l-[1px] shadow-none font-medium transition-colors  hover:bg-[#FF7844]
//
