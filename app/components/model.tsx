import { useGLTF } from '@react-three/drei'
import { LoaderProto, PrimitiveProps, Vector3, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js'

type modelProps = {
  position: Vector3
  castShadow?: boolean
}

const enableCastShadow = (gltf: GLTF) => {
  gltf.scene.traverse(node => {
    if ((node as Mesh).isMesh) {
      node.castShadow = true
      node.receiveShadow = true
    }
  })
}

export const GirlModel = ({ position, castShadow = true }: modelProps) => {
  // https://sketchfab.com/3d-models/downloadable-girl-03-009a2895114b4903be1107ebd12b6192
  const gltf = useGLTF('/3dmodels/downloadable_girl_03/scene.gltf')

  if (castShadow) enableCastShadow(gltf)

  return (
    <primitive
      object={gltf.scene}
      scale={0.02}
      position={position}
    />
  )
}

export const CarModel = ({ position, castShadow = true }: modelProps) => {
  // https://sketchfab.com/3d-models/free-gmc-motorhome-reimagined-low-poly-6hiH0iyDqXqtdD9wbqSbyLLhKmz
  const gltf = useGLTF('/3dmodels/free_gmc_motorhome_reimagined_low_poly/scene.gltf')

  if (castShadow) enableCastShadow(gltf)

  return (
    <primitive
      object={gltf.scene}
      scale={1}
      position={position}
    />
  )
}

export const BmwModel = ({ position, castShadow = true }: modelProps) => {
  // https://sketchfab.com/3d-models/bmw-m4csl-b53782a00cc240a191d5d7d005af1423
  const gltf = useGLTF('/3dmodels/bmw_m4csl/scene.gltf')

  if (castShadow) enableCastShadow(gltf)

  return (
    <primitive
      object={gltf.scene}
      scale={1}
      position={position}
    />
  )
}

export const BaalModel = ({ position, castShadow = true }: modelProps) => {
  const mmd = useLoader(MMDLoader as LoaderProto<typeof MMDLoader>, '/3dmodels/Raiden_Boss_MDJSN_edit_v1.1/Raiden Boss_v1.1.pmx')

  return (
    <primitive
      object={mmd}
      dispose={null}
      scale={0.5}
      position={position}
    />
  )
}
