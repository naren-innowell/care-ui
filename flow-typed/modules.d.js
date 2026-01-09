// @flow

// Module declarations for non-JS imports
declare module '*.svg' {
  declare export default string;
}

declare module '*.png' {
  declare export default string;
}

declare module '*.jpg' {
  declare export default string;
}

declare module '*.jpeg' {
  declare export default string;
}

declare module '*.gif' {
  declare export default string;
}

declare module '*.css' {
  declare export default { [key: string]: string };
}
