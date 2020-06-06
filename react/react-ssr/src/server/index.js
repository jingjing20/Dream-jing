import React from 'react'
import express from 'express';
import Header from '../components/Header.jsx';  //需要
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';


const app = express();
app.use(express.static('static'))

app.get('*', (req, res) => {
  console.log(req.url);

  const App = (
    <StaticRouter location={req.url}>
      {renderRoutes(Routes)}
    </StaticRouter>
  );
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