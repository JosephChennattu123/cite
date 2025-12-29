import { Head } from '@/components/head/head';
import { MainLayout } from '@/components/layout/main-layout';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Projects } from '../components/projects';

export const LandingPage = () => {
    return (
        <>
            <Head description="Welcome to my portfolio website." />
            <MainLayout>
                <Hero />
                <About />
                <Projects />
            </MainLayout>
        </>
    );
};
