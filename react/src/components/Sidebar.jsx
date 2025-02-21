import { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      loading: false,
      error: "",
    };
  }

  bestSearch = async () => {
    this.setState({ loading: true, error: "" });

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`);
      if (!response.ok) {
        throw new Error("Errore nella ricerca");
      }
      const data = await response.json();
      this.setState({ results: data.data });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <aside className="col col-2">
        <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <div className="container flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src="public/logo.png" alt="Spotify Logo" width="131" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.bestSearch();
                      }}
                    >
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                          value={this.state.query}
                          onChange={this.handleInputChange}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary btn-sm h-100"
                            type="button"
                            onClick={this.bestSearch}
                            disabled={this.state.loading}
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </form>
                    {this.state.error && <p>{this.state.error}</p>}
                    {this.state.results.length === 0 && !this.state.loading && <p>Nessun risultato trovato.</p>}
                    {this.state.results.map((song) => (
                      <div key={song.id}>
                        <img src={song.album.cover} alt={song.title} />
                        <p>{song.title}</p>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <div>
              <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
            </div>
          </div>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
