const NodeCache = require("node-cache")
const sql = require('mssql')
const nodemailer = require('nodemailer')
const smtppool = require('nodemailer-smtp-pool')
const { sqlConfig, nodemailerConfig } = require('./connection.config')

const nodeCache = new NodeCache()

const sqlPool = sql.connect(sqlConfig)

const smtpTransport = nodemailer.createTransport(smtppool(nodemailerConfig))

module.exports = {
  serverRuntimeConfig: {
    cache: () => nodeCache,
    smtpPool: () => smtpTransport
  },
  poweredByHeader: false,
  // reactStrictMode: true,
}