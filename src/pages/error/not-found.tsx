import notFound from "../../static/404.png";

const NotFound = () => {
  return (
    <div className="error 404">
      <img src={notFound} alt="error-404-page-not-found" />
    </div>
  );
};

export default NotFound;
