import { Form } from "react-bootstrap";
import { componentProps } from "./types";

type Props = componentProps['inputProps'];

export default function InputComponent ({
    label,
    type,
    name,
    value,
    onChange,
    required,
    options
}: Props): JSX.Element {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            {type === "select" ? (
                <Form.Control as="select" name={name} value={value} onChange={onChange} required={required}>
                    <option value="">Select...</option>
                    {options && options.map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </Form.Control>
            ) : (
                <Form.Control
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </Form.Group>
    );
}
