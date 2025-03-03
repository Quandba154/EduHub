import PropTypes from "prop-types";
import { WrapperTypeProductBoxChildItem } from "./TypeProductStyle";

TypeProduct.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
};

function TypeProduct(props) {
  const { name, imgUrl } = props;
  return (
    <WrapperTypeProductBoxChildItem>
      <img src={imgUrl} className="rounded-[20px]" alt="math"></img>
      <span className="ml-[22px]">{name}</span>
    </WrapperTypeProductBoxChildItem>
  );
}

export default TypeProduct;
