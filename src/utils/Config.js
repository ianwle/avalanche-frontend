export const BREAKPOINTS = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
export const COLS = { lg: 24, md: 20, sm: 12, xs: 8, xxs: 4 };

export const LAYOUT = {
    lg: [{ i: "menu", x: 0, y: 0, w: 6, h: 24, static: false },
    // { i: "data", x: 0, y: 12, w: 12, h: 14, static: false},
    { i: "tools", x: 24, y: 0, w: 1, h: 24, static: false }
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
