import { Component } from "react";

const exps = [
	{
		id			: 'descCotafer'
		, company	: 'Cotafer'
		, website	: 'https://cotafer.group/'
		, duration	: 'Febuary 2020 - Present'
		, position	: 'Web developer'
		, duties	: [
			'API development'
			, 'SQL development'
			, 'Server-side development'
			, 'Client-side development'
			, 'Supporting document for mobile team'
			, 'Test projects and report the error or bug found'
			, 'Managing and guide junior and intern'
			, 'Additional assignment from supervisor'
		]
	}
	, {
		id			: 'descVattanac'
		, company	: 'Vattanac Properties'
		, website	: 'https://www.vattanaccapital.com/'
		, duration	: 'January 2017 - Febuary 2020'
		, position	: 'Receptionist'
		, duties	: [
			'Warming Welcome to the Customers and visitors by greeting them, in person or on the telephone, answering or referring inquiries.'
			, 'Work with the promotion (over 17 stores under <strong>Vattanac Investment Limited</strong>).'
			, 'Record the visitors log book'
			, 'Record the customers came to visit mall and tenants'
			, 'Do reports and present them to the manager such as the figures of visitor visited the mall and tenants'
			, 'Mall inspection'
		]
	}
];
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
							{/* Tab buton */}
							<ul className=" relative mr-4 flex-shrink-0 border-gray border-opacity-10 border-l-2">
								{/* line */}
								<li className="bar absolute transition-all ease-in-out duration-500 top-0 -left-[2px] w-[2px] h-[35px] bg-main rounded-full">&nbsp;</li>
								{/* Tab title */}
								{
									exps.map(exp => 
										<li tabIndex="1">
											<button 
												onClick={this.setTabActive}
												tabIndex="1"
												key={ exp.id }
												datatarget={ exp.id }
												className="h-[35px] text-[13px] transition-all hover:bg-opacity-5 hover:bg-gray hover:text-main font-code tab-toggler text-left px-4 w-full"
											>
												{ exp.company }
											</button>
										</li>
									)
								}
							</ul>
							{/* Tabs content */}
							<div>
								{
									exps.map(exp => 
										<div key={exp.id} className={ this.state.tabActive !== exp.id ? 'hidden tab-content': 'tab-content' } id={exp.id}>
											<div className="text-xl text-light mb-3">{ exp.position } at <a href={ exp.website } className="hov:und text-main">{ exp.company }</a></div>
											<small className="font-mono mb-3 block">{ exp.duration }</small>
											<ul className="triangle flex flex-col space-y-2">
												{
													exp.duties.map((dutie, index) => 
														<li key={ index }>{ dutie }</li>	
													)
												}
												<li></li>
											</ul>
										</div>
									)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}