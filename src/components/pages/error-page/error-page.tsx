import { Link } from "react-router-dom";
import { RouteList } from "../../../consts/routes";
import background from "./images/background.svg";

function ErrorPage(): JSX.Element {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img src={background} className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Вы потерялись!
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404 Not Found
          </p>
          <Link
            to={RouteList.Main}
            className="font-extrabold text-5xl text-center text-white leading-tight mt-4"
          >
            Вернуться на главную!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
