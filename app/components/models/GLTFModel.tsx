import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { modelProps } from "."

const GLTFModel = ({ src, position, scale = 1 }: modelProps) => {
  const gltf = useGLTF(src)

  gltf.scene.traverse(node => {
    if ((node as Mesh).isMesh) {
      node.castShadow = true
      node.receiveShadow = true
    }
  })

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position}
    />
  )
}

export default GLTFModel
