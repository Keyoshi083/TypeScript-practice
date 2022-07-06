export default function arraySample() {
  //シンプルな配列
  const colors: string[] = ["red", "blue"];
  colors.push("yellow");
  // colors.push(78);
  console.log("Array Sample 1 :", colors);

  const even: Array<number> = [2, 4, 6, 8];
  even.push(10);
  // even.push("10");
  console.log("Array Sample 2 :", even);

  const ids: (string | number)[] = ["ABC", 123];
  ids.push("DEF");
  ids.push(456);
  console.log("Array Sample 3 :", ids);

  /**
   * 配列の型推論
   */
  const generateSomeArray = () => {
    const _someArray = []; //any[]
    _someArray.push(123); //number[]
    _someArray.push("ABC"); //(string|number)[]
    _someArray.push(true); //(string|number|boolean)[]
    return _someArray;
  };
  const someArray = generateSomeArray();
  someArray.push(456);
  // someArray.push(true);
  console.log("Array Sample 4 :", someArray);

  /**
   * イミュータブルな配列
   */
  const commands: readonly string[] = ["git add", "git commit", "git push"];
  //pushもインデックスシグネチャを使った書き換えもできない
  // commands.push("git pull");
  // commands[2] = "git pull";
  console.log("Array Sample 5 :", commands);
}
