import { Navigate, Outlet } from "react-router-dom";
const chuj = true;

function Root() {
  return (
    <>
      {chuj ? <Navigate to="/login" /> : <h1>ok</h1>}
      <h1>chuj</h1>
      <Outlet />
    </>
  );
}

export default Root;
