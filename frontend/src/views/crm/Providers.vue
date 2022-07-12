<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>Fornecedores</CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell class="text-center">
                    <CIcon name="cil-people" />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Nome</CTableHeaderCell>
                  <CTableHeaderCell>E-mail</CTableHeaderCell>
                  <CTableHeaderCell>Telefone</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Country</CTableHeaderCell
                  >
                  <CTableHeaderCell>Usage</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Payment Method</CTableHeaderCell
                  >
                  <CTableHeaderCell>Activity</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ativo</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.name">
                  <CTableDataCell class="text-center">
                    <CAvatar
                      size="md"
                      :src="item.avatar.src"
                      :status="item.avatar.status"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      <router-link :to="{ name: 'Fornecedor'}">{{ item.user.name }}</router-link>
                    </div>
                    <div class="small text-medium-emphasis">
                      <span>{{ item.user.new ? 'New' : 'Recurring' }}</span> |
                      {{ item.user.registered }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small">
                      <a href=".">{{ item.user.email }}</a>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{{ item.user.phone }}</div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon
                      size="xl"
                      :name="item.country.flag"
                      :title="item.country.name"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="clearfix">
                      <div class="float-start">
                        <strong>{{ item.usage.value }}%</strong>
                      </div>
                      <div class="float-end">
                        <small class="text-medium-emphasis">
                          {{ item.usage.period }}
                        </small>
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.usage.color"
                      :value="item.usage.value"
                    />
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon size="xl" :name="item.payment.icon" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small text-medium-emphasis">Last login</div>
                    <strong>{{ item.activity }}</strong>
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

    <CModal size="xl" :visible="employeeModal" @close="closeEmployeeModal()">
      <CModalHeader>
        <CModalTitle>Editar Fornecedor</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow>
            <CCol xs>
              <div class="mb-3">
                <CFormCheck id="flexCheckChecked1" label="Ativo" checked />
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput1">Nome</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput1" :value="editingItem.user.name" :placeholder="editingItem.user.name"/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput2">Sobrenome</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput2" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput3">E-mail</CFormLabel>
                <CFormInput type="email" id="exampleFormControlInput3" :value="editingItem.user.email" :placeholder="editingItem.user.email"/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput4">Data de Nascimento</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput4" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput5">Cargo</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput5" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput6">RG</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput6" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput7">CPF</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput7" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput8">CNH</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput8" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput9">OAB</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput9" placeholder=""/>
              </div>
            </CCol>
            <CCol xs>
              <div class="mb-3">
                <CFormCheck id="flexCheckChecked2" label="Online" checked />
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput10">Endereço</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput10" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput11">Número</CFormLabel>
                <CFormInput type="number" id="exampleFormControlInput11" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput12">Complemento</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput12" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput13">Bairro</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput13" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput14">Cidade</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput14" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput15">UF</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput15" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput16">LinkedIn</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput16" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput17">Observações</CFormLabel>
                <CFormTextarea id="exampleFormControlInput17" rows="5"></CFormTextarea>
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeEmployeeModal()">
          Cancelar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>

  </div>
</template>
<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
import avatar2 from '@/assets/images/avatars/2.jpg'
import avatar3 from '@/assets/images/avatars/3.jpg'
import avatar4 from '@/assets/images/avatars/4.jpg'
import avatar5 from '@/assets/images/avatars/5.jpg'
import avatar6 from '@/assets/images/avatars/6.jpg'
import { ref } from 'vue'

export default {
  name: 'Providers',
  setup() {
    const employeeModal = ref(false)
    const progressGroupExample1 = [
      { title: 'Monday', value1: 34, value2: 78 },
      { title: 'Tuesday', value1: 56, value2: 94 },
      { title: 'Wednesday', value1: 12, value2: 67 },
      { title: 'Thursday', value1: 43, value2: 91 },
      { title: 'Friday', value1: 22, value2: 73 },
      { title: 'Saturday', value1: 53, value2: 82 },
      { title: 'Sunday', value1: 9, value2: 69 },
    ]
    const progressGroupExample2 = [
      { title: 'Male', icon: 'cil-user', value: 53 },
      { title: 'Female', icon: 'cil-user-female', value: 43 },
    ]
    const progressGroupExample3 = [
      {
        title: 'Organic Search',
        icon: 'cib-google',
        percent: 56,
        value: '191,235',
      },
      { title: 'Facebook', icon: 'cib-facebook', percent: 15, value: '51,223' },
      { title: 'Twitter', icon: 'cib-twitter', percent: 11, value: '37,564' },
      { title: 'LinkedIn', icon: 'cib-linkedin', percent: 8, value: '27,319' },
    ]
    const tableExample = [
      {
        avatar: { src: avatar1, status: 'success' },
        user: {
          name: 'Rebecca Avraamu',
          email: 'rebecca@email.com',
          phone: '11 98765-4321',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'USA', flag: 'cif-us' },
        usage: {
          value: 50,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
        activity: '10 sec ago',
        active: true,
      },
      {
        avatar: { src: avatar2, status: 'danger' },
        user: {
          name: 'Avram Tarasios',
          email: 'avram@email.com',
          phone: '21 98531-4600',
          new: false,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Brazil', flag: 'cif-br' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'info',
        },
        payment: { name: 'Visa', icon: 'cib-cc-visa' },
        activity: '5 minutes ago',
        active: false,
      },
      {
        avatar: { src: avatar3, status: 'warning' },
        user: {
          name: 'Quintin Ed',
          email: 'quintin@email.com',
          phone: '27 98752-0010',
          new: true,
          registered: 'Jan 1, 2021'
        },
        country: { name: 'India', flag: 'cif-in' },
        usage: {
          value: 74,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'warning',
        },
        payment: { name: 'Stripe', icon: 'cib-cc-stripe' },
        activity: '1 hour ago',
        active: true,
      },
      {
        avatar: { src: avatar4, status: 'secondary' },
        user: {
          name: 'Enéas Kwadwo',
          email: 'eneas@email.com',
          phone: '32 98765-0000',
          new: true,
          registered: 'Jan 1, 2021'
        },
        country: { name: 'France', flag: 'cif-fr' },
        usage: {
          value: 98,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'danger',
        },
        payment: { name: 'PayPal', icon: 'cib-cc-paypal' },
        activity: 'Last month',
        active: true,
      },
      {
        avatar: { src: avatar5, status: 'success' },
        user: {
          name: 'Agapetus Tadeáš',
          email: 'agapetus@email.com',
          phone: '11 98743-2100',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Spain', flag: 'cif-es' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'primary',
        },
        payment: { name: 'Google Wallet', icon: 'cib-cc-apple-pay' },
        activity: 'Last week',
        active: true,
      },
      {
        avatar: { src: avatar6, status: 'danger' },
        user: {
          name: 'Friderik Dávid',
          email: 'friderik@email.com',
          phone: '11 98460-0101',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Poland', flag: 'cif-pl' },
        usage: {
          value: 43,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Amex', icon: 'cib-cc-amex' },
        activity: 'Last week',
        active: false,
      },
    ]

    return {
      tableExample,
      progressGroupExample1,
      progressGroupExample2,
      progressGroupExample3,
      employeeModal,
      editingItem: {},
    }
  },
  methods: {
    editItem(item) {
      this.editingItem = { ...item };
      this.employeeModal = true
    },
    closeEmployeeModal(item) {
      this.employeeModal = false
    },
  }
}
</script>
