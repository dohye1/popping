import { fromEvent, delay } from "rxjs";
import { map } from "rxjs/operators";
import Circle from "./components/Circle";

const $obs1 = fromEvent<MouseEvent>(document, "click");

$obs1
  .pipe(
    delay(300),
    map((target) => ({ x: target.clientX, y: target.clientY }))
  )
  .subscribe((value: Position) => {
    new Circle(document.querySelector<HTMLDivElement>("#app")!, {
      position: value,
    });
  });
