

import VIDEOS from "./../video.json"

// e => SearchVideo(e) = event koji prosledjujemo u SearchVideo / SearchVideo(e)
//* zbog statea = {videos} pod {zagradama}
//                 videos iz SearchBar -> 
// * prosledili {videos, onSearchVideo}
// * onSearchVideo - > je funkcija
// * dobijamo SVE VIDEO KLIPVE  ({videos}) iz glavne komponente
// * moramo da vratimo nazad neki rezultat -> vratimo se u Home.jsx
// *  ({videos}) -> prosledjujemo ceo jedan state -> prihvatamo videos
const SearchBar = ({videos, onSearchVideo}) => {
    // console.log(videos)
    // console.log(videos, onSearchVideo)

    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)} />
            </label>
        </form>
    )
}

/**
 * vezba: kako kucamo tekst da on vec nalapi video
 * How to learn react ->
 * How to learn css -> how to learn react
 * 
 *  How to learn -> da odradi tu kvazi prepreku
 */

// (e) -> event
// funkcija za pretragu - > filtriranje video kliopva
// (e) da se promeni u (name) -> da prihvata name
// SearchVideoByName -> treba da se prosledi (name) / SearchVideoByName -> funkcija
// * ---- onSearchVideo -> menja vrednost naseg filteredVideos(state)
// * kroz SearchBar komponentu -> mi uspesno modifikjuemo filteredVideos
const SearchVideoByName = (name, videos, onSearchVideo) => {
    // console.log(name, videos, onSearchVideo)
    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // * foundVideos -> array u koji pushujemo te objedkte koje nalazimo
    // let videoFound = []
    let videoFound = [];

    // * lista svih VIDEOS(video klipova) / domaci po titlu / VIDEOS bio 
    videos.forEach( video => {

        name = name.toLowerCase()
        video.title = video.title.toLowerCase()

        // let recenica = '"Kako si'
        // let pretraga = "Kak"

        // da li "kako si" sadrzi (includes) "kako si"
        // video.title je "kako si"
        // ako naslov naseg klipa(video.title) sadrzi(includes) koji mi trtazimo(name)

        // * pretrazujemno json sa video klipovima => NASLI SMO GA onSearchVideo(video) njemu PROSLEDJUJE

        if (video.title.includes(name)) {
            // console.log("naslii smo video " + video.title)


             // * opet vraca jedan klip / ubaci react ii umesto da doda na to css , on obrise react i stavi css 
            // * napravili smo jedan array (foundVideos) sa video klipovima koje smo nasli i svaki put kada nadjemo video klip -> pusujemo taj array
            // * ovde vracamo samo objekat / mi mu ne vracmo array sa objedktima
            onSearchVideo([video]) // prosledimo video koji smo mi nasli
            // prosledimo video koji sm omi nasli
            videoFound.push(video)
        }

        // if (name === video.title) {
            // console.log("Nasli smo video ")
        //     console.log(video.title)

        // }

    })

    onSearchVideo(videoFound)

        // let recenica = '"Kako si'
        // let pretraga = "Kak"

        // da li "kako si" sadrzi (includes) "kako si"
        // video.title je "kako si"
        // ako naslov naseg klipa(video.title) sadrzi(includes) koji mi trtazimo(name)

        // * pretrazujemno json sa video klipovima => NASLI SMO GA onSearchVideo(video) njemu PROSLEDJUJE

        // on svaki put dodaje jedan klip (ne zelimo jedan klip vise klipova)
        // ako nadje dva klipa -> on prosledi jedan


            // console.log("Nasli smo " + video.title)

            // * ovde vracamo samo objekat / mi mu ne vracmo array sa objedktima
            // onSearchVideo([video])  // * opet vraca jedan klip / ubaci react ii umesto da doda na to css , on obrise react i stavi css 
            // * napravili smo jedan array (foundVideos) sa video klipovima koje smo nasli i svaki put kada nadjemo video klip -> pusujemo taj array
            // onSearchVideo([video])


    
        // if (name === video.title) {
            // console.log("Nasli smo video ")
        //     console.log(video.title)
        // }

}

export default SearchBar;