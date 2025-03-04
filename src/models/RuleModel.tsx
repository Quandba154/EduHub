import React, { JSX } from "react";
import { Canvas } from "@react-three/fiber";
import { Image, OrbitControls, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Color } from "three";

function RuleModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes }: any = useGLTF("/models/tools.glb");

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rule.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0x889fc6),
          })
        }
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={1}
      />
    </group>
  );
}

export default RuleModel;
