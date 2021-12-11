import React from 'react'
import book_card from '../data/book_data'

const BookList = () => {
    console.log(book_card)
    const listItems = book_card.map((item) => 
        <div className="card" key="{item.id}">
            <div className="card_img">
                <img src={item.thumb}/>
            </div>
            <div className="card_header">
                <h2>{item.book_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );
    return(
        <div className="main_content">
            <h3>Books</h3>
            {listItems}
        </div>
    )
}

/*export default function BookList() {
    return ( 
    )
}*/

export default BookList
