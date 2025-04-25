'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Raindrops({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        Math.random() * 20 - 10,  // x
        Math.random() * 20,       // y
        Math.random() * 20 - 10   // z
      );
    }
    return new Float32Array(pos);
  }, [count]);

  const colors = useMemo(() => {
    const cols = [];
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      color.setHSL(0.35, 1, 0.5 + Math.random() * 0.5);
      cols.push(color.r, color.g, color.b);
    }
    return new Float32Array(cols);
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time / 4) / 8;
      mesh.current.rotation.y = Math.sin(time / 2) / 8;
      const positions = mesh.current.geometry.attributes.position.array;
      if (positions instanceof Float32Array) {
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] -= 0.05;
          if (positions[i] < -10) {
            positions[i] = 10;
          }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function RaindropScene() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <color attach="background" args={['transparent']} />
        <Float
          speed={1}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Raindrops />
        </Float>
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}