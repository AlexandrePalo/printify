const fixedPlaced = (float, places) => parseFloat(float).toFixed(places)
const fp3 = float => fixedPlaced(float, 3)

export { fixedPlaced, fp3 }
