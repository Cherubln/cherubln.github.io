import { Link } from "react-router-dom";

export const BreadcrumbsPath = ({ path }: { path: string }) => {
  return (
    <div className="bg-base-100 sticky top-20 z-30 text-sm breadcrumbs">
      <ul>
        <li>
          <Link to={"/"} unstable_viewTransition className="hover:link">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:link" to={"/#Work"} unstable_viewTransition>
            Projects
          </Link>
        </li>
        <li>{path}</li>
      </ul>
    </div>
  );
};
