// FormComponent.tsx
import { Card, Form } from "react-bootstrap";

type Props = {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function FormComponent({ children, onSubmit }: Props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Card style={{
                margin: "10px",
                padding: "10px",
                width: "50%",
            }}>
                <Form onSubmit={onSubmit} >
                    {children}
                </Form>
            </Card>
        </div>
    );
}
