import { Component } from "react";

export default class Experience extends Component {
	constructor(props) {
		super(props);
		this.state 			= { tabActive: 'descCotafer' };
		this.setTabActive 	= this.setTabActive.bind(this);
	}
	
	setTabActive(el) {
		let toActive = el.target.getAttribute('datatarget');
		this.setState(() => ({ tabActive: toActive }));
		this.setTabLineStyle(el.target);
	}
	setTabLineStyle(tab) {
		let 
			bar = document.querySelector('.tab .bar'),
			top = tab.offsetTop;

		bar.style.top = top + 'px';
	}
	render() {
		return (
			<div className="h-[calc(100vh*.8)] flex items-center">
				<div>
					<div className="flex items-center space-x-3 mb-12">
						<div className="b-section font-bold text-3xl text-light">Where I’ve Worked</div>
						<hr className="hidden sm:block sm:w-48 md:w-60 border-t-0 border-gray border border-opacity-50" />
					</div>
					<div className="h-[300px] mt-11">
						<div className="tab flex items-start">
							<ul className=" relative mr-4 flex-shrink-0 border-gray border-opacity-10 border-l-2">
								{/* line */}
								<li className="bar absolute transition-all ease-in-out duration-500 top-0 -left-[2px] w-[2px] h-[35px] bg-main rounded-full">&nbsp;</li>
								{/* Tab title */}
								<li tabIndex="1"><button onClick={this.setTabActive} tabIndex="1" datatarget="descCotafer" className="h-[35px] text-[13px] transition-all hover:bg-opacity-5 hover:bg-gray hover:text-main font-code tab-toggler text-left px-4 w-full">Cotafer</button></li>
								<li tabIndex="1"><button onClick={this.setTabActive} tabIndex="1" datatarget="descVattanac" className="h-[35px] text-[13px] transition-all hover:bg-opacity-5 hover:bg-gray hover:text-main font-code tab-toggler text-left px-4 w-full">Vattanac Properties</button></li>
							</ul>
							<div>
								<div className={ this.state.tabActive != 'descCotafer' ? 'hidden tab-content': 'tab-content'} id="descCotafer">
									<div className="text-xl text-light mb-3">Web developer at <span className="text-main">Cotafer</span></div>
									<small className="font-mono mb-3 block">Febuary 2020 - Present</small>
									<ul className="triangle flex flex-col space-y-2">
										<li className="font-mono text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, autem!</li>
										<li className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A debitis eaque aperiam?</li>
										<li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid quidem nam dolore cupiditate perferendis ratione.</li>
									</ul>
								</div>
								<div className={this.state.tabActive != 'descVattanac' ? "hidden tab-content" : "tab-content"} id="descVattanac">
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
		);
	}

}