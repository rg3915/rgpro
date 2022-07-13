import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/crm',
        name: 'CRM',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/crm/employees',
        children: [
          {
            path: '/crm/employees',
            name: 'Funcionários',
            component: () => import('@/views/crm/Employees.vue'),
          },
          {
            path: '/crm/employees/:id',
            name: 'Funcionário',
            component: () => import('@/views/crm/Employee.vue'),
          },
          {
            path: '/crm/contacts',
            name: 'Contatos',
            component: () => import('@/views/crm/Contacts.vue'),
          },
          {
            path: '/crm/contact',
            name: 'Contato',
            component: () => import('@/views/crm/Contact.vue'),
          },
          {
            path: '/crm/customers',
            name: 'Clientes',
            component: () => import('@/views/crm/Customers.vue'),
          },
          {
            path: '/crm/customer',
            name: 'Cliente',
            component: () => import('@/views/crm/Customer.vue'),
          },
          {
            path: '/crm/providers',
            name: 'Fornecedores',
            component: () => import('@/views/crm/Providers.vue'),
          },
          {
            path: '/crm/provider',
            name: 'Fornecedor',
            component: () => import('@/views/crm/Provider.vue'),
          },
        ],
      },
      {
        path: '/financial',
        name: 'Financial',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/financial/refunds',
        children: [
          {
            path: '/financial/refunds',
            name: 'Reembolsos',
            component: () => import('@/views/financial/Refunds.vue'),
          },
          {
            path: '/financial/refund',
            name: 'Reembolso',
            component: () => import('@/views/financial/Refund.vue'),
          },
          {
            path: '/financial/refund-note-customers',
            name: 'Notas de Reembolso dos Clientes',
            component: () => import('@/views/financial/RefundNoteCustomers.vue'),
          },
          {
            path: '/financial/refund-note-customer',
            name: 'Nota de Reembolso do Cliente',
            component: () => import('@/views/financial/RefundNoteCustomer.vue'),
          },
          {
            path: '/financial/refund-note-employees',
            name: 'Notas de Reembolso dos Funcionários',
            component: () => import('@/views/financial/RefundNoteEmployees.vue'),
          },
          {
            path: '/financial/refund-note-employee',
            name: 'Nota de Reembolso do Funcionário',
            component: () => import('@/views/financial/RefundNoteEmployee.vue'),
          },
          {
            path: '/financial/refund-note-paying-sources',
            name: 'Notas de Despesas da Fonte Pagadora',
            component: () => import('@/views/financial/RefundNotePayingSources.vue'),
          },
          {
            path: '/financial/refund-note-paying-source',
            name: 'Nota de Despesa da Fonte Pagadora',
            component: () => import('@/views/financial/RefundNotePayingSource.vue'),
          },
        ],
      },
      {
        path: '/contract',
        name: 'Contract',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/contract/contracts',
        children: [
          {
            path: '/contract/contracts',
            name: 'Contratos',
            component: () => import('@/views/contract/Contracts.vue'),
          },
          {
            path: '/contract/contract',
            name: 'Contrato',
            component: () => import('@/views/contract/Contract.vue'),
          },
        ],
      },
      {
        path: '/timesheet',
        name: 'Timesheet',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/timesheet/timesheets',
        children: [
          {
            path: '/timesheet/timesheets',
            name: 'Timesheets',
            component: () => import('@/views/timesheet/Timesheets.vue'),
          },
          {
            path: '/timesheet/timesheet',
            name: 'Timesheet',
            component: () => import('@/views/timesheet/Timesheet.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
