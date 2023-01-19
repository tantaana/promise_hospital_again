import React, { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Promise Hospital`;
    }, [title])
};

export default AllTitle;