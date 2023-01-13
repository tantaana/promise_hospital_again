import React from 'react';

const Gallery = ({ imag }) => {
    const { img } = imag;
    return (
        <div class="flex justify-center">
            <div class="rounded-lg   max-w-sm">
                <a href="#!">
                    <img class="rounded-t-lg h-56 w-60 max-w-xs hover:scale-110 transition duration-300 ease-in-out " src={img} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Gallery;