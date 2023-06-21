import mongoose from "mongoose";
import app from "./app";

let PORT = process.env.PORT ?? 5000;
let url =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URL
    : process.env.MONGO_DEV_URL;
console.log(process.env.MONGO_URL);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
    const server = app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });

    process.on("unhandledRejection", (err, _) => {
      console.log(`Error unhandledRejection: ${err.message}`);
      server.close(() => process.exit(1));
    });

    process.on("SIGTERM", (err, _) => {
      console.log(`Error SIGTERM: ${err.message}`);
      server.close(() => process.exit(1));
    });
  });
