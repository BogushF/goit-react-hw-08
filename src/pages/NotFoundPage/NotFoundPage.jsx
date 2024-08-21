import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Sorry, page not found! Please go to <Link to="/">home page</Link>!
      </p>
    </div>
  );
};

export default NotFoundPage;
