const thumbnailsContainer = document.getElementById('thumbnails');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox_image');
const caption = document.querySelector('.caption');
const closeButton = document.querySelector('.close_button');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');
const deleteButton = document.querySelector('.delete_button');

let currentIndex = 0;
let images = [];


function generateRandomImages() {
    for (let i = 1; i <= 100; i++) {
        const randomWidth = Math.floor(Math.random() * (800 - 300) + 300); // Random width between 300 and 800
        const randomHeight = Math.floor(Math.random() * (800 - 300) + 300); // Random height between 300 and 800
        const imageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}?random=${i}`;
        const imageCaption = `Numetry Image ${i}`;

        images.push({
            id: i,
            image: imageUrl,
            caption: imageCaption,
        });
    }
}


function renderThumbnails() {
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');

        let width, height, border;


        if (index % 2 === 0) {

            width = '500px';
            height = '500px';
            border = '4px solid royalBlue'
        } else if (index % 3 === 0) {

            width = '600px';
            height = '400px';
            border = '4px solid gold'
        } else {

            width = '300px';
            height = '400px';
            border = '4px solid white'
        }

        thumbnail.innerHTML = `
            <img src="${image.image}" alt="${image.caption}" style="width: ${width}; height: ${height}; border:${border}">
        `;

        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });

        thumbnailsContainer.append(thumbnail);
    });
}



function openLightbox() {
    lightbox.style.display = 'block';
    updateLightboxContent();
}


function closeLightbox() {
    lightbox.style.display = 'none';
}


function updateLightboxContent() {
    const currentImage = images[currentIndex];
    lightboxImage.src = currentImage.image;
    caption.innerHTML = currentImage.caption;
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentIndex < images.length - 1 ? 'block' : 'none';
}


generateRandomImages();
renderThumbnails();


closeButton.addEventListener('click', () => {
    closeLightbox();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightboxContent();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateLightboxContent();
    }
});

deleteButton.addEventListener('click', () => {
    const confirmDelete = confirm('Are you sure you want to delete this image?');
    if (confirmDelete) {
        images.splice(currentIndex, 1);
        const thumbnailToDelete = thumbnailsContainer.children[currentIndex];
        thumbnailToDelete.remove();
        closeLightbox();
    }
});
