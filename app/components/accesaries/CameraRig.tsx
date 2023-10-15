import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function CameraRig({ vec3 = new THREE.Vector3() }) {

  return useFrame((state) => {
    const time = state.clock.elapsedTime
    state.camera.position.lerp(vec3.set(4 + Math.sin(time / 5), 0, 2 + Math.cos(time / 5) / 2), 0.05)
    state.camera.lookAt(0, -0.5, 0)
  })
}
