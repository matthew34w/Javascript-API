
function fetchAndDisplayArtworks(artworkIds) {
    artworkIds.forEach(artworkId => {
        const apiUrl = `https://api.artic.edu/api/v1/artworks/${artworkId}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                
                const artworkData = data.data;
                const imageUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;

                // Selecting the container 
                const artworkContainer = document.getElementById('artworkContainer');

                // Creating the container 
                const artworkElement = document.createElement('div');
                artworkElement.className = 'artwork';

                // image element
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = artworkData.title;

                // title element
                const title = document.createElement('h3');
                title.textContent = artworkData.title;

                // artist name element
                const artist = document.createElement('p');
                artist.textContent = artworkData.artist_title;

                // Appending the elements
                artworkElement.appendChild(img);
                artworkElement.appendChild(title);
                artworkElement.appendChild(artist);

                artworkContainer.appendChild(artworkElement);
            })
            .catch(error => {
                console.error('Error fetching artwork:', error);
            });
    });
}

// calling the function with art ids
fetchAndDisplayArtworks([140703, 3816, 3752,6010,11723,19204]); 