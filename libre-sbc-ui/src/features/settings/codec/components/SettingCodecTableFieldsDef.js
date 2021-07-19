export default [
  {
    key: 'num',
    label: 'No.',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'description',
    label: 'Description',
  },
  {
    key: 'codec',
    label: 'Codec',
  },
  {
    key: 'action',
    label: 'Action',
    formatter: (value) => `${value} Abc`,
  },
];
