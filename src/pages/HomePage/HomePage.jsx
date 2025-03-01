import TypeProduct from "../TypeProduct/TypeProduct";
// import { WrapperTypeProduct } from "./HomePageStyle";
import {
  WrapperTypeProductBox,
  WrapperTypeProductBoxChild,
} from "../TypeProduct/TypeProductStyle";

function HomePage() {
  const arr = [
    {
      name: "Toán Học",
      imgUrl:
        "https://i.pinimg.com/736x/64/b4/42/64b442e7de3551b2e76423a1bb0128c0.jpg",
    },
    {
      name: "Vật Lý",
      imgUrl:
        "https://i.pinimg.com/736x/96/9f/5c/969f5c9583ef31edbca909381f9398e7.jpg",
    },
    {
      name: "Hóa Học",
      imgUrl:
        "https://i.pinimg.com/736x/96/9f/5c/969f5c9583ef31edbca909381f9398e7.jpg",
    },
    {
      name: "Sinh Học",
      imgUrl:
        "https://stories.freepiklabs.com/api/vectors/science/amico/render?color=&background=complete",
    },
    {
      name: "Văn Học",
      imgUrl:
        "https://i.pinimg.com/736x/b6/69/80/b6698095f2507ddf2d8d161b70791cab.jpg",
    },
    {
      name: "Tiếng Anh",
      imgUrl:
        "https://i.pinimg.com/736x/37/b9/ee/37b9ee71b48493a5a8ba99fc63ea3194.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
    {
      name: "Tin học",
      imgUrl:
        "https://i.pinimg.com/736x/92/79/0e/92790ec6f77fa10f0f4a2f601baabb93.jpg",
    },
  ];

  return (
    <div style={{ padding: "0px 60px" }} className="mt-5">
      <WrapperTypeProductBox>
        <WrapperTypeProductBoxChild>
          {arr.map((item) => (
            <TypeProduct
              key={item.name}
              name={item.name}
              imgUrl={item.imgUrl}
            />
          ))}
        </WrapperTypeProductBoxChild>
      </WrapperTypeProductBox>
    </div>
  );
}

export default HomePage;
