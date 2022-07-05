export default function typeAliasSample() {
  //型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan",
  };

  console.log("Object Sample 5 : ", japan);

  const america: Country = {
    capital: "Washington, D.C",
    language: "English",
    name: "United States of America",
  };
  console.log("Object Sample 5 : ", america);

  /**
   *合併型(union)と交差型(intersection）
   */
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  //合併型：KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard;

  //交差型：KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard;

  //Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: "バスターソード",
    swordSkill: "凶切り",
  };

  //Wizard寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: "木の杖",
    magicSkill: "ファイラ",
  };
  console.log("Object Sample 6 : ", adventurer1);
  console.log("Object Sample 6 : ", adventurer2);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: "マスターソード",
    swordSkill: "ドリフトスラッシュ",
    magicSkill: "サンダラ",
  };
  console.log("Object Sample 6 : ", paladin);
}
