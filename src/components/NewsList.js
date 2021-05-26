import NewsCard from "./NewsCard";
import React, {useEffect} from 'react';

const today = new Date();

const formatDate = (date) => {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const actualDate = (formatDate(today));


const NewsList = ({news, categoryId, onGetNewsByCategory, onGetNewsByDate, hasError, isLoading}) => {

    
    useEffect(() => {categoryId === 0 ? onGetNewsByDate(actualDate) : onGetNewsByCategory(categoryId) }, [categoryId, onGetNewsByDate, onGetNewsByCategory]);


    if (hasError) {
        return (
          <div className="Error">
            <h6>Error al buscar las noticias.</h6>
          </div>
        );
      }
    
      if (isLoading) {
        return (
          <div className="Loading">
            <h6>Cargando noticias...</h6>
          </div>
        );
      }


    return (
        <div className="AllNews">
            {
                news.map((oneNews) => (
                    <NewsCard 
                        key={oneNews.news_id}
                        title={oneNews.title}
                        img={oneNews.img_url}
                        source={oneNews.source_name}
                        url={oneNews.url}
                    />
                    )) 
                }
        </div>

    )
}

export default NewsList;