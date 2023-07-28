import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

const isTabActiveState = atom({
  key: "isTabActiveState",
  default: { movies: true },
});

export { isPlayingState, isTabActiveState };
