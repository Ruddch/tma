import {useEffect, useState} from 'react'
import Logo from './assets/ava.png'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 5) {
            WebApp.showAlert(`Hello! Ты должен уже ${count} btc`)
        }
    }, [count])

  return (
    <>
      <div className='ava'>
          <img src={Logo} className="logo" alt="Vite logo" />
      </div>
      <h1>Таро аниме бот</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         Гадать
        </button>
        <p>
            Вы должны {count} btc
        </p>
      </div>
    </>
  )
}

export default App
