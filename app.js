let image = document.querySelector("img");
let button = document.querySelector("button");
let text = document.querySelector("p");


let dog = "https://dog.ceo/api/breeds/image/random";
let fact = "https://dog-api.kinduff.com/api/facts";

button.addEventListener('click', fetchInfo);

async function fetchInfo() {
    try {
        // let imgRes = await axios.get(dog);
        // let factRes = await axios.get(fact);
        let imgRes=await (await fetch(dog)).json();        
        let factRes=await (await fetch(fact)).json();
        

        let dogPhoto = imgRes.message;
        let content = factRes.facts[0];

        setCard(dogPhoto, content);


    } catch (error) {
        console.log(error);
    }
}

function setCard(dogPhoto, content) {
    image.src = dogPhoto;
    text.innerText = content;
}