'use client';

import AvailableBox from "./AvailableBox";
import UnavailableBox from "./UnavailableBox";

const numbers: number[] = [...Array(80)].map((_, i) => 1 + i++);
const selectedNumbers: number[] = new Array();

function selectNumber(children: React.ReactNode, isClicked: boolean) {
  if (!isClicked) {
    selectedNumbers.push(Number(children?.valueOf()));
  } else {
    const index = selectedNumbers.indexOf(Number(children?.valueOf()));

    selectedNumbers.splice(index, 1);
  }

  console.log(selectedNumbers);
}

export default function NumbersToSelect() {
  return numbers.map((v) => v % 5 || v % 2
    ? <AvailableBox key={v} onClick={selectNumber} className="mr-2 my-1">{v.toString()}</AvailableBox>
    : <UnavailableBox key={v} className="mr-2 my-1" />
  )
}
