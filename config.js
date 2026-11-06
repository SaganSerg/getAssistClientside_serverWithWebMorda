const credentials = require(`./.credentials.${process.env.NODE_ENV || 'development'}`)
const oneHour = 60 * 60 // в секундах
const oneMinutesMMSecond = 60 * 1000 // в миллисекундах
const oneHourMMSecond = oneHour * 1000 // в миллисекундах
const oneDaySecond = oneHour * 24 // в секундах
const oneDayMMSecond = oneDaySecond * 1000 // в миллисекундах
const deleteSmsTime = oneMinutesMMSecond * 10 // данные по смс-ке удаляются через 10 минуты
const deleteEmailCodeTime = oneMinutesMMSecond * 3

module.exports = { 
    credentials
    // это БД с данными
    , host: '127.0.0.1'
    , user: 'adm_getAssistClientside' // adm_carEquipmentClientSideCrutch
    , password: credentials.passDB
    , database: 'getAssistClientside' //carEquipmentClientSideCrutch
    // это БД с сессиями
    , sessionHost: '127.0.0.1'
    , sessionUser: 'admin_sessions' // admin_sessions
    , sessionPassword: credentials.passSessionDB //'Vagon_3611'
    , sessionDatabase: 'sessions' // sessions
    , longTokenExpire: oneDaySecond * 90 // 90 дней
    , tokenExpire: oneDaySecond * 30 // 30 дней
    , emailTokenExpire: oneDaySecond * 3 // 3 дня
    , domen: 'localhost'
    , yourEmail:'info@getoff.pro' // 'sagan.sergei.mih@yandex.ru' // здесь должен быть реальный адрес с которого делается отправка, 
    , httpProtocol: 'http'
    , sessionCookiesExpirationMM: oneDayMMSecond * 1  // 1 день
    , cleanConnectionsTime: oneDayMMSecond * 1 // 1 day 
    
    // отправка почты
    , smtpKey: 'ayvhsuknyzaunrbw' // 'wgsfizmubelvmdly' // это ключ для сервера отправки почты в данном случае на яндексе
    , smtpHost: 'smtp.yandex.ru'
    , smtpPort: 465
    , smtpUser: 'info@getoff.pro' // 'sagan.sergei.mih'

    // отправка кода идентификации по электронной почте
    , deleteEmailCodeTime
    , emailCodeNumberOfCharacters: 5

    // это строка, которая подставляется, если не известен user-agent
    , unknownUserAgent: 'unknown'

    // отправка СМС
    // , loginForSMS: 'websagan@gmail.com' 
    // , keyForSMS : '69vHPQcZ3dIxagri0rkRsHDlMuB0RCaJ'
    , loginForSMS: 'info@fixelectro.pro' 
    , keyForSMS : 'NP_iIYrSDe6TjW1dozqP6JX1ldY1p0hb'
    , deleteSmsTime
    , smsCodeNumberOfCharacters: 5 // это количество символов в смс коде
    , telephoneNumberMax: 18 // это максимальное количество симоволов в телефоне (нужно для проверки номера телефона)
    , telephoneNumberMin: 11 // это минимальное количество символов в телефоне (нужно для проверки номера телефона)

    , maxLenghtOfUserName: 50
    , cleanSmsCodeTime: deleteSmsTime * 2 // данные в любом случае будут 
    , serverToken: 'kuhalkulkjbgjhgjshgcnbvccvxdsgfdhgfjgvbfdsfgdsawqewydfdtjtjhgfjghfbnvcnbvcjgjhgfttygfdsgfdsgfdsgfdsgdfsgfdsgfdsvbvcxxdhgfdhgfd'
}
