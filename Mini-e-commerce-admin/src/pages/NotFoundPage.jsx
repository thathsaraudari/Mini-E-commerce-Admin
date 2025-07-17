import { Link } from "react-router-dom";

function NotFoundPage () {
  return (
    <div>
      <h1>404 - Not found page</h1>
      <Link to="/">
      <h2>Go back home!!</h2>
      </Link>
    </div>
  )
}

export default NotFoundPage
