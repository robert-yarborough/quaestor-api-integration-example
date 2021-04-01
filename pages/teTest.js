import getLogin from "../lib/te/auth/getLogin";
import teGetAPICall from "../lib/utils/teGetAPICall";
import getUser from "../lib/te/users/getUser";


const getAllAccounts = async (userId) => {
    console.log('received  getAllAccounts '+userid)

    const url = `/users/${userId}/accounts`;
    return await teGetAPICall(url);
}


const Test = ({token}) => {
    return (
        <h1 style={{color:'blue'}}>TE Test</h1>
    )
}

export const getServerSideProps = async (context) => {
    const token = context.req.__NEXT_INIT_QUERY.token
    console.log('token', token)
    
    try {
        const result = await getUser(context.req.__NEXT_INIT_QUERY.token)
        console.log('result!!!', result);
        const result2 = await getAllAccounts();
    } catch (error) {
        
        // console.log('server side')
        context.res.writeHead(302, {
            Location: '/err'
        })
        context.res.end()
    }
    // console.log(context.req.__NEXT_INIT_QUERY.token)
    return {
        props: {
            token
        }
    }
}

export default Test