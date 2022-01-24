// const coba1= (id,cb)=>{
//     settimeout(() =>{
//         const nama=id === 1 ? 'aldo' : 'Kwanandar';
//         cb({id,nama});

//     });
// };
// const userSatu= getuser(1)


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Aldo ganteng')
})
app.get('/', (req, res) => {
  res.send('tstld!')
})
app.get('/', (req, res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`its good  ${port}`)
})