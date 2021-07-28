module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3004',
        secure: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(csv|xlsx|xls)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  },
};
