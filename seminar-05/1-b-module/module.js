const func = (params) => {
  return params.reduce((p, c) => c += p, 0)
}

const e = Math.E

export { func as f, e as E }
