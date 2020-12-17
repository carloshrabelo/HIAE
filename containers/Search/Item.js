import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import * as S from "./styles";

const Item = ({ symbol, name, ...props }) => (
  <S.Item {...props}>
    <Link href={`/${symbol}`} passhref>
      <a>
        <b>{symbol}</b> {name}
      </a>
    </Link>
  </S.Item>
);

Item.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
};

export default Item;
