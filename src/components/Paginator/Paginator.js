import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";

const Paginator = () => {
  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get("page") || "1", 10);
          return (
            <Pagination
              page={page}
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
};

export default Paginator;
