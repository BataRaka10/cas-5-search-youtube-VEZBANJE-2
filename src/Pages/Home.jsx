

import { useState } from "react";
import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../video.json"

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>
const Home = () => {
    // domaci: uraditi state
    let [videos, setVideos] = useState(VIDEOS); // TO JE PRIKAZ SVIH VIDFEO KLIPVA -> default na vrednost

    let [filteredVideos, setFilteredVideos] = useState(VIDEOS); // Ovo je deo koji se menja
    // Ovo je deo koji se menja // --- VIDEOS NAM OSTAJE ISTI -> uloga filteredVideos - jeste da bude taj state koji cemo mi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos
    
    // uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos

    // console.log(videos)


    // callback funkcija -> prosledjujemo KOD kao funkciju a nazad dobijam odgovor
    // moost izmedju SearchBar i naseg state / ne mozemo direktno / ali moze preko callback funkcijekoju prosledimo
    const handleSearchVideo = (results) => {
        setFilteredVideos(results)
    }


    // most izmedju SearchBar i naseg state / ne moszemo direktno / ali moze preko callback funkcije


    // const [videos, setVideos] = useState(VIDEOS); // default na vrednost /  prikaz svih video klipova

    // * logika = u SearchBaru cemo pozvati handleSearchVideo -proslediti mu neki rezultat sa video klipovima i on ce promeniti nas video state

    // prosledjivanje videos u SearchBar
    // * AllVideos -> DOBIJSA SAMO isfiltrirale video klipove = videos={ filteredVideos }
    // KLJUC (videos) !!!
    return (
        <>
            <SearchBar videos={videos} onSearchVideo={handleSearchVideo}/>
            {/* <h1>Glavna stranica</h1> */}
            <AllVideos videos={filteredVideos}/>
            {/* <h1>Glavna stranica</h1>
            <AllVideos /> */}
        </>
    )
}

export default Home;