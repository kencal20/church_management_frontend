import { Outlet } from 'react-router-dom';
import NavbarComponent from './navbarComponent';
import FooterComponent from './footerComponent';



export default function LayoutComponent() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh", width: "100vw" }}>
            <NavbarComponent />
            <main className="flex-fill">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
}
