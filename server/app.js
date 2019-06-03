const app = require("express")()
const exec = require("child_process").execSync
const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
})
const upload = multer({ storage })

const cartoonFilter = filename => {
  const outputFileName = `filtered-${filename}`
  exec(
    `./cartoon -p 70 ${__dirname}/uploads/${filename} ${__dirname}/filtered/${outputFileName}`
  )
  return outputFileName
}

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname })
})

app.post("/upload", upload.single("photo"), (req, res) => {

  const output = cartoonFilter(req.file.filename)

  res.sendFile(`${__dirname}/filtered/${output}`)
})

app.listen(1337, () => {
  console.log("listening on 1337")
})
