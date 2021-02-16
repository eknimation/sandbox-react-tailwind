import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      content <br />
      <Link to="/home">Home</Link> <br />
      <Link to="/fuel">Fuel Eco</Link>
    </div>
  );
};
