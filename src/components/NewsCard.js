const NewsCard = ({title, img, source, url}) => {
    return (
        <div className="OneNews">
            <img src={img} alt="imagen"></img>
            <div className="NewsInfo">
                <h2 className="newsTitle">{title}</h2>
                <p className="source">De {source}</p>
                <p className="description"></p>
                <a href={url} target="_blank" rel="noreferrer" className="read">Leer nota completa</a>
            </div>
        </div>

    )
}

export default NewsCard;