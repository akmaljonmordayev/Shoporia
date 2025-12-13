import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Container from '../Container/Container'

function LayOut ({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  )
}

export default LayOut
