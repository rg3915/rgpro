<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>Timesheet</CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Data</CTableHeaderCell>
                  <CTableHeaderCell>Cliente/Contrato</CTableHeaderCell>
                  <CTableHeaderCell>Descrição</CTableHeaderCell>
                  <CTableHeaderCell>Conferido por</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
                  <CTableDataCell>
                    <div class="small text-medium-emphasis">
                      {{ item.timesheet_date }}
                    </div>
                    <div>
                      <router-link :to="{ name: 'Contrato'}">
                        <h4>{{ item.timesheet_hours }}</h4>
                      </router-link>
                    </div>
                    <div class="small text-medium-emphasis">
                      {{ item.employee }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.customer }}
                    </div>
                    <div class="small text-medium-emphasis">
                      <router-link :to="{ name: 'Contrato'}">
                        {{ item.contract }}
                      </router-link>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.description }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell style="min-width: 8rem;">
                    <div>
                      <CFormCheck v-model="item.is_conferred"/>
                      <span class="ms-2" v-if="item.is_conferred">{{ item.conferred_by }}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon class="text-primary" name="cil-pencil" @click="editItem(item)" />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Refunds',
  setup() {
    const itemModal = ref(false)
    const tableExample = [
      {
        id: '001',
        timesheet_date: '12/07/2022',
        timesheet_hours: '7:00',
        employee: 'Edward Eric',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        is_conferred: true,
        conferred_by: 'Regis',
      },
      {
        id: '002',
        timesheet_date: '13/07/2022',
        timesheet_hours: '2:00',
        employee: 'Edward Eric',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        is_conferred: false,
        conferred_by: 'Regis',
      },
      {
        id: '003',
        timesheet_date: '13/07/2022',
        timesheet_hours: '4:30',
        employee: 'Edward Eric',
        customer: 'James Stewart',
        contract: '002 - Deserunt mollit anim id est laborum',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        is_conferred: true,
        conferred_by: 'Regis',
      },
      {
        id: '004',
        timesheet_date: '14/07/2022',
        timesheet_hours: '1:15',
        employee: 'Edward Eric',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        is_conferred: true,
        conferred_by: 'Regis',
      },
      {
        id: '005',
        timesheet_date: '15/07/2022',
        timesheet_hours: '3:45',
        employee: 'Edward Eric',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        is_conferred: false,
        conferred_by: 'Regis',
      },
    ]

    return {
      tableExample,
      itemModal,
      editingItem: {},
    }
  },
  methods: {
    editItem(item) {
      this.editingItem = { ...item };
      this.itemModal = true
    },
    closeModal(item) {
      this.itemModal = false
    },
  }
}
</script>
