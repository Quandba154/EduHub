import styled from "styled-components";

export const WrapperProduct = styled.div`
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid black;
  box-shadow: 1px 1px 0px black;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  &:hover {
    box-shadow: 3px 3px 0px black;
  }
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 6px 6px 0px black;
  }
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
  font-weight: 400;
`;

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
`;

export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-weight: 500;
  font-size: 15px;
  margin: 6px 0 4px;
`;

export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  white-space: nowrap;
  font-size: 12px;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
