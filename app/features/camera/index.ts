import { Vector3 } from '@react-three/fiber'
import { createSlice } from '@reduxjs/toolkit'
import * as THREE from 'three'

const initialState = {
  position: new THREE.Vector3(0, 0, 0)
}

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setPosition: (state, actions: { type: string, payload: Vector3 }) => {
      (state.position as Vector3) = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosition } = cameraSlice.actions

export default cameraSlice.reducer
