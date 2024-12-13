function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

function search(){

    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}



async function getResponce() {

    let responce = await fetch("word.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 64)
    console.log(content)
    let key

    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });


    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();

    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 20%" class="card">
                <h5 class="card-header">${content_filter[key].title}</h5>
                <h6 class="card-subtitle">${content_filter[key].desk1}</h5>
                <p class="card-text"> Источник: ${content_filter[key].author}</p>
                <p class="card-subtitle"> <b>В поэме:</b></p>
                <p class="card-subtitle"> ${content_filter[key].context}</p>
                </li>
                        `
            }

}
async function getResponce1() {

    let responce = await fetch("words2.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 64)
    console.log(content)
    let key

    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });


    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();

    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 20%" class="card">
                <h5 class="card-header">${content_filter[key].title}</h5>
                <h6 class="card-subtitle">${content_filter[key].desk1}</h5>
                <p class="card-text"> Источник: ${content_filter[key].author}</p>
                <p class="card-subtitle"> <b>В поэме:</b></p>
                <p class="card-subtitle"> ${content_filter[key].context}</p>
                </li>
                        `
            }

}

sort()
