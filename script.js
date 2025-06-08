fetch('news.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('news-container');
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`;
      container.appendChild(card);
    });
  });