const api = 'https://jurapro.bhuser.ru/api-shop/'

export const loginRequest = (inputData) => {
    return new Promise((resolve, reject) => {
        fetch(`${api}${inputData.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(inputData.user),
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error)
                
            })
    })
}