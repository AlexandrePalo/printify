export const breakpoints = {
  desktopLg: 1400,
  desktopMd: 1300,
  desktopSm: 1200,
  tabletLg: 1040,
  tabletMd: 991,
  tabletSm: 840,
  mobileLg: 767,
  mobileMd: 540,
  mobileSm: 400
}

export const setClass = (classObj, breakpoint) => {
  if (classObj.default === undefined) classObj.default = ''
  if (typeof breakpoint !== 'object') {
    throw new Error(
      `Bad breakpoint type given: ${breakpoint} (${typeof breakpoint})`
    )
  }
  if (breakpoint.name === 'default') return classObj['default']
  const sizeArray = Object.keys(breakpoints).reverse()
  const startingIndex = sizeArray.indexOf(breakpoint.name)
  const firstMatchedKey =
    sizeArray.slice(startingIndex).find(key => classObj[key]) || 'default'

  return classObj[firstMatchedKey]
}

const breakpointFromString = string => {
  const breakpoint = breakpoints[string]
  if (!breakpoint) {
    throw new Error(`Bad breakpoint variable given: ${string}`)
  }
  return breakpoint
}

export const breakpointIsGreaterThan = (
  breakpointToCompare,
  currentBreakpointSize
) => {
  const comparison =
    typeof breakpointToCompare === 'string'
      ? breakpointFromString(breakpointToCompare)
      : breakpointToCompare

  if (currentBreakpointSize === null || currentBreakpointSize > comparison) {
    return true
  } else {
    return false
  }
}

export const breakpointIsLessThan = (
  breakpointToCompare,
  currentBreakpointSize
) => {
  const comparison =
    typeof breakpointToCompare === 'string'
      ? breakpointFromString(breakpointToCompare)
      : breakpointToCompare

  if (currentBreakpointSize !== null && currentBreakpointSize <= comparison) {
    return true
  } else {
    return false
  }
}
