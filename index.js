// fetch data
const userContainer=document.getElementById('products')
const getUsers=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
// return fetch('https://dummyjson.com/users?limit=100')
.then (response=>response.json())
.then(response=>response)
.catch(error=>error)
}
getUsers();

const displayUser=async()=>{
    const user=await getUsers();
    console.log(user)
    // console.log(user.users)
    // user.products.map(item=>{
    //     let div=document.createElement('div')
    //     let image=document.createElement('img')
    //     let name=document.createElement('h2')
    //     let username=document.createElement('p')
    //     image.src=item.image;
    //     name.innerHTML=`${item.firstName} ${item.lastName} `
    //     username.innerHTML=item.username

    //     div.appendChild(image)
    //     div.appendChild(name)
    //     div.appendChild(username)
    //     div.setAttribute('key',item.id)
    //     div.setAttribute('class','people')
    //     userContainer.appendChild(div)
    // })
        

}
displayUser();