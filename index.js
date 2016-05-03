'use strict';

const askFor = (prop) => {
  let res = prompt(prop);

  if (res == null) {
    let exit = confirm('stop?');

    return exit ? null : askFor(prop);
  }
  if (res == '') return askFor(prop);
  return res;
}

const prompty = (props) => {
  let res = {};

  for (let i = 0; i < props.length; i++) {
    let temp = askFor(props[i].label);

    if (!temp) return null;
  	res[props[i].field] = temp;
  }
  return res;
}

module.exports = prompty;