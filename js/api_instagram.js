const instagramUsername = ''; // Reemplaza con tu nombre de usuario de Instagram

// URL de la API de Instagram
const instagramApiUrl = `https://www.instagram.com/${instagramUsername}/?__a=1`;

// Realiza una solicitud GET a la API de Instagram
fetch(instagramApiUrl)
  .then(response => response.json())
  .then(data => {
    const followerCount = data.graphql.user.edge_followed_by.count;
    console.log(`Seguidores de Instagram: ${followerCount}`);
    
    // Actualizar el contador de Instagram en el DOM
    // document.getElementById('cont_instagram').textContent = followerCount;
  })
  .catch(error => console.error('Error:', error));


  // Profile Page: 4144124339