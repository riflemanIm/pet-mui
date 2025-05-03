// theme/base/borders.ts
export interface Borders {
  borderWidth: {
    [key: string]: string;
  };
  borderRadius: {
    [key: string]: string;
  };
}

const borders: Borders = {
  borderWidth: {
    thin: "1px",
    thick: "2px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};

export default borders;
