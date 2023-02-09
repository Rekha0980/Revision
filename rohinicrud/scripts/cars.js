function getAllCar() {
    fetch(`https://json-server-app-cfuv.onrender.com/cars`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            displayCarData(res);
        })
        .catch((err) => console.log(err.message));
}

function displayCarData(data) {
    document.getElementById("carsdata").textContent = "";
    data?.map((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "bigDiv")

        let image = document.createElement("img");
        image.setAttribute("class", "image");
        image.src = 'https://etimg.etb2bimg.com/photo/61198863.cms';

        let box = document.createElement("div");
        box.setAttribute("class", "boxdiv");

        let d1 = document.createElement("div");
        d1.setAttribute("class", "d1");

        let h41 = document.createElement("h4");
        h41.textContent = el.year;
        let h42 = document.createElement("h4");
        h42.textContent = el.brand;
        d1.append(h41, h42);

        let d2 = document.createElement("div");
        d2.setAttribute("class", "d2");

        let h43 = document.createElement("h4");
        h43.textContent = "LXI";
        let p1 = document.createElement("p");
        p1.textContent = el.type;
        d2.append(h43, p1);

        let d3 = document.createElement("div");
        d3.setAttribute("class", "d3");

        let d31 = document.createElement("div");
        d31.setAttribute("class", "d31");
        d31.textContent = `${el.kms} km`;

        let d32 = document.createElement("div");
        d32.setAttribute("class", "d32");
        d32.textContent = `1st Owner`;

        let d33 = document.createElement("div");
        d33.setAttribute("class", "d33");
        d33.textContent = `Petrol`;

        d3.append(d31, d32, d33);

        let d4 = document.createElement("div");
        d4.setAttribute("class", "d4");

        let h44 = document.createElement("h4");
        h44.textContent = `₹ ${((el.Price) / 12).toFixed(2)}/month`;
        h44.style.color = "orange";
        let p2 = document.createElement("p");
        p2.textContent = `₹${el.Price}`;
        p2.style.fontWeight = "bold";

        d4.append(h44, p2);

        let p3 = document.createElement("p");
        p3.textContent = "Zero down payment";
        p3.style.color = "lightgray";
        p3.style.marginTop = "-0px";

        let d5 = document.createElement("div");
        d5.setAttribute("class", "d5");

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.setAttribute("class", "edit");
        edit.addEventListener("click",function(){
            updateData(el);
        })

        let wishlist = document.createElement("button");
        wishlist.textContent = "wishlist";
        wishlist.setAttribute("class", "wish");
        wishlist.addEventListener("click",function(){
            addToWishList(el);
            alert("Your data added to wishlist successfully");
        })

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.setAttribute("class", "del");
        del.addEventListener("click",function(){
            RemoveData(el.id);
            alert("Data is deleted successfully");
        })

        d5.append(edit, wishlist, del);

        box.append(d1, d2, d3, d5, d4, p3);
        div.append(image, box);
        document.getElementById("carsdata").append(div);
    })
}

// ---------------------- filterByBrand--------------------------//
document.querySelector("#filterbyBrand").addEventListener("change", (event) => {
    filterBrand(event);
});
function filterBrand(event) {
    let filter = event.target.value;
    // console.log(filter);
    if (filter === "") {
       getAllCar();
    }
    else{
        fetch(
            `https://json-server-app-cfuv.onrender.com/cars?brand=${filter}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                displayCarData(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

}

// -------------------------------sortByPrice-----------------------------//
document.querySelector("#sortbyPrice").addEventListener("change", (event) => {
    sortByPrice(event);
});
  function sortByPrice(event) {
    let sortPriceValue = event.target.value;
    console.log(sortPriceValue);
    fetch(
      `https://json-server-app-cfuv.onrender.com/cars?_sort=Price&_order=${sortPriceValue}`
    )
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        displayCarData(res);
    })
    .catch((err) => console.log(err.message));
  }

  // -------------------------------sortByKMS-----------------------------//
document.querySelector("#sortbyKms").addEventListener("change", (event) => {
    sortByKm(event);
});
  function sortByKm(event) {
    let sortKmValue = event.target.value;
    console.log(sortKmValue);
    fetch(
      `https://json-server-app-cfuv.onrender.com/cars?_sort=kms&_order=${sortKmValue}`
    )
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        displayCarData(res);
    })
    .catch((err) => console.log(err.message));
}


  //------------------delete data----------------------//
  function RemoveData(id){
    fetch(`https://json-server-app-cfuv.onrender.com/cars/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }, 
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        getAllCar();
    })
    .catch((err) => console.log(err.message));
  }


  //------------------------added to wishlist------------------//
  function addToWishList(data){
    fetch(`https://json-server-app-cfuv.onrender.com/wishlisted_cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("data posted",res)
        })
        .catch((err)=>console.log(err.message));
  }
//-------------------edit--------------------------//

function updateData(el){
    document.querySelector(".editRow").style.display = "block";
    document.querySelector("#updateForm").addEventListener("submit",(event)=>{
        event.preventDefault();
        patchData(el)
    })
}

function patchData(el){
    let cost = document.getElementById("editPrice").value;
    fetch(`https://json-server-app-cfuv.onrender.com/cars/${el.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...el, Price : cost})
    })
    .then((res)=>res.json())
    .then((res)=> {
        getAllCar();
        document.querySelector(".editRow").style.display = "none";
        alert("updated successfully"); 
    })
    .catch((err)=>console.log(err.message));
}
getAllCar();

