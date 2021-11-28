export const findElementByTag = (wrapper, tag) => {
  return wrapper.find(`[data-test="${tag}"]`)
}

export const findElementByComponentName = (wrapper, componentName) => {
  return wrapper.find(componentName)
}
