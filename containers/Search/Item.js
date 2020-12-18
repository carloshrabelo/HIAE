import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import CurrencyFlag from "react-currency-flags";

import * as S from "./styles";

const Item = ({ symbol, name, currency = "" }) => (
  <S.Item>
    <Link href={`/${symbol}`} passhref>
      <a>
        <b>{symbol}</b> {name} {currency}
        <CurrencyFlag currency={currency} size="lg" />
      </a>
    </Link>
  </S.Item>
);

Item.propTypes = {
  currency: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
};

export default Item;
