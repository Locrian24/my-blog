import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import './EntryNav.scss';

const EntryNav = ({
    currentPage,
    totalPosts,
    postsPerPage,
    shiftCurrentEntries,
    shiftDir
}) => {
    const [shift, setShift] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [icon, setIcon] = useState(faChevronLeft);

    useEffect(() => {
        if (shiftDir > 0) {
            setIcon(faChevronRight);
            setShift(1);
            currentPage < Math.ceil(totalPosts / postsPerPage)
                ? setDisabled(false)
                : setDisabled(true);
        } else if (shiftDir < 0) {
            setIcon(faChevronLeft);
            setShift(-1);
            currentPage > 1 ? setDisabled(false) : setDisabled(true);
        }
    }, [currentPage, postsPerPage, shiftDir, totalPosts]);

    return (
        <React.Fragment>
            <div
                className={'nav-arrow ' + (disabled && 'disabled')}
                onClick={() => {
                    if (!disabled) shiftCurrentEntries(currentPage + shift);
                }}
            >
                <FontAwesomeIcon icon={icon} size='3x' />
            </div>
        </React.Fragment>
    );
};

export default EntryNav;
