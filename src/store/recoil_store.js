import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export { isPlayingState };
