function handleCarForm() {
    event.preventDefault();
    let brand = document.getElementById("selectBrand").value;
    let type = document.getElementById("selectType").value;
    let year = document.getElementById("selectYear").value;
    let speed = document.getElementById("km").value;
    let desc = document.getElementById("description").value;
    let cost = document.getElementById("price").value;

    let carObj = {
        brand: brand,
        type: type,
        year: year,
        kms: speed,
        Description: desc,
        Price: cost
    }
    console.log(carObj);
    postCarData(carObj);
    alert("Data added successfully")
}

function postCarData(data) {
    fetch(`https://json-server-app-cfuv.onrender.com/cars`, {
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
