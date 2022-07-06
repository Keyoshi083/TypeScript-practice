export default function genericAdvanceSample() {
  //map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

  const mapStringToNumbers: Map<string, number> = (array: string[], fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };

  const numbers = mapStringToNumbers(["123", "456", "789"], (item) => Number(item));
  console.log("Generic advanced Sample : 1", numbers);

  const mapNumberToStrings: Map<number, string> = (array, fn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };
  const strings = mapNumberToStrings(numbers, (item) => String(item));
  console.log("Generic advanced Sample : 2", strings);
}
