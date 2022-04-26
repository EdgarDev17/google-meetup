/*
 * Este archivo sirve para crear y obtener el JWT para la autentificación del programa
 */

const twilio = require('twilio')
const {AccessToken} = twilio.jwt.AccessToken // obtenemos el token desde twilio
const {VideoGrant} = AccessToken// pedimos permisos para activar la camara

// Configurando las variables de entorno siguiendo:  http://twil.io/secure
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;


const generateToken = config => {
    // NOTE: Puedo mandarle directamente las ENV variables
    return new AccessToken(
        config.twilio.accountSid,
        config.twilio.apiKey,
        config.twilio.apiSecret)
}

const videoToken = (indentify, room, config) => {
    let videoGrant;
    if (typeof room !== 'undefined') {
        videoGrant = new VideoGrant({room});
    } else {
        videoGrant = new VideoGrant();
    }

    const token = generateToken(config);
    token.addGrant(videoGrant);
    token.identity = identity;
    return token;
}

module.exports = { videoToken };
