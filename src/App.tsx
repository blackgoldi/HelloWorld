import './App.css';
import { RoadmapPage } from './pages/RoadmapPage';

function App() {
	return (
		<div>
			<section>
				<p>
					<strong>React</strong> - современная реактивная верстка
				</p>
				<p>
					<strong>RTK</strong> - глобальное хранилище состояний
				</p>
			</section>
			<br />
			<section>
				<RoadmapPage />
			</section>
		</div>
		// <div className='page'>
		//   <div className='carousel'>
		//     <button className='btn up'>Верх</button>
		//     <ul>
		//       <li>Приветствие</li>
		//       <li>Навыки</li>
		//     </ul>
		//     <button className='btn down'>Вниз</button>
		//   </div>
		//   <section id='greetings' className='greetings'>
		//     <div className='box hello'>
		//       <p>Привет</p>
		//     </div>
		//     <div className='box myName'>
		//       <p>
		//         меня зовут
		//       </p>
		//     </div>
		//     <div className='box Bulat'>
		//       <p>
		//         Булат
		//       </p>
		//     </div>
		//     <div className='box fullstackDeveloper'>
		//       <p>
		//         и я <b>Fullstack</b> developer
		//       </p>
		//     </div>
		//   </section>
		//   <section id='skills' className='skills'>

		//   </section>
		// </div>
	);
}

export default App;

