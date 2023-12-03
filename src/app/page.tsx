import { About } from '@/components/Sections/About/About';
import { Contact } from '@/components/Sections/Contact/Contact';
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
            <Contact />
        </main>
    );
};

export default Home;
