const path = require('path')
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
    '@/config': path.resolve(__dirname, '..', 'src/config'),
    '@/page_components': path.resolve(__dirname, '..', 'src/page_components'),
  },
  weapp: {},
  h5: {}
}
