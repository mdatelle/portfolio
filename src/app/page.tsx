import { About } from '@/components/Sections/About/About';
import { Contact } from '@/components/Sections/Contact/Contact';
import { Footer } from '@/components/Sections/Footer/Footer';
import { Hero } from '@/components/Sections/Hero/Hero';
import { NavBar } from '@/components/NavBar/Navbar';
import { Projects } from '@/components/Sections/Projects/Projects';
import { Work } from '@/components/Sections/Work/Work';

const Home = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
