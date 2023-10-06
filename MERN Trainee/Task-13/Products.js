// Define the URL of your API (local JSON file)
const apiUrl = 'http://localhost:3000/products';

// Function to fetch and display data
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
                     `;

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
                                // Product deleted successfully (status code 200 OK)
                                alert('Product data deleted successfully');
                                // You can also remove the card from the UI if needed
                            } else {
                                // Failed to delete product data (e.g., product not found)
                                alert('Failed to delete product data');
                            }
                            // Return an empty object to continue chaining promises
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

// Modal references
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const editTitle = document.getElementById('editTitle');
const editImage = document.getElementById('editImage');
const editBrand = document.getElementById('editBrand');
const editPrice = document.getElementById('editPrice');
let currentProduct = null; // Store the currently edited product

// Function to open the edit modal with current product data
function openEditModal(product) {
    currentProduct = product; // Store the current product
    editTitle.value = product.title;
    editImage.value = product.image;
    editBrand.value = product.brand;
    editPrice.value = product.price;
    editModal.style.display = 'block';
}

// Function to close the modal
function closeEditModal() {
    editModal.style.display = 'none';
}

// Close the modal when the close button is clicked
const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', closeEditModal);

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == editModal) {
        closeEditModal();
    }
});

// Close the modal when the "Escape" key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeEditModal();
    }
});

// Close the modal when the form is submitted
editForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    closeEditModal();
    editModal.style.display = 'none';

    // Retrieve edited values
    const editedTitle = editTitle.value;
    const editedImage = editImage.value;
    const editedBrand = editBrand.value;
    const editedPrice = editPrice.value;

    // Update the current product with edited values
    currentProduct.title = editedTitle;
    currentProduct.image = editedImage;
    currentProduct.brand = editedBrand;
    currentProduct.price = editedPrice;

    // Make a PATCH request to update the product data on the server
    fetch(`http://localhost:3000/products/${currentProduct.id}`, {
        method: "PATCH", // Use PATCH method for updating
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(currentProduct)
    })
        .then((response) => response.json())
        .then((updatedProduct) => {
            // Handle the response from the server
            if (updatedProduct) {
                alert('Product data updated successfully');
                // You can also update the card with the new data if needed
            } else {
                alert('Failed to update product data');
            }
        })
        .catch((error) => {
            console.error('Error updating product data:', error);
        })
});
