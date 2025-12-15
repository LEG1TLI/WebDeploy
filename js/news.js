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
    title: "Mooneyes Calling: Marc Holstein Reports from the 2025 Yokohama Hot Rod Custom Show",
    url: "https://www.bikeexif.com/2025-mooneyes-show-report"
  },
  {
    title: "46Works Turns the Fantic Caballero Scrambler 700 into a Sporty Café Racer",
    url: "https://www.bikeexif.com/fantic-caballero-46works"
  },
  {
    title: "Cross-Country Contenders: 5 Custom BMWs We’d Ride Coast to Coast",
    url: "https://www.bikeexif.com/5-custom-bmws-wed-ride-across-the-country"
  },
  {
    title: "Performance Meets Panache: 7 Customs from Roland Sands Design",
    url: "https://www.bikeexif.com/performance-meets-panache-7-customs-from-roland-sands-design"
  },
  {
    title: "Carolina Reaper: A Red-Hot Royal Enfield Guerilla 450 Flat Tracker",
    url: "https://www.bikeexif.com/royal-enfield-guerilla-450-flat-tracker"
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