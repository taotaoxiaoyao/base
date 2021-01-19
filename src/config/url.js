let env = process
console.log('env: ', env)

if (env !== 'dev') {
  env = ''
}

const host = {
  'dev': {
    host: 'http://121.36.10.17:18084'
  },
  'test': {
    host: 'http://121.36.10.17:18084'
  },
  'production': {
    host: 'http://121.36.10.17:18084'
  }
}
console.log('host[env]: ', host[env])
export default host[env]
