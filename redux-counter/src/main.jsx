
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {provider} from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
 <provider store={store}> 
    <App />
    </provider> 
 
)
