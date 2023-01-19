import React from 'react';
import blogDetailsInfoBg from '../BlogBg/bg.jpeg'

const BlogDetailsInfo = ({ blogInfo }) => {
    const { description, Details } = blogInfo;
    return (
        <div style={
            {
                background: `url(${blogDetailsInfoBg})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div className=' w-11/12  mx-auto border-4 border-blue-500 rounded-lg p-6 md:p-10'>
                <div className='mt-4'>
                    <p>{description}</p>
                </div>
                <div>
                    {
                        Details.map((detail, i) => <Info key={i} detail={detail}></Info>)
                    }
                </div>
            </div>
        </div>

    );
};

const Info = ({ detail }) => {
    return (
        <div className='mt-7'>
            <h1 className='text-2xl font-semibold'>{detail.name}</h1>
            <p>{detail.details}</p>
        </div>
    )
}

export default BlogDetailsInfo;