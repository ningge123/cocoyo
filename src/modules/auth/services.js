import network from '$utils/http'

export const postLogin = ({ email, password }) => {
    return network.post('/auth/login', {
        email: email,
        password: password,
    })
}

export const postRegister = payload => {
    return network.post('/auth/register', payload)
}

export const loadUserData = () => network.get('/me').catch(() => { })