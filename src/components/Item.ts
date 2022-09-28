import Component from "../core/Component";

type ItemProps = {
  username: string;
  show: boolean;
};

export default class Item extends Component<ItemProps, undefined> {
  template() {
    const { username, show } = this.$props;
    return `<p>${username}</p>`;
  }
}
