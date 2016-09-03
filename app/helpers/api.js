function getData(username){
    var url = `https://api.github.com/users/${username}/repos`
    return (
        fetch(url)
        .then(function(response) {
            return response.json()
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
    )
}

var api = {
    getData: getData
}

export default api