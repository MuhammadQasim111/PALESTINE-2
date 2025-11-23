import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedPlanet = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.003;
      atmosphereRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group>
      {/* Core Planet */}
      <Sphere ref={meshRef} args={[2.2, 64, 64]}>
        <MeshDistortMaterial
          color="#4c1d95"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Atmosphere / Clouds Layer */}
      <Sphere ref={atmosphereRef} args={[2.4, 64, 64]}>
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          wireframe={false}
        />
      </Sphere>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#fdf4ff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <AnimatedPlanet />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export const Planet3DWrapper: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Scene />
      </Canvas>
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />
    </div>
  );
};