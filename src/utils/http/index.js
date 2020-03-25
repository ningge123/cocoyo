import axios from 'axios'
import qs from 'qs'
import interceptors from './interceptors'

// allow use http client without Vue instance
const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

interceptors(http)

let network = {}

/**
 * Helper method to set the header with the token
 */
export function setToken(token) {
    http.defaults.headers.common.Authorization = `Bearer ${token}`
}

network.defaults = http.defaults

network.get = function (url, options) {
    return http.get(url, options)
}

network.post = function (url, options, jsonParam) {
    if (jsonParam === 'json') {
        return http
            .post(url, options)
            .then(res => {
                return Promise.resolve(res.data)
            })
    } else {
        return http.post(url, qs.stringify(options))
    }

}

export default network
