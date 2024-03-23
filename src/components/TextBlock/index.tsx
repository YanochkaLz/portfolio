import { FC } from 'react';

import gitHubImg from '@/assets/images/github-mark-white.svg';
import liveImg from '@/assets/images/live.png';
import { IWork } from '@/models/IWork';
import CustomBtn from '../CustomBtn';

interface TextBlockProps {
	work: IWork;
}

const TextBlock: FC<TextBlockProps> = ({ work }) => {
	return (
		<div className='text-block gallery__item'>
			<h3 className='text-block__h'>{work.title}</h3>
			{work.company && (
				<h3 className='text-block__s'>
					<span>Company: </span>
					{work.company}
				</h3>
			)}
			<div className='text-block__p'>
				{work.description}
				<div className='text-block__t'>
					<span>Technologies: </span>
					{work.technologies.join(', ')}
				</div>
				<div className='text-block__t'>
					<span>Features:</span>
					<ul className='text-block__ul'>
						{work.features.map(feature => (
							<li key={feature} className='text-block__li'>
								{feature}
							</li>
						))}
					</ul>
				</div>
				<div className='btn-group'>
					<CustomBtn href={work.urlGitHub}>
						<img src={gitHubImg} alt='Git Hub' />
						GitHub
					</CustomBtn>
					{work.url && (
						<CustomBtn href={work.url}>
							<img src={liveImg} alt='Git Hub' />
							See Live
						</CustomBtn>
					)}
				</div>
			</div>
		</div>
	);
};

export default TextBlock;
