import React, { Component } from 'react'

import YellowHeading from 'scuderia'

const App = () => {
  console.log(<YellowHeading />)
  return (
    <div>
      <YellowHeading p='15px' as='h2'>
        YellowHeading
      </YellowHeading>
    </div>
  )
}

export default App
