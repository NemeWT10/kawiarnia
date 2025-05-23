document.addEventListener('DOMContentLoaded', function () {
    fetch('zdjecia/gallery.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.forEach(photo => {
                const div = document.createElement('div');
                div.className = 'masonry-item';

                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = photo.alt;
                img.className = 'img-fluid gallery-img shadow-sm';

                div.appendChild(img);
                gallery.appendChild(div);
            });

            // <<< DODAJ TO TUTAJ >>>
            addGalleryHoverEffects();
        })
        .catch(error => {
            document.getElementById('gallery').innerHTML = '<p class="text-danger">Błąd ładowania galerii.</p>';
            console.error(error);
        });

    // Przenosimy funkcję obsługi hover tutaj:
    function addGalleryHoverEffects() {
        const gallerySection = document.querySelector('.gallery-section-hover');
        if (!gallerySection) return;
        const images = gallerySection.querySelectorAll('.gallery-img');

        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                gallerySection.classList.add('hover-active');
                images.forEach(im => im.classList.remove('gallery-img-hovered'));
                img.classList.add('gallery-img-hovered');
            });
            img.addEventListener('mouseleave', () => {
                gallerySection.classList.remove('hover-active');
                images.forEach(im => im.classList.remove('gallery-img-hovered'));
            });
        });
    }
});
