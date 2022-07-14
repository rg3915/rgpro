<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Reembolsos
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell class="text-center">
                    <CIcon name="cil-dollar" />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Data</CTableHeaderCell>
                  <CTableHeaderCell>Descrição</CTableHeaderCell>
                  <CTableHeaderCell>Pago à</CTableHeaderCell>
                  <CTableHeaderCell>Valor</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
                  <CTableDataCell>
                    <div>
                      <router-link :to="{ name: 'Reembolso'}">{{ item.id }}</router-link>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.created }}
                    </div>
                    <div class="small text-medium-emphasis">
                      {{ item.created_by }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small">
                      <CBadge color="success">{{ item.type }}</CBadge>
                    </div>
                    <div>
                      {{ item.description }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.customer }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div style="min-width: 6rem">
                      R$ <span class="float-end">{{ item.value }}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon class="text-primary" name="cil-pencil" @click="editItem(item)" />
                  </CTableDataCell>
                </CTableRow>
                <CTableRow> </CTableRow>
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
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Diversos',
        customer: 'Jones Lohan',
        value: 10280.99,
        active: true,
      },
      {
        id: '002',
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        type: 'Diversos',
        customer: 'Roy Mustang',
        value: 812.01,
        active: true,
      },
      {
        id: '003',
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        type: 'Diversos',
        customer: 'Kaleb Alla',
        value: 1415.22,
        active: true,
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
