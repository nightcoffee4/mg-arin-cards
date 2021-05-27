import React from 'react';
import ReactDOM from 'react-dom';


//TODO: Fonksiyon olarak kullanımı 
/*
function App() {
    return <h1>Merhaba</h1>;
}*/

//TODO: Class olarak kullanımı
class App extends React.Component {
    render () {
        return <h1> Merhaba 2</h1>;
    }
}


ReactDOM.render(
    <App />,
   // document.getElementById('root') veya 
   document.querySelector('#root')
);