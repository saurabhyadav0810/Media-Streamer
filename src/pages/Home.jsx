import { useEffect, useState } from "react";
import VideoCard from "./videoCard";
import ShimmerCard from "./ShimmerCard";
import style from "./Home.module.css";

function Home() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
                console.log("API Key exists:", !!apiKey);

                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${apiKey}`
                );
                
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();
                console.log("Data coming from api:", data);
                
                if (data.error) {
                    throw new Error(`YouTube API Error: ${data.error.message}`);
                }
                
                if (!data.items || data.items.length === 0) {
                    console.warn("No videos returned from API");
                    setVideos([]);
                    return;
                }
                
                const formattedVideos = data.items.map(video => ({
                    id: video.id,
                    title: video.snippet.title,
                    channel: video.snippet.channelTitle,
                    thumbnail: video.snippet.thumbnails.medium.url,
                }));
                console.log("Formatted videos:", formattedVideos);
                setVideos(formattedVideos);
            } catch (error) {
                console.error("Error fetching videos:", error.message);
                alert(`Failed to fetch videos: ${error.message}`);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    return (
        <div className={style.home}>
            <h1>Trending Videos</h1>
            <div className={style.videoGrid}>
                {loading ? (
                    Array(12).fill(0).map((_, i) => <ShimmerCard key={i} />)
                ) : (
                    videos.map(video => <VideoCard key={video.id} video={video} />)
                )}
            </div>
        </div>
    );
}

export default Home;