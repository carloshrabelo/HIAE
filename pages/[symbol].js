import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { find, reset } from "redux/stock";

import CandleChart from "components/CandleChart";

const Home = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { symbol } = router.query;
  const { data } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(find(symbol));
    return () => dispatch(reset());
  }, []);

  return (
    <>
      <Link href="/">Voltar</Link>
      <CandleChart data={data} />
    </>
  );
};

export default Home;
