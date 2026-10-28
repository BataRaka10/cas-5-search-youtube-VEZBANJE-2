import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllVideos from "./Components/AllVideos";

import Video from "./Components/Video";
import Home from "./Pages/Home";
import SearchBar from "./Components/SearchBar";

// * path = htps://http://localhost:5174 = path po default
// path "/" => htps://http://localhost:5174/
// path "about" = htps://http://localhost:5174/about

// * :wild card -> da kao korisnici mozemo da unesemo bilo sta
// * /Video/:id(wild card) => :id *** u brosweru cemo kucati 1, 5, 7, ... *** , 1, 5, 7... (wild card)
// /video/12, /video/12,  /video/1

// * <BrowserRouter> = rutiranje u braseru(browser)
// * <Routes> -> lista putanja sa naseg sajta
// * <Route path="/" element={<AllVideos />}/> -> svaki Route jeste jedna putanja

// * <Route path="/" element={<AllVideos />}/> = kada se dodeje na glavnu
// * stranicuon treba da ocita <AllVideos />
// key={video.id}
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/video/:id" element={ <Video />} />
				</Routes>
			</BrowserRouter>
			{/* <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/video/:id" element={<Video />} />
				</Routes>
			</BrowserRouter> */}
			{/* <AllVideos /> */}
		</>
	);
};

export default App;
