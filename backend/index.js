const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' })
})

// Serve frontend build if present
const frontendDist = path.join(__dirname, '..', 'frontend', 'dist')
try {
  app.use(express.static(frontendDist))
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'))
  })
} catch (e) {
  // ignore if dist doesn't exist
}

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
