const app = require("./server");

import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListen = () => {
  console.log(`CONNECTION => PORT number is ${PORT}`);
};

app.listen(PORT, handleListen);