import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg";

const ReviewCard = ({ review }) => {
    const { book, quote, reviewer, title, rating = 5, avatar = profile } = review;

    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                {Array.from({ length: rating }).map((_, idx) => (
                    <FaStar key={idx} />
                ))}
            </div>

            <div className='mt-7'>
                <p className='mb-3 text-sm font-semibold uppercase text-blue-700 tracking-wide'>{book}</p>
                <p className='mb-5 text-gray-700'>{quote}</p>
                <Avatar
                    alt={`Avatar of ${reviewer}`}
                    img={avatar}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>{reviewer}</h5>
                <p className='text-sm text-gray-500'>{title}</p>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        book: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
        reviewer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number,
        avatar: PropTypes.string,
    }).isRequired,
};

export default ReviewCard;
