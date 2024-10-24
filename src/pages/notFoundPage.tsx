import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

export default function NotFoundPage() {
    return (
        <Container className="text-center d-flex flex-column align-items-center justify-content-center" >
            {/* 404 Message */}
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-4">Oops! Page Not Found</h2>
            <p className="mb-4">
                We're sorry, but the page you're looking for doesn't exist. It might have been removed or the link is incorrect.
            </p>

            {/* Back to Home Button */}
            <Link to="/">
                <Button variant="primary" size="lg">Back to Home</Button>
            </Link>
        </Container>
    );
};

