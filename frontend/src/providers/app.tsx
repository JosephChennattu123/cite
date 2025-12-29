import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    loading...
                </div>
            }
        >
            <HelmetProvider>
                <Router>{children}</Router>
            </HelmetProvider>
        </React.Suspense>
    );
};
