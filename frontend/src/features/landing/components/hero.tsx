import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
            })
                .from(
                    subtitleRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out',
                    },
                    '-=0.5'
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="container mx-auto px-4 md:px-8 flex max-w-[64rem] flex-col items-center gap-4 text-center py-32 md:py-48 lg:py-52"
        >
            <h1
                ref={titleRef}
                className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
                Building Digital Experiences <br className="hidden sm:inline" />
                That Matter.
            </h1>
            <p
                ref={subtitleRef}
                className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            >
                I'm a Full Stack Developer passionate about building accessible, pixel-perfect, performant web applications.
            </p>
        </section>
    );
};
