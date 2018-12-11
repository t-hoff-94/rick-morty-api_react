export async function getCharacters(...ids) {
  const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/character/${ids}`);

  const response = await fetch(encodedURI)
    .catch((handleError));

  const repos = await response.json();
  return repos;
}
