function getData(path){
    return fetch(path)
        .then(res => res.json())
}
export default getData;