import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "15px"
  }
  return (
    <div id="error-page" style={style}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}