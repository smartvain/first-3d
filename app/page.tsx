'use client'

import { Provider } from 'react-redux'
import store from './store'
import CanvasWrapper from './components/CanvasWrapper'
import GetCameraPositionButton from './components/accesaries/GetCameraPositionButton'
import { StrictMode } from 'react'

export default function Home() {
  return (
    <StrictMode>
      <Provider store={store}>
        <GetCameraPositionButton />
        <CanvasWrapper />
      </Provider>
    </StrictMode>
  )
}
