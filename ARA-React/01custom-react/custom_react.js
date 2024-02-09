//? 1. Creating an element in which we will inject some tags [like 'a', 'div', etc]
const mainContainer = document.querySelector('#root')

//? 2. Populating the reactElement with its properties and types to render it correctly.
//? Like, a tag needs href attribute and target [optional] and text [children]
//? We did it accordingly by creating the keys in reactElement object
const reactElement = {

    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//? 3. Rendring an element to display it for our user.
customRender(reactElement, mainContainer)

//? 4. In the following function, we have to access each of the attribute or properties of what we made 'reactElement' to display.
function customRender(reactElement, container){
    /*
    ! This is a naive way to manipulate the requirement
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute ('href', reactElement.props.href)
    domElement.setAttribute ('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    //! This is an effective way to maintain the 'DOM'

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue 
        domElement.setAttribute (prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

