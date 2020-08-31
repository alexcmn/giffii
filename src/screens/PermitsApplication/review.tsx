import React from 'react';

interface ReviewProps {
    formProps:any,
}

const Review: React.FC<ReviewProps> = (formProps) => {

    console.log(formProps)

    return (
        <div>
            review
        </div>
    );
};

export default Review;