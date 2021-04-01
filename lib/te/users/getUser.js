import teGetAPICall from "../../utils/teGetAPICall"
import getLogin from "../auth/getLogin"

const getUser = async (token) => {
    
    // console.log('getUser: token',token)
    const login = await getLogin(token)
    const url = `https://uat1.quaestortrade.com:8443/proftrading/rest/users?login='${login}'`
    return await teGetAPICall(url)
}

export default getUser
