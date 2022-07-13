<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>Notas de Despesas da Fonte Pagadora</CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Nota</CTableHeaderCell>
                  <CTableHeaderCell>Fonte Pagadora</CTableHeaderCell>
                  <CTableHeaderCell>Vencimento</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Total</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Pago?</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
                  <CTableDataCell>
                    <div>
                      <router-link :to="{ name: 'Nota de Despesa da Fonte Pagadora'}">{{ item.id }}</router-link>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.customer }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.due_date }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div style="min-width: 6rem">
                      R$ <span class="float-end">{{ item.value }}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <div>
                      <CIcon v-if="item.is_paid" class="text-success" name="cil-check-alt" size="xl" />
                      <CIcon v-else class="text-danger" name="cil-x" size="xl" />
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
  name: 'RefundNotePayingSources',
  setup() {
    const itemModal = ref(false)
    const tableExample = [
      {
        id: '001/2022',
        customer: 'Jones Lohan',
        due_date: '12/07/2022',
        value: 10280.99,
        is_paid: true,
      },
      {
        id: '002/2022',
        customer: 'Roy Mustang',
        due_date: '12/07/2022',
        value: 1170.01,
        is_paid: false,
      },
      {
        id: '003/2022',
        customer: 'Kaleb Alla',
        due_date: '12/07/2022',
        value: 1500.99,
        is_paid: true,
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
