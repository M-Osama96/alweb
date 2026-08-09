import InfiniteMarquee from "vanilla-infinite-marquee";
new InfiniteMarquee({
  element: ".marquee-container",
  speed: 25000,
  smoothEdges: true,
  direction: "right",
  gap: "15px",
  duplicateCount: 2,
  mobileSettings: {
    direction: "top",
    speed: 20000,
  },
  on: {
    beforeInit: () => {
      console.log("Not Yet Initialized");
    },

    afterInit: () => {
      console.log("Initialized");
    },
  },
});
