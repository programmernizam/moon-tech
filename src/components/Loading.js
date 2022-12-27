import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='w-100 flex justify-center'>
                <svg className="animate-spin h-10 w-10 mr-3 outline-dotted rounded-full outline-8 outline-purple-500 duration-700" viewBox="0 0 64 64">
                </svg>
            </div>
        </div>
    );
};

export default Loading;