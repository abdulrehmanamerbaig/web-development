import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>My App...</h1>
        </div>
    )
}

function Link(){
    return (
        <div>
            <a href="google.com" target='_blank'> Click me to</a>
        </div>
    )
}



const another_element = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement = React.createElement (
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Visit Google !!'
) 


ReactDOM.createRoot(document.getElementById('root')).render(  
    <>
        <App />
        {reactElement}
    </>
    
)
