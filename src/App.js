import './App.css';
import React, {Component} from 'react';


function App() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <header>
                <div className="relative bg-white dark:bg-gray-900">
                    <div
                        className="max-w-7xl mx-auto px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex sm:flex-row flex-col justify-between">
                            <div className="flex justify-start w-full">
                                <img className="h-10 w-auto sm:h-16"
                                     src="logo_purple.svg"
                                     alt=""/>
                                <div className="pl-3 sm:pl-6 py-1 text-3xl sm:text-4xl align-middle font-extrabold my-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 dark:from-purple-400 dark:to-indigo-300">
                                    David Chorvinsky
                                </div>
                            </div>
                            <div className="flex md:order-2 justify-end pt-4 sm:pt-0 my-auto">
                                {/*<a rel="noopener noreferrer" href="https://www.instagram.com/echoofhaiku/"*/}
                                {/*   target="_blank"*/}
                                {/*   className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                                {/*    <span className="sr-only">Instagram</span>*/}
                                {/*    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24"*/}
                                {/*         aria-hidden="true">*/}
                                {/*        <path fill-rule="evenodd"*/}
                                {/*              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"*/}
                                {/*              clip-rule="evenodd"/>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}

                                {/*<a rel="noopener noreferrer" href="https://github.com/unlockedSound" target="_blank"*/}
                                {/*   className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                                {/*    <span className="sr-only">GitHub</span>*/}
                                {/*    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24"*/}
                                {/*         aria-hidden="true">*/}
                                {/*        <path fill-rule="evenodd"*/}
                                {/*              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
                                {/*              clip-rule="evenodd"/>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}

                                {/*<a rel="noopener noreferrer" href="tel:3018073848"*/}
                                {/*   className="text-gray-400 hover:text-gray-600">*/}
                                {/*    <span className="sr-only">Cell Phone</span>*/}
                                {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8"*/}
                                {/*         fill="none"*/}
                                {/*         viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                                {/*              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}
                                {/*<a rel="noopener noreferrer"*/}
                                {/*   href="https://s3.us-west-2.amazonaws.com/chorvinsky.com/david_chorvinsky_resume.pdf"*/}
                                {/*   target="_blank" className="text-gray-400 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 px-2 md:px-4">*/}
                                {/*    <span className="sr-only">Resume</span>*/}
                                {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8"*/}
                                {/*         fill="none"*/}
                                {/*         viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                                {/*              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}


                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="relative">
                    <div className="bg-gray-100 dark:bg-gray-800">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <div className="relative lg:pt-16 pb-4 md:pb-14 overflow-hidden">

                                <div className="relative">
                                    <div
                                        className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                        <div
                                            className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                            <div>
                                                <div>
                <span
                    className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                     </svg>
                </span>
                                                </div>
                                                <div className="mt-6">
                                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                                                        A drive to build;
                                                        <br/>
                                                        zigzags to get there
                                                    </h2>
                                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                                        I haven't had a straight path to where I am today but what has
                                                        been true the entire time is a singular passion to create.
                                                        Inspired by my late entrepreneurial father, a family business,
                                                        and
                                                        the problem solving fundamentals learned studying
                                                        Mechanical Engineering, I have chased after whatever the
                                                        opportunity might be to
                                                        create including: an APIs for address data, a design system and
                                                        reusable application for local government data visualization web
                                                        apps, a Discord bot to analyze video
                                                        game economies, a specialized event registration systems, and
                                                        more.
                                                        If you have a project, a problem to solve, or a crazy idea that
                                                        just might work then I can't wait to hear more.
                                                    </p>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-12 sm:mt-16 lg:mt-0">
                                            <div
                                                className="sm:pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">

                                                <div className="flow-root">
                                                    <ul className="-mb-8">

                                                        {/*                                            <li>*/}
                                                        {/*                                                <div className="relative pb-8">*/}
                                                        {/*                                                    <span*/}
                                                        {/*                                                        className="absolute top-4 left-5 -ml-px h-full w-0.5 bg-gray-200"*/}
                                                        {/*                                                        aria-hidden="true"></span>*/}
                                                        {/*                                                    <div className="relative flex space-x-3">*/}
                                                        {/*                                                        <div>*/}
                                                        {/*<span className="h-10 w-10 rounded-full bg-green-800 flex items-center justify-center">*/}
                                                        {/*    <img className="p-1" src="ut0g7w9ejjvqxdelvyg8.svg"/>*/}
                                                        {/*</span>*/}
                                                        {/*                                                        </div>*/}
                                                        {/*                                                        <div*/}
                                                        {/*                                                            className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">*/}
                                                        {/*                                                            <div className="w-72 sm:w-2/3 lg:w-none">*/}
                                                        {/*                                                                <p className="text-sm text-gray-600">Graduated*/}
                                                        {/*                                                                    <span*/}
                                                        {/*                                                                        className="font-medium text-gray-900"> Sandy*/}
                                                        {/*                                                                        Spring Friends School</span>*/}
                                                        {/*                                                                </p>*/}
                                                        {/*                                                            </div>*/}
                                                        {/*                                                            <div*/}
                                                        {/*                                                                className="text-right text-sm whitespace-nowrap text-gray-600">*/}
                                                        {/*                                                                <p>Spring 2010*/}
                                                        {/*                                                                </p>*/}
                                                        {/*                                                            </div>*/}
                                                        {/*                                                        </div>*/}
                                                        {/*                                                    </div>*/}
                                                        {/*                                                </div>*/}
                                                        {/*                                            </li>*/}

                                                        {/*                                            <li>*/}
                                                        {/*                                                <div className="relative pb-8">*/}
                                                        {/*                                                    <span*/}
                                                        {/*                                                        className="absolute top-4 left-5 -ml-px h-full w-0.5 bg-gray-200"*/}
                                                        {/*                                                        aria-hidden="true"/>*/}
                                                        {/*                                                    <div className="relative flex space-x-3">*/}
                                                        {/*                                                        <div>*/}
                                                        {/*<span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">*/}
                                                        {/*    <img className="p-1 rounded-2xl" src="umd.png"/>*/}
                                                        {/*</span>*/}
                                                        {/*                                                        </div>*/}
                                                        {/*                                                        <div*/}
                                                        {/*                                                            className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">*/}
                                                        {/*                                                            <div className="w-72 sm:w-2/3 lg:w-none">*/}
                                                        {/*                                                                <p className="text-sm text-gray-600">Started*/}
                                                        {/*                                                                    at <span*/}
                                                        {/*                                                                        className="font-medium text-gray-900">University of Maryland: College Park </span>*/}
                                                        {/*                                                                    as a <span*/}
                                                        {/*                                                                        className="font-medium text-gray-900">Mechanical Engineer</span>*/}
                                                        {/*                                                                </p>*/}
                                                        {/*                                                            </div>*/}
                                                        {/*                                                            <div*/}
                                                        {/*                                                                className="md:text-right text-sm whitespace-nowrap text-gray-600">*/}
                                                        {/*                                                                <p>Fall 2010</p>*/}
                                                        {/*                                                            </div>*/}
                                                        {/*                                                        </div>*/}
                                                        {/*                                                    </div>*/}
                                                        {/*                                                </div>*/}
                                                        {/*                                            </li>*/}

                                                        {/*                                                        <li>*/}
                                                        {/*                                                            <div className="relative pb-8">*/}
                                                        {/*                                                                <span*/}
                                                        {/*                                                                    className="absolute top-4 left-5 -ml-px h-full w-0.5 bg-gray-200"*/}
                                                        {/*                                                                    aria-hidden="true"></span>*/}
                                                        {/*                                                                <div className="relative flex space-x-3">*/}
                                                        {/*                                                                    <div>*/}
                                                        {/*            <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">*/}
                                                        {/*                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current text-purple-600"*/}
                                                        {/*                     viewBox="0 0 20 20">*/}
                                                        {/*  <path fill-rule="evenodd"*/}
                                                        {/*        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"*/}
                                                        {/*        clip-rule="evenodd"/>*/}
                                                        {/*</svg>*/}
                                                        {/*            </span>*/}
                                                        {/*                                                                    </div>*/}
                                                        {/*                                                                    <div*/}
                                                        {/*                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">*/}
                                                        {/*                                                                        <div className="w-72 sm:w-2/3 lg:w-none">*/}
                                                        {/*                                                                            <sp className="text-sm text-gray-600">Switched*/}
                                                        {/*                                                                                to <span*/}
                                                        {/*                                                                                    className="font-medium text-gray-900">Geospatial Information Systems </span>*/}
                                                        {/*                                                                                degree*/}
                                                        {/*                                                                            </sp>*/}
                                                        {/*                                                                        </div>*/}
                                                        {/*                                                                        <div*/}
                                                        {/*                                                                            className="text-right text-sm whitespace-nowrap text-gray-600">*/}
                                                        {/*                                                                            <p>Fall 2014</p>*/}
                                                        {/*                                                                        </div>*/}
                                                        {/*                                                                    </div>*/}
                                                        {/*                                                                </div>*/}
                                                        {/*                                                            </div>*/}
                                                        {/*                                                        </li>*/}

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                                <img className="p-1 rounded-full" src="umd.png" alt="University of Maryland logo"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Graduated with a <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">B.S. in GIS with Honors
                                                                                    </span></p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Fall 2015</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="flag of Washington D.C." src="dcflag.jpg"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">Started
                                                                                as a <span
                                                                                    className="font-medium text-gray-900 dark:text-gray-100"> Front End Developer </span>
                                                                                and <span
                                                                                    className="font-medium text-gray-900 dark:text-gray-100">UI/UX Designer </span>
                                                                                with <span
                                                                                    className="font-medium text-gray-900 dark:text-gray-100">DC
                                                                                    Office of the Chief Technology
                                                                                    Officer: Data Team</span>
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Spring 2016</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="Flag of Washington D.C." src="dcflag.jpg"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Took on <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">Product Management </span>
                                                                                as focus in addition to existing roles
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Summer 2017</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="SpkEz logo" src="spkez.png"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">Opened <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100"> SpkEz </span><span
                                                                                className="italic text-gray-600 dark:text-gray-300">(Speakeasy Tango LLC) </span>
                                                                                to work on developing projects starting
                                                                                with a bespoke registration system for
                                                                                tango events
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Winter 2018</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"/>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="Buyer's Guide logo of a bag with a stack of coins" src="auction_bot2.png"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">Created <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100"> Buyer's Guide: Auction Bot </span>
                                                                                a Discord bot that does economic
                                                                                analysis of World of Warcraft's in game
                                                                                economy with&nbsp;
                                                                                <a rel="noopener noreferrer"
                                                                                   className="text-blue-400 underline"
                                                                                   target="_blank"
                                                                                   href="https://www.linkedin.com/in/reed-trevelyan-42247b168/">
                                                                                    Reed Trevelyan</a> as the project's
                                                                                developer
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Fall 2018</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                <span
                                                                    className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                    aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="Flag of Washington D.C." src="dcflag.jpg"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Advanced to <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">Program Manager </span>
                                                                                leading team of Developers and
                                                                                implementing Agile practices
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Fall 2019</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="relative pb-8">
                                                                 <span
                                                                     className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                                                                     aria-hidden="true"></span>
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">                <img className="p-1" alt="Phenom company logo" src="phenom_logo.png"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Joined <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">Phenom </span><span
                                                                                className="italic">formerly <span
                                                                                className="text-gray-700 dark:text-gray-400">Phenom People </span></span>
                                                                                as lead <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">Product Manager </span> for
                                                                                CX platform
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Winter 2021</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="relative pb-8">
                                                                <div className="relative flex space-x-3">
                                                                    <div>
            <span className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                <img className="p-1" alt="Capital One Finance Logo" src="c1logo.png"/>
            </span>
                                                                    </div>
                                                                    <div
                                                                        className="min-w-0 flex-wrap-reverse lg:flex-1 pt-1.5 flex justify-between md:space-x-4 w-72 sm:w-8/12 md:w-10/12 lg:w-none">
                                                                        <div className="w-72 sm:w-2/3 lg:w-none">
                                                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                                Stepped into credit policy with <span
                                                                                className="font-medium text-gray-900 dark:text-gray-100">Capital One's </span>
                                                                                Card organization leading authoring of rules and logic.
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="text-right text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                                                            <p>Spring 2022</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>


                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<p className="text-center text-sm font-semibold uppercase text-gray-600 tracking-wide">*/}
                            {/*    Skills*/}
                            {/*</p>*/}
                            {/*<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">*/}
                            {/*    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">*/}
                            {/*        <img className="h-20" src="agile3.svg"*/}
                            {/*             alt="Agile"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">*/}
                            {/*        <img className="h-20" src="UIUX4.svg"*/}
                            {/*             alt="UI/UX"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">*/}
                            {/*        <img className="h-20" src="webdev.svg"*/}
                            {/*             alt="Web Development"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">*/}
                            {/*        <img className="h-20"*/}
                            {/*             src="management.svg"*/}
                            {/*             alt="Management"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
                        <div
                            className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                A few projects on and off the job
                            </h2>
                            <p className="mt-4 max-w-3xl text-lg text-purple-200">
                                No matter where I am I'm looking for problems to solve and projects to work on. Both at
                                work and home I'm driven by a desire to create which has led to some of the following
                                projects.
                            </p>
                            <div
                                className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                <div>
                                    <div>
<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 7H7v6h6V7z"/>
  <path fill-rule="evenodd"
        d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
        clip-rule="evenodd"/>
</svg>
</span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white"><a rel="noopener noreferrer"
                                                                                      className="underline"
                                                                                      target="_blank"
                                                                                      href="https://wowbuyersguide.com/">Buyer's
                                            Guide: Auction Bot</a></h3>
                                        <p className="mt-2 text-base text-purple-200">
                                            After a decade plus of fascination and tracking of the economy within World
                                            of Warcraft, <a href="https://www.linkedin.com/in/reed-trevelyan-42247b168/" target="_blank" rel="noopener noreferrer" className="underline"> a friend</a> and I teamed up to bring my complex analysis to the
                                            masses in the form of a responsive bot that empowers every player to get the
                                            best price on anything available on the in-game marketplace. The bot has
                                            seen over 100 installs and 1000 users engage with it as well as assisting me
                                            personally in netting 2 million of in-game currency and saving millions more
                                            due to optimizing decisions with data.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div>
<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd"
        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
        clip-rule="evenodd"/>
</svg>
</span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">DC
                                            COVID19 Check</h3>
                                        <p className="mt-2 text-base text-purple-200">
                                            A site quickly stood up in response to the COVID19 pandemic to support those
                                            who recieved mobile exposure notifications of timely information and next
                                            steps.
                                            Project showcased the results of efforts to implement agile development,
                                            management and
                                            product practices over the prior 9 months allowing for a full release less
                                            than a month after initial pandemic declaration.
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <div>
<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path
      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
</svg>
</span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">SpkEz Event Registration</h3>
                                        <p className="mt-2 text-base text-purple-200">
                                            A bespoke tango registration system designed to allow for a simple and
                                            intuitive registration process for attendees and automated leader-follower
                                            balancing for organizers. Powered multiple events I ran as well as being
                                            sold to two events: Folklorica in Montreal and the Nashville Tango Marathon.
                                        </p>
                                    </div>
                                </div>

                                {/*                                <div>*/}
                                {/*                                    <div>*/}
                                {/*<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">*/}
                                {/*    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                {/*         stroke="currentColor" aria-hidden="true">*/}
                                {/*<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>*/}
                                {/*</svg>*/}
                                {/*</span>*/}
                                {/*                                    </div>*/}
                                {/*                                    <div className="mt-6">*/}
                                {/*                                        <h3 className="text-lg font-medium text-white">Dungeon Master and Game Designer</h3>*/}
                                {/*                                        <p className="mt-2 text-base text-purple-200">*/}
                                {/*                                            Having learned D&D in middle school I've been designing and running games*/}
                                {/*                                            consistently since around 2012. With a passion for story telling and design*/}
                                {/*                                            combining to create complex tales and locations like <a rel="noopener noreferrer"*/}
                                {/*                                            className="underline" target="_blank"*/}
                                {/*                                            href="#">Aldermoure</a>*/}
                                {/*                                        </p>*/}
                                {/*                                    </div>*/}
                                {/*                                </div>*/}

                                <div>
                                    <div>
<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"/>
</svg>
</span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white"><a rel="noopener noreferrer"
                                                                                      className="underline"
                                                                                      target="_blank"
                                                                                      href="https://sexoffender.dc.gov/">DC
                                            Sex Offender
                                            Search</a></h3>
                                        <p className="mt-2 text-base text-purple-200">
                                            Search application for Offender Registry data as part of the Metropolitan Police Department's Public Safety unit. A rebuild of an over a decade old
                                            web application. Fully developed, tested, and released in less than half a
                                            year reducing time to release by greater than 50% from historic standards.
                                        </p>
                                    </div>
                                </div>

                                {/*                                <div>*/}
                                {/*                                    <div>*/}
                                {/*<span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">*/}
                                {/*    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                {/*         stroke="currentColor" aria-hidden="true">*/}
                                {/*<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                                {/*      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>*/}
                                {/*</svg>*/}
                                {/*</span>*/}
                                {/*                                    </div>*/}
                                {/*                                    <div className="mt-6">*/}
                                {/*                                        <h3 className="text-lg font-medium text-white">Top Tier Warlock</h3>*/}
                                {/*                                        <p className="mt-2 text-base text-purple-200">*/}
                                {/*                                            Filled some time during the 2020 pandemic and rose to the 385th rank for*/}
                                {/*                                            the 9.0 Mythic+ season out of over <sup>1</sup>&frasl;<sub>4</sub> million*/}
                                {/*                                            warlocks world wide.*/}
                                {/*                                        </p>*/}
                                {/*                                    </div>*/}
                                {/*                                </div>*/}

                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gray-900">
                        <div className="h-80 absolute inset-x-0 bottom-0 ">
                            <div className="h-full w-full ">
                                <div className="h-full xl:relative ">
                                    <img alt="David Chorvinsky dancing Argentine Tango. Photo by Nikos Z. Photography"
                                         className="h-full w-full object-cover opacity-25"
                                         src="tango.jpg"/>
                                    <div aria-hidden="true"
                                         className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 "></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 ">
                                <h2 className="text-sm font-semibold tracking-wide uppercase">
                                <span
                                    className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Other Stuff</span>
                                </h2>
                                <p className="mt-3 text-3xl font-extrabold text-white">A small slice of hobbies and nifty
                                    tidbits</p>
                                <p className="mt-5 text-lg text-gray-300">Either as an extension of the drive to create or
                                    just a bit of a side hobby I find more than a few ways to stay busy</p>

                                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                    <p className="">
                                        <div
                                            className="text-2xl font-bold text-white flex justify-start">
                                            <div
                                                className=" my-auto">
                                                <img src="dnd.png" alt="Dungeons and Dragons logo"
                                                     className="h-8 pr-2 max-w-none"/>
                                            </div>
                                            <span>Creator and Dungeon Master</span>
                                        </div>
                                        <span className="mt-1 block text-base text-gray-300">I've been playing, and almost exclusively running, Dungeons and Dragons campaigns since middle school. I focus on story telling and expanding my home built game world through player interaction with it. Especially deep love of <a
                                            rel="noopener noreferrer"
                                            className="font-medium text-white underline"
                                            href="https://cdn.discordapp.com/attachments/750163510884827157/773750814011162644/IMG_4282.jpg">map making</a> to bring the world to life.</span>
                                    </p>

                                    <p>
                                        <div
                                            className="text-2xl font-bold text-white flex justify-start">
                                            <div
                                                className=" my-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-10 pr-1 -ml-1 my-auto"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </div>
                                            <span className="block text-2xl font-bold text-white">Passion for Creating and Experiencing Cooking</span>
                                        </div>
                                        <span className="mt-1 block text-base text-gray-300">From working in a Moroccan French fusion restaurant instead of summer camp in grade school to being fed blowfish by Iron Chef Japanese Morimoto. I have a long and storied history with cuisine.</span>
                                    </p>

                                    <p>
                                        <div
                                            className="text-2xl font-bold text-white flex justify-start">
                                            <div
                                                className="my-auto">
                                                <img src="tango.png" alt="two dancers in Argentine Tango pose"
                                                     className="h-8 w-none max-w-none pr-2"/>
                                            </div>
                                            <span
                                                className="block text-2xl font-bold text-white">Tanguero and Organizer</span>
                                        </div>
                                        <span className="mt-1 block text-base text-gray-300">Picking up Argentine Tango in the Fall of 2010 I have danced more nights away than I can count. Some of those nights spent at my own events from house parties to festivals with a few hundred people.</span>
                                    </p>

                                    <p>
                                        <div className="text-2xl font-bold text-white flex justify-start">

                                            <div className=" my-auto">
                                                <img src="warlock.png" className="h-8 pr-2"
                                                     alt="warlock class icon"/>
                                            </div>
                                            <span
                                                className="block text-2xl font-bold text-white">High Ranked Warlock</span>
                                        </div>
                                        <span className="mt-1 block text-base text-gray-300">Peaked at rank <a
                                            rel="noopener noreferrer"
                                            href="https://raider.io/characters/us/arthas/Brokenkey"
                                            className="font-medium text-white underline"> 300 for Mythic+ Warlocks</a> in World of Warcraft staying consistently within the top .5% of all Warlock during Shadowlands season 1 and 2.</span>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-white to-white dark:from-gray-800 dark:to-indigo-900">
                        <div
                            className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                                <span className="block">Want to get in touch?</span>
                                <span
                                    className="block bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-indigo-500 dark:to-purple-300 bg-clip-text text-transparent">Feel free to reach out if you would be interested in learning more about myself, my projects, or you think I might be a good fit for one of your own.</span>
                            </h2>
                            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                                <a rel="noopener noreferrer" href="mailto:david@chorvinsky.com"
                                   className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 dark:text-indigo-50 bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-800">
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-50 dark:bg-gray-800" aria-labelledby="footer-heading">
                <div className="max-w-7xl mx-auto pb-5 px-4 sm:px-6 lg:px-8 pt-4">
                    <div
                        className="border-gray-200 dark:border-gray-900 md:flex md:items-center md:justify-between">

                        <p className="mt-8 text-base text-gray-400 dark:text-gray-100 md:mt-0 md:order-1">
                            &copy; 2021 David Chorvinsky, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default App;
