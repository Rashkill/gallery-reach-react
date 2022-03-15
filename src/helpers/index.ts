export function stringToUint(string: string) {
  const str = btoa(unescape(encodeURIComponent(string)));
  const uintArray = [];
  const len = str.length;

  let i = -1;

  while (++i < len) {
    uintArray[i] = str.charCodeAt(i);
  }

  return new Uint8Array(uintArray);
}
