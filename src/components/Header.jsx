import React, { useState } from 'react'

export default function Header({add}) {
    
    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[img, setImg] = useState("")
    const[price, setPrice] = useState("")
    
    
    return (
        <div>
           <h1>Alcohol Supermarket</h1>
           <input type="text" placeholder ="id" onChange = {e =>setId(e.target.value)}/>
           <input type="text" placeholder ="img" onChange = {e =>setImg(e.target.value)}/>
           <input type="text" placeholder ="price" onChange = {e =>setPrice(e.target.value)}/>
           <input type="text" placeholder ="name" onChange = {e =>setName(e.target.value)}/>
           <button onClick = {() => add(id,name,img,price)}>Add</button>
        </div>
        
    )
}
