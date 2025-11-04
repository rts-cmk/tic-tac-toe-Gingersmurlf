import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
        <p>Klik her for at gå tilbage</p>
        <Link to="/">Til forsiden</Link>
    </div>
  );
}