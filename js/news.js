function displayArticles() {
  const list = document.getElementById("headlines");
  articles.forEach(article => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = article.url;
    a.textContent = article.title;
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
  });
}

const newsArticles = [
  {
    title: "Type 26: Auto Fabrica's Elegant Honda CB750 Café Racer",
    url: "https://www.bikeexif.com/honda-cb750-cafe-racer-auto-fabricar"
  },
  {
    title: "From My Garage to Yours: Gifts With True Motorcycling Soul",
    url: "https://www.bikeexif.com/gifts-for-every-motorcyclist"
  },
  {
    title: "Back in the Game: A Grigio Silverstone Moto Guzzi V35 from New Zealand",
    url: "https://www.bikeexif.com/custom-moto-guzzi-v35"
  },
  {
    title: "Shovelhead Salvation: 7 Custom Harley-Davidson Shovelheads",
    url: "https://www.bikeexif.com/shovelhead-salvation-7-custom-harley-davidson-shovelheads"
  },
  {
    title: "2LOUD Releases an Eclectic Sportster Chopper Fit for a Pop Star",
    url: "https://www.bikeexif.com/2loud-sportster-chopper"
  }
];

function populateNewsFeed() {
  const newsFeed = document.getElementById('news-feed');
  newsFeed.innerHTML = newsArticles.map(article => `
    <div class="news-card">
      <h3><a href="${article.url}" target="_blank" rel="noopener">${article.title}</a></h3>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', populateNewsFeed);