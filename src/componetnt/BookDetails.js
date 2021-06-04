const BookDetails =({books, routeProps}) => {
    const foundMatch = books.find((book) => book.isbn === routeProps.match.params.isbn);
     
    return (
        <div>
            <img src={foundMatch.image} alt='book cover'/>
            <p>{foundMatch.author}</p>
            <p>{foundMatch.description}</p>
        </div>
    )

};

export default BookDetails;