const request = require('request')

const forecast = (lat,lon,callback) => {
    const url = 'https://api.darksky.net/forecast/5d36cb612196ec6394a432b4d5c81124/'+ encodeURIComponent(lon) + ',' + encodeURIComponent(lat) + '?lang=en'
    request({ url, json: true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to location services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' out with a '+  body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast