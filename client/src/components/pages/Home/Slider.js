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
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: `${slider1}`,
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: `${slider2}`,
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: `${slider3}`,
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Animation = () => (
	<div className="">
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
						{/* <button className="btn-transparent">{item.button}</button> */}
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
			</Slider>
			</Fade>
	</div>
);

export default Animation