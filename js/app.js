// Reemplaza 'TU_CLAVE_DE_API' con la clave de API que obtuviste.
const apiKey = 'E';
const channelId = ''; // Reemplaza con el ID del canal de YouTube que deseas consultar.

// URL de la API de YouTube
const apiUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=statistics`;

// Realiza una solicitud GET a la API de YouTube
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const subscriberCount = data.items[0].statistics.subscriberCount;
    console.log(`Suscriptores: ${subscriberCount}`);

    document.getElementById('cont4').textContent = subscriberCount;
  })
  .catch(error => console.error('Error:', error));
