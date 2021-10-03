import React, {useState} from 'react';
import s from './Search.module.scss';
import {Button, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {getBooks} from "../../redux/actions/dataAction";
import {NavLink} from "react-router-dom";

const Search = (props) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className={s.search}>
            <form className={s.form}>
                    <TextField id="book"
                               label="Book or Author"
                               name="book"
                               value={value}
                               onChange={handleChange}
                    />
                    <NavLink to={`/search/${value}`}>
                        <Button type="submit"
                                color="primary"
                                variant="contained"
                                size="large"
                                startIcon={<SearchIcon />}
                        >
                            SEARCH
                        </Button>
                    </NavLink>
            </form>
        </div>
    )
}

export default connect(null, {getBooks})(Search);