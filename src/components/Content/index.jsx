import React, {useEffect} from "react";
import Search from "../Search";
import s from './Content.module.scss';
import {connect} from "react-redux";
import {addElement, getBooks} from "../../redux/actions/dataAction";
import {withRouter} from 'react-router-dom';

const Content = props => {
    let book = props.match.params.book;

    useEffect(() => {
        props.getBooks(book);
    }, [book]);

    const booksItems = props.books.map(item => <li>{item.volumeInfo.title}</li>)

    const handleClick = () => {
        props.addElement({
            volumeInfo: {
                title: 'BOOK'
            }
        })
    }

    return (
        <div className={s.search}>
            <Search />
            <button onClick={handleClick}>ADD EL</button>
            <ul>
                {booksItems}
            </ul>
        </div>

    )
};

const mapStateToProps = state => ({
    books: state.data.books,
    loading: state.ui.loading
})

export default connect(mapStateToProps, {
    getBooks,
    addElement
})(withRouter(Content));