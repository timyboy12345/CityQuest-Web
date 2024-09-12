module.exports = {
    apps: [
        {
            name: 'city-quest-web',
            port: '3012',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
