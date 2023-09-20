import * as THREE from 'three'
import { StrictMode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import ModelArea from './model-area'

export default function CanvasWrapper () {
  return (
    <div className="w-full h-screen">
      <StrictMode>
        <Canvas
          flat
          shadows
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding
          }}
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [3, 0.5, -3]
          }}
        >
          <Sky distance={450000} sunPosition={[1, 1, 1]} />

          <OrbitControls makeDefault />

          <Suspense fallback={null}>
            <ModelArea />
          </Suspense>
        </Canvas>
      </StrictMode>
    </div>
  )
}
