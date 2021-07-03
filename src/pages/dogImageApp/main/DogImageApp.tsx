import './DogImageApp.css';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { MainContent } from './MainContent';

export function DogImageApp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
