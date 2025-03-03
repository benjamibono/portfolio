export const getImageDimensions = (aspectRatio: number = 16 / 9) => {
  const baseWidth = 800;
  return {
    width: baseWidth,
    height: Math.round(baseWidth / aspectRatio),
  };
};

export const generateSrcSet = (imagePath: string, sizes: number[] = [300, 600, 900]) => {
  return sizes.map((size) => `${imagePath}?w=${size} ${size}w`).join(', ');
};

export const generateImageSizes = (
  breakpoints: { [key: string]: number } = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }
) => {
  return (
    Object.entries(breakpoints)
      .map(([breakpoint, width]) => `(min-width: ${width}px) ${width}px`)
      .join(', ') + ', 100vw'
  );
};
