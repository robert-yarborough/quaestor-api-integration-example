import axios from "axios"

const getLogin = async (token) => {
    const url = 'https://uat1.quaestortrade.com:8443/proftrading/rest/auth/pfixtoken/verify'
    const config = { headers: { token } }
        const { data } = await axios.get(url, config)
    // console.log('getUser: token',token)
        console.log('getLogin: data', data)
        if(data.isExpired){
            throw new Error('User not authorized')
        }
        return data.login
}

export default getLogin
