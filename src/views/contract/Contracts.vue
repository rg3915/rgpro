<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Contratos
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
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
                      <router-link :to="{ name: 'Contrato'}">{{ code(item.id) }} - {{ item.title }}</router-link>
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

    <CModal :visible="itemModal" @close="closeModal()">
      <CModalHeader>
        <CModalTitle v-if="is_edit">Editar Contrato</CModalTitle>
        <CModalTitle v-else>Adicionar Contrato</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Cliente</CFormLabel>
            <CFormSelect
              aria-label="Cliente"
               v-model="editingItem.customer"
              :options="[
                'Selecione um cliente',
                { value: 'Carmen Bradley', label: 'Carmen Bradley'},
                { value: 'Daniel Demarais', label: 'Daniel Demarais'},
                { value: 'Diana Gill', label: 'Diana Gill'},
                { value: 'Elliana Eakins', label: 'Elliana Eakins'},
                { value: 'Igor Burns', label: 'Igor Burns'},
                { value: 'Zeal Dávid', label: 'Zeal Dávid'},
              ]">
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput2">Título</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput2" v-model="editingItem.title"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Valor</CFormLabel>
            <CFormInput type="number" step="0.01" id="exampleFormControlInput3" v-model="editingItem.value"/>
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
  name: 'Contracts',
  setup() {
    const itemModal = ref(false)
    const tableExample = ref([
      {
        id: 1,
        customer: 'Jones Lohan',
        title: 'Lorem ipsum',
        type: 'por hora',
        type_color: 'success',
        value: 250.59,
        active: true,
      },
      {
        id: 2,
        customer: 'James Stewart',
        title: 'Deserunt mollit anim id est laborum',
        type: 'mensal',
        type_color: 'warning',
        value: 300.01,
        active: true,
      },
      {
        id: 3,
        customer: 'Roy Mustang',
        title: 'Laboris nisi ut aliquip',
        type: 'fixo',
        type_color: 'info',
        value: 10280.99,
        active: false,
      },
    ])

    return {
      tableExample,
      itemModal,
      editingItem: {},
      is_edit: ref(false)
    }
  },
  methods: {
    addItem() {
      this.editingItem = {}
      this.is_edit = false
      this.itemModal = true
    },
    saveItem(item) {
      // Update
      if (item.id) {
        const obj = this.tableExample.find(d => d.id === item.id)
        obj.customer = item.customer
        obj.title = item.title
        obj.value = item.value
        this.itemModal = false
        return
      }
      // Create
      this.tableExample.push({
        id: this.tableExample.length + 1,
        customer: this.editingItem.customer,
        title: this.editingItem.title,
        value: this.editingItem.value,
        type: 'mensal',
        type_color: 'warning',
        active: true,
      })
      this.itemModal = false
    },
    editItem(item) {
      this.editingItem = { ...item }
      this.is_edit = true
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
