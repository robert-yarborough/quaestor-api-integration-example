import getConfig from 'next/config'

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      const { serverRuntimeConfig } = getConfig()
      console.log(req.query)
      serverRuntimeConfig.cache().set("key1.mobile", req.query.val==='true', 10000)
      // res.status(200).json({ name: 'John Doe' })
      res.redirect('/err')
      break;

    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} is not allowed!`)
      break;
  }
}
