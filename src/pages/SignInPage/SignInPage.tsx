import React, { JSX, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Image, OrbitControls, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Color } from "three";
import RuleModel from "../../models/RuleModel";
import TapeModel from "../../models/TapeModel";
import Triangle from "../../models/Triangle";
import StickyNote from "../../models/StickyNote";
import Pencil from "../../models/Pencil";
import CoffeeModel from "../../models/CoffeeModel";
import BookModel from "../../models/BookModel";
import ModelHourseDance from "../../models/ModelHourseDance";

function App() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Canvas style={{ width: "100%", height: "100%" }}>
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          {/* <RuleModel rotation={[0.5, 0, 0]} scale={0.01} /> */}
          {/* <TapeModel rotation={[0.4, -0.5, -0.3]} scale={0.03} /> */}
          {/* <Triangle rotation={[0.4, -0.5, -0.3]} scale={0.03} /> */}
          {/* <StickyNote rotation={[0.4, -0.5, -0.3]} scale={0.03} /> */}
          {/* <Pencil rotation={[0.4, -0.5, -0.3]} scale={0.03} /> */}
          {/* <CoffeeModel  rotation={[0.4, -0.5, -0.3]} scale={0.03}/> */}
          <BookModel rotation={[0.5, 0, 0]} scale={0.01} />

          <OrbitControls />

          <Suspense fallback={null}>
            <ModelHourseDance
              position={[0, -3, 0]}
              scale={4.5}
              // rotation={[-0.3, 0.5, -0.03]}
              // rotation={[-0.2, 0.3, 0]}
              castShadow
              receiveShadow
            />
          </Suspense>
        </Canvas>

        <img
          src="../../school-bag.svg"
          alt="Mô tả ảnh"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100px",
            height: "100px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
