async function fetchAPI(url, method = 'GET') {
    return await fetch(`https://reqres.in/api/${ url }`, {
        method: method
    });
}

export default fetchAPI;