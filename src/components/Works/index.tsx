import { FC } from 'react';
import Work from '../Work';
import { works } from '@/constants/works';

const Works: FC = () => {
	return (
		<div className='portfolio'>
			<div className='container'>
				<div className='title'>
					<h2 className='works-title'>My works</h2>
				</div>
				<main className='gallery'>
					{works.map((work, index) => (
						<Work key={work.title} work={work} index={index} />
					))}
				</main>
			</div>
		</div>
	);
};

export default Works;
