async function fetchAPI(url, method = 'GET', data) {
    return await fetch(`https://reqres.in/api/${ url }`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchAPI;