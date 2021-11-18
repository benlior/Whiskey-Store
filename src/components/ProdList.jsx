import React, { useState } from 'react'
import ProdItem from './ProdItem'

export default function ProdList({prodArr, del}) {
    

    return (
        <div>
            {prodArr.map(prod => <ProdItem del = {del} p={prod} inStoke={Math.random() > 0.4} />)}
        </div>
    )
}
