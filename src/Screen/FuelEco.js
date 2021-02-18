import { Link } from "react-router-dom";

export const FuelEco = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3 grid grid-cols-2 gap-3">
          <Link to="/home">
            <div className="h-48 bg-red-50">Fuel</div>
          </Link>

          <div className="h-48 bg-red-50">2</div>
          <div className="h-48 bg-red-50">3</div>
          <div className="h-48 bg-red-50">4</div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <div className="h-48 bg-red-50">1</div>
          <div className="h-48 bg-red-50">2</div>
          <div className="h-24 bg-red-50">3</div>
          <div className="h-24 bg-red-50">4</div>
          <div className="col-span-2 h-20 bg-red-50">5</div>
        </div>
      </div>
    </div>
  );
};
