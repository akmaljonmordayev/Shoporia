import React from 'react'
import CartItem from '../../components/landingCart/landingCart'
function Home () {
  return (
    <>
      <div>Home</div>
      <CartItem
        title='MacBook Pro M2 2022'
        color='Black'
        initialCount={1}
        delivery={true}
        guarantee={true}
        price='$433.00'
        image='/images/macbook.png'
      />
    </>
  )
}

export default Home
