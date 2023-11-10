interface PathVideoData {
  [key: string]: any
}

export const getPathData = (
  rawPath: string,
  pathVideoPtBr: PathVideoData,
  pathVideoEn: PathVideoData
): any | undefined => {
  const pathSegments = rawPath.split('/')
  const shouldModifyPath = pathSegments.length > 2
  const path = shouldModifyPath ? `/${pathSegments[1]}/` : rawPath

  let pathData: any | undefined

  if (shouldModifyPath && pathSegments[1] === 'en') {
    pathData = pathVideoEn[`/${pathSegments[1]}/${pathSegments[2]}`]
  } else {
    pathData = pathVideoPtBr[path] || pathVideoEn[path]
  }

  return pathData
}
