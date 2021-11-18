import React, { useState } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import ProdList from './components/ProdList'



export default function App() {

  const [prodArr, setProdArr] = useState([
    {
      id: +1,
      name: "Black Label",
      price: "200₪",
      img: "https://www.dutyfree.co.il/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/7/47930__47932.jpg"
    },
    {
      id: +2,
      name: "chivas",
      price: "150₪",
      img: "https://www.luxuryspirits.es/668-tm_thickbox_default/whisky-chivas-regal-12-years-700-ml.jpg"
    },
    {
      id: +4,
      name: "Jack Daniels",
      price: "124₪",
      img: "https://www.au-plaisir-de-vivre.be/14319-large_default/jack-daniel-s-bottled-in-bond-50-1l-.jpg"
    },
    {
      id: +5,
      name: "Glenfiddich",
      price: "349₪",
      img: "https://www.liquorbar.sg/images/2019/products/whisky/glenfiddich-18.webp"
    },
    {
      id: +6,
      name: "Blue Label",
      price: "500₪",
      img: "https://www.liquorworld.com.au/wp-content/uploads/2016/10/johnnie-walker-tiffany-blue-label.jpg"
    }

  ])

  const del = (id) => {
    const filteredArr = prodArr.filter(prd => prd.id !== id)
    setProdArr(filteredArr)
  }

  const add = (id, name, img, price) => {
    setProdArr([...prodArr, { id, name, img, price }])

  }

  return (
    <section>

      <header>
        <Header add={add} />
      </header>


      <aside>
        <Cart />
      </aside>


      <main>
        <ProdList prodArr={prodArr} del={del} />
      </main>

    </section>
  )
}

