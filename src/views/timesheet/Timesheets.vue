<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Timesheet
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
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
                      <router-link :to="{ name: 'Timesheet'}">
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

    <CModal :visible="itemModal" @close="closeModal()">
      <CModalHeader>
        <CModalTitle v-if="is_edit">Editar TimeSheet</CModalTitle>
        <CModalTitle v-else>Adicionar TimeSheet</CModalTitle>
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
            <CFormLabel for="exampleFormControlInput2">Descrição</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput2" v-model="editingItem.description"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Hora</CFormLabel>
            <CFormInput type="time" id="exampleFormControlInput3" v-model="editingItem.timesheet_hours" placeholder="0:00"/>
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
  name: 'Timesheets',
  setup() {
    const itemModal = ref(false)
    const tableExample = ref([
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
        timesheet_date: '15/07/2022',
        timesheet_hours: '3:45',
        employee: 'Edward Eric',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        is_conferred: false,
        conferred_by: 'Regis',
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
        obj.description = item.description
        obj.timesheet_hours = item.timesheet_hours
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
        timesheet_date: today,
        timesheet_hours: this.editingItem.timesheet_hours,
        employee: 'Edward Eric',
        contract: '001 - Lorem ipsum',
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
  },
}
</script>
