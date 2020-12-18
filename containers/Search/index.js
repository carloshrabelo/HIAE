import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { find } from "redux/stocks";
import debounce from "helpers/debounce";

import Spiner from "components/Spiner";

import Item from "./Item";
import * as S from "./styles";

export const TIME_HIDDEN = 200;
export const TIME_SEARCH = 500;

const Search = (props) => {
  const { isLoading, data } = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const [showList, setShowList] = useState(false);

  const search = (e) => dispatch(find(e));

  const optimizedSearch = debounce(search, TIME_SEARCH);
  const onInput = (e) => optimizedSearch(e.target.value);
  const hideList = debounce(() => setShowList(false), TIME_HIDDEN);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    optimizedSearch(query);
  };

  return (
    <S.Wrapper {...props} onFocus={() => setShowList(true)} onBlur={hideList}>
      <S.Form onSubmit={onSubmit} onInput={onInput}>
        <S.Search
          name="query"
          placeholder="Search for symbols or companies"
          autoComplete="off"
        />

        <S.Button>{isLoading ? <Spiner color="primary" /> : "🔍"}</S.Button>
      </S.Form>
      {showList && (
        <S.List>
          {data.map((stock) => (
            <Item {...stock} key={stock.symbol} />
          ))}
        </S.List>
      )}
    </S.Wrapper>
  );
};

Search.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  creators: PropTypes.arrayOf(PropTypes.string),
};

export default Search;
