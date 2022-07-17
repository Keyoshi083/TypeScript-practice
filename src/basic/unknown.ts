export default function unknownSample() {
  const maybeNum: unknown = 10;
  console.log("unknownSample1 :", typeof maybeNum, maybeNum);

  const isFoo = maybeNum === "foo";
  console.log("unknownSample2 :", typeof isFoo, isFoo);

  if (typeof maybeNum === "number") {
    const sum: number = maybeNum + 10;
    console.log("unknownSample3 :", typeof sum, sum);
  }
}
