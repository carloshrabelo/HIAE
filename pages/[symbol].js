import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { find, reset } from "redux/stock";

import CandleChart from "components/CandleChart";
import Navbar from "components/Navbar";

const Home = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { symbol } = router.query;
  const { data, isLoading } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(find(symbol));
    return () => dispatch(reset());
  }, []);

  return (
    <>
      <Navbar>
        <Link href="/">Voltar</Link>
        <span>Stocks Application</span>
      </Navbar>
      <CandleChart data={data} isLoading={isLoading} />
    </>
  );
};

export default Home;
