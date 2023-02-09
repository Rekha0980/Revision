function getAllWishlist() {
    fetch(`https://json-server-app-cfuv.onrender.com/wishlisted_cars`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            displayWishlistedData(res);
        })
        .catch((err) => console.log(err.message));
}

function displayWishlistedData(data) {
    document.getElementById("wishdata").textContent = "";
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

        box.append(d1, d2, d3, d4, p3);
        div.append(image, box);
        document.getElementById("wishdata").append(div);
    })
}

getAllWishlist();
