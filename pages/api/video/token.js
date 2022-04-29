const {videoToken} =  require('../../libs/getToken')

export default function handler(req, res) {
    if (req.method === 'POST') {
        const indentity = req.body.identity
        const room = req.body.room
        const token = videoToken(indentity, room)

        res.send(JSON.stringify({
            token: token.toJwt()
        }))
    } else {
        const identity = req.query.identity;
        const room = req.query.room;
        const token = videoToken(identity, room);

        res.send(JSON.stringify({
            token: token.toJwt()
        }))
    }
}

