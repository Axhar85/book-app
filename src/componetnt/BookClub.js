import Book from './Book';

const BookClub =({ favoriteList })=> {
    return (
        <div className='books-container'>
            {favoriteList.map((favorite) => (
            <Book key={favorite.title} {...favorite}/>
            )) }
        </div>
    );
    
};

export default BookClub;
