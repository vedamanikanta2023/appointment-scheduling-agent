import { useEffect, useState } from "react";

const Tab1 = () => {
  useEffect(() => {
    const handleResize = throttle(() => {
      console.log("throttling");
      console.log(window.innerWidth);
    }, 500);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Tab 1 content successful</div>;
};

const Tab2 = () => {
  throw new Error("Intensionally falling in error");
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>Tabs</div>
      <div>
        <div>
          <button onClick={() => setActiveTab(0)}>Tab 1</button>
        </div>
        <div>
          <button onClick={() => setActiveTab(1)}>Tab 2</button>
        </div>
      </div>
      {!activeTab ? (
        <div>
          <Tab1 />
        </div>
      ) : (
        <div>
          Tab2 Content <Tab2 />
        </div>
      )}
    </div>
  );
};

function throttle(fn: Function, delay = 300) {
  let last = 0;
  let throttleTimeout: any;

  return function (...args: any[]) {
    const now = Date.now();

    if (now - last < delay) {
      clearTimeout(throttleTimeout);

      throttleTimeout = setTimeout(
        () => {
          last = Date.now();
          fn(...args);
        },
        delay - (now - last),
      );

      return;
    }

    last = now;
    fn(...args);
  };
}
