const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')






// 引入自己的中间件
const router = require('./03router.js')
app.use(router)

// 把中间件注册到app上
app.use(getLog)








app.listen(3000,()=>{
  console.log('http://127.0.0.1:3000')
})


function getLog(req,res,next){
  const data = `${new Date().toLocaleString()} ${req.method} ${req.url}`

  fs.appendFile(path.join(__dirname,'/views/03txt.txt'),data,(err)=>{
      if(!err) return console.log('写入日志成功')
  })

  next()
  
}