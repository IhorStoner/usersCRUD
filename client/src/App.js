import React from 'react'
import '../node_modules/semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import Routes from './Routes'
import { Container } from "semantic-ui-react"
import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import createStore from './redux/createStore'

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <Container className='page'>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Container>
    </Provider>
  )
}
