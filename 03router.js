const express = require('express')

const router = express.Router()

router.get('/index.html',(req,res)=>{
  res.send('<h1>这是首页</h1>')
})

router.get('/about.html',(req,res)=>{
  res.send('<h1>这是关于</h1>')
})
router.get('/select.html',(req,res)=>{
  res.send('<h1>这是列表</h1>')
})



module.exports = router
