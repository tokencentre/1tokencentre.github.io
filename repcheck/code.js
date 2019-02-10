/* global $ */

function checker() { // eslint-disable-line
  const name = $('#name')[0].value.replace(/[^A-Za-z0-9_]/gi, '');
  const validNames = ['Token_Centre''];
  if (validNames.map(x => x.toUpperCase()).indexOf(name.toUpperCase()) >= 0) {
    $('#result').html(`${name.toUpperCase()} is an official TokenCentre representative.`);
  } else {
    $('#result').html(`${name.toUpperCase()} is NOT OFFICIAL.`);
  }
}
