import { Component } from "react";


export default class Project extends Component {
	
	render() {
		return (
			<div className="flex flex-col">
				<div className="w-full md:w-8/12 mx-auto">
					<div className="h-[calc(100vh*.6)] flex items-center">
						<div>
							<div className="flex items-center space-x-3 mb-12">
								<div className="b-section font-bold text-3xl text-light">FEATURED PROJECTS</div>
								<hr className="hidden sm:block sm:w-48 md:w-60 border-t-0 border-gray border border-opacity-50" />
							</div>
							<div className="flex space-x-14">
								<div className="w-[70%]">
									<div className="pl-0 pt-0 pr-4 pb-4 relative group w-full aspect-square">
										<img className="w-full transition-[filter] filter grayscale-[50%] hover:grayscale-0"
											src="/image/g-web.png"
											alt="" />
									</div>
								</div>
								<div className="w-[30%] flex flex-col space-y-3">
									<h2 className=" text-xl">Gonoka</h2>
									<p>Gonoka is an ebook distribution platform that encourage you to be the very best version of you by mean of reading.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}