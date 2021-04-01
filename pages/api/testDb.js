import getTEAccessToken from "../../lib/security/external/getTEAccessToken"

export default async (req, res) => {
    try {
        res.json(await getTEAccessToken())
    } catch (error) {
        res.end(error.message)
    }
}