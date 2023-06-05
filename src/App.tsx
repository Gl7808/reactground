import React from 'react';
import './App.css';
import itemlist from "./components/ItemList";
import ItemList from "./components/ItemList";

function App() {
    const items = [
        {id:0, name: 'Камень бессмертных', price: 30000},
        {id:1, name: 'Идеальный приз', price: 20000},
        {id:2, name: 'Отличный приз', price: 5000000},
        {id:3, name: 'Оружие знак луны', price: 15000000}
    ]
  return (
    <div className="App">
        <ItemList title="Заголовок" list={items}/>
    </div>
  );
}

export default App;
