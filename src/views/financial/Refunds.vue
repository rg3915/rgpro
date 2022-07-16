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
                  <CTableDataCell class="text-center">
                    <div>
                      <router-link :to="{ name: 'Reembolso'}">{{ code(item.id) }}</router-link>
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
                    {{ item.customer }}
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

    <CModal :visible="itemModal" @close="closeModal()">
      <CModalHeader>
        <CModalTitle>Editar Reembolso</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Cliente</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" v-model="editingItem.customer"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput2">Descrição</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput2" v-model="editingItem.description"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Criado por</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput3" v-model="editingItem.created_by"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput4">Valor</CFormLabel>
            <CFormInput type="number" step="0.01" id="exampleFormControlInput4" v-model="editingItem.value"/>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeModal()">
          Cancelar
        </CButton>
        <CButton color="primary" @click="saveItem(editingItem)">Salvar</CButton>
      </CModalFooter>
    </CModal>

  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Refunds',
  setup() {
    const itemModal = ref(false)
    const tableExample = ref([
      {
        id: 1,
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Diversos',
        customer: 'Jones Lohan',
        value: 10280.99,
        active: true,
      },
      {
        id: 2,
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        type: 'Diversos',
        customer: 'Roy Mustang',
        value: 812.01,
        active: true,
      },
      {
        id: 3,
        created: '12/07/2022',
        created_by: 'James Stewart',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        type: 'Diversos',
        customer: 'Kaleb Alla',
        value: 1415.22,
        active: true,
      },
    ])

    return {
      tableExample,
      itemModal,
      editingItem: {},
    }
  },
  methods: {
    addItem() {
      this.editingItem = {}
      this.itemModal = true
    },
    saveItem(item) {
      // Update
      if (item.id) {
        const obj = this.tableExample.find(d => d.id === item.id)
        obj.customer = item.customer
        obj.description = item.description
        obj.created_by = item.created_by
        obj.value = item.value
        this.itemModal = false
        return
      }
      // Create
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      today = dd + '/' + mm + '/' + yyyy;
      this.tableExample.push({
        id: this.tableExample.length + 1,
        customer: this.editingItem.customer,
        description: this.editingItem.description,
        created_by: this.editingItem.created_by,
        value: this.editingItem.value,
        type: 'Diversos',
        created: today
      })
      this.itemModal = false
    },
    editItem(item) {
      this.editingItem = { ...item }
      this.itemModal = true
    },
    closeModal(item) {
      this.itemModal = false
    },
    code(id) {
      return '00' + id
    }
  },
}
</script>
