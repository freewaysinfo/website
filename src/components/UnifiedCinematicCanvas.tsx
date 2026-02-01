'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ConnectionLines = () => {
  const count = 40;
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const points = [start, end];
      const curve = new THREE.CatmullRomCurve3(points);
      temp.push(curve);
    }
    return temp;
  }, [count]);

  return (
    <group>
      {lines.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 20, 0.01, 8, false]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#3b82f6" : "#ffffff"} transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
};

export const UnifiedCinematicCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AnimatedSphere />
        </Float>
        <ConnectionLines />
      </Canvas>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
};
