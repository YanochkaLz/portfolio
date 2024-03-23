import { FC } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/Card/index';

interface ImageBlockProps {
	url: string;
}

const ImageBlock: FC<ImageBlockProps> = ({ url }) => {
	return (
		<div className='gallery__item'>
			<CardContainer className='inter-var cursor-pointer'>
				<CardBody className='relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] sm:w-[30vw] h-auto '>
					<CardItem as='p' translateZ='60'>
						<img className='gallery__img' src={url} alt='Project' />
					</CardItem>
				</CardBody>
			</CardContainer>
		</div>
	);
};

export default ImageBlock;
