export const BREAKPOINTS = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
export const COLS = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

export const LAYOUT = {
    lg: [{ i: "menu", x: 0, y: 0, w: 3, h: 16, static: false },
    { i: "data", x: 0, y: 12, w: 12, h: 7, static: false},
    { i: "2", x: 4, y: 0, w: 1, h: 2 }
    ]
};

export const RGL_PROPS = {
    className: "layout",
    items: 20,
    rowHeight: 20,
    isDraggable: true,
    isResizable: true,
    autosize: true,
    margin: [10, 10],
    compactType: null,
    autoSize: true,
    layouts: LAYOUT,
    breakpoints: BREAKPOINTS,
    cols: COLS
}
