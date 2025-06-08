import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Sundaram ",
			subtitle: "Founder @ Niftel Communications",
			comment: "Shubham is a great employe and a quick learner. He has a great understanding of web development and is always eager to learn new technologies. I highly recommend him for any web development role.",
		},
		{
			id: 2,
			image: Image3,
			title: "Mr.Vyasa Saxena",
			subtitle: "Client (Editing)",
			comment: "Shubham is an exceptional video editor. He has a keen eye for detail and a great sense of timing. He was able to take my raw footage and turn it into a polished, professional-looking video that exceeded my expectations. I highly recommend him for any video editing project.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials