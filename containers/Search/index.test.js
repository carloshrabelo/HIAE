/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as stocksReducers from "redux/stocks";

import stocks from "mock/stocks";

import { act } from "react-dom/test-utils";
import Search, { TIME_HIDDEN, TIME_SEARCH } from "./";

const waitTime = (TIME) => new Promise((resolve) => setTimeout(resolve, TIME));

jest.mock("react-redux");
jest.mock("next/link", () => ({ children }) => <> {children}</>);

const { useSelector, useDispatch } = require("react-redux");

const dispatch = jest.fn();
useDispatch.mockReturnValue(dispatch);

const [stock] = stocks;
const { name } = stock;

describe("<Search/>", () => {
  it("Should remove list after selected item", async () => {
    useSelector.mockReturnValue({ isLoading: false, data: stocks });

    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    expect(queryByText(name)).not.toBeInTheDocument();

    userEvent.type(input, name);
    const listItem = queryByText(name);

    expect(listItem).toBeInTheDocument();
    userEvent.click(listItem);

    await act(async () => {
      await waitTime(TIME_HIDDEN);
      expect(queryByText(name)).not.toBeInTheDocument();
    });
  });
  it("Should search character list when typing", async () => {
    const findstocks = jest.spyOn(stocksReducers, "find");
    useSelector.mockReturnValue({ isLoading: false, data: stocks });
    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    expect(container).toBeInTheDocument();
    expect(queryByText(name)).not.toBeInTheDocument();
    userEvent.type(input, name);

    await act(async () => {
      await waitTime(TIME_SEARCH);
      expect(dispatch).toBeCalled();
      expect(findstocks).toBeCalledWith(name);
    });
  });
  it("Should search character list when typing", async () => {
    const findstocks = jest.spyOn(stocksReducers, "find");
    useSelector.mockReturnValue({ isLoading: false, data: stocks });
    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    expect(container).toBeInTheDocument();
    expect(queryByText(name)).not.toBeInTheDocument();
    userEvent.type(input, name);

    await act(async () => {
      await waitTime(TIME_SEARCH);
      expect(dispatch).toBeCalled();
      expect(findstocks).toBeCalledWith(name);
    });
  });
  it("Should search for character stocks when selecting him", async () => {
    const findStocks = jest.spyOn(stocksReducers, "find");
    useSelector.mockReturnValue({ isLoading: false, data: stocks });

    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    userEvent.type(input, name);
    userEvent.click(queryByText("🔍"));

    expect(dispatch).toBeCalled();
    expect(findStocks).toBeCalledWith(name);
  });
});
