import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from "react-bootstrap"
const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <h1>Welcome To ProShop</h1>
      </Container>
    </main>
    <Footer />
    </>
  )
}

export default App