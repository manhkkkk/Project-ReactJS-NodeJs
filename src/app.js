import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

import productRoute from './routers/product';
import categoryRoute from './routers/category';
import userRoute from './routers/Auth';
import searchRouter from './routers/search'
import Product from './models/product';

const app = express();
const swaggerJSDocs = YAML.load('./api.yaml');
//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api", productRoute);
app.use("/api", categoryRoute);
app.use("/api", userRoute);
app.use("/api", searchRouter)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))
// cách chỉ kích thước chữ cách xa nhau
//connection db
mongoose.connect("mongodb://localhost:27017/demo")
	.then(() => console.log("Ket noi DB thanh cong"))
	.catch(error => console.log(error))

// Bước 3: lắng nghe cổng thực thi connect
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log("Ban dang chay cong ", PORT);
})