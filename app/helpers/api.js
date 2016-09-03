function getRepos(username){
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

function getFollowers(username){
    var url = `https://api.github.com/users/${username}/followers`
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
    getRepos: getRepos,
    getFollowers: getFollowers,
}

export default api