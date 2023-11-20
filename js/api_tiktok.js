const tiktokUserId = ''; // Reemplaza con tu ID de usuario de TikTok

// URL de la API de TikTok
const tiktokApiUrl = `https://api.tiktok.com/v1/user/follower/${tiktokUserId}`;

// Realiza una solicitud GET a la API de TikTok
fetch(tiktokApiUrl)
  .then(response => response.json())
  .then(data => {
    const followerCount = data.fans;
    console.log(`Seguidores de TikTok: ${followerCount}`);
    
    // Actualizar el contador de TikTok en el DOM
    // document.getElementById('cont_tiktok').textContent = followerCount;
  })
  .catch(error => console.error('Error:', error));


  // User id: @splendorcasahogar