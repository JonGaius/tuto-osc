import React, { FC } from 'react'
import { Footer, Header } from '../../../component'
import { renammeTitlePage } from '../../../../utils/string'

interface MainLayoutProps {
    title?: string,
    children: React.ReactNode
}


const MainLayout:FC<MainLayoutProps> = ({title, children}) => {
  renammeTitlePage(title)
  return (
    <>
        <Header/>
          <main role='main'>
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default MainLayout