export const About = () => {
    return (
        <section
            id="about"
            className="container mx-auto px-4 md:px-8 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    About Me
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    I specialize in React, TypeScript, and modern web technologies. I love solving complex problems and creating intuitive user interfaces.
                </p>
            </div>
        </section>
    );
};

