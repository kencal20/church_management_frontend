import { Link } from "react-router-dom"

type Props = {}

export default function AdminDashboard({ }: Props) {
  return (
    <div>
      <h1>adminDashboard</h1>
      <br />
      <div
        style={{
          display: "flex", flexDirection: "column",alignItems:"center"
        }}>
        <Link to={'/admin/signup'}
          style={{
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "60px",
            textAlign: "center",
            color: "white",
            width: "5vw",
            height:"11vh",
            fontSize: "20px",
            textDecoration: "none",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
          +</Link>
      </div>
    </div>
  )
}