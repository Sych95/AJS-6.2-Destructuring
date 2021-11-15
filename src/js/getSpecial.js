export function getSpecial(obj) {
  const { special } = obj;

  for (const item of special) {
    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      item.description = 'Описание недоступно';
    }
  }
  return special;
}
