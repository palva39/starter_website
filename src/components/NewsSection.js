import React, { useEffect, useState } from 'react';

function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news');
      const data = await response.json();

      if (data.status === 'ok' && Array.isArray(data.articles)) {
        setArticles(data.articles);
      } else {
        console.warn('No articles found in response:', data);
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📰 Top Headlines</h2>

      {loading ? (
        <p>Loading news...</p>
      ) : articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              maxWidth: '600px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{article.title}</h3>

            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}
              />
            )}

            <p>{article.description}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0077cc' }}
            >
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default NewsSection;
