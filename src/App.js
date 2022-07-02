import About from './component/about';
import Experience from './component/experience';
import Header from './component/header';
import Hero from './component/hero';
import Project from './component/project';

function App() {
	

	return (
		<div className="App">
			<Header />
			<Hero />
			<div className="flex flex-col">
				<div className="w-full md:w-8/12 mx-auto">
					<About />
					<Experience />
				</div>
			</div>
			<Project />
		</div>
	);
}

export default App;
