export default function objectSample() {
  //ただのオブジェクト型
  const a: object = {
    name: "kei",
    age: 28,
  };
  //プロパティ 'name' は型 'object' に存在しません。
  // a.name

  //オブジェクトリテラル記法
  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "Japan",
  };

  console.log("Object Sample 1 : ", country);

  //一度型定義しておけば再代入する際もその型が担保される
  country = {
    language: "English",
    name: "United States of America",
  };
  console.log("Object Sample 2 : ", country);

  //オプショナルとreadonly
  const kei: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 28,
    firstName: "Kei",
    lastName: "Yoshida",
  };
  kei.gender = "male";
  kei.lastName = "Yamashita";
  // kei.firstName = "Taro";
  console.log("Object Sample 3 : ", kei);

  //インデックスシグネチャ
  //オブジェクトに対して複数のプロパティを持つ可能性を示す
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  };
  capitals.China = "Beijing";
  capitals.Canada = "Ottawa";
  console.log("Object Sample 4 : ", capitals);
}
