export default function tupleSample() {
  //一般的なタプル型
  let response: [number, string];
  response = [200, "OK"];
  // response = ["400", "OK"];

  console.log("Tuple Sample 1 :", response);

  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"];
  //以下のような使い方もできる（一つめはString、二つめ以降はnumber)
  //const girlfriends: [string, ...number[]] = ["Kana", "Miku", "Keiko"];
  girlfriends.push("Misa");
  console.log("Tuple Sample 1 :", girlfriends);
}
