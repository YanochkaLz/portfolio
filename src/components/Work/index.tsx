import { IWork } from '@/models/IWork';
import { FC } from 'react';
import ImageBlock from '../ImageBlock';
import TextBlock from '../TextBlock';
import './styles.scss';

interface WorkProps {
	work: IWork;
	index: number;
}

const Work: FC<WorkProps> = ({ work, index }) => {

	const isLeftText = index % 2 === 0;

	return (
		<div className='item'>
			<div data-speed='.9' className='gallery__left'>
				{isLeftText ? <TextBlock work={work} /> : <ImageBlock url={work.image} />}
			</div>
			<div data-speed='.95' className='gallery__right'>
				{!isLeftText ? <TextBlock work={work} /> : <ImageBlock url={work.image} />}
			</div>
		</div>
	);
};

export default Work;
