import React, { useEffect, useState } from 'react';

function NewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=co&language=es&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Noticias Recientes en Colombia</h2>
      <div className="row g-4">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={article.urlToImage || 'https://via.placeholder.com/400x200'}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description || 'No hay descripción disponible.'}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Leer Más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
