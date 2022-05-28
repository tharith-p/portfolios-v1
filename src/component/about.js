import { Component } from "react";

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
		);
	}
}