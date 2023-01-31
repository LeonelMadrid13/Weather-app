export async function getWeatherFrom(query = 'Buenos Aires') {
    return await fetch(`/api/get-weather?q=${query}`).then(res => {
        // console.log(res)
        return res.json()
    })
}

