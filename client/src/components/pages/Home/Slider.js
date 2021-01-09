import React from 'react';
import Fade from 'react-reveal/Fade';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import "./Slider-animation.css"
import "./Slider.css"

import slider1 from "./slider1.jpg"
import slider2 from "./slider2.jpg"
import slider3 from "./slider3.jpg"


const content = [
	{
		title: 'What is Beyond Design ?',
		description:
		'A community passionate for fashion photography where models, photographers, makeup artists, fashion designers and stylists meet to create together.',
		button: 'Read More',
		url: '/about',
		image: `${slider1}`,
		user: 'Sara Martínez Vega',
		userProfile: 'https://i.postimg.cc/k4YgHL4z/Captura-de-pantalla-2020-12-20-a-las-16-53-22.png'
	},
	{
		title: 'How does it works ?',
		description:
		'Find castings near you or publish your own. Discover job opportunities or collaborations to improve your portfolio. Meet new faces and explore editorials from creative artists just like you.',
		button: 'Discover',
		url: '/signup',
		image: `${slider2}`,
		user: 'Sara Martínez Vega',
		userProfile: 'https://i.postimg.cc/k4YgHL4z/Captura-de-pantalla-2020-12-20-a-las-16-53-22.png'
	},
	{
		title: 'Why should you join us ?',
		description:
		'Put your portfolio or your book in front of professionals, bookers, agencies, clients and fans.',
		button: 'Register Now',
		url: '/signup',
		image: `${slider3}`,
		user: 'Sara Martínez Vega',
		userProfile: 'https://i.postimg.cc/k4YgHL4z/Captura-de-pantalla-2020-12-20-a-las-16-53-22.png'
	}
];

const Animation = () => (
	<>
		<Fade bottom>
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`, opacity: "0.7" }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<a href={item.url}><button className="btn-transparent">{item.button}</button></a>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Developed by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
			</Slider>
			</Fade>
	</>
);

export default Animation