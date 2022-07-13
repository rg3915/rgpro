<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>Contratos</CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Cliente</CTableHeaderCell>
                  <CTableHeaderCell>Título</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Valor</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ativo</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
                  <CTableDataCell>
                    <div class="small text-medium-emphasis">
                      <CBadge :color="item.type_color">{{ item.type }}</CBadge>
                    </div>
                    <div>
                      {{ item.customer }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      <router-link :to="{ name: 'Contrato'}">{{ item.id}} - {{ item.title }}</router-link>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div style="min-width: 6rem">
                      R$ <span class="float-end">{{ item.value }}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CBadge color="success" v-if="item.active">Ativo</CBadge>
                    <CBadge color="danger" v-else>Inativo</CBadge>
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
        customer: 'Jones Lohan',
        title: 'Lorem ipsum',
        type: 'por hora',
        type_color: 'success',
        value: 250.59,
        active: true,
      },
      {
        id: '002',
        customer: 'James Stewart',
        title: 'Deserunt mollit anim id est laborum',
        type: 'mensal',
        type_color: 'warning',
        value: 300.01,
        active: true,
      },
      {
        id: '003',
        customer: 'Roy Mustang',
        title: 'Laboris nisi ut aliquip',
        type: 'fixo',
        type_color: 'info',
        value: 10280.99,
        active: false,
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
