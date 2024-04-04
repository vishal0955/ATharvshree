const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/Db");
const Cloudinary = require("./config/Cloudinary");
const fileUpload = require("express-fileupload");
const routes = require("./Routes/route");

database.dbConnect();
Cloudinary.cloudinaryConnect();


app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

Cloudinary.cloudinaryConnect();

app.use("/api/v1", routes)


app.listen(8080, () => {
    console.log("Server is running at port 8080");
})