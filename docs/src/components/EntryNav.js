import React from 'react'

const EntryNav = ({ currentPage, totalPosts, postsPerPage, shiftCurrentEntries }) => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-left">
                    { currentPage > 1 && 
                        <button onClick={() => shiftCurrentEntries(currentPage - 1)} > 
                            Go to previous pages...
                        </button> 
                    }
                </div>
                <div className="col text-right">
                    { currentPage < Math.ceil(totalPosts / postsPerPage) && 
                        <button onClick={() => shiftCurrentEntries(currentPage + 1)}>
                            Go to next pages...
                        </button> 
                    }
                </div>
            </div>
        </div>
    )
}

export default EntryNav
