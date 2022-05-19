import React, { FC } from 'react'
import Header from './Header'


const Layout: FC = ({children}) => {
  return (
    <>
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <Header/>
    </header>
    <main>{children}</main>
    <footer></footer>
    </>
  )
}

export default Layout