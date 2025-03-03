import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Row } from "antd";
import { WrapperTypeProduct, WrapperNavbar } from "./TypeProducPageStyle";
import { Pagination } from "antd";

function TypeProductPage() {
  const onChange = () => {
    console.log("klsmlk");
  };
  return (
    <>
      <Row
        style={{ padding: "0 120px", flexWrap: "nowrap", paddingTop: "10px" }}
      >
        <WrapperNavbar span={4}>
          <NavBarComponent></NavBarComponent>
        </WrapperNavbar>
        <Col span={20}>
          <WrapperTypeProduct>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </WrapperTypeProduct>
          <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={100}
            onChange={onChange}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default TypeProductPage;
