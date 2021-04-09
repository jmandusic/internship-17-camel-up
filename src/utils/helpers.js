export const camelSelector = (camels, dice) => {
  let selectedCamel = null;
  camels.forEach((camel) => {
    if (camel.id === dice.id) {
      selectedCamel = camel;
    }
  });

  return selectedCamel;
};

export const sortCamelsArray = (camels) => {
  return camels.sort(function (a, b) {
    return a.position - b.position;
  });
};
