
const express = require('express')
const router = express.Router()




const person = {
  name:'zs',
  age:18,
  gender:'男',
  hobby:['打球','打篮球','踢足球']
}

const xf = {
  name:'xf',
  age:18,
  gender:'男',
  hobby:['打球1121','打篮2112球','121踢足球']
}

const xiaoganggang = {
  name:'ls',
  age:18,
  gender:'男',
  hobby:['打1111球','打12121212篮球','踢足sddsd球']
}


router.get('/',(req,res)=>{
  //  res.sendFile(path.join(__dirname,'./views/index.html'))
  res.render('index.ejs',person)
})

router.get('/xf',(req,res)=>{
  res.render('xf.ejs',xf)
})

router.get('/xiaoganggang',(req,res)=>{
  res.render('xiaoganggang.ejs',xiaoganggang)
})


module.exports = router
