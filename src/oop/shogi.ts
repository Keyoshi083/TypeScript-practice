type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Player = "first" | "second";
class Game {
  private pieces = Game.makePiecies();
  private static makePiecies() {
    return [new Osho("first", 5, "1"), new Osho("second", 5, "9")];
  }
}

/**
 * 駒の位置を表すクラス
 */
class Position {
  //以下をつけるだけでメンバ変数として定義できる？
  constructor(private suji: Suji, private dan: Dan) {}

  distanceFrom(position: Position, player: Player) {
    if (player === "first") {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      };
    } else {
      return {
        suji: -Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      };
    }
  }
}

new Position(1, "2");

/**
 * 駒を表す抽象クラス
 */
abstract class Piece {
  //このクラスとサブクラスからのみ参照できる
  protected position: Position;
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }

  /**
   * パラメータとして渡された場所に駒を移動する
   * @param position
   */
  moveTo(position: Position) {
    this.position = position;
  }

  /**
   * 移動できるかどうかを判定するabstract メソッド
   * @param position
   * @param player
   */
  abstract canMoveTo(position: Position, player: Player): boolean;
}

// abstractクラスはインスタンス化できない
// new Piece("first", 1, "2");

/**
 * 王将のクラス
 */
class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player);
    //王将は全方向１マスずつ進める
    return distance.dan < 2 && distance.dan < 2;
  }
}

//TODO:歩となり金を実装する
