import React from "react";
import Row from "./components/row/row.component";
import requests from "./utils/tmdb-requests.helpers";

import Banner from "./components/banner/banner.component";
import Navbar from "./components/navbar/navbar.component";

import "./App.css";

function App() {
	// console.log(requests.fetchTrending);
	return (
		<div className="App">
			{/* NAVBAR */}
			<Navbar />

			{/* BANNER */}
			<Banner />

			{/* ITEM ROW */}
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRates} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />
		</div>
	);
}

export default App;
