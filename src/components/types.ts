
type InputProps = {
    label: string;
    placeholder?: string;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    required?: boolean;
    options?: string[];
} & (
        | { type: string; as?: never }
        | { as: keyof JSX.IntrinsicElements; type?: never }
    );

// Other type definitions remain unchanged
type StatusProps = {
    text: string;
    variant: string;
};

// type ProtectedRouteProps = {
//     isAuthenticated: boolean;
//     children: React.ReactNode;
// };

type AuthContextProps = {
    isAuthenticated: boolean;
    isloading: boolean;
    user: any; // Define the correct type for the user object here
    LogoutComponent: () => Promise<void>;
};


export type componentProps = {
    inputProps: InputProps;
    statusProps: StatusProps;
    // protectedRouteProps: ProtectedRouteProps;
    authContextProps: AuthContextProps;
};
