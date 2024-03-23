import React, { FC, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface WithScrollAnimationProps {
	children: React.ReactNode;
}

const WithScrollAnimation: FC<WithScrollAnimationProps> = ({ children }) => {
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		if (window.innerWidth > 425) {
			ScrollSmoother.create({
				wrapper: '.wrapper',
				content: '.content',
				smooth: 1.5,
				effects: true,
			});

			gsap.fromTo(
				'.hero-section',
				{ opacity: 1 },
				{
					opacity: 0,
					scrollTrigger: {
						trigger: '.hero-section',
						start: '40%',
						scrub: true,
					},
				}
			);

			const itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
			itemsL.forEach((item: any) => {
				gsap.fromTo(
					item,
					{ x: -200, opacity: 0 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							scrub: true,
						},
					}
				);
			});

			const itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
			itemsR.forEach((item: any) => {
				gsap.fromTo(
					item,
					{ x: 200, opacity: 0 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							scrub: true,
						},
					}
				);
			});
		}
	}, []);

	return <>{children}</>;
};

export default WithScrollAnimation;
