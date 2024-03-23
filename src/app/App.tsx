import Header from '@/components/Header';
import Works from '@/components/Works';
import WithScrollAnimation from '@/hoc/WithScrollAnimation';

function App() {
	return (
		<>
			<WithScrollAnimation>
				<div className='wrapper'>
					<div className='content'>
						<Header />
						<Works />
					</div>
				</div>
			</WithScrollAnimation>
			<canvas className='particles' data-color='#BE9164'></canvas>
		</>
	);
}

export default App;
