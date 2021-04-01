module.exports = {
    sqlConfig: {
        authentication: {
            options: {
                userName: process.env.AZURE_USER,
                password: process.env.AZURE_PASSWORD
            },
            type: "azure-active-directory-password"
        },
        server: process.env.AZURE_SQL_SERVER,
        database: process.env.DECISIONS_DB,
        options: {
            encrypt: true,
            enableArithAbort: false
        },
        pool: {
            max: Number(process.env.AZURE_SQL_SERVER_POOL_MAX),
            min: Number(process.env.AZURE_SQL_SERVER_POOL_MIN),
            idleTimeoutMillis: Number(process.env.AZURE_SQL_SERVER_POOL_IDLE_TIMEOUT)
        }
    },
    // nodemailerConfig: {
    //     host: process.env.MAIL_HOST,
    //     port: process.env.MAIL_PORT,
    //     pool: true,
    //     maxConnections: 2,
    //     secure: false,
    //     auth: {
    //         user: process.env.MAIL_USER,
    //         pass: process.env.MAIL_PASS
    //     }
    // }
}