import { Col, Row, Image, Rate } from "antd";
import imgProduct from "../../assets/auth/figure.png";
import productdetail1 from "../../assets/auth/productdetail1.png";
import productdetail2 from "../../assets/auth/productdetail2.png";
import productdetail3 from "../../assets/auth/productdetail3.png";

import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperStylePriceProduct,
  //   WrapperStylePriceTextProduct,
  //   WrapperStylePriceTextProductValue,
} from "./ProductDetailsComponentStyle";
import { WrapperButtonShare } from "../../components/ButtonInputSearch/ButtonStyle";

function ProductDetailsComponent() {
  return (
    <Row
      style={{
        padding: "16px",
        backgroundColor: "#F5F5F5",
        borderRadius: "14px",
      }}
    >
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "10px" }}
      >
        <Image
          src={imgProduct}
          width={400}
          alt="image product"
          preview="false"
        />
        <Row
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={productdetail1}
              alt="Image small"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={productdetail2}
              alt="Image small"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={productdetail3}
              alt="Image small"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={productdetail3}
              alt="Image small"
              preview="false"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={productdetail3}
              alt="Image small"
              preview="false"
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} className="pl-[10px]">
        <div className="flex row justify-between">
          <div>
            <WrapperStyleNameProduct>Sophie Johnson</WrapperStyleNameProduct>
            <Rate style={{ fontSize: "12px" }} disabled defaultValue={4} />
            <WrapperStyleTextSell> | Đã Học 1000+</WrapperStyleTextSell>
          </div>
          <div>
            <div className="flex gap-3">
              <button
                className={`px-10 py-4 rounded-lg text-xl font-bold border-[2px]`}
              >
                Following
              </button>
              <WrapperButtonShare className="text-xl font-bold">
                Send Message
              </WrapperButtonShare>
            </div>
          </div>
        </div>
        <WrapperStylePriceProduct>
          <div className="flex-1  mt-[20px]">
            <div className="flex row">
              <div className="mr-[30px]">
                <p className="text-gray-600 mt-2 mb-[20px]">
                  <strong>📍 Location:</strong> New York, NY
                </p>
                <p className="text-gray-600 mb-[20px]">
                  <strong>📌 Active Projects:</strong> 6
                </p>
                <p className="text-gray-600">
                  <strong>🗣 Languages:</strong> English, French
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-[20px]">
                  <strong>📅 Member Since:</strong> March 2019
                </p>
                <p className="text-gray-600">
                  <strong>🟢 Last Online:</strong>{" "}
                  <span className="text-green-600">1 hour ago</span>
                </p>
              </div>
            </div>

            <p className="mt-[20px] text-gray-700 text-xl">
              I am a professional copywriter with over five years of experience
              in crafting compelling and results-driven content for businesses
              of all sizes. My expertise lies in creating persuasive, engaging,
              and high-converting copy tailored to specific audiences. Whether
              its website content, blog articles, email marketing campaigns, or
              social media posts, my writing is designed to capture attention,
              build brand awareness, and drive meaningful action. I specialize
              in storytelling that resonates with readers, blending creativity
              with strategic messaging to enhance brand visibility and boost
              conversions. My deep understanding of SEO principles ensures that
              my content is not only engaging but also optimized for search
              engines, helping businesses attract and retain their target
              audience.
            </p>
          </div>
        </WrapperStylePriceProduct>
        <div className="flex row gap-5">
          <WrapperButtonShare
            style={{
              padding: "24px 80px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Chọn Mua
          </WrapperButtonShare>
          <WrapperButtonShare
            style={{
              padding: "24px 40px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#fff",
            }}
          >
            Mua Trước Trả Sau
          </WrapperButtonShare>
        </div>
      </Col>
    </Row>
  );
}

export default ProductDetailsComponent;
