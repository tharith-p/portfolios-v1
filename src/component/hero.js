import { Component } from "react";

export default class Hero extends Component {

    render() {
        return (
            <div className="mx-4 sm:mx-16 md:mx-40">
				<div className="h-[calc(100vh-90px)] flex items-center">
					<div className="flex flex-col space-y-7">
						<div className="text-main font-mono">Hi there, my name is</div>
						<h1 className="text-light text-7xl font-bold">Tharith Phon</h1>
						<div className="text-7xl font-bold w-full md:w-10/12">I bing your ideas to life with web techonology.</div>
						{/* <h2 className="text-7xl font-bold w-full md:w-10/12">I build things for the web.</h2> */}
						<div className="w-full md:w-6/12">I'm a web developer from Phnom Penh, Cambodia. I'm currently the lead
							developer at a local techonology company, <a href="https://cotafer.group/" className="hov:und text-main">Cotafer</a>.</div>
					</div>
				</div>
			</div>
        );
    }
}