function getData(url){
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
function getUserInfo(username){
    var url = `https://api.github.com/users/${username}`
    var data = getData(url)
    return data
}

function getRepos(username){
    var url = `https://api.github.com/users/${username}/repos`
    var data = getData(url)
    return data
}

function getFollowers(username){
    var url = `https://api.github.com/users/${username}/followers`
    var data = getData(url)
    return data
}

var api = {
    getUserInfo: getUserInfo,
    getRepos: getRepos,
    getFollowers: getFollowers,
}

export default api