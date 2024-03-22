import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'

import { Pokedex } from './components/Pokedex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>,
)
