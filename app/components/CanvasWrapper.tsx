import * as THREE from 'three'
import { StrictMode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CameraRig from './accesaries/CameraRig'
import ModelArea from './ModelArea'

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
            position: [3, 0, 1.8]
          }}
        >
          <OrbitControls makeDefault />

          <Suspense fallback={null}>
            <ModelArea />
          </Suspense>

          <CameraRig />
        </Canvas>
      </StrictMode>
    </div>
  )
}
