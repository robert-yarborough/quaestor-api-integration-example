import sendEmail from "../../lib/comm/sendEmail"

export default async (req,res)=>{
    try {
        const result = await sendEmail(5,'hisham.hayat@quaestorglobal.co')
        console.log('result: ',result)
    } catch (error) {
        console.log('error3: ',error)
    }
    res.status(200).end()
}