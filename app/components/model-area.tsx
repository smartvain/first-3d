'use strict'

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { useHelper, AccumulativeShadows, RandomizedLight, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import { setPosition } from 'features/camera'
import { useAppDispatch } from 'hooks'
import { BmwModel } from 'components/model'
import Lightformers from 'components/object/light-formers'


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

      <AccumulativeShadows
        position={[0, -1.16, 0]}
        frames={100}
        alphaTest={0.9}
        scale={10}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows>
      
      <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
        <Lightformers />
      </Environment>

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
