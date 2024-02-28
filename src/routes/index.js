import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { config } from '../public/config'

const RouterProviders = () => {
  return (
    <Routes>
        {
            config.map(({element,path,Layout},idx) => (
               <Route key={idx} path={path} element={<Layout>{element}</Layout>} />
            ))
        }
    </Routes>
  )
}

export default RouterProviders