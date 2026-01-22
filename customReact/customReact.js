function createElement(reactElement,container){
    const newElement = document.createElement(reactElement.type);
    newElement.innerHTML = reactElement.Children;

    for(const prop in reactElement.props){
        newElement.setAttribute(prop,reactElement.props.prop);
    }
    container.appendChild(newElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank_'
    },
    Children:'Google link'
}

const container = document.getElementById('root');

createElement(reactElement,container);