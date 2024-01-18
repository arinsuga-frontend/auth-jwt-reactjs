import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Counter from './pages/Counter';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="counter" element={<Counter />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;