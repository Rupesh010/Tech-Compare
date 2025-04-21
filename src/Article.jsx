import articleData from './article.json';
import './articleCss.css';

export function Article() {


    console.log(articleData.articles);


    return (

        <nav className="article-container">
            {articleData.articles.map((item, index) => (
                <div className="product-card" key={index}>
                    <img src={item.urlToImage} alt="Article Image" />
                    <div className="product-details">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p className="price">
                            <span>{item.author}</span>
                        </p>
                    </div>
                </div>
            ))}
            <hr />
        </nav >

    )

}