const express = require('express')

const {Router} = express

const router = new Router()

let productos = [
  {
    title: 'Taza matilda',
    price: 500,
    thumbnail:'https://d3ugyf2ht6aenh.cloudfront.net/stores/171/765/products/20210110_1314191-a27b5de1bdfc626cdf16105799436595-1024-1024.jpg',
    id: 1
  },
  {
    title: 'Taza homero',
    price: 500,
    thumbnail:'https://d3ugyf2ht6aenh.cloudfront.net/stores/171/765/products/20210110_1314191-a27b5de1bdfc626cdf16105799436595-1024-1024.jpg',
    id: 2
  },
  {
    title: 'Taza Bart',
    price: 500,
    thumbnail:'https://d3ugyf2ht6aenh.cloudfront.net/stores/171/765/products/20210110_1314191-a27b5de1bdfc626cdf16105799436595-1024-1024.jpg',
    id: 3
  }
]

router.get('/',(req, res)=>{
  res.send(productos)
})

router.get('/:id',(req, res)=>{
  const id = req.params.id
  const found = productos.find(elem=>elem.id==id)
  if(found!=undefined){
    res.send(found)
  }else{
    res.send({error: 'producto no encontrado'})
  }
})

router.post('/',(req, res)=>{
  let {title, price, thumbnail} = req.body
  const newId = productos.length + 1
  let product = {
    title,
    price, 
    thumbnail,
    id: newId
  }
  productos.push(product)
  res.send(product)
})



router.put('/:id', (req,res)=>{
  const id = req.params.id
  const index = productos.findIndex(elem => elem.id == id)
  if(index == -1){
    res.send({error:'objeto no encontrado'})
  }else{
    let {title, price, thumbnail} = req.body
    productos[index].title = title
    productos[index].price = price
    productos[index].thumbnail = thumbnail
  }
  res.send(productos[index])
})

router.delete('/:id', (req, res)=>{
  const id = req.params.id
  const itemElim = productos.filter((elem)=>(elem.id)!==parseInt(id))
  const resto = itemElim.map(ele=>{
    if(ele.id>parseInt(id)){
      ele.id = ele.id - 1
    }
    return ele
  })
  productos = resto

  res.send(productos)
})


module.exports = router