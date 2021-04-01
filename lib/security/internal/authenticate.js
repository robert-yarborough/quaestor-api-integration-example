import jwt from 'jsonwebtoken'

const authenticate = handler => (req, res) => {
  jwt.verify(req.cookies.auth, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      req.id = decoded.id
      return await handler(req, res)
    }
    res.status(401).json({ message: 'You are not authorized!' })
  })
}

export default authenticate