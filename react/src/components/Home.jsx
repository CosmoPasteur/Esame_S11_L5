import { Component } from "react";

class Home extends Component {
  state = {
    playlists: {
      rock: [],
      pop: [],
      hiphop: [],
    },
  };

  fetchData = async () => {
    try {
      const rockResponse = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=rock`);
      const popResponse = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=pop`);
      const hiphopResponse = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop`);

      const rockData = await rockResponse.json();
      const popData = await popResponse.json();
      const hiphopData = await hiphopResponse.json();

      this.setState({
        playlists: {
          rock: rockData.data,
          pop: popData.data,
          hiphop: hiphopData.data,
        },
      });
    } catch (error) {
      console.error("Errore nel recuperare i dati:", error);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { playlists } = this.state;

    return (
      <main className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>

        {["rock", "pop", "hiphop"].map((section) => (
          <div key={section} className="row">
            <div className="col-10">
              <section id={section}>
                <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id={`${section}Section`}
                >
                  {playlists[section]?.length > 0 ? (
                    playlists[section].map((item, index) => (
                      <div key={index} className="col mb-4">
                        <div className="card">
                          <img src={item.album.cover} alt={item.title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.artist.name}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Caricamento...</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Home;
