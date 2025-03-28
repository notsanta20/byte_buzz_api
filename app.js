const express = require(`express`);
const path = require(`path`);
const assetPath = path.join(__dirname, "public");
const app = express();
const router = require(`./routes/router`);
const cors = require(`cors`);
require(`dotenv`).config();

app.use(express.static(assetPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(process.env.LOCAL_PORT, () => {
  console.log(`Server started at port ${process.env.LOCAL_PORT}`);
});
