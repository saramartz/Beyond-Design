module.exports = app => {

    // Base URLS
    app.use('/api/works', require('./portfolio.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/users', require('./professionals.routes.js'))
    app.use('/api/account', require('./account.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
    app.use('/api/boards', require('./board.routes.js'))
}