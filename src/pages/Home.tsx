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
            <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[20px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
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
            <section className="mx-auto py-[16px] md:py-[40px] lg:py-[80px]">
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

            {/* Unleash Section */}
            <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 max-w-[30ch] text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-2xl">
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

            {/* Divider */}
            <section className="mx-auto py-[16px] md:py-[40px] lg:py-[80px]">
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

            {/* Make your child section */}
            <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="businessman-img mx-auto aspect-[320/278] w-full bg-cover md:aspect-[526/351] md:w-[728px] lg:h-[425px] lg:w-[405px]"></div>
                    <div className="flex flex-col gap-4 xl:gap-8">
                        <h1 className="text-left text-xl font-bold text-pes_darkblue md:text-center lg:text-left lg:text-2xl">
                            Make your child a <br className="hidden lg:block" />
                            <span className="text-pes_orange">
                                future businessman
                            </span>
                        </h1>
                        <p className="text-pes_darkbluegray">
                            Teaching entrepreneurship to kids is a great way to
                            instill the valuable skills and the correct mindset
                            early on.
                        </p>
                        <p className="text-pes_darkbluegray">
                            Our courses are approved by successful
                            entrepreneurs, to teach entrepreneurship to
                            children, to be able to start their own business an
                            earlier age than others.{' '}
                        </p>
                        <p className="text-pes_darkbluegray">
                            Your children will be grateful for the opportunities
                            you have provided for them through our education!
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <section className="mx-auto py-[16px] md:py-[40px] lg:py-[80px]">
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

            {/* Success section */}
            <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <h1 className="mx-auto mb-4 max-w-[30ch] text-center text-xl font-bold text-pes_darkblue lg:text-2xl">
                    Our <span className="text-pes_orange">Success</span>
                </h1>
                <div className="success-numbers flex flex-col items-center justify-center gap-y-4 md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-8">
                    <div className="statistic flex flex-col items-center">
                        <h1 className="text-4xl text-pes_logoblue md:text-6xl">
                            850+
                        </h1>
                        <h2 className="text-lg text-pes_darkbluegray">
                            Students
                        </h2>
                    </div>
                    <div className="statistic flex flex-col items-center">
                        <h1 className="text-4xl text-pes_logoblue md:text-6xl">
                            139
                        </h1>
                        <h2 className="text-lg text-pes_darkbluegray">
                            Projects
                        </h2>
                    </div>
                    <div className="statistic flex flex-col items-center">
                        <h1 className="text-4xl text-pes_logoblue md:text-6xl">
                            1.7K
                        </h1>
                        <h2 className="text-lg text-pes_darkbluegray">
                            Hours of Support
                        </h2>
                    </div>
                    <div className="statistic flex flex-col items-center">
                        <h1 className="text-4xl text-pes_logoblue md:text-6xl">
                            8
                        </h1>
                        <h2 className="text-lg text-pes_darkbluegray">
                            Chief Experts
                        </h2>
                    </div>
                    <div className="statistic flex flex-col items-center">
                        <h1 className="text-4xl text-pes_logoblue md:text-6xl">
                            2+
                        </h1>
                        <h2 className="text-lg text-pes_darkbluegray">
                            Years of Experience
                        </h2>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <section className="mx-auto py-[16px] md:py-[40px] lg:py-[80px]">
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

            {/* Testimonials Section */}
            <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                <div className="flex gap-4 lg:items-center">
                    <div className="flex flex-col items-center gap-4 lg:w-[592px] lg:items-start lg:gap-8">
                        <h1 className="max-w-[30ch] text-center text-xl font-bold text-pes_darkblue lg:text-start lg:text-2xl">
                            Testimonials
                        </h1>
                        <p className="text-pes_darkbluegray lg:text-lg">
                            PES has received more than 1.5k positive ratings
                            from our happy clients. Are you one of them? Please
                            give us your assessment!
                        </p>
                        <button className="h-fit w-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 md:text-lg">
                            Write Testimonial
                        </button>
                    </div>
                    <div className="testimonials-image hidden h-[366px] w-[390px] bg-cover lg:block"></div>
                </div>
            </section>

            {/* Divider */}
            <section className="mx-auto py-[16px] md:py-[40px] lg:py-[80px]">
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

            {/* Looking for partnerships section */}
            <section className="bg-pes_logoblue">
                <div className="mx-auto  px-[10px] py-[32px] sm:container md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
                        <div className="flex flex-col items-start gap-4 text-left md:gap-8 lg:gap-16">
                            <h1 className="text-lg text-pes_white md:text-xl">
                                Looking for an experienced partner in the field
                                of Robotics and AI for your school?
                            </h1>
                            <button className="h-fit w-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 md:text-lg">
                                Contact Us
                            </button>
                        </div>
                        <div className="partnerships-image aspect-[320/213] rounded-[16px] bg-cover sm:w-full"></div>
                    </div>
                </div>
            </section>

            {/* Footer section */}
            <div className="">
                <svg
                    className="aspect-[10/1] w-full translate-y-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1080 108"
                    fill="none"
                >
                    <g clip-path="url(#clip0_515_2077)">
                        <path
                            opacity="0.25"
                            d="M1080 108V66.339C1036.99 46.359 986.769 37.386 937.8 41.139C874.476 45.972 815.103 71.118 751.68 74.889C685.224 78.813 618.894 59.697 555.3 43.155C492.957 26.955 430.83 20.763 366.84 31.383C334.305 36.783 303.975 47.439 272.835 57.789C189.459 85.5 78.3 120.861 0 60.777V108L1080 108Z"
                            fill="#064CA9"
                        />
                        <path
                            opacity="0.7"
                            d="M1080 108V93.771C1068.3 74.772 1055.12 56.826 1037.08 43.155C990.531 7.85699 931.5 8.09999 877.878 25.578C849.843 34.713 823.797 49.041 797.175 61.398C760.347 78.498 720.918 102.798 679.428 106.101C646.794 108.666 615.618 97.623 590.688 77.697C562.095 54.846 534.6 21.897 497.421 11.997C461.025 2.286 424.206 18.018 390.204 33.849C356.202 49.68 322.56 68.949 284.976 72.594C231.219 77.859 183.024 52.002 132.966 37.638C105.786 29.844 79.866 32.085 54.5851 44.388C34.3981 54.189 11.385 68.625 0 88.704V108L1080 108Z"
                            fill="#064CA9"
                        />
                        <path
                            d="M1080 108V102.933C945.063 54.9 797.319 43.812 651.753 69.687C613.053 76.563 575.946 87.795 536.904 93.501C483.804 101.268 435.672 82.485 387.9 61.641C334.863 38.502 282.6 22.284 223.92 27C146.043 33.3 68.706 68.139 0 103.329V108L1080 108Z"
                            fill="#064CA9"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_515_2077">
                            <rect
                                width="1080"
                                height="108"
                                fill="white"
                                transform="matrix(-1 0 0 -1 1080 108)"
                            />
                        </clipPath>
                    </defs>
                </svg>
                <section className="bg-pes_logoblue">
                    <div className="mx-auto  px-[10px] py-[16px] sm:container md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
                        {/* Entire footer container */}
                        <div className="flex flex-col gap-8 md:gap-16">
                            {/* Logo, socials, and links container */}
                            <div className="flex flex-col gap-y-16 lg:flex-row lg:gap-x-[128px]">
                                {/* Logo and socials */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="footer-logo h-[121px] w-[284px] bg-cover"></div>
                                    {/* Socials */}
                                    <div className="flex gap-8">
                                        <a
                                            className=" fill-pes_white duration-200 hover:fill-pes_orange"
                                            href="#"
                                            id="tiktok"
                                        >
                                            <svg
                                                className=" h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 18 20"
                                            >
                                                <path d="M17.5 8.20169C15.7798 8.2058 14.1017 7.66934 12.7029 6.6681V13.6511C12.7024 14.9444 12.3071 16.2068 11.5698 17.2694C10.8325 18.332 9.78832 19.1442 8.57694 19.5974C7.36555 20.0505 6.04469 20.1231 4.79095 19.8053C3.53722 19.4876 2.41038 18.7946 1.56111 17.8192C0.711837 16.8437 0.180616 15.6323 0.0384769 14.3468C-0.103663 13.0613 0.150055 11.763 0.765703 10.6256C1.38135 9.48819 2.32959 8.56583 3.48361 7.98185C4.63764 7.39788 5.94246 7.18013 7.22358 7.35772V10.8699C6.63734 10.6855 6.00781 10.6911 5.42491 10.8858C4.84201 11.0805 4.33554 11.4544 3.97783 11.9541C3.62012 12.4539 3.42946 13.0538 3.43308 13.6684C3.4367 14.2829 3.63442 14.8806 3.99799 15.376C4.36156 15.8715 4.8724 16.2394 5.45755 16.4272C6.04271 16.6151 6.67225 16.6132 7.25629 16.4219C7.84032 16.2306 8.34897 15.8597 8.70961 15.3621C9.07025 14.8645 9.26442 14.2657 9.26441 13.6511V0H12.7029C12.7005 0.290363 12.7248 0.580329 12.7756 0.866235C12.8951 1.50447 13.1435 2.11163 13.5057 2.65057C13.8679 3.1895 14.3362 3.64889 14.8821 4.00062C15.6586 4.51407 16.569 4.78774 17.5 4.78754V8.20169Z" />
                                            </svg>
                                        </a>
                                        <a
                                            className=" fill-pes_white duration-200 hover:fill-pes_orange"
                                            href="#"
                                            id="linkedin"
                                        >
                                            <svg
                                                className=" h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                                            </svg>
                                        </a>
                                        <a
                                            className=" fill-pes_white duration-200 hover:fill-pes_orange"
                                            href="#"
                                            id="instagram"
                                        >
                                            <svg
                                                className=" h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 21 20"
                                            >
                                                <path d="M10.5022 4.87225C7.66453 4.87225 5.37563 7.16166 5.37563 10C5.37563 12.8383 7.66453 15.1277 10.5022 15.1277C13.3399 15.1277 15.6288 12.8383 15.6288 10C15.6288 7.16166 13.3399 4.87225 10.5022 4.87225ZM10.5022 13.3337C8.66843 13.3337 7.16927 11.8387 7.16927 10C7.16927 8.16133 8.66397 6.6663 10.5022 6.6663C12.3405 6.6663 13.8352 8.16133 13.8352 10C13.8352 11.8387 12.336 13.3337 10.5022 13.3337ZM17.0343 4.6625C17.0343 5.32746 16.4989 5.85853 15.8385 5.85853C15.1737 5.85853 14.6428 5.32299 14.6428 4.6625C14.6428 4.00201 15.1782 3.46647 15.8385 3.46647C16.4989 3.46647 17.0343 4.00201 17.0343 4.6625ZM20.4297 5.87638C20.3539 4.27424 19.988 2.85507 18.8146 1.68582C17.6456 0.516568 16.2267 0.150619 14.6249 0.070289C12.9741 -0.0234297 8.02593 -0.0234297 6.37507 0.070289C4.77775 0.146156 3.3589 0.512105 2.18544 1.68136C1.01199 2.85061 0.650586 4.26978 0.570273 5.87192C0.476576 7.52315 0.476576 12.4724 0.570273 14.1236C0.646124 15.7258 1.01199 17.1449 2.18544 18.3142C3.3589 19.4834 4.77328 19.8494 6.37507 19.9297C8.02593 20.0234 12.9741 20.0234 14.6249 19.9297C16.2267 19.8538 17.6456 19.4879 18.8146 18.3142C19.9835 17.1449 20.3494 15.7258 20.4297 14.1236C20.5234 12.4724 20.5234 7.52761 20.4297 5.87638ZM18.297 15.8953C17.949 16.7701 17.2752 17.4439 16.3963 17.7965C15.08 18.3186 11.9568 18.1981 10.5022 18.1981C9.04769 18.1981 5.91997 18.3142 4.6082 17.7965C3.73369 17.4484 3.05996 16.7745 2.70747 15.8953C2.18544 14.5788 2.30591 11.4549 2.30591 10C2.30591 8.54513 2.18991 5.41671 2.70747 4.10465C3.05549 3.22995 3.72922 2.55606 4.6082 2.2035C5.92443 1.68136 9.04769 1.80185 10.5022 1.80185C11.9568 1.80185 15.0845 1.68582 16.3963 2.2035C17.2708 2.5516 17.9445 3.22548 18.297 4.10465C18.819 5.42118 18.6985 8.54513 18.6985 10C18.6985 11.4549 18.819 14.5833 18.297 15.8953Z" />
                                            </svg>
                                        </a>
                                        <a
                                            className=" fill-pes_white duration-200 hover:fill-pes_orange"
                                            href="#"
                                            id="facebook"
                                        >
                                            <svg
                                                className=" h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* Link columns container */}
                                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                                    {/* Link column */}
                                    <div className="flex w-fit flex-col gap-4">
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            About
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Tracks
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Online Courses
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Features
                                        </a>
                                    </div>
                                    {/* Link column */}
                                    <div className="flex w-fit flex-col gap-4">
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Partnerships
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Certifications
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Franchises
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Leaderboard
                                        </a>
                                    </div>
                                    {/* Link column */}
                                    <div className="flex w-fit flex-col gap-4">
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Become an Instructor
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Join as student
                                        </a>
                                        <a
                                            href=""
                                            className="text-sm text-pes_white md:text-base"
                                        >
                                            Free trial
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Newsletter buttons container */}
                            <div className="flex flex-col gap-4 md:flex-row">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="h-fit rounded-full border-2 border-solid border-pes_mediumgray bg-transparent px-8 py-4 text-center text-sm text-pes_white md:w-[346px] md:text-lg"
                                ></input>{' '}
                                <button className="h-fit rounded-full bg-pes_orange px-8 py-4 text-sm text-pes_white duration-200 hover:bg-orange-300 md:w-[346px] md:text-lg">
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
