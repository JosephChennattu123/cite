import * as React from 'react';

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 md:px-8 flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">
                                My Portfolio
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="py-6 md:px-8 md:py-0">
                <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by Me.
                    </p>
                </div>
            </footer>
        </div>
    );
};
