import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

//JSX: Combinacion de html y jsx
function Greeting() {
    const name = 'franco'
    const married = true
    //return <h1>{name}</h1>

    // if (married) {
    //     return <h1>Estoy en la escuela</h1>
    // } else {
    //     return <h1>No estoy en la escuela</h1>
    // }
    //Con  operador ternario ? = if
    return <h1>{married ? 'Estoy en la escuela' : 'No estoy en la escuela'}</h1>
}
function Greeting2() {
    const user = {
        firstName: 'franqz',
        lastName: 'Kafka'
    }
    // return <h1>{JSON.stringify(user)}</h1>
    return <div>
        <h1>{user.firstName}</h1>
        <h3>{user.lastName}</h3>
    </div>
}
function Suma() {
    function add(x, y) {
        return x + y;
    }

    return (<div>
        <h1>{add(10, 30)}</h1>
    </div>);
}



root.render(
    <div>
        <Greeting />
        <Greeting2 />
        <Suma />
    </div>
)


