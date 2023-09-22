import React from 'react'
import HeaderApp from './components/HeaderApp'
import HomepageApp from './components/HomepageApp'

const Shell = (): React.ReactElement  => {
  return (
    <div>
      <HeaderApp />
      <HomepageApp />
    </div>
  )
}

export default Shell
