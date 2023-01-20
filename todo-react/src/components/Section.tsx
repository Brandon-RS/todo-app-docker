import React from 'react'

const Section = ({ children }: { children: JSX.Element }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      {children}
    </div>
  )
}
export default Section
