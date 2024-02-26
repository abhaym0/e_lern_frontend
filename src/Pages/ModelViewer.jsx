import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Box } from '@react-three/drei';

// Custom camera component to position the camera
const Camera = () => {
  const { camera } = useThree();
  camera.position.z = 5; // Move the camera back along the z-axis
  return null;
};

const SimpleCube = () => {
  return (
    <Canvas>
      <Camera /> {/* Use custom camera */}
      <ambientLight intensity={0.9} /> {/* Add ambient light */}
      <pointLight position={[10, 10, 10]} /> {/* Add point light */}
      <Box args={[100, 100, 100]} position={[0, 0, 0]} /> {/* Render a simple cube */}
    </Canvas>
  );
};

export default SimpleCube;
