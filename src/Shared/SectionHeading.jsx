import React from 'react';

const SectionHeading = ({heading, paragraph}) => {
    return (
        <div className='text-center gap-3 mb-12 mx-auto'>
            <h1 className='font-extrabold text-4xl mb-2'>{heading}</h1>
            <p className='text-base max-w-2xl mx-auto text-center'>{paragraph}</p>
        </div>
    );
};

export default SectionHeading;