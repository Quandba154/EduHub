import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  background-color: #f5f3ea;
  padding: 10px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperHeaderText = styled.span`
  font-size: 18px;
  color: "#fff";
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  gap: 10px;
`;

export const WrapperHeaderTextSmall = styled.span`
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #000;
  font-weight: bold;
`;
