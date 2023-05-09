
// async function getData () {
//     const response = await 
//     fetch("https://dog.ceo/dog-api/")
//     const data = await response.json()
//     console.log(data)
// }

//  getData()

// let c= document.createElement('h1');
// c.innerText='hello world';

// document.body.appendChild(c)
let divApp=document.createElement('div');
divApp.id="app";
let h=document.createElement('h1')
 h.innerText='Infinite Dog App'

let showImageSlate= document.createElement('div')


showImageSlate.className='show';
document.body.appendChild(h);
document.body.appendChild(divApp);
document.body.appendChild(showImageSlate);



async function getData() {
    response = await fetch("https://dog.ceo/api/breeds/list/all")
    data = await response.json()
    console.log(data.message)
    createBreedList(data.message)
}

getData();

function createBreedList(breedList) {
    document.getElementById("app").innerHTML= `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
            ${Object.keys(breedList).map(function (breed) {
             return `<option>${breed}</option>`
            }).join('')}
       </select>
    `
}
    
    async function loadByBreed(breed){
        if (breed != "choose a dog breed"){
           const response =await fetch(`https://dog.ceo/api/breed/${breed}/images`)
           const data = await response.json()
           doggy(data.message)

        }
    }
 
function doggy(image) {
    showImageSlate.innerHTML=`<img src=${image[0]}>`
}