const FAQ = () => {
    return (
        <section className="mx-auto px-[10px] py-[16px] sm:container sm:py-[16px] md:px-[30px] md:py-[40px] lg:max-w-[1080px] lg:px-[40px] lg:py-[80px]">
            <h1 className="mx-auto mb-4 max-w-[30ch] text-center text-xl font-bold text-pes_darkblue lg:text-2xl">
                Frequently <span className="text-pes_orange"> Asked</span>{' '}
                Questions
            </h1>
            <div className="join join-vertical w-full shadow-xl">
                <div className="collapse join-item collapse-arrow">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-base text-pes_darkgray md:text-lg">
                        What do we do?
                    </div>
                    <div className="collapse-content">
                        <p className="text-sm text-pes_darkgray md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat minus adipisci repellat recusandae
                            repudiandae, expedita est vel quasi sequi optio.
                        </p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-pes_mediumgray"></div>
                <div className="collapse-arrow collapse join-item">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-base text-pes_darkgray md:text-lg">
                        How does the PES curriculum help kids perform better
                        academically?
                    </div>
                    <div className="collapse-content">
                        <p className="text-sm text-pes_darkgray md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat minus adipisci repellat recusandae
                            repudiandae, expedita est vel quasi sequi optio.
                        </p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-pes_mediumgray"></div>
                <div className="collapse-arrow collapse join-item">
                    <input type="radio" name="my-accordion-4" />

                    <div className="collapse-title text-base text-pes_darkgray md:text-lg">
                        What topics are taught in the PES curriculum?
                    </div>
                    <div className="collapse-content">
                        <p className="text-sm text-pes_darkgray md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat minus adipisci repellat recusandae
                            repudiandae, expedita est vel quasi sequi optio.
                        </p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-pes_mediumgray"></div>

                <div className="collapse-arrow collapse join-item">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-base text-pes_darkgray md:text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit?
                    </div>
                    <div className="collapse-content">
                        <p className="text-sm text-pes_darkgray md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat minus adipisci repellat recusandae
                            repudiandae, expedita est vel quasi sequi optio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
