const handleError = (error) => {
  console.warn(error)
}

export async function getCharacters(...ids) {
  const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/character/${ids}`);

  const response = await fetch(encodedURI)
    .catch((handleError));

  const repos = await response.json();
  return repos;
}

export async function getAllCharacters(page) {
  const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/character${page}`);

  const response = await fetch(encodedURI)
    .catch((handleError));

  const repos = await response.json();
  return repos;
}
