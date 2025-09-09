import React from 'react'
import { Route, Routes } from "react-router-dom"
import { routes } from './links'

export const WebRouter = () => {
  return (
    <Routes>
        {
            routes.map(({path, Component}, index: number) => (
                <Route path={path} element={<Component/>} key={index}/>
            ))
        }
     </Routes>
  )
}
