import './App.css';
import React, {useState} from 'react'
import Menu from './component/Menu/menu';
import Products from './component/Products/products';
import data from './component/data/products (2).json'

function App() {
  const [input, setInput] = useState('')
  const [product, setProduct] = useState(data)

  const categoryClick=(e)=>{
    const category=data.filter(elem=> elem.category===e)
    const newArr=[...category]
    setProduct(newArr)
  }
  const searchClick=()=>{
    const search = data.filter(elem=>{
      return elem.title.toLocaleLowerCase().indexOf(input.toLocaleLowerCase())>-1
    })
    const newArr =[...search]
    setProduct(newArr)
  }

  return (
    <div>
       <Menu
       input={input}
       setInput={setInput}
       searchClick={searchClick}
       categoryClick={categoryClick}
       />
       <Products
       product={product}
       />
    </div>
  );
}

export default App;
