import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import ReviewCard from '../shared/ReviewCard';

const reviews = [
    {
        id: 'pride-prejudice',
        book: '“Pride and Prejudice” — Annotated PDF Edition',
        quote: 'Uploading our class commentary copy took minutes, and the bookmarking tools in LBMS help my students follow Austen’s witty dialogue without feeling lost.',
        reviewer: 'Elena Brooks',
        title: 'Literature Teacher, Hawthorne Prep',
        rating: 5,
    },
    {
        id: 'sherlock',
        book: '“The Adventures of Sherlock Holmes”',
        quote: 'Our mystery club devours detective fiction, and LBMS keeps every Holmes case neatly organized with tags for characters, locations, and favorite deductions.',
        reviewer: 'Miles Ortega',
        title: 'Founder, Briarwood Mystery Collective',
        rating: 5,
    },
    {
        id: 'journey-center-earth',
        book: '“Journey to the Center of the Earth”',
        quote: 'Digitizing Verne’s classic for the science showcase was seamless. The PDF viewer handles maps and illustrations beautifully on tablets and e-readers.',
        reviewer: 'Priya Shah',
        title: 'STEM Librarian, Meridian Middle School',
        rating: 4,
    },
    {
        id: 'little-women',
        book: '“Little Women”',
        quote: 'Our community library uses LBMS to feature themed shelves. Readers love hopping between March sisters’ chapters and seeing related recommendations.',
        reviewer: 'Kendra Wallace',
        title: 'Director, Oak & Ivy Public Library',
        rating: 5,
    },
    {
        id: 'call-of-the-wild',
        book: '“The Call of the Wild”',
        quote: 'Outdoor education campers download the PDF straight from LBMS before heading into the mountains. Offline access keeps Buck’s journey alive around the fire.',
        reviewer: 'Noah Alvarez',
        title: 'Lead Guide, Summit Ridge Adventures',
        rating: 4,
    },
];

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Readers On Their Favorite Titles</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review
