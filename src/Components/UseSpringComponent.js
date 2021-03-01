import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { useDrag } from "react-use-gesture";

const UseSpringComponent = () => {
  const WIDTH = 100;
  const RANGE = 50;

  const [toggled, setToggled] = useState(false);
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));

  const RB_RANGE = 5;
  const rubberband = (x) =>
    x > RB_RANGE ? RB_RANGE : RB_RANGE * (x / RB_RANGE) * (x / RB_RANGE);

  const clamp = (x) => {
    const dx = toggled ? x * -1 : x;
    if (dx < 0) {
      const rb = rubberband(Math.abs(dx));
      return x < 0 ? -rb : rb;
    }
    if (dx > RANGE) {
      const diff = dx - RANGE;
      const rb = rubberband(diff);
      return x < 0 ? -RANGE - rb : RANGE + rb;
    }
    return x;
  };

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx], tap }) => {
    if (!down && tap) {
      set({ x: toggled ? 0 : 50 });
      setToggled(!toggled);
      return;
    }
    const left = mx < 0;
    const mxclamped = clamp(mx);
    const aboveThreshold = Math.abs(mxclamped) > RANGE / 2;
    if (!down && aboveThreshold) {
      setToggled(mx > 0);
    }
    const offs = toggled ? RANGE : 0;
    const newX =
      offs + (down ? mxclamped : aboveThreshold ? (left ? -RANGE : RANGE) : 0);
    set({ x: newX });
  });

  return (
    <animated.div
      style={{
        backgroundColor: x.interpolate({
          range: [0, RANGE],
          output: ["#FF4650", "#48EA8A"],
        }),
        borderRadius: 25,
        cursor: "pointer",
        height: 50,
        overflow: "hidden",
        WebkitTapHighlightColor: "transparent",
        width: WIDTH,
      }}
    >
      {/* drag area */}
      <animated.div
        {...bind()}
        style={{
          height: 51,
          left: -50,
          margin: 0,
          position: "relative",
          width: 150,
          transform: x.interpolate((x) => `translate3d(${x}px, 0px, 0)`),
        }}
      >
        {/* knob */}
        <animated.div
          style={{
            backgroundColor: "#fff",
            clipPath: x.interpolate({
              range: [0, RANGE],
              output: [
                "polygon(43.34683% 18.69928%, 49.79018% 17.99435%, 56.05332% 18.56933%, 61.98362% 20.32509%, 67.42845% 23.16254%, 72.2352% 26.98255%, 76.25124% 31.68601%, 79.32396% 37.17381%, 81.30072% 43.34683%, 82.00565% 49.79018%, 81.43067% 56.05332%, 79.67491% 61.98362%, 76.83746% 67.42845%, 73.01745% 72.2352%, 68.31399% 76.25124%, 62.82619% 79.32396%, 56.65317% 81.30072%, 50.20982% 82.00565%, 43.94668% 81.43067%, 38.01638% 79.67491%, 32.57155% 76.83746%, 27.7648% 73.01745%, 23.74876% 68.31399%, 20.67604% 62.82619%, 18.69928% 56.65317%, 17.99435% 50.20982%, 18.56933% 43.94668%, 20.32509% 38.01638%, 23.16254% 32.57155%, 26.98255% 27.7648%, 31.68601% 23.74876%, 37.17381% 20.67604%)",
                "polygon(48.20592% 18.002%, 50% 18%, 51.79408% 18.002%, 57.60182% 20.39818%, 60% 26.20592%, 60.002% 30.65396%, 60% 35.102%, 60.002% 39.851%, 60% 44.6%, 60.002% 49.612%, 60% 54.624%, 60.002% 59.561%, 60% 64.498%, 60.002% 69.14604%, 60% 73.79408%, 57.60182% 79.60182%, 51.79408% 82.002%, 50% 82%, 48.20592% 82.002%, 42.39818% 79.60182%, 40% 73.79408%, 40.002% 69.14604%, 40% 64.498%, 40.002% 59.561%, 40% 54.624%, 40.002% 49.612%, 40% 44.6%, 40.002% 39.851%, 40% 35.102%, 40.002% 30.65396%, 40% 26.20592%, 42.39818% 20.39818%)",
              ],
            }),
            height: 50,
            left: 50,
            position: "absolute",
            width: 50,
          }}
        />
        {/* hold */}
        <animated.div
          style={{
            backgroundColor: x.interpolate({
              range: [0, RANGE],
              output: ["#FF4650", "#48EA8A"],
            }),
            borderRadius: 6,
            height: 12,
            left: 69,
            position: "absolute",
            top: 19,
            transform: x.interpolate({
              range: [0, RANGE],
              output: ["scaleX(1)", "scaleX(0)"],
              extrapolateRight: "clamp",
            }),
            // transform: x.interpolate((x) => `translate3d(${x}px, 0px, 0)`),
            width: 12,
          }}
        />
      </animated.div>
    </animated.div>
  );
};

export default UseSpringComponent;
