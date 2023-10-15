import { useAppSelector } from "@/hooks"

const GetCameraPositionButton = () => {
  const cameraPosition = useAppSelector(state => state.position)

  const showCameraPosition = (): void => {
    console.log(cameraPosition)
  }

  return (
    <button
      className="fixed top-4 right-4 z-10 bg-gray-500 hover:bg-sky-700 rounded-lg p-2 shadow-xl"
      onClick={showCameraPosition}
    >Get Camera Position</button>
  )
}

export default GetCameraPositionButton
