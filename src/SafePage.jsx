import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useAuthStore } from './hook'

export const SafePage = () => {

 
  return (
    <>
      <Provider store = {store}>
        <AppRouter />
      </Provider>

    </>
  )
}
