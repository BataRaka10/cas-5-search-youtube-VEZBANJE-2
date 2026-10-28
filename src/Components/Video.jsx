import { useParams } from "react-router-dom";
import VIDEOS from "../video.json";


// * useParams() = izvlaci parametre iz adresa // broj 22 je parametar
// * const { id } = hook
const Videos = () => {

	// * const { id } = hook
	// const { id } = useParams();
	// console.log(id);
	const { id } = useParams()
	console.log(id)

	// zasto videoFound = null -> zato sto ako ne uspemo da nadjemo u 
	// * videoFound - video koji smo mi uspesno nasli
	// let videoFound = null;
	let videoFound = null

	// VIDEOS.forEach petlji koji ima u tom video nece se promeniti sa null
	// * hocemo da proverimo da li id u nasem slucaju /video/2 iz url -> postoji u videos.json u
	VIDEOS.forEach( video => {	
		// * if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1 -> onda u tu varijablu videoFound treba da UBACI taj odredjeni video -> *** U PREVODU AKO on uspe da nadje video sa id: 1, ON CE UZETI CEO PODATAK (id, title, url, cover) I STAVITI GA videoFound varijablu
		if (video.id == id) {
			// console.log("video found")
			
			// * postavljamo vrednost da nam bude ista kao video = videoFound = video;
			videoFound = video
		}
	})
	
	console.log(videoFound)

		// * hocemo da proverimo da li id u nasem slucaju /video/2 iz url -> postoji u videos.json u

		// console.log("Video found")

			// postavljamo vrednost da nam bude ista kao video = videoFound = video;

	// VIDEOS.forEach( video => {
		// * hocemo da proverimo da li id u nasem slucaju /video/2 iz url -> postoji u videos.json u

		// if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1
		// if (video.id == id) {
			// console.log("Video Found")

			// postavljamo vrednost da nam bude ista kao video = videoFound = video;
			// videoFound = video;
		// }
			
	// })

	if (videoFound === null) {
		return <h1>This video does not exist</h1>
	}

	return (
		<>
			<h3>{ videoFound.title }</h3>
			<p>{ videoFound.url }</p>
			<iframe src={ videoFound.url } ></iframe>
			{/* <h2>TEST</h2> */}

		</>
	);
};

export default Videos;
