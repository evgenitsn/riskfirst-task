import React from 'react'
import Routes from './Routes'
import GlobalStyling from './GlobalStyling'

const App: React.FC = () => {
  return (
    <>
      {/* styled-components global styling */}
      <GlobalStyling />
      <Routes />
    </>
  )
}

export default App
