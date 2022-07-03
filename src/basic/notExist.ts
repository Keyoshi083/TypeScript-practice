export default function notExistSample() {
  let name = null;
  console.log("notExistSample1 :", typeof name, name);

  name = "リン";
  if (name) {
    console.log("notExistSample3 :", "吾輩は猫である。名前は" + name);
  } else {
    console.log("notExistSample2 :", "吾輩は猫である。名前はまだ" + name);
  }

  let age = undefined;
  console.log("notExistSample4 :", typeof age, age);
  age = 28;
  if (age) {
    console.log("notExistSample6 :", "吾輩は猫である。年齢は" + age);
  } else {
    console.log("notExistSample5 :", "年齢は秘密です");
  }
}
