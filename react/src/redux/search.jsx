import { useState } from "react";

function PlayBar() {
  const [query, setQuery] = useState(""); // ricerca
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Stato  caricamento
  const [error, setError] = useState(""); // in caso di errore

  // Funzione per fare la ricerca
  const searchSongs = async () => {
    setLoading(true);
    setError(""); // Resetta l'errore precedente

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
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Gestisce il cambio dell'input
          placeholder="Cerca canzoni..."
        />
        <button onClick={searchSongs} disabled={loading}>
          {loading ? "Caricamento..." : "Cerca"}
        </button>
      </div>
      {error && <p>{error}</p>} {/* Mostra l'errore se c'è */}
      <div>
        {results.length === 0 && !loading && <p>Nessun risultato trovato.</p>} {/* Se non ci sono risultati */}
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

export default PlayBar;
