import React from 'react'
import HeaderApp from './components/HeaderApp'
import HelloWorld from './components/HelloWorldApp'

const Shell = (): React.ReactElement  => {
  return (
    <div>
      <HeaderApp />
      <HelloWorld />
    </div>
  )
}

export default Shell
