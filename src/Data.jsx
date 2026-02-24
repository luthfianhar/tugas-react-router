import { Link, Outlet } from "react-router";

export default function Data() {
  return (
    <div>
      <h1>Data Page</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="products" style={{ marginRight: "15px" }}>
          Products
        </Link>

        <Link to="customers" style={{ marginRight: "15px" }}>
          Customers
        </Link>

        <Link to="sellers">
          Sellers
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}