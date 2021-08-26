type AllTypes = string | boolean | any[] | number;
export const sanitizeListProperties = (properties: {private?: boolean, name?: string, list?: any[], likes?: number}) => {
  const error: null | string = null
  const sanitizedProperties: {private?: AllTypes, name?: AllTypes, list?: AllTypes, likes?: AllTypes} = {}
  for (const [key, value] of Object.entries(properties)) {
    if(key === 'private') {
      sanitizedProperties[key] = value;
    }
    if(key === 'name') {
      sanitizedProperties[key] = value;
    }
    if(key === 'list') {
      sanitizedProperties[key] = value;
    }
    if(key === 'likes') {
      sanitizedProperties[key] = value;
    }
  }

  return {sanitizeListProperties, error}
}