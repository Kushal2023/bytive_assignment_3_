import { useEffect } from "react";
import "./App.css";
import Usercard from "./userCard/Usercard";
import { SetUsers } from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { currentUsers, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    SetUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      ) : (
        <div className="cards">
          {currentUsers?.map((user, index) => (
            <Usercard key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
