const dotenv = require("dotenv");
const app = require("./server");

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListen = () => {
  console.log(`CONNECTION => PORT number is ${PORT}`);
};

app.listen(PORT, handleListen);