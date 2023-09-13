import React from 'react';

const Card = ({name, email, id}) => {
        return (
            <>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <p className='tc'>{id}</p>
                <img src={`https://robohash.org/${id}?200x200`} alt='card' />
                <div className='tc'>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
            </>
        );
    }

export default Card