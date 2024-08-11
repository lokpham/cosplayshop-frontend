import error from "../assets/error.png";
const ErrorPage = () => {
  return (
    <div className="p-2">
      <img src={error} draggable={false} className="w-[30%] mx-auto" alt="" />
      <p className="text-responsive text-center">Something went wrong!</p>
    </div>
  );
};

export default ErrorPage;
