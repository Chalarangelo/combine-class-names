/**
 * Removes unnecessary whitespace from template literals parsed as className.
 * Use with a template literal only.
 */
const combineClassNames = (t, ...i) => {
  const plainTexts = t
    .join(' ')
    .split(' ')
    .map(v => v.trim());
  const interpolations = i
    .filter(Boolean)
    .reduce((acc, v) => [...acc, ...v.split(' ')], [])
    .map(v => v.trim());
  return [...new Set([...plainTexts, ...interpolations])]
    .filter(Boolean)
    .join(' ') || undefined;
};

module.exports = combineClassNames;
