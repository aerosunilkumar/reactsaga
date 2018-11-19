const apiBase = "";

function* getMainListAPI() {
  const result = yield fetch(`${apiBase}/api/`).then(res => res.json());
  return yield result;
}

export const Api = {
  getMainListAPI
};
