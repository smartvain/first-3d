'use client'

import { Provider } from 'react-redux'
import store from './store'
import CanvasWrapper from './components/canvas-wrapper'
import GetCameraPositionButton from './components/get-camera-position-button'

export default function Home() {
  return (
    <Provider store={store}>
      <GetCameraPositionButton />
      <CanvasWrapper />
    </Provider>
  )
}
