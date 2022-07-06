import World from "./world";

const root = document.getElementById("root");
const world = new World("Hello , Kei !");
world.sayHello(root);

/**
 * 03.基本の型定義
 */
// import { primitiveSample, notExistSample, anySample, unknownSample } from "./basic";
// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

/**
 * 04.関数の型定義
 */
// import { logMessage, logMessage3, alwaysThrowError } from "./function/basic";
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from "./function/parameters";

// // logMessage("Hello World!!");
// // logMessage3("Hello World!");
// // alwaysThrowError("Error!!");

// isUserSignedIn("001", "Kei");
// isUserSignedIn("002");
// isUserSignedIn2("001");
// const sum = sumProductsPrice(100, 200, 300, 400, 500);
// console.info("Function parameters sample 5 : Sum Products Price is  ", sum);

/**
 * 05.オブジェクトの型定義
 */
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias";

// objectSample();
// typeAliasSample();

/**
 * 06.配列とタプル型定義
 */
// import arraySample from "./array/array";
// import tupleSample from "./array/tuple";

// arraySample();
// tupleSample();

/**
 * 07.ジェネリック型とポリモーフィズム
 */
import genericsBasicSample from "./generics/basic";
import genericAdvanceSample from "./generics/advanced";
genericsBasicSample();
genericAdvanceSample();
