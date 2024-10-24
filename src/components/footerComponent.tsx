import { Container } from "react-bootstrap";

type Props = {};

export default function FooterComponent({ }: Props) {
    return (
        <footer className="bg-dark text-white text-center" style={{ padding: '10px 0' }}> {/* Reduced padding */}
            <Container>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>&copy; 2024 MyChurch. All Rights Reserved.</p> {/* Smaller font size */}
                <a href="/privacy-policy" className="text-white" style={{ fontSize: '0.9rem' }}>
                    Privacy Policy
                </a>
                {' | '}
                <a href="/terms-of-service" className="text-white" style={{ fontSize: '0.9rem' }}>
                    Terms of Service
                </a>
            </Container>
        </footer>
    );
}
