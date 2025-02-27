"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, -0.5, 0]}
    />
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      Loading..
    </div>
  );
}

export default function DesktopModel() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        {/* Add proper camera positioning */}
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />

        {/* Add proper lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        {/* Add environment for better lighting and reflections */}
        <Environment preset="studio" />

        {/* Wrap the model in Suspense for loading handling */}
        <Suspense fallback={<LoadingFallback />}>
          <Model />
        </Suspense>

        {/* Add proper controls */}
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
