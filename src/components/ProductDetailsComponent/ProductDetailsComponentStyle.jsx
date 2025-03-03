import styled from "styled-components";
import { Col, Image } from "antd";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basics: unset;
`;

export const WrapperStyleNameProduct = styled.h1`
  margin: 0 0 4px;
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: bold;
  line-height: 42px;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperStylePriceProduct = styled.div`
  font-size: 15px;
  border-radius: 4px;
  backgroundcolor: rgb(250, 250, 250);
`;

export const WrapperStylePriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-left: 8px;
  font-weight: 500;
`;

export const WrapperStylePriceTextProductValue = styled.span`
  font-size: 32px;
  line-height: 40px;
  margin-left: 8px;
  font-weight: 200;
  opacity: 0.5;
`;
