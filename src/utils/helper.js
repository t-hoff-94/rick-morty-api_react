export function reverseAcronym(acronym) {
  const arr = acronym.split('');
  const season = arr.slice(2,3).join('');
  const episode = arr.slice(5, 6).join('');
  return `Season ${season}, Episode ${episode}`;
}
