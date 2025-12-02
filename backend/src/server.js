import express from 'express'
import cors from 'cors' 
import postRoutes from "./routes/post.routes.js"
import authRoutes from "./routes/auth.routes.js"
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000


app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`server has started on port ${PORT}`);
});