import styled from "styled-components";

// Wrapper for the whole box
export const WrapperTypeProductBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem;
  overflow: hidden;

  @media (min-width: 640px) {
    padding-top: 3.5rem; /* sm:pt-12 */
  }

  @media (min-width: 768px) {
    padding-top: 3.5rem; /* md:pt-14 */
  }

  @media (min-width: 1024px) {
    padding-top: 2rem; /* lg:pt-28 */
  }
`;

// Container holding the items
export const WrapperTypeProductBoxChild = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  animation: infinite-scroll 10s linear infinite; /* animate-infinite-scroll */
  width: 100; /* Chiều rộng của container tự động thay đổi theo tổng chiều rộng của các item */

  /* Keyframes for infinite scroll */
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-50%); /* Đi đến 50% khoảng cách */
    }
    100% {
      transform: translateX(-100%); /* Di chuyển hết ra ngoài */
    }
  }

  &:hover {
    animation-play-state: paused; /* Dừng khi hover */
  }
`;

export const WrapperTypeProductBoxChildItem = styled.div`
  flex-shrink: 0; /* Đảm bảo mỗi item không bị thu nhỏ */
  margin-left: 0.5rem; /* Giảm khoảng cách giữa các item */
  margin-right: 0.5rem; /* Giảm khoảng cách giữa các item */
  display: inline-block;
  transition-duration: 150ms; /* Thời gian chuyển tiếp mượt mà */
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 2rem;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  width: 200px;
  justify-content: center;
  align-items: center;
  img {
    max-width: 60%; /* Kích thước ảnh nhỏ */
    height: auto; /* Đảm bảo ảnh không bị biến dạng */
    transition: transform 0.3s ease; /* Thêm hiệu ứng chuyển đổi khi hover */
  }

  &:hover {
    transform: scale(1.1); /* Lồi lên khi hover */
  }
`;

// Wrapper for grouping the items
export const WrapperTypeProductBoxChildInner = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
`;
