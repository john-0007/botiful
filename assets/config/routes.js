export default [
  { name: 'home', path: '/' },
  { name: 'products', path: '/products', children: [
    { name: 'show', path: '/:productId' }
  ]}
];
