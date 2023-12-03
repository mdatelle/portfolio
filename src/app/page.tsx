import { About } from '@/components/Sections/About/About';
import { Hero } from '@/components/Sections/Hero/Hero';
import { Navbar } from '@/components/Navbar/Navbar';
import { Projects } from '@/components/Sections/Projects/Projects';
import { Work } from '@/components/Sections/Work/Work';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Work />
        </main>
    );
};

export default Home;
