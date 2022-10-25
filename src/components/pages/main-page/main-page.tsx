import FormSearchByNickname from "../../form-search-by-nickname/form-search-by-nickname";
import background from "./images/background.svg";

function MainPage(): JSX.Element {
  return (
    <div className="flex bg-indigo-900 relative overflow-hidden h-screen">
      <img src={background} className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full flex flex-col items-center relative z-10">
          <FormSearchByNickname />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
