const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
/* const infos = {
  "productName": "SmarTV",
  "infos": {
    "saleDate": "19/02/2022",
    "warrantyPeriod": 3
  }
} */

app.use("/sales", require('./routes/sales'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
