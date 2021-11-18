import React from 'react'



export default function ProdItem({p, inStoke,del}) {
    return (
        <div>
            <h2>{p.name}</h2>
            <h1>{p.price}</h1>
            <img src={p.img}/>
            <p>in stoke: {inStoke? "Yes" :"No" }</p>
            <button onClick ={() => del(p.id)}>x</button>
        </div>
    )
}
