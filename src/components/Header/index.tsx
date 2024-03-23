import { FC } from 'react';
import heroImg from '@/assets/images/photo.jpg';
import './styles.scss';
import CustomBtn from '../CustomBtn';

const Header: FC = () => {
	return (
		<header className='hero-section'>
			<div className='container'>
				<img data-lag='.5' data-speed='.6' className='hero' src={heroImg} alt='Yana Lazarieva' />
				<div data-speed='.75' className='main-header'>
					<div className='contacts'>
						<h2 className='contacts-title'>Contacts:</h2>
						<ul className='contacts-list'>
							<li>
								<CustomBtn href='mailto:yanochkalaz0560@gmail.com'>
									yanochkalaz0560@gmail.com
								</CustomBtn>
							</li>
							<li>
								<CustomBtn href='tel:+380975132475'>+380975132475</CustomBtn>
							</li>
							<li>
								<CustomBtn href='https://t.me/yana_laz'>@yana_laz</CustomBtn>
							</li>
							<li>
								<CustomBtn href='https://www.linkedin.com/in/yana-lazarieva-1675a1276/'>
									Linkedin
								</CustomBtn>
							</li>
							<li>
								<CustomBtn href='https://github.com/YanochkaLz'>Github</CustomBtn>
							</li>
						</ul>
					</div>
					<p className='main-desc'>
						Hello!
						<br />I am a driven and motivated <span className='accent'>web developer</span> with a
						strong foundation in
						<span> React, Next JS, HTML, CSS, JavaScript, TypeScript and Node JS</span> development,
						with hands-on experience in Agile/Scrum methodology.
					</p>
					<h1 className='main-title'>Yana Lazarieva</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
