import { useState }
from "react";



const Book = ({ image, title, handleFavorite }) => {
        const [isFavourite, setIsFavourite] = useState(false)
        const handleClick = () => {
            setIsFavourite(!isFavourite);
            handleFavorite({image, title});

        }
        return ( 
            <div className = "card-container" >
            <div className = "image-container" >

            <img src = { image } alt = 'book cover' />
            <div className="star" onClick = {handleClick } > 
                {isFavourite ? "★" : "☆"} </div>  
                { title } 
                
            </div>
            </div>
            );
        };

        export default Book;