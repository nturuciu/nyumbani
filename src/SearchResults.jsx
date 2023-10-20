import React, { useState, useEffect } from 'react';

const SearchResults = ({ searchParams }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
                   `YOUR_API_ENDPOINT?location=${searchParams.location}&checkIn=${searchParams.checkIn}&checkOut=${searchParams.checkOut}&guests=${searchParams.guests}`
        );

        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchParams.location && searchParams.checkIn && searchParams.checkOut && searchParams.guests) {
      fetchSearchResults();
    }
  }, [searchParams]);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.length === 0 && !loading && !error && <p>No results found</p>}
      {currentResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {currentResults.map((result) => (
              <li key={result.id}>
                <p>{result.propertyName}</p>
                {/* Add more details and a link to the detail page */}
                <a href={`/property/${result.id}`}>View Details</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results.length > resultsPerPage && (
        <div>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(results.length / resultsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
