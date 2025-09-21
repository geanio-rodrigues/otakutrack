export const navItems = [
  { type: 'link', label: 'Novidades', path: '/new' },
  { type: 'link', label: 'Populares', path: '/popular' },
  {
    type: 'dropdown',
    label: 'Categorias',
    options: [
      { label: 'Ação', path: '/action' },
      { label: 'Aventura', path: '/adventure' },
      { label: 'Drama', path: '/drama' },
      { label: 'Fantasia', path: '/fantasy' }
    ],
  },
];