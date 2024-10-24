import { AuthProvider } from "./auth/authContext";
import RouterComponent from "./routes/routerComponent";


export default function App() {
  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
  )
}
