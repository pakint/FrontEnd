const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(zhongjianjian)

app.get('/',(req,res)=>{
  // getlog(req,res)
  res.send('<h1>这是根目录</h1>')
})

app.get('/index.html',(req,res)=>{
  res.send('<h1>这是首页</h1>')

})


app.post('/api/postinfo',(req,res)=>{
  // getlog(req,res)

  res.send('这是一个post请求')
})


app.listen(3000,()=>{
  console.log('http://127.0.0.1:3000')
})




// 自己定义一个中间件来处理写入日志
// 每当请求来了之后先进入中间件处理

function zhongjianjian(req,res,next){
  const codeStr = `请求时间： ${new Date().toLocaleString()}请求方式： ${req.method}请求地址：${req.url}\n`
  fs.appendFile(path.join(__dirname,'./views/1.txt'),codeStr,(err)=>{
    if(err) return console.log('写入文件失败'+err.message)
    console.log('写入成功')
  })
  
  // res.send('ok')

  next()
}