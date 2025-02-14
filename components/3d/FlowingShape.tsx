import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FlowingShapeProps {
  position: [number, number, number]
  color: string
  reverse?: boolean
}

const Shape = ({ color, reverse = false }: { color: string, reverse?: boolean }) => {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * (reverse ? -0.2 : 0.2)
      mesh.current.rotation.y = state.clock.getElapsedTime() * (reverse ? -0.3 : 0.3)
    }
  })

  return (
    <mesh ref={mesh} scale={1.5}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.5}
        radius={1}
      />
    </mesh>
  )
}

export const FlowingShape = ({ position, color, reverse }: FlowingShapeProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'absolute',
        top: 0,
        [reverse ? 'right' : 'left']: 0,
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Shape color={color} reverse={reverse} />
    </Canvas>
  )
} 