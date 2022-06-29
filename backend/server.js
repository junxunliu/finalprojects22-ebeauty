import express from 'express';
import profiles from './data/profiles.js';
import colors from 'colors';
import errorHandler from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// import apis here
import posts from './routes/postRoute.js';
import providers from './routes/providerRoute.js';
import taskproviderRoute from './routes/taskproviderRoute.js';
import imageRoute from './routes/imageRoute.js';


import cors from "cors";
import path from 'path';
import {fileURLToPath} from 'url';

// used on get the .env file
dotenv.config();

// set up PORT
const port = (process.env.PORT) || 5000;

// connect the database here
connectDB();

const app = express();

// to get post request from frontend
app.use(cors());

// to retrieve data from postman to be not undefined.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use the routes here
app.use('/api/posts', posts);
app.use('/api/providers', providers);
app.use('/api/taskproviders', taskproviderRoute);

// upload image test here
app.use("/file", imageRoute);


// take frontend content (static asset) to backend. but if you modified frontend, then it needs to re-run npm run build in frontend folder everytime.
// thus used for deployment in future. if uncomment below, just visit port:500 would show content of port:3000
/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
);*/

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started under ${process.env.NODE_ENV} on port ${port}`.yellow.bold);
});
