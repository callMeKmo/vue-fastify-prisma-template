import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../../pages/HomePage.vue')
    },
    {
        path: '/categories',
        component: () => import('../../pages/CategoriesPage.vue')
    },
    {
        path: '/categories/:id',
        component: () => import('../../pages/CategoryPage.vue'),
        props: true
    },
    {
        path: '/products',
        component: () => import('../../pages/ProductsPage.vue')
    },
    {
        path: '/dashboard',
        component: () => import('../../pages/AdminDashboard.vue')
    },
    {
        path: '/dashboard/categories',
        component: () => import('../../pages/DashboardCategoriesPage.vue')
    },
    {
        path: '/dashboard/categories/create',
        component: () => import('../../pages/CreateCategoryPage.vue')
    },
    {
        path: '/dashboard/categories/:id',
        component: () => import('../../pages/EditCategoryPage.vue'),
        props: true
    },
    {
        path: '/dashboard/products',
        component: () => import('../../pages/DashboardProductsPage.vue')
    },
    {
        path: '/dashboard/products/create',
        component: () => import('../../pages/CreateProductPage.vue')
    },
    {
        path: '/dashboard/products/:id',
        component: () => import('../../pages/EditProductPage.vue'),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
