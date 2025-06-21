let searchInputEle = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');

function createAndAppend(result)
{
            //Create Result Item
            //Create Title
    let imgEle = document.createElement('img');
    imgEle.src = result.urls.small;
    imgEle.alt = result.alt_description;
    imgEle.classList.add('result-image');
    searchResults.appendChild(imgEle);
}
function displayResults(searchResults)
{
    spinner.classList.toggle("d-none");
    for(let eachResult of searchResults)
    {     
        createAndAppend(eachResult);
    }
}
function wikipediaSearch(event){
    if(event.key === "Enter")
    {
        spinner.classList.toggle('d-none');
        searchResults.textContent = "";
        let searchInputValue = searchInputEle.value;
        let url = `https://api.unsplash.com/search/photos?query=${searchInputValue}&client_id=-wSKKuwt_vCHfdSiRTY52LUICSuNiSltGKGiWlMbRO8`;
        let options = {
            method: "GET"
        };
        fetch(url,options)
        .then(function(response)
        {
            return response.json()
        })
        .then(function(jsonData){
            let { results } = jsonData;
            displayResults(results);
        });
    }
}
searchInputEle.addEventListener('keydown',wikipediaSearch);

let backArrowImages = document.getElementById('backArrowImages');
backArrowImages.addEventListener('click',function(event){
    event.preventDefault()
    window.location.href = "home_page.html"
})