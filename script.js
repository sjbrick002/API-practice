const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");
const imgElement = document.querySelector(".target");

button.addEventListener("click", renderGif);


function renderGif() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=j9Fx029FDZgqxE7VIUxuSDoDRmqd1S2z&q=${input.value}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            imgElement.src = response.data[0].images.original.url;
        })
        .catch(() => {
            alert("Sorry, no GIF :<")
        });
};

async function renderGif2() {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=j9Fx029FDZgqxE7VIUxuSDoDRmqd1S2z&q=${input.value}`, {mode: "cors"});
    let imgData = await response.json();
    imgElement.src = imgData.data[0].images.original.url;
};