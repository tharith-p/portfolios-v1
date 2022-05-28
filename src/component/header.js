import { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <header className=" z-10 flex justify-between px-4 sm:px-6 md:px-10 h-[90px] sticky top-0 stick">
                <a href="/" className="flex items-center">
                    <p className="font-[Pacifico] text-main text-3xl drop-shadow-2xl">Tharith</p>
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