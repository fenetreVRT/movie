import React from "react";
import MoviesCarusell from "./MoviesCarusell";

function Footer({ recent, setRecent }) {
  return (
    <div className="footer">
      <MoviesCarusell
        data={recent}
        loading={false}
        error={null}
        title="recently viewed"
      />
      <button onClick={() => setRecent([])}>Clear Recent</button>
    </div>
  );
}

export default Footer;
