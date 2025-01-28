import React from 'react';

const SectionHeading = ({heading, paragraph}) => {
    return (
        <div className='text-center gap-3 mb-12 mx-auto'>
            <h1 className='font-extrabold md:text-6xl text-4xl mb-2'>{heading}</h1>
            <p className='md:text-base text-sm md:max-w-2xl mx-auto text-center'>{paragraph}</p>
        </div>
    );
};

export default SectionHeading;