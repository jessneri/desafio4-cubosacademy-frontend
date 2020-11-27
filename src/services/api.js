function apiFetch(path, opcoes) {
  return fetch("https://cubos-desafio-4.herokuapp.com" + path, opcoes);
}

export default apiFetch;
