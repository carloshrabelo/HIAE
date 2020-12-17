import stocks from "mock/stocks";
import reduceStocks, {
  initialState,
  request,
  reset,
  onError,
  onSuccess,
} from "./stocks";

describe("stocks reducer", () => {
  it("Mount reducer with initial state", () => {
    const state = reduceStocks(initialState, {});
    expect(state).toMatchObject(initialState);
  });

  it(`Should reset the state when reset is called`, () => {
    const state = reduceStocks(
      {
        isLoading: true,
        error: true,
        data: ["123"],
      },
      reset()
    );
    expect(state).toMatchObject(initialState);
  });

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceStocks(initialState, request());
    expect(state).toMatchObject({
      ...initialState,
      isLoading: true,
    });
  });

  it(`Should change state error when onError is called`, () => {
    const state = reduceStocks(initialState, onError());
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceStocks(initialState, onSuccess(stocks));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: stocks,
    });
  });
});
