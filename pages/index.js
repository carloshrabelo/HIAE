import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { find } from "redux/stocks";

const Home = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(find("tesco"));
  }, []);
  return (
    <>
      <h1>WIP</h1>
      <pre>{JSON.stringify(stocks, null, 2)}</pre>
    </>
  );
};

export default Home;
