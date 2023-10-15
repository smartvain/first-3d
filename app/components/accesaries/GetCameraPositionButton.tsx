import { useAppSelector } from "@/hooks"

export default function GetCameraPositionButton() {
  const cameraPosition = useAppSelector(state => state.position)

  const showCameraPosition = (): void => {
    console.log(cameraPosition)
  }

  return (
    <button
      className="fixed top-4 right-4 z-10 bg-sky-500 hover:bg-sky-700 rounded-lg p-2"
      onClick={showCameraPosition}
    >Get Camera Position</button>
  )
}
