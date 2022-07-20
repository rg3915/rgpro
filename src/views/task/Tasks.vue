<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Tarefas
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Concluir</CTableHeaderCell>
                  <CTableHeaderCell>Data</CTableHeaderCell>
                  <CTableHeaderCell>Cliente</CTableHeaderCell>
                  <CTableHeaderCell>Descrição</CTableHeaderCell>
                  <CTableHeaderCell>Funcionário</CTableHeaderCell>
                  <CTableHeaderCell>Prioridade</CTableHeaderCell>
                  <CTableHeaderCell>Feito</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow
                  v-for="item in tableExample"
                  :key="item.id"
                  :class="{'text-medium-emphasis': item.is_done, 'text-done': item.is_done}"
                >
                  <CTableDataCell>
                    <div class="text-center">
                      <CFormCheck id="flexCheckChecked1" v-model="item.is_done" />
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.date }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.customer }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      <span>{{ item.description }}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.employee }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="clearfix">
                      <div class="float-start">
                        <strong>{{ get_priority(item.priority.value) }}</strong>
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.priority.color"
                      :value="item.priority.value"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      <span class="float-end">
                        <CIcon v-if="item.is_done" class="text-success" name="cil-check-alt" size="xxl" />
                        <CIcon v-else class="text-danger" name="cil-x" size="xxl" />
                      </span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon class="text-primary" name="cil-pencil" @click="editItem(item)" />
                    <CIcon class="text-danger ms-2" name="cil-trash" @click="deleteItem(item)" />
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
        <CModalTitle v-if="is_edit">Editar Tarefa</CModalTitle>
        <CModalTitle v-else>Adicionar Tarefa</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3" v-if="!is_edit">
            <CFormLabel for="exampleFormControlInput1">Data</CFormLabel>
            <CFormInput type="date" id="exampleFormControlInput1" v-model="editingItem.date"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput2">Cliente</CFormLabel>
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
            <CFormLabel for="exampleFormControlInput3">Descrição</CFormLabel>
            <CFormTextarea id="exampleFormControlInput3" rows="5" v-model="editingItem.description"></CFormTextarea>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput4">Funcionário</CFormLabel>
            <CFormSelect
              aria-label="Funcionário"
               v-model="editingItem.employee"
              :options="[
                'Selecione um funcionário',
                { value: 'Andrea Silberman', label: 'Andrea Silberman' },
                { value: 'Antony Bush', label: 'Antony Bush' },
                { value: 'James Smith', label: 'James Smith' },
                { value: 'Jeannie Phillip', label: 'Jeannie Phillip' },
                { value: 'Margaret Potter', label: 'Margaret Potter' },
                { value: 'Newton Jones', label: 'Newton Jones' },
              ]">
            </CFormSelect>
          </div>
          <div class="mb-3" v-if="!is_edit">
            <CFormLabel for="exampleFormControlInput5">Prioridade</CFormLabel>
            <CFormSelect
              aria-label="Prioridade"
               v-model="editingItem.priority"
              :options="[
                { value: '70', label: 'Média' },
                { value: '40', label: 'Baixa' },
                { value: '100', label: 'Alta' },
              ]">
            </CFormSelect>
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
  name: 'Tasks',
  setup() {
    const itemModal = ref(false)
    const tableExample = ref([
      {
        id: 1,
        date: '20/07/2022',
        customer: 'Rebecca Avraamu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        employee: 'Edward Eric',
        priority: {
          value: 100,
          color: 'danger',
        },
        is_done: false,
      },
      {
        id: 2,
        date: '20/07/2022',
        customer: 'Avram Tarasios',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        employee: 'Avram Tarasios',
        priority: {
          value: 70,
          color: 'warning',
        },
        is_done: false,
      },
      {
        id: 3,
        date: '20/07/2022',
        customer: 'Quintin Ed',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', employee: 'Edward Eric',
        priority: {
          value: 40,
          color: 'success',
        },
        is_done: true,
      },
    ])

    return {
      tableExample,
      itemModal,
      editingItem: {
        user: {
          name: '',
          email: '',
        },
      },
      is_edit: ref(false)
    }
  },
  methods: {
    get_priority(value) {
      if (value <= 40) {
        return 'Baixa'
      }
      else if (value <= 70) {
        return 'Média'
      } else {
        return 'Alta'
      }
    },
    addItem() {
      this.editingItem = {}
      this.is_edit = false
      this.itemModal = true
    },
    saveItem(item) {
      if (item.id) {
        const obj = this.tableExample.find(d => d.id === item.id)
        obj.customer = item.customer
        obj.description = item.description
        obj.employee = item.employee
        this.itemModal = false
        return
      }
      const data = this.editingItem.date.split('-')
      const date = `${data[2]}/${data[1]}/${data[0]}`
      this.tableExample.push({
        id: this.tableExample.length + 1,
        date: date,
        customer: this.editingItem.customer,
        description: this.editingItem.description,
        employee: this.editingItem.employee,
        priority: {
          value: 40,
          color: 'success',
        },
        is_done: false,
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
    deleteItem(item) {
      var idx = this.tableExample.indexOf(item)
      this.tableExample.splice(idx, 1)
    }
  }
}
</script>

<style>
  .text-done {
    text-decoration: line-through;
  }
</style>