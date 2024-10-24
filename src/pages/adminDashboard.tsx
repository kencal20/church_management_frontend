import { Link } from "react-router-dom";

type Props = {};

export default function AdminDashboard({}: Props) {
  return (
    <div className="container text-center my-5">
      <h1>Admin Dashboard</h1>
      <br />
      <div className="d-flex flex-column align-items-center">
        <Link
          to={'/admin/signup'}
          className="btn btn-dark rounded-circle text-white d-flex justify-content-center align-items-center"
          style={{
            width: "60px",
            height: "60px",
            fontSize: "24px",
          }}
        >
          +
        </Link>
      </div>
    </div>
  );
}
