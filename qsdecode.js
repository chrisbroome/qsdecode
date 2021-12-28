import {reduce} from 'lodash'

const redux = (a, x) => {
  const kvp = x.split('=');
  const k = kvp[0];
  const v = decodeURIComponent(kvp[1]);
  return {
    ...a,
    [k]: decodeURIComponent(v),
  }
}

export const qsdecode = (qs) => {
  const s = qs.split('&');
  return reduce(s, redux, {});
}
