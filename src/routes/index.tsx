import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-3xl font-bold">Hello wolrd</h1>}
        ></Route>
      </Routes>
    </>
  );
};

export default memo(Router);
