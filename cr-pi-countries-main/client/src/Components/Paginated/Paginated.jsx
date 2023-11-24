import React from "react";
import "./Paginated.css";
import { prev, next } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Paginated({ pageNumber, pagesTotal }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="paginated_container">
        {pageNumber <= 1 ? (
          <>
            <button onClick={() => dispatch(prev())} disabled>
              {"< Prev"}
            </button>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}>{"< Prev"}</button>
            <p>{pageNumber - 1}</p>
          </>
        )}

        <span>{pageNumber}</span>
        {pageNumber >= pagesTotal ? (
          <>
            <button onClick={() => dispatch(next())} disabled>
              {"Next >"}
            </button>
          </>
        ) : (
          <>
            <p>{pageNumber + 1}</p>
            <button onClick={() => dispatch(next())}>{"Next >"}</button>
          </>
        )}
      </div>
    </div>
  );
}
