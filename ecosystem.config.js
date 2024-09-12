module.exports = {
    apps: [
        {
            name: 'CityQuestWeb',
            port: '3010',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
