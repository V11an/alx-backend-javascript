export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable for no-unused-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-enable for no-unused-vars */

  return [task, task2];
}
