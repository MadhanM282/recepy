async function searching(){
    
    try{
        let res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    
        let data = await res.json();
        // console.log('data', data);
        
        return data.meals;
    }
    catch(e){
        console.log('e', e);
    }
   
    
}

function appending(data,location){
    // console.log('results.js', data);
    data.map((ele) =>{
        // console.log(ele)
        let div = document.createElement("div");
        div.onclick = function search(){
            localStorage.setItem("home",JSON.stringify(ele));
            window.location.href="home.html"
        }

        let thumb = document.createElement("img");
        thumb.src = ele.strMealThumb;

        let title = document.createElement("h2");
        title.innerHTML=ele.strMeal;

        let area = document.createElement("h3");
        area.innerHTML = ele.strArea;

        let cate = document.createElement("h3");
        cate.innerHTML = ele.strCategory;

        div.append(thumb,title,cate,area);

        location.append(div)
    })
    
}
export {searching,appending}