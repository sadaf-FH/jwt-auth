import "dotenv/config";
import app from "./app";

console.log("ENV CHECK:", {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});