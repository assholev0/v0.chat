import { resolve } from 'path';
import pkg from '../package.json';

const extendRoutes = (routes, r) => {
  const idx2del = routes.findIndex(x => x.path === '');
  if (idx2del !== -1) {
    routes.splice(idx2del, 1);
  }
  routes.push({
    name: 'index',
    path: '/',
    component: r(__dirname, 'pages/index.vue')
  });
};

export default function () {
  this.addLayout({
    name: 'default',
    src: resolve(__dirname, 'layouts/default.vue')
  });
  this.extendRoutes(extendRoutes);
}

export { pkg as meta };
