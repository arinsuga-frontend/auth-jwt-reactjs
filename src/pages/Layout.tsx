import {Outlet, Link} from 'react-router-dom';

const Layout = () => {

    return (
        <>

            <h1>Title Layout</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>

                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>

                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>

                    <li>
                        <Link to="/task">Task</Link>
                    </li>

                </ul>
            </nav>

            <Outlet />

        </>
    );

}

export default Layout;
