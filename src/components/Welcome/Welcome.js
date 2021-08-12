import React from 'react';

import Row from '../Row';
import requests from '../../requests';
import Banner from '../Banner';
import Nav from '../Nav';

const Welcome = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <header className="App-header">
                <Row title="Latest Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
                <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
            </header>
        </div>
    );
}

export default Welcome;