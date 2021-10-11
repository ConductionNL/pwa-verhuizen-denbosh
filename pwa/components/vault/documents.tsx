import React from 'react';

function createData(name, reference) {
  return {name, reference};
}

export default function DocumentsTestData() {
  return [
    createData('Document 1', '95128944'),
    createData('Document 2', '12938147'),
  ];
}
