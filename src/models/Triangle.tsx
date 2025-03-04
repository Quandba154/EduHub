import React, { JSX } from "react";
import { Canvas } from "@react-three/fiber";
import { Image, OrbitControls, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Color } from "three";

function Triangle(props: JSX.IntrinsicElements["group"]) {
  const { nodes }: any = useGLTF("/models/tools.glb");

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Triangle.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xd27b95),
          })
        }
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.428}
      />
    </group>
  );
}

export default Triangle;
