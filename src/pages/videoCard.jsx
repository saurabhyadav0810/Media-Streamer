import { useNavigate } from "react-router-dom";
import style from "./videoCard.module.css";

function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div 
      className={style.card}
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className={style.thumbnail}
      />
      <div className={style.info}>
        <h3 className={style.title}>{video.title}</h3>
        <p className={style.channel}>{video.channel}</p>
      </div>
    </div>
  );
}

export default VideoCard;

