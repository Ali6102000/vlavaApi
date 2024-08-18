const express = require('express')
const cors = require('cors')
const xlsx=require('xlsx');
const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());

let wb=xlsx.readFile("client.xlsx");
//read services sheet
let ws1=wb.Sheets["Services"];
//read aboutus sheet
let ws2=wb.Sheets["aboutUs"];
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/services', function (req, res) {
    let services=xlsx.utils.sheet_to_json(ws1);
    res.send(services)
  })

  app.get('/aboutUs', function (req, res) {
    let aboutUs=xlsx.utils.sheet_to_json(ws2);
    res.send(aboutUs)
  })
  
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });