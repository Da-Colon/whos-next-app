import { ListProps, SanitizeListProperties } from "../typescript/lists.types";

export const sanitizeListProperties: SanitizeListProperties = (properties: {
  isPrivate?: boolean;
  name?: string;
  list?: ListProps[];
  likes?: number;
}) => {
  const sanitizedProperties: {
    isPrivate?: boolean;
    name?: string;
    list?: ListProps[];
    likes?: number;
  } = {};
  for (const [key, value] of Object.entries(properties)) {
    if (key === "isPrivate") {
      sanitizedProperties[key] = value as boolean;
    }
    if (key === "name") {
      sanitizedProperties[key] = value as string;
    }
    if (key === "list") {
      sanitizedProperties[key] = value as ListProps[];
    }
    if (key === "likes") {
      sanitizedProperties[key] = value as number;
    }
  }

  return sanitizedProperties;
};
