import React from 'react'
import './menu.css'
import categoryList from '../data/category (2)'


 const Menu = (props) => {
  const {input, setInput, searchClick, categoryClick}=props
  
  return (
    <div className='container'>
       <div className='box'>ProMarket</div>
       <div className='box'>Главная</div>
       <div className='box'>Скидки</div>
       <div className='box'>
        <select onChange={(e)=>categoryClick(e.target.value)} name="" id="">
            <option value="">Категория</option>
            {categoryList.map((item)=>{
                return(
                    <option >{item}</option>
                )
            })}

        </select>
       </div>
      
       <input value={input} onChange={(e)=>setInput(e.target.value)} className='box' placeholder='что ищете?' type="text" />
     <button onClick={searchClick} className='box'> search</button>
   
                   
     
    </div>
  )
}


export default Menu ;