const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "";

async function getquote(url) {
    console.log(url);
    
    const response = await fetch(url)
    let data = await response.json();
    quote.innerHTML = data.;
    author.innerHTML = data.;
    

}
getquote(api_url);