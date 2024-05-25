import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pages = location.pathname.split("/").filter((x) => x);
  let breadCrumb = "";

  return (
    <div className="breadcrumbs__container">
      {pages.map((page, index) => {
        breadCrumb += `/${page}`;

        return (
          <div key={page} className="breadcrumbs__item">
            {index == pages.length - 1 ? (
              <span to={`/${page}`} className="selected-link">
                {page}
              </span>
            ) : (
              <Link to={breadCrumb}>{page}</Link>
            )}
            <span>{index < pages.length - 1 ? "/" : ""}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
