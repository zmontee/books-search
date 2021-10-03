import React from "react";
import Search from "../Search";
import s from './Main.module.scss';
import {Typography} from "@material-ui/core";

const Main = props => {
    return (
        <div className={s.search}>
            <Typography variant='h3'>
                TYPE THE BOOK OR THE AUTHOR NAME
            </Typography>
            <Search />
        </div>
    )
};

export default Main;
