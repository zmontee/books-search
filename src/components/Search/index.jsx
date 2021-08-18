import React, {useState} from 'react';
import s from './Search.module.scss';
import {Button, TextField, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {getBooks} from "../../redux/actions/dataAction";

const Search = (props) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.getBooks(value);
    }

    return (
        <div className={s.search}>
            <Typography variant='h3'>
                TYPE THE BOOK OR THE AUTHOR NAME
            </Typography>
            <form className={s.form} onSubmit={handleSubmit}>
                    <TextField id="book"
                               label="Book or Author"
                               name="book"
                               value={value}
                               onChange={handleChange}
                    />
                    <Button type="submit"
                            color="primary"
                            variant="contained"
                            size="large"
                            startIcon={<SearchIcon />}
                    >
                        SEARCH
                    </Button>
            </form>
        </div>
    )
}

export default connect(null, {getBooks})(Search);