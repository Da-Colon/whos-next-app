import { IList } from "./interfaces";

type AllTypes = string | boolean | any[] | number;
export const sanitizeListProperties = (properties: {
  isPrivate?: boolean;
  name?: string;
  list?: IList[];
  likes?: number;
}) => {
  console.log("🚀 ~ file: listContext.utils.ts ~ line 5 ~ properties", properties)
  const sanitizedProperties: {
    isPrivate?: AllTypes;
    name?: AllTypes;
    list?: AllTypes;
    likes?: AllTypes;
  } = {};
  for (const [key, value] of Object.entries(properties)) {
    if (key === "isPrivate") {
      sanitizedProperties[key] = value;
    }
    if (key === "name") {
      sanitizedProperties[key] = value;
    }
    if (key === "list") {
      sanitizedProperties[key] = value;
    }
    if (key === "likes") {
      sanitizedProperties[key] = value;
    }
  }

  return sanitizedProperties;
};
