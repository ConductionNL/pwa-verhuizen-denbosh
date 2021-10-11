import React from 'react';

function createData(name, reference) {
  return {name, reference};
}

export default function ProofsTestData() {
  return [
    createData('Bewijs 1', '95128943'),
    createData('Bewijs 2', '12938148'),
  ];
}
