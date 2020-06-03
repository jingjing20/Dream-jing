import React from 'react'
import express from 'express';
import Header from '../components/Header.jsx';
import { renderToString } from 'react-dom/server';
const app = express();
app.use(express.static('static'))
app.get('*', (req, res) => {
  const App = (<Header />)
  const htmlStr = renderToString(App);
  console.log(htmlStr)
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>`)
})

app.listen(3000, () => {
  console.log('server is running 3000')
})