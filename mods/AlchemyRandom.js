// Addon to alchemy mod where you can draw randomly from your discovered elements
elements.randomalchemy = {
    color: ["#ffd700", "#ffcc00", "#ffee88"],
    behavior: behaviors.SELFDELETE,
    tick: function(pixel) {
        const alchemyElements = Object.keys(elements).filter(name =>
            elements[name].category === "alchemy mod" &&
            elements[name].hidden !== true // Only discovered elements
        );
        if (alchemyElements.length > 0) {
            const randomElem = alchemyElements[Math.floor(Math.random() * alchemyElements.length)];
            changePixel(pixel, randomElem);
        }
    },
    category: "Random",
    state: "solid",
    density: 1000,
    excludeRandom: true
};
