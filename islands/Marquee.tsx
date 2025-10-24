import { Component } from "preact";

export type Props = {
  id: Array<string>;
};

class Marquee extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    function Marquee(selector, speed) {
      const parentSelector = document.getElementById(selector);
      const clone = parentSelector?.innerHTML;
      const firstElement = parentSelector?.children[0];
      let i = 0;
      parentSelector?.insertAdjacentHTML("beforeend", clone);
      parentSelector?.insertAdjacentHTML("beforeend", clone);

      setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
          i = 0;
        }
        i = i + speed;
      }, 0);
    }
    addEventListener("load", Marquee(this.props.id, 0.2));
  }

  render() {
    return <div></div>;
  }
}

export default Marquee;
