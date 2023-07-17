enum orientations {
  h = 'HORIZONTAL',
  v = 'VERTICAL',
}

export const removeGrid = (ref: HTMLElement): void => {
  ref
    .querySelectorAll('.gradient-vertical, .gradient-horizontal')
    ?.forEach(function (elem) {
      elem.parentNode?.removeChild(elem);
    });
};

export const createGrid = (
  ref: HTMLElement,
  linesGap: number,
  childrenWidth = false,
): void => {
  // space between lines
  let width = 0;
  let gap = linesGap;

  // check what width do we need layout or children
  if (childrenWidth) {
    width = ref.scrollWidth + 100;
  } else {
    width = window.innerWidth;
  }

  // add vertical lines
  while (gap < width) {
    const line = document.createElement('div');
    line.classList.add('gradient-vertical');
    line.style.left = `${gap}px`;
    ref.append(line);
    gap += linesGap;
  }

  gap = linesGap;

  // add horizontal lines
  while (gap < ref.offsetHeight) {
    const line = document.createElement('div');
    line.classList.add('gradient-horizontal');
    line.style.top = `${gap}px`;
    line.style.width = `${width}px`;
    ref.append(line);
    gap += linesGap;
  }
};

const getLinesInRadiusZone = (
  lines: NodeListOf<Element>,
  min: number,
  max: number,
  mainColor: string,
  orientation: orientations,
): HTMLElement[] => {
  const neededLines: HTMLElement[] = [];

  // check which lines are in the radius zone and add them to array, the rest we update the background
  lines.forEach((lineGrid: HTMLElement) => {
    const line = lineGrid;
    // get line offset
    const pos = orientation === 'VERTICAL' ? line.offsetLeft : line.offsetTop;

    if (min < pos && pos < max) {
      neededLines.push(line);
    } else {
      line.style.background = mainColor;
    }
  });

  return neededLines;
};

const addGradient = (
  lines: HTMLElement[],
  mouseCoordinate: number,
  orientation: orientations,
  mainColor: string,
  gradientColor: string,
): void => {
  // find middle element that in the radius zone
  const middleLine = Math.floor(lines.length / 2);

  // add gradient for lines
  lines.forEach((lineGrid: HTMLElement, index: number) => {
    const line = lineGrid;
    // center for gradient
    const mainColorCenter = mouseCoordinate;
    let coefficient = 0;

    // find a coefficient that reduces the size of the gradient for the side lines if an odd amount
    if (index < middleLine && lines.length % 2 !== 0) {
      // coefficient for lines before middle line
      coefficient = (middleLine - index) * 25;
    } else if (index > middleLine && lines.length % 2 !== 0) {
      // coefficient for lines after middle line
      coefficient = (index - middleLine) * 25;
    }

    // find the start and end point of gradient color
    const mainColorStart = mainColorCenter - 120 + coefficient;
    const mainColorEnd = mainColorCenter + 120 - coefficient;

    // add gradient to the line
    const degrees = orientation === 'HORIZONTAL' ? '90deg, ' : '';
    line.style.background = `linear-gradient(${degrees} ${mainColor}, ${mainColor} ${mainColorStart}px, ${gradientColor} ${mainColorCenter}px, ${mainColor} ${mainColorEnd}px)`;
  });
};

export const addAnimationToGrid = (
  e,
  mainColor: string,
  gradientColor: string,
  wrapper: HTMLElement | undefined | null,
): void => {
  if (!wrapper) return;
  // mouse position
  const x = e.pageX + wrapper.scrollLeft;
  const y = e.pageY - window.pageYOffset;
  // line capture radius
  const [minX, maxX] = [x - 100, x + 100];
  const [minY, maxY] = [y - 100, y + 100];
  // get grid lines
  const gradientBlocksV = wrapper.querySelectorAll('.gradient-vertical');
  const gradientBlocksH = wrapper.querySelectorAll('.gradient-horizontal');
  // lines that fall into the radius zone
  const vLines = getLinesInRadiusZone(
    gradientBlocksV,
    minX,
    maxX,
    mainColor,
    orientations.v,
  );
  const hLines = getLinesInRadiusZone(
    gradientBlocksH,
    minY,
    maxY,
    mainColor,
    orientations.h,
  );

  addGradient(vLines, y, orientations.v, mainColor, gradientColor);
  addGradient(hLines, x, orientations.h, mainColor, gradientColor);
};
