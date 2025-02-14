import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { MeshPhysicalMaterial } from 'three'

interface FlowingShapeProps {
  position?: [number, number, number]
  color?: string
  reverse?: boolean
}

const TwistedShape = ({
  color = '#4f4fd6',
  reverse = false,
}: {
  color?: string
  reverse?: boolean
}) => {
  const mesh = useRef<THREE.Mesh>(null)
  const geometryRef = useRef<THREE.TorusKnotGeometry>(null)

  // Материал с металлическим блеском и иридисцентным эффектом
  const material = new MeshPhysicalMaterial({
    color,
    metalness: 0.9,
    roughness: 0.05,
    envMapIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    ior: 2,
    reflectivity: 0.9,
    iridescence: 0.5,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [100, 400],
    sheen: 1,
    sheenRoughness: 0.1,
    sheenColor: new THREE.Color('#aa44ff').multiplyScalar(1.2),
    transmission: 0,
  })

  // Добавляем небольшую асимметрию путем случайной деформации вершин
  useEffect(() => {
    if (geometryRef.current) {
      const positions = geometryRef.current.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        // Если координата X положительная, слегка сдвигаем Y и Z
        if (positions[i] > 0) {
          positions[i + 1] += (Math.random() - 0.5) * 0.02
          positions[i + 2] += (Math.random() - 0.5) * 0.02
        }
      }
      geometryRef.current.attributes.position.needsUpdate = true
      geometryRef.current.computeVertexNormals()
    }
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime()
      mesh.current.rotation.x = Math.sin(t * 0.2) * 0.2
      mesh.current.rotation.y = t * (reverse ? -0.3 : 0.3)
      mesh.current.position.y = Math.sin(t * 0.5) * 0.1
    }
  })

  // Вычисляем EdgesGeometry для отрисовки линий (паутина)
  const edgesGeometry = useMemo(() => {
    return geometryRef.current ? new THREE.EdgesGeometry(geometryRef.current) : null
  }, [geometryRef.current])

  return (
    <>
      <mesh ref={mesh} scale={1.2} material={material}>
        {/* Передаем ref для дальнейшей деформации */}
        <torusKnotGeometry
          ref={geometryRef}
          args={[
            0.9,   // радиус "кольца"
            0.2,   // толщина "трубки"
            256,   // количество сегментов
            64,    // количество сегментов по длине
            1,     // p
            2      // q
          ]}
        />
      </mesh>
      {/* Если геометрия готова, добавляем wireframe-оверлей */}
      {edgesGeometry && (
        <lineSegments>
          <primitive object={edgesGeometry} attach="geometry" />
          <lineBasicMaterial attach="material" color="#ffffff" linewidth={1} />
        </lineSegments>
      )}
    </>
  )
}

export const FlowingShape = ({
  position = [0, 0, 0],
  color = '#4f4fd6',
  reverse = false,
}: FlowingShapeProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 70 }}
      style={{
        position: 'absolute',
        top: 0,
        [reverse ? 'right' : 'left']: 0,
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
      }}
    >
      <Environment preset="studio" />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Основное кольцо */}
      <TwistedShape color={color} reverse={reverse} />

      {/* Дополнительные кольца, взаимопереплетенные за счет поворотов */}
      <group>
        {/* Кольцо, повернутое на 90° вокруг оси X */}
        <group rotation={[Math.PI / 2, 0, 0]}>
          <TwistedShape color={color} reverse={reverse} />
        </group>
        {/* Кольцо, повернутое на 90° вокруг оси Y */}
        <group rotation={[0, Math.PI / 2, 0]}>
          <TwistedShape color={color} reverse={reverse} />
        </group>
      </group>

      <Preload all />
    </Canvas>
  )
}
