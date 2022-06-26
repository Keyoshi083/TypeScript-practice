export default class World {
  message: number;

  constructor(message: string) {
    this.message = message;
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
