import { configureStore } from "@reduxjs/toolkit"
import cameraReducer from '@/features/camera'

const store = configureStore({
  reducer: cameraReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['camera/setPosition'],
        ignoredPaths: ['position']
      }
    })
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
