import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { useHelper, AccumulativeShadows, RandomizedLight, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { setPosition } from 'features/camera'
import { useAppDispatch } from 'hooks'
import Lightformers from '@/components/accesaries/LightFormers'
import GLTFModel from './models/GLTFModel'

export default function ModelArea() {
  const [degraded, degrade] = useState()
  const intensity = 4

  const directionalLight = useRef<THREE.DirectionalLight>(null)
  useHelper(
    directionalLight as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper,
    1,
    'red'
  )

  const { camera } = useThree()
  const dispatch = useAppDispatch()
  dispatch(setPosition(camera.position))

  return (
    <>
      {/* モニター */}
      <Perf position="top-left" />

      {/* 背景 */}
      <color
        args={['ivory']}
        attach="background"
      />

      {/* 環境光 */}
      <ambientLight intensity={intensity} />

      {/* 平行光 */}
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[3, 3, 8]}
        intensity={intensity}
        shadow-mapSize={[1024, 1024]}
      />

      <AccumulativeShadows
        position={[0, -1.16, 0]}
        frames={200}
        alphaTest={0.8}
        scale={8}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows>

      <Environment
        frames={degraded ? 1 : Infinity}
        resolution={256}
        background
        blur={1}
      >
        <Lightformers />
      </Environment>

      <GLTFModel
        src="/3dmodels/bmw_m4csl/scene.gltf"
        position={[0, -1.15, 0]}
      />
    </>
  )
}
