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
import { logMessage, logMessage3, alwaysThrowError } from "./function/basic";
import { isUserSignedIn, isUserSignedIn2 } from "./function/parameters";

// logMessage("Hello World!!");
// logMessage3("Hello World!");
// alwaysThrowError("Error!!");

isUserSignedIn("001", "Kei");
isUserSignedIn("002");
isUserSignedIn2("001");
