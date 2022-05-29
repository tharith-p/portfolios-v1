import { Component } from "react";

const Techs = [
	"HTML"
	, "CSS"
	, "JAVASCRIPT"
	, "VUE JS"
	, "REACT JS"
	, "NODEJS"
	, "PYTHON"
	, "SQL/PGSQL"
	, "SWIFT"
];
export default class Experience extends Component {
	
	render() {
		return (
			<div className="h-[calc(100vh*.6)] flex items-center">
				<div>
					<div className="flex items-center space-x-3 mb-12">
						<div className="b-section font-bold text-3xl text-light">About</div>
						<hr className="hidden sm:block sm:w-48 md:w-60 border-t-0 border-gray border border-opacity-50" />
					</div>
					<div className="flex space-x-6">
						<div className="w-[60%] flex flex-col space-y-3">
							<p>I’m currently a Web Developer at Cotafer, building things for the web with awesomely talented people. I recently graduated and pursuing a Master’s degree at <a href="https://www.setecu.com/" className="hov:und text-main relative ">Setec University</a>.</p>
							<p>As a software engineer, I don’t stick in one stack. From front-end to back-end, API and database, I also experienced with messaging service, media API, and public API for mobile apps. </p>
							<p>With newer technology and problems, I prefer to keep learning, continue challenging myself, and keep myself up to date.</p>
							<p>Here are a few technologies I’ve been working with recently:</p>
							<ul className="triangle flex flex-wrap">
								{Techs.map((tech, index) =>
									<li key={index} className="w-1/3 transition hover:translate-x-2">
										<small className="">{tech}</small>
									</li>
								)}
							</ul>
						</div>
						<div className="w-[40%]">
							<div className="pl-0 pt-0 pr-4 pb-4 relative group w-full aspect-square">
								<div
									className="absolute border-2 border-main rounded-md inset-0 transition translate-x-4 translate-y-4 m-4 ml-0 mt-0 -z-10 group-hover:translate-x-2 group-hover:translate-y-2">
									&nbsp;</div>
								<img className="rounded-md w-full aspect-square object-cover bg-main bg-opacity-50 transition-[filter] filter grayscale-[50%] hover:grayscale-0"
									src="/me.jpg"
									alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}