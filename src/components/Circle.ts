import Component from "../core/Component";
import "./Circle.css";

type CircleProps = {
  position: Position;
};

export default class Circle extends Component<CircleProps, { id: number }> {
  setup(): void {
    const uuid = Date.now();
    this.$state = { id: uuid };
    // any..ㅎ
    this.addEvent<(event: any) => void>("click", `[data-id="${uuid}"]`, (e) => {
      e.stopPropagation();
      e.target.parentNode.removeChild(
        document.querySelector(`[data-id="${uuid}"]`)
      );
    });
  }

  template() {
    const { position } = this.$props;
    return `<div class="circle" style="top: ${position.y}px; left: ${position.x}px" data-id=${this.$state?.id}>여기!</div>`;
  }

  render() {
    this.$target.insertAdjacentHTML("beforeend", this.template());
  }
}
