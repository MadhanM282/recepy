async function searchingvalue(url,loc){

    try{
        
        let res =await fetch (url);
        // console.log('res', res);
    
        let data = await res.json();
        // console.log('datainsearch', data);
        
        appendvalue(data.meals,loc)

    }
    catch(e){
        console.log('e', e);
    }

}
function appendvalue(data,loc){

    loc.innerHTML=""
    data.map((ele)=>{
    // console.log('ele', ele);

    let div = document.createElement("div")
    

    let name = document.createElement("p")

    
    name.innerHTML = ele.strMeal
    // console.log('name', name);

    let mealimg = document.createElement("img")
    mealimg.src = ele.strMealThumb

    div.onclick= function clicked(){
        localStorage.setItem("items",JSON.stringify(ele))
        window.location.href = "click.html"
    }

    div.append(mealimg,name)
    loc.append(div)

        
        
    })
}

export default searchingvalue