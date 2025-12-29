export const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Featured Projects
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Here are some of the projects I've worked on recently.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
                {/* Project Card Placeholders */}
                <div className="overflow-hidden rounded-lg border bg-background p-2">
                    <div className="h-40 bg-muted/50 rounded-md"></div>
                    <div className="p-4">
                        <h3 className="font-bold">Project A</h3>
                        <p className="text-sm text-muted-foreground">A cool project using React.</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-background p-2">
                    <div className="h-40 bg-muted/50 rounded-md"></div>
                    <div className="p-4">
                        <h3 className="font-bold">Project B</h3>
                        <p className="text-sm text-muted-foreground">Another cool project.</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-background p-2">
                    <div className="h-40 bg-muted/50 rounded-md"></div>
                    <div className="p-4">
                        <h3 className="font-bold">Project C</h3>
                        <p className="text-sm text-muted-foreground">Something amazing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
