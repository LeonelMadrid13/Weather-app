const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e06eafe6acmshc3bb32b1a13ad19p1978a5jsne829e583ebed',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function GET(event) {
    // console.log(event)
    const { searchParams } = event.url;
    const query = searchParams.get('q') ?? 'Buenos Aires';
    // console.log(query)
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
    const data = await response.json();
    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
    const { text, icon } = condition;

    const body = {
        conditionText: text,
        conditionIcon: icon,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDirection: wind_dir
    };

    return new Response(JSON.stringify(body));
}