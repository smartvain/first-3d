'use strict'

import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import { BmwModel } from './model'
import { useAppDispatch } from '@/hooks'
import { setPosition } from '@/features/camera'
import { useThree } from '@react-three/fiber'

export default function ModelArea() {
  const directionalLight = useRef<THREE.DirectionalLight>(null)
  const intensity = 4

  useHelper(
    directionalLight as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper,
    1,
    'red'
  )

  const { camera } = useThree()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPosition(camera.position))
  }, [])

  return (
    <>
      {/* モニター */}
      <Perf position="top-left" />

      {/* 背景 */}
      <color args={['ivory']} attach="background" />

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

      <group>
        {/* <GirlModel position={[0, 0.4, 0]} /> */}
        {/* <CarModel position={[0, 0.4, 0]} /> */}
        {/* <BaalModel position={[0, 0.4, 0]} /> */}
        <BmwModel position={[0, -1, 0]} />

        {/* 平面 */}
        <mesh
          receiveShadow
          rotation-x={-Math.PI * 0.5}
          scale={20}
          position={[0, -1, 0]}
        >
          <planeGeometry />
          <meshStandardMaterial color="gray" />
        </mesh>
      </group>
    </>
  )
}
