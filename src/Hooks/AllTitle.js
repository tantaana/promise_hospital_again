import React, { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `Promise Hospital | ${title}`;
    }, [title])
};

export default AllTitle;