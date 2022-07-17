export default function genericsBasicSample() {
  //ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    array.forEach((val) => {
      result += val;
    });
    return result;
  };

  console.log("Generics Sample 1: ", stringReduce(["May ", "the ", "force ", "be ", "with ", "you."], ""));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    array.forEach((val) => {
      result += val;
    });
    return result;
  };
  console.log("Generics Sample 2: ", numberReduce([100, 200, 300, 500, 600], 2500));

  type Reduce = {
    (array: string[], initialValue: string): string;
    (array: number[], initialValue: number): number;
  };

  //ジェネリック型の関数定義
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericsStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    array.forEach((val) => {
      result += val;
    });
    return result;
  };

  console.log("Generics Sample 3: ", genericsStringReduce(["Make ", "TypeScript ", "be ", "Happy "], ""));

  const genericsNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    array.forEach((val) => {
      result += val;
    });
    return result;
  };

  console.log("Generics Sample 3: ", genericsNumberReduce([100, 2000, 3500], 5004543));

  /**
   * いろいろなジェネリック型定義
   */
  //完全な呼び出しシグネチャ
  type GednericReduce2 = {
    <T>(array: T[], initialValue: T): T;
    <U>(array: U[], initialValue: U): U;
  };

  //呼び出しシグネチャ省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T;
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T;
}
