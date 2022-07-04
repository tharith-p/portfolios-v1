import { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: true };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(state => ({
            isShow: !state.isShow
        }));
    }
    render() {
        return (
            <div className=" sticky top-0 z-50">
                <header className="z-50 flex px-4 sm:px-6 md:px-10 transition-[height] h-[70px] md:h-[90px] sticky top-0 stick">
                    <a href="/" className="flex items-center mr-auto">
                        <p className="font-[Pacifico] text-main transition-[font-size] text-2xl md:text-3xl drop-shadow-2xl">Tharith</p>
                    </a>
                    <ul className="items-center space-x-6 text-sm hidden md:flex">
                        <li className="text-light hover:text-main "><a href="/" className="hov:und"><span className="text-main">01.</span> About</a></li>
                        <li className="text-light hover:text-main "><a href="/" className="hov:und"><span className="text-main">02.</span> Expreience</a></li>
                        <li className="text-light hover:text-main "><a href="/" className="hov:und"><span className="text-main">03.</span> Work</a></li>
                        <li className="text-light hover:text-main "><a href="/" className="hov:und"><span className="text-main">04.</span> Contact</a></li>
                        <li>
                            <a href="tharith_PHORN.pdf" download className="text-main border-2 border-main rounded px-4 py-2">
                                Resume
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <button className="md:hidden transition-colors hover:bg-blue-200 p-2 rounded" onClick={this.toggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-main" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </header>
                <div className={"fixed inset-0 bg-dark-400 md:hidden z-40 transition-transform " + (this.state.isShow ? "translate-x-0" : "translate-x-full")}>
                    <ul className="pt-[80px] px-10">
                        <li className="py-2"><a className="hov:und" href="/">About</a></li>
                        <li className="py-2"><a className="hov:und" href="/">Expreience</a></li>
                        <li className="py-2"><a className="hov:und" href="/">Work</a></li>
                        <li className="py-2"><a className="hov:und" href="/">Contact</a></li>
                        <li className="py-2">
                            <a href="/tharith_PHORN.pdf" download className="py-2 px-5 rounded border-main border-2 transition-colors hover:bg-blue-200 text-main hover:text-dark-400">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
