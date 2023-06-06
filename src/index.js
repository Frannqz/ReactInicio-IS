import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

//Primer componente
function Greeting() {
    return <div>
        <h1>Hola mundo</h1>
    </div>
}

root.render(
    <div>
        <Greeting />
        <Greeting />
    </div>
)

