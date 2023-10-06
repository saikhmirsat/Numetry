document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const image = document.getElementById('image').value;
        const price = document.getElementById('price').value;
        const brand = document.getElementById('brand').value;

        console.log('Title:', title);
        console.log('Image:', image);
        console.log('Price:', price);
        console.log('brand:', brand);


        const randomId = Math.floor(Math.random() * 9000000000) + 1000000000;


        const postData = {
            id: randomId,
            image: image,
            title: title,
            brand: brand,
            price: price
        };
        console.log(postData)

        fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Data posted successfully:", data);
                alert("Data posted successfully:");
            })
            .catch((error) => {
                console.error("Error posting data:", error);
            });
    });
});