export default class Component<T, S> {
  $target: Element;
  $props: T;
  $state?: S;

  // props를 옵셔널하게 받는방법을 도저히모르겠어서 일단을 필수로받도록 처리함
  constructor($target: Element, $props: T) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
    this.mounted();
  }

  setup() {}
  mounted() {}
  setEvent() {}

  template() {
    return "";
  }
  render() {
    if (this.$target) {
      this.$target.innerHTML = this.template();
    }
  }

  setState(newState: S) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent<T>(
    eventType: keyof HTMLElementEventMap,
    selector: string,
    callback: CallbackFn<T>
  ) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: Element) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (event.target && !isTarget(event.target as Element)) {
        return;
      }
      callback(event);
    });
  }
}
