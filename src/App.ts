import Component from "./core/Component";
import Item from "./components/Item";

export default class App extends Component<{}, { username: string }> {
  setup(): void {
    this.$state = {
      username: "hyewon",
    };
  }

  template() {
    return `<p data-component="user-name">asdfasdf</p>`;
  }

  mounted(): void {
    const $name = this.$target.querySelector('[data-component="user-name"]');
    new Item($name!, { username: this.$state?.username ?? "", show: true });
  }
}
