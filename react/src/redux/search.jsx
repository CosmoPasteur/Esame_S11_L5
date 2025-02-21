import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ricerca
  const bestSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (!response.ok) {
        throw new Error("Errore nella ricerca");
      }
      const data = await response.json();
      setResults(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cerca canzoni..." />
        <button onClick={bestSearch} disabled={loading}>
          {loading ? "Caricamento..." : "Cerca"}
        </button>
      </div>
      {error && <p>{error}</p>}
      <div>
        {results.length === 0 && !loading && <p>Nessun risultato trovato.</p>}
        {results.map((song) => (
          <div key={song.id}>
            <img src={song.album.cover} alt={song.title} />
            <p>{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
