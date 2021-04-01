import sql from 'mssql'

const getTEAccessToken = async () => {
    const pool = await sql.connect();
    const sqlQuey = "select token_payload from MyApps_TokenRepo_Token where token_type='UI' and deleted='false'"
    const { recordset: result } = await pool.query(sqlQuey)
    if (result.length !== 1) {
        throw new Error('No valid token')
    }
    console.log('getTEAccessToken: data', result[0])

    return result[0].token_payload
}

export default getTEAccessToken
