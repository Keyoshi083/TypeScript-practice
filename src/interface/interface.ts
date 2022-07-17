interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: "hard",
};

//typesで同様のことをする場合は交差型を利用する
type MaboDofu = {
  calories: number;
  spicyLv: number;
};

type Rice = {
  calories: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice; //交差型(Union)

const maboDon: MaboDon = {
  calories: 500,
  spicyLv: 10,
  gram: 200,
};

/**
 * インターフェースの拡張
 */
interface Book {
  page: number;
  title: string;
}

interface Magazine extends Book {
  cycle: "daily" | "Weekly" | "monthly" | "yearly";
}

const jump: Magazine = {
  page: 300,
  title: "週刊少年ジャンプ",
  cycle: "Weekly",
};

type BookType = {
  page: number;
  title: string;
};

interface Handbook extends BookType {
  theme: string;
}

const cotrip: Handbook = {
  page: 150,
  title: "ことりっぷ",
  theme: "旅行",
};

/**
 * Classに型を継承する
 */
class Comic implements Book {
  page: number;
  title: string;

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page;
    this.title = title;
  }

  getPublishYear() {
    return `${this.title}が発売されたのは${this.getPublishYear}年です。`;
  }
}

const popularComic = new Comic(200, "ツバサ", "1998");

console.log(popularComic.getPublishYear());
