import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      This page doesn't exist. Go to <Link to="/">Home Page</Link>.
    </div>
  );
}

export default NotFoundPage;
