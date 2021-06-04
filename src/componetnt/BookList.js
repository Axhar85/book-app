import { Link } from 'react-router-dom';
import Book from './Book';


const BookList = ({booksInfo, handleFavorite}) => {

    return (
    <div className='books-container'>
    
    {booksInfo.map((book) => (
    <Link to={'/books/$[book.isbn]'}> 
    <Book handleFavorite= {handleFavorite} key={book.isbn} {...book}/>
    </Link>
    ))}
    </div>
    )
};

export default BookList;