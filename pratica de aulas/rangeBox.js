function solve(clawPos, boxes, boxInClaw) {
  let maxIndex = 0;
  let minIndex = 0;

  let maxValue = boxes[0];
  let minValue = boxes[0];

  const nBox = boxes.reduce((a, b) => a + b, 0) + (boxInClaw ? 1 : 0);
  const tope = Math.min(boxes.length, nBox);
  console.log("tope", tope);

  for (let i = 0; i < tope; i++) {
    if (boxes[i] < minValue) {
      minIndex = i;
      minValue = boxes[i];
    }
    if (boxes[i] > maxIndex) {
      maxIndex = i;
      maxValue = boxes[i];
    }
  }

  for (let exInd = tope; exInd < boxes.length; exInd++) {
    if (boxes[exInd] >= maxValue) {
      maxIndex = exInd;
      maxValue = boxes[exInd];
    }
  }

  if (boxInClaw === true) {
    if (clawPos === minIndex) {
      return "place";
    }
    return clawPos < minIndex ? "right" : "left";
  } else {
    if (clawPos === maxIndex) {
      return "pick";
    }
    return clawPos < maxIndex ? "right" : "left";
  }

  return "";
}
