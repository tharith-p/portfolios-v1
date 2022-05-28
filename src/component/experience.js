import { Component } from "react";

export default class Experience extends Component {
	render() {
		return (
			<div className="flex flex-col">
				<div className="w-full md:w-8/12 mx-auto">
					<div className="h-[calc(100vh*.6)] flex items-center">
						<div>
							<div className="flex items-center space-x-3 mb-12">
								<div className="b-section font-bold text-3xl text-light">About</div>
								<hr className="hidden sm:block sm:w-48 md:w-60 border-t-0 border-gray border border-opacity-50" />
							</div>
							<div className="flex space-x-6">
								<div className="w-[60%] flex flex-col space-y-3">
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
										repellendus
										debitis iure ea veniam quia aspernatur, commodi incidunt magni?</p>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur porro
										laborum alias
										magni quia.</p>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iure!</p>
									<p>Here are a few technologies I’ve been working with recently:</p>
									<ul className="triangle flex flex-wrap">
										<li className="w-1/3 transition hover:translate-x-2">
											<small className="">HTML</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>CSS</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>JAVASCRIPT</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>VUE JS</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>REACT JS</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>NODEJS</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>PYTHON</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>PHP</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>SQL/PGSQL</small>
										</li>
										<li className="w-1/3 transition hover:translate-x-2">
											<small>SWIFT</small>
										</li>
									</ul>
								</div>
								<div className="w-[40%]">
									<div className="pl-0 pt-0 pr-4 pb-4 relative group w-full aspect-square">
										<div
											className="absolute border-2 border-main rounded-md inset-0 transition translate-x-4 translate-y-4 m-4 ml-0 mt-0 -z-10 group-hover:translate-x-2 group-hover:translate-y-2">
											&nbsp;</div>
										<img className="rounded-md w-full aspect-square object-cover bg-main bg-opacity-50"
											src="/me.jpg"
											alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-[calc(100vh*.8)] flex items-center">
						<div>
							<div className="flex items-center space-x-3 mb-12">
								<div className="b-section font-bold text-3xl text-light">Where I’ve Worked</div>
								<hr className="hidden sm:block sm:w-48 md:w-60 border-t-0 border-gray border border-opacity-50" />
							</div>
							<div className="h-[300px] mt-11">
								<div className="tab flex items-start">
									<ul className=" relative mr-4 flex-shrink-0 border-gray border-opacity-10 border-l-2">
										<li className="bar absolute transition-all ease-in-out duration-500 top-0 -left-[2px] w-[2px] bg-main rounded-full">&nbsp;</li>
										<li data-target="#descCotafer" tabIndex="1" className="text-[13px] py-2 px-4 transition-all hover:bg-opacity-5 hover:bg-gray hover:text-main font-code tab-toggler">Cotafer</li>
										<li data-target="#descVattanac" tabIndex="1" className="text-[13px] py-2 px-4 transition-all hover:bg-opacity-5 hover:bg-gray hover:text-main font-code  tab-toggler">Vattanac Properties</li>
									</ul>
									<div>
										<div className="tab-content" id="descCotafer">
											<div className="text-xl text-light mb-3">Web developer at <span className="text-main">Cotafer</span></div>
											<small className="font-mono mb-3 block">Febuary 2020 - Present</small>
											<ul className="triangle flex flex-col space-y-2">
												<li className="font-mono text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, autem!</li>
												<li className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis eaque aperiam?</li>
												<li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid quidem nam dolore cupiditate perferendis ratione.</li>
											</ul>
										</div>
										<div className="tab-content hidden" id="descVattanac">
											<div className="text-xl text-light mb-3">Senior Receptionist at <span className="text-main">Vattanac Properties</span></div>
											<small className="font-mono mb-3 block">January 2017 - Febuary 2020</small>
											<ul className="flex flex-col space-y-2">
												<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, autem!</li>
												<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis eaque aperiam?</li>
												<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid quidem nam dolore cupiditate perferendis ratione.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		console.log(document.querySelector('#descCotafer'))
	}
}