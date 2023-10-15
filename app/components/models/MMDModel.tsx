import { LoaderProto, useLoader } from "@react-three/fiber"
import { modelProps } from "."
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js"

const MMDModel = ({ src, position }: modelProps) => {
  const mmd = useLoader(MMDLoader as LoaderProto<typeof MMDLoader>, src)

  return (
    <primitive
      object={mmd}
      dispose={null}
      scale={0.5}
      position={position}
    />
  )
}

export default MMDModel
