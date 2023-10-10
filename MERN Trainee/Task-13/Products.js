
const apiUrl = 'http://localhost:3000/products';
function fetchData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const productContainer = document.querySelector('.product-container');

            data.forEach((product) => {

                const card = document.createElement('div');
                const deleteBTN = document.createElement('button')
                const editBTN = document.createElement('button')
                card.classList.add('card');
                card.innerHTML = `
                 <img src=${product.image} alt="image"/>
                     <h2>${product.title}</h2>
                     <p>Price : ${product.price}</p>
                     <p>Brand : ${product.brand}</p>
                     `

                editBTN.innerText = 'Edit'
                deleteBTN.innerText = "Delete"
                editBTN.addEventListener('click', () => {
                    openEditModal(product);
                });
                deleteBTN.addEventListener('click', () => {
                    fetch(`http://localhost:3000/products/${product.id}`, {
                        method: "DELETE",
                        headers: {
                            'Content-type': 'application/json'
                        }
                    })
                        .then((res) => {
                            if (res.ok) {
                                alert('Product data deleted successfully');
                            } else {
                                alert('Failed to delete product data');
                            }
                            return {};
                        })
                        .catch((err) => {
                            console.error('Error deleting product data:', err);
                        });
                })
                card.append(editBTN, deleteBTN)
                productContainer.append(card);
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
fetchData();


const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const editTitle = document.getElementById('editTitle');
const editImage = document.getElementById('editImage');
const editBrand = document.getElementById('editBrand');
const editPrice = document.getElementById('editPrice');
let currentProduct = null;


function openEditModal(product) {
    currentProduct = product;
    editTitle.value = product.title;
    editImage.value = product.image;
    editBrand.value = product.brand;
    editPrice.value = product.price;
    editModal.style.display = 'block';
}

function closeEditModal() {
    editModal.style.display = 'none';
}

const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', closeEditModal);

window.addEventListener('click', (event) => {
    if (event.target == editModal) {
        closeEditModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeEditModal();
    }
});

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    closeEditModal();
    editModal.style.display = 'none';
    const editedTitle = editTitle.value;
    const editedImage = editImage.value;
    const editedBrand = editBrand.value;
    const editedPrice = editPrice.value;

    currentProduct.title = editedTitle;
    currentProduct.image = editedImage;
    currentProduct.brand = editedBrand;
    currentProduct.price = editedPrice;

    fetch(`http://localhost:3000/products/${currentProduct.id}`, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(currentProduct)
    })
        .then((response) => response.json())
        .then((updatedProduct) => {
            if (updatedProduct) {
                alert('Product data updated successfully');
            } else {
                alert('Failed to update product data');
            }
        })
        .catch((error) => {
            console.error('Error updating product data:', error);
        })
});
