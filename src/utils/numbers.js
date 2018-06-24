const fixedPlaced = (float, places) => parseFloat(float).toFixed(places)
const fp3 = float => fixedPlaced(float, 3)
const fp1 = float => fixedPlaced(float, 1)

export { fixedPlaced, fp1, fp3 }
