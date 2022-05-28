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
								<div className={ this.state.tabActive !== 'descCotafer' ? 'hidden tab-content': 'tab-content'} id="descCotafer">
									<div className="text-xl text-light mb-3">Web developer at <a href="https://cotafer.group/" className="text-main">Cotafer</a></div>
									<small className="font-mono mb-3 block">Febuary 2020 - Present</small>
									<ul className="triangle flex flex-col space-y-2">
										<li>API development</li>
										<li>SQL development</li>
										<li>Server-side development</li>
										<li>Client-side development</li>
										<li>Supporting document for mobile team</li>
										<li>Test projects and report the error or bug found</li>
										<li>Managing and guide junior and intern</li>
										<li>Additional assignment from supervisor</li>
									</ul>
								</div>
								{/* Vattanac */}
								<div className={this.state.tabActive !== 'descVattanac' ? "hidden tab-content" : "tab-content"} id="descVattanac">
									<div className="text-xl text-light mb-3">Receptionist at <a href="https://www.vattanaccapital.com/" className="text-main">Vattanac Properties</a></div>
									<small className="font-mono mb-3 block">January 2017 - Febuary 2020</small>
									<ul className="triangle flex flex-col space-y-2">
										<li>Warming Welcome to the Customers and visitors by greeting them, in person or on the telephone, answering or referring inquiries.</li>
										<li>Work with the promotion (over 17 stores under <strong>Vattanac Investment Limited</strong>).</li>
										<li>Record the visitors log book</li>
										<li>Record the customers came to visit mall and tenants</li>
										<li>Do reports and present them to the manager such as the figures of visitor visited the mall and tenants</li>
										<li>Mall inspection</li>
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