import { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <header className=" z-10 flex justify-between px-4 sm:px-6 md:px-10 h-[90px] sticky top-0 stick">
                <a href="/" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[45px] w-[45px] text-main" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
                <ul className="flex items-center space-x-6 text-sm">
                    <li className="text-light hover:text-main "><a href="/"><span className="text-main">01.</span> About</a></li>
                    <li className="text-light hover:text-main "><a href="/"><span className="text-main">02.</span> Expreience</a></li>
                    <li className="text-light hover:text-main "><a href="/"><span className="text-main">03.</span> Work</a></li>
                    <li className="text-light hover:text-main "><a href="/"><span className="text-main">04.</span> Contact</a></li>
                    <li>
                        <button className="text-main border-2 border-main rounded px-4 py-2">
                            Resume
                        </button>
                    </li>
                </ul>
            </header>
        );
    }
}