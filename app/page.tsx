'use client'

import { Provider } from 'react-redux'
import store from './store'
import CanvasWrapper from './components/CanvasWrapper'
import GetCameraPositionButton from './components/accesaries/GetCameraPositionButton'

export default function Home() {
  return (
    <Provider store={store}>
      <GetCameraPositionButton />
      <CanvasWrapper />
    </Provider>
  )
}
