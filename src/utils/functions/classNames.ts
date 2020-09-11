export default function classNames(...classes: (string | undefined)[]) {
  const space = ' ';
  return classes
    .join(space)
    .replace('undefined', '')
    .replace(/\s+/g, space)
    .trim();
}
