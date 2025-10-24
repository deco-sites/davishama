import { Component } from "preact";

export type Props = {
  colors?: Array<string>;
  type: "single" | "multi";
};

class HeaderBg extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
    this.state = {
      currentColor: "",
    };
  }

  componentDidMount() {
    function showBar(i: number) {
      i == 1 &&
        document.getElementById("colorBarMulti1")?.classList.remove(
          "opacity-0",
        );

      i == 2 &&
        document.getElementById("colorBarMulti1")?.classList.add("opacity-0");
      i == 2 &&
        document.getElementById("colorBarMulti2")?.classList.remove(
          "opacity-0",
        );

      i == 3 &&
        document.getElementById("colorBarMulti2")?.classList.add("opacity-0");
      i == 3 &&
        document.getElementById("colorBarMulti3")?.classList.remove(
          "opacity-0",
        );

      i == 4 &&
        document.getElementById("colorBarMulti3")?.classList.add("opacity-0");
    }

    const {
      type,
    } = this.props;
    setTimeout(() => {
      const colorBar = document.getElementById("colorBar");
      const body = document.body, html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const colors = this.props.colors;
      const sec = height / colors.length;

      document.addEventListener("scroll", () => {
        const s = html.scrollTop;

        if (0 <= s && s < sec) {
          type == "single" && this.setState({ currentColor: colors[0] });
          type == "multi" && showBar(1);
        } else if (sec < s && s < sec * 2) {
          type == "single" && this.setState({ currentColor: colors[1] });
          type == "multi" && showBar(2);
        } else if (sec * 2 < s && s < sec * 3) {
          type == "single" && this.setState({ currentColor: colors[2] });
          type == "multi" && showBar(3);
        } else if (sec * 3 < s && s < sec * 4) {
          type == "single" && this.setState({ currentColor: colors[3] });
          type == "multi" && showBar(4);
        } else if (sec * 4 < s && s < sec * 5) {
          type == "single" && this.setState({ currentColor: colors[4] });
        } else {
          type == "single" && this.setState({ currentColor: colors[5] });
        }
      });
    }, 2600);
  }

  render() {
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                  #colorBar {
                      background: ${this.state.currentColor};
                  }
              `,
          }}
        >
        </style>
        {this.props.type == "multi" && (
          <>
            <div
              id="colorBarMulti4"
              class="absolute t-0 z-2 w-full h-2 duration-[800ms]"
              style="background: radial-gradient(100% 8151.79% at 0% 50%, #EA95D6 0%, #54C3FF 32.29%, #4CB943 64.58%, #FC70EF 100%);"
            >
            </div>
            <div
              id="colorBarMulti3"
              class="absolute t-0 z-2 w-full h-2 duration-[800ms]"
              style="background: radial-gradient(100% 8151.79% at 0% 50%, #54C3FF 0%, #4CB943 35.94%, #FC70EF 66.15%, #EA95D6 100%);"
            >
            </div>
            <div
              id="colorBarMulti2"
              class="absolute t-0 z-2 w-full h-2 duration-[800ms]"
              style="background: radial-gradient(100% 8151.79% at 0% 50%, #4CB943 0%, #FC70EF 31.25%, #EA95D6 60.42%, #54C3FF 100%);"
            >
            </div>
            <div
              id="colorBarMulti1"
              class="absolute t-0 z-2 w-full h-2 duration-[800ms]"
              style="background: radial-gradient(100% 8151.79% at 0% 50%, #FC7074 0%, #EA95D6 32.81%, #54C3FF 66.15%, #4CB943 96.88%);"
            >
            </div>
          </>
        )}
      </div>
    );
  }
}

export default HeaderBg;
