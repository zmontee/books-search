import React from "react";
import Search from "../Search";
import s from './Main.module.scss';

const Main = props => {
    return (
        <div className={s.search}>
            <Search />
        </div>
    )
};

export default Main;
