const Home = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <section className="">
                <div className="hero-section flex h-[482px] flex-col items-center gap-8 bg-cover bg-bottom px-[10px] py-[20px] sm:px-[20px] sm:py-[40px] md:h-[789px] lg:h-[720px] lg:py-[60px] xl:h-[794px] xl:px-[220px] xl:py-[80px] 2xl:h-[974px]">
                    <div className="z-10 flex flex-col gap-8 sm:container lg:gap-16">
                        <div className="flex flex-col">
                            <h1 className="max-w-[17ch] text-2xl font-bold text-pes_logoblue md:text-5xl 2xl:text-6xl">
                                <span className="text-pes_orange">
                                    Programming{' '}
                                </span>{' '}
                                is now much easier
                            </h1>
                            <p className="max-w-[38ch] text-pes_darkblue sm:max-w-[30ch] md:text-xl 2xl:text-2xl">
                                PES is an interactive platform that will teach
                                you in a more interesting way
                            </p>
                        </div>
                        <div className="flex gap-4 md:gap-8">
                            <button className="h-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 md:text-lg">
                                Join Us
                            </button>
                            <button className="grid h-[53px] w-[53px] place-items-center rounded-full border-2 border-solid border-pes_darkblue bg-pes_white fill-pes_darkblue duration-200 hover:border-pes_orange hover:bg-pes_orange hover:fill-pes_white md:h-16 md:w-16">
                                <svg
                                    className="ml-[3px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="20"
                                    viewBox="0 0 24 28"
                                >
                                    <path d="M23 13.134C23.6667 13.5189 23.6667 14.4811 23 14.866L2 26.9904C1.33333 27.3753 0.500001 26.8942 0.500001 26.1244L0.500002 1.87564C0.500002 1.10584 1.33334 0.624718 2 1.00962L23 13.134Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section */}
            <section className="sm:py[20px] md:py[40px] md:px[30px] mx-auto px-[10px] py-[16px] sm:container lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-xl">
                        About <span className="text-pes_orange">Us</span>
                    </h1>
                    <div className="video-and-paragraphs flex flex-col items-start gap-8 lg:flex-row lg:gap-4">
                        <div className="flex flex-col  gap-4 text-left md:gap-8 lg:text-lg">
                            <p>
                                Programmer’s Elite School is an educational
                                solution which teaches highly-valued programming
                                and artificial intelligence skills to children.
                            </p>
                            <p>
                                We introduce the concepts of computer science,
                                software engineering and artificial intelligence
                                through interactive activities, games, and
                                engaging projects.
                            </p>
                        </div>

                        <div className="video-and-video-subtext flex w-full flex-col items-center gap-2  sm:gap-4">
                            <div className="pes-video grid aspect-video w-full place-items-center rounded-[40px] border-2 border-solid border-pes_darkblue bg-cover">
                                <button className="grid h-[53px] w-[53px] place-items-center rounded-full border-2 border-solid border-pes_darkblue bg-pes_white fill-pes_darkblue duration-200 hover:border-pes_orange hover:bg-pes_orange hover:fill-pes_white md:h-16 md:w-16">
                                    <svg
                                        className="ml-[3px]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="20"
                                        viewBox="0 0 24 28"
                                    >
                                        <path d="M23 13.134C23.6667 13.5189 23.6667 14.4811 23 14.866L2 26.9904C1.33333 27.3753 0.500001 26.8942 0.500001 26.1244L0.500002 1.87564C0.500002 1.10584 1.33334 0.624718 2 1.00962L23 13.134Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-[320px] text-center text-sm sm:w-[440px] md:w-[688px]  md:text-base lg:w-[492px] lg:text-sm">
                                PES Leader granting a shield to the minister of
                                youth and sports
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <section className="md:py[40px] mx-auto py-[16px] lg:py-[80px]">
                <svg
                    className="mx-auto fill-pes_orange"
                    xmlns="http://www.w3.org/2000/svg"
                    width="236"
                    height="3"
                    viewBox="0 0 236 3"
                >
                    <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5C10 2.32843 9.32843 3 8.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" />
                    <path d="M14 1.5C14 0.671573 14.6716 0 15.5 0H52.5C53.3284 0 54 0.671573 54 1.5C54 2.32843 53.3284 3 52.5 3H15.5C14.6716 3 14 2.32843 14 1.5Z" />
                    <path d="M58 1.5C58 0.671573 58.6716 0 59.5 0H176.5C177.328 0 178 0.671573 178 1.5C178 2.32843 177.328 3 176.5 3H59.5C58.6716 3 58 2.32843 58 1.5Z" />
                    <path d="M182 1.5C182 0.671573 182.672 0 183.5 0H220.5C221.328 0 222 0.671573 222 1.5C222 2.32843 221.328 3 220.5 3H183.5C182.672 3 182 2.32843 182 1.5Z" />
                    <path d="M226 1.5C226 0.671573 226.672 0 227.5 0H234.5C235.328 0 236 0.671573 236 1.5C236 2.32843 235.328 3 234.5 3H227.5C226.672 3 226 2.32843 226 1.5Z" />
                </svg>
            </section>

            <section className="sm:py[16px] md:py[40px] md:px[30px] mx-auto px-[10px] py-[16px] sm:container lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 max-w-[30ch] max-w-[830px] text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-xl">
                        Unleash your child’s inner genius with our{' '}
                        <span className="text-pes_orange">
                            fun-filled programming courses
                        </span>
                    </h1>
                    <div className="paragraphs flex max-w-[830px] flex-col items-start gap-8 lg:flex-row lg:gap-4">
                        <div className="flex flex-col  gap-4 text-left lg:gap-8 lg:text-center lg:text-lg">
                            <p>
                                We believe that coding is an essential skill for
                                the future, and we are committed to making it
                                accessible and fun for children of all ages.
                            </p>
                            <p>
                                Our academy offers a wide range of programming
                                courses designed specifically for kids, taught
                                by experienced instructors who are passionate
                                about coding and teaching.
                            </p>
                        </div>
                    </div>
                    <div className="frames flex w-full flex-col gap-4 pt-4 lg:flex-row">
                        <div className="frame learn-at-frame group mx-auto grid aspect-[320/218] w-full place-items-center rounded-[48px] border-r-8 bg-cover after:rounded-[48px] md:w-[491px]">
                            <div className="z-10 flex flex-col gap-4">
                                <h1 className=" text-center text-xl text-pes_white duration-200 group-hover:font-bold group-hover:text-pes_logoblue">
                                    Learn at Centre
                                </h1>
                                <button className="h-fit rounded-full bg-pes_white px-8 py-4 text-sm text-pes_logoblue duration-200 hover:bg-orange-300 hover:text-white group-hover:bg-pes_orange group-hover:text-pes_white md:text-base">
                                    Join Us
                                </button>
                            </div>
                        </div>
                        <div className="frame learn-online-frame group mx-auto grid aspect-[320/218] w-full place-items-center rounded-[48px] border-r-8 bg-cover after:rounded-[48px] md:w-[491px]">
                            <div className="z-10 flex flex-col gap-4">
                                <h1 className=" text-center text-xl text-pes_white duration-200 group-hover:font-bold group-hover:text-pes_logoblue">
                                    Learn Online
                                </h1>
                                <button className="h-fit rounded-full bg-pes_white px-8 py-4 text-sm text-pes_logoblue duration-200 hover:bg-orange-300 hover:text-white group-hover:bg-pes_orange group-hover:text-pes_white md:text-base">
                                    Start Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=""></section>
            <section className=""></section>
            <section className=""></section>
        </div>
    )
}

export default Home
