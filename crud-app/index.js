const express = require('express');
const app = express();
const itemRoutes = require('./routes/item.routes');

app.use(express.json());

app.use('/items', itemRoutes);

const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});