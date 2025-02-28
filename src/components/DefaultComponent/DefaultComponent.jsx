import HeaderComponents from "../HeaderComponent/HeaderComponents";
import PropTypes from "prop-types";

DefaultComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
function DefaultComponent({ children }) {
  return (
    <div>
      <HeaderComponents />
      {children}
    </div>
  );
}

export default DefaultComponent;
