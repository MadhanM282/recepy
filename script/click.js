function appendclick(data,location,loc){
    // console.log('data11111', data);

    // localStorage.setItem("item",JSON.stringify(data))
    location.innerHTML = ""
    
    // console.log('searchresults', elem);

        let div = document.createElement("div");

        let thumb = document.createElement("img");
        thumb.src = data.strMealThumb;

        let title = document.createElement("h2");
        title.innerHTML=data.strMeal;

        let area = document.createElement("h3");
        area.innerHTML = data.strArea;

        let cate = document.createElement("h3");
        cate.innerHTML = data.strCategory;

        let price = document.createElement("p")
        price.innerHTML = `₹ ${Math.floor(Math.random()*1000)+400}`

        let button = document.createElement("button")
        button.innerHTML="More"
        button.setAttribute("id","more")
        button.addEventListener("click",moredata)
        function moredata(){
                console.log('data', data);
                loc.innerHTML=""
                let ingdiv = document.createElement("div")
                let prepdiv = document.createElement("div")

                let ing1 = document.createElement("p")
                ing1.innerHTML=data.strIngredient1

                let ing2 = document.createElement("p")
                ing2.innerHTML=data.strIngredient2

                let ing3 = document.createElement("p")
                ing3.innerHTML=data.strIngredient3

                let ing4 = document.createElement("p")
                ing4.innerHTML=data.strIngredient4 

                let ing5 = document.createElement("p")
                ing5.innerHTML=data.strIngredient5

                let ing6 = document.createElement("p")
                ing6.innerHTML=data.strIngredient6

                let ing7 = document.createElement("p")
                ing7.innerHTML=data.strIngredient7

                let ing8 = document.createElement("p")
                ing8.innerHTML=data.strIngredient8

                let ing9 = document.createElement("p")
                ing9.innerHTML=data.strIngredient9

                let ing10 = document.createElement("p")
                ing10.innerHTML=data.strIngredient10

                let ing11 = document.createElement("p")
                ing11.innerHTML=data.strIngredient11

                let ing12 = document.createElement("p")
                ing12.innerHTML=data.strIngredient12

                let ing13 = document.createElement("p")
                ing13.innerHTML=data.strIngredient13

                ingdiv.append(ing1,ing2,ing3,ing4,ing5,ing6,ing7,ing8,ing9,ing10,ing11,ing12,ing13)

                let prep = document.createElement("p")
                prep.innerHTML = data.strInstructions

                prepdiv.append(prep)

                loc.append(ingdiv,prepdiv)
                
                
            // console.log('ele', ele.strIngredient1);
        
            
            
        }

        div.append(thumb,title,cate,area,price,button);


        location.append(div)

        
        
   
    
    
}




export default appendclick 
