import style from "./ShimmerCard.module.css";

function ShimmerCard() {
    return (
        <div className={style.shimmer}>
            <div className={style.thumbnail}></div>
            <div className={style.titlePlaceholder}></div>
            <div className={style.channelPlaceholder}></div>
        </div>
    );
}

export default ShimmerCard;