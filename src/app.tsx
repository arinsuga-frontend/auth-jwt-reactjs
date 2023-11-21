import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;