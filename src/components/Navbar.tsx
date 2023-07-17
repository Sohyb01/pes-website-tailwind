const Navbar = () => {
    return (
        <>
            <nav className="navbar-desktop bg-pes_logoblue">
                <div className="container mx-auto flex max-w-xs justify-between py-2 sm:max-w-[440px] sm:py-2 md:max-w-[688px] md:py-4 lg:max-w-[1000px] 2xl:max-w-[1480px]">
                    <div className="nav-logo h-[48px] w-[114px] bg-cover md:h-[74px] md:w-[174px]"></div>
                    <div className="container flex w-fit items-center gap-8">
                        <div className="nav-links container hidden items-center gap-8 md:flex">
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                Home
                            </a>
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                About
                            </a>
                            <a
                                href=""
                                className="text-md text-pes_white duration-200 hover:text-pes_orange"
                            >
                                Contact
                            </a>
                            <a
                                href=""
                                className="text-md  flex items-center gap-2 fill-pes_white text-pes_white duration-200 hover:fill-pes_orange hover:text-pes_orange"
                            >
                                More
                                <div className="link-arrow h-2 w-[12px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 12 8"
                                    >
                                        <path d="M5.9996 8C5.78029 8 5.56087 7.90234 5.39373 7.70703L0.251105 1.70703C-0.0837016 1.31641 -0.0837016 0.683594 0.251105 0.292969C0.585911 -0.0976562 1.1283 -0.0976562 1.4631 0.292969L5.9996 5.5875L10.5369 0.29375C10.8717 -0.0968752 11.4141 -0.0968752 11.7489 0.29375C12.0837 0.684375 12.0837 1.31719 11.7489 1.70781L6.60627 7.70781C6.43886 7.90312 6.21923 8 5.9996 8Z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <button className="text-md h-fit rounded-full bg-pes_orange px-8 py-2 text-pes_white duration-200 hover:bg-orange-300 md:py-4">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
