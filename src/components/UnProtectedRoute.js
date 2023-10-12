import { Navigate } from "react-router";

export default function ProtectedRoute({
  element: Component,
  isLogged,
  ...props
}) {
  return !isLogged ? (
    <Component {...props} />
  ) : (
    <Navigate to={"/movies"} replace />
  );
}
