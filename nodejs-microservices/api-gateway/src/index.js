const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

// Proxy configuration
app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api/users': '/signup' },
  })
);

app.use(
  '/api/products',
  createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    pathRewrite: { '^/api/products': '' },
  })
);

app.use(
  '/api/orders',
  createProxyMiddleware({
    target: 'http://localhost:6000',
    changeOrigin: true,
    pathRewrite: { '^/api/orders': '' },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
