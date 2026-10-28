
// import VIDEOS from "./../video.json"
import VIDEOS from "./../video.json"

// * ocekuje array sa objektima - ocekuje json
// 6. cas
// dodaje se u etAllVideos = ({videos}) => {}
// -- primer -> key={video.id} !!!
const GetAllVideos = ({videos}) => {

    return (
        <>
            { videos.map( video => {
				return (
					<a href={ video.url } target="_blank">
						<img src={ video.cover } alt="" />
						<h2>{ video.title }</h2>
					</a>
				)
			}) }
        </>
    )
}

export default GetAllVideos;

// const VIDEOS = [
//     {
//         id: 1,
//         title: "How to learn React",
//         url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
//         cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A",
//     },
//     {
//         id: 2,
//         title: "How to learn css",
//         url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
//         cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
//     },
// ];