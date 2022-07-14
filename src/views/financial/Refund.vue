<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes do Reembolso
            <CButton
              color="primary"
              variant="link"
              size="sm"
              @click="openEmployeeModal()"
            >
              <CIcon class="text-primary" name="cil-pencil" />
            </CButton>
            <CButton color="danger" variant="link" size="sm">
              <CIcon class="text-danger" name="cil-trash" />
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CRow class="align-items-start">

              <CCol>
                <CCard class="h-100">
                  <CRow>
                    <CCol>
                      <CCard class="h-100" style="border: 0;">
                        <CCardBody>
                          <CRow>
                            <CCol :xs="4">
                              <CCard>
                                <CCardBody>
                                  <CCardTitle>
                                    R$ {{ item.value }}
                                    <span class="float-end">
                                      {{ item.id }}
                                    </span>
                                  </CCardTitle>
                                  <CCardSubtitle>{{ item.customer }}</CCardSubtitle>
                                  <p class="small text-medium-emphasis">
                                    {{ item.created }}
                                    <span class="float-end">
                                      <CBadge color="success" v-if="item.active">Ativo</CBadge>
                                      <CBadge color="danger" v-else>Inativo</CBadge>
                                    </span>
                                  </p>
                                </CCardBody>
                              </CCard>

                              <CCard class="mt-2">
                                <CListGroup flush>
                                  <CListGroupItem>
                                    <CTable align="middle" small hover responsive>
                                      <CTableBody>
                                        <CTableRow>
                                          <CTableDataCell>
                                            Criado por
                                          </CTableDataCell>
                                          <CTableDataCell>
                                            {{ item.created_by }}
                                          </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                          <CTableDataCell>
                                            Tipo
                                          </CTableDataCell>
                                          <CTableDataCell>
                                            {{ item.type }}
                                          </CTableDataCell>
                                        </CTableRow>
                                      </CTableBody>
                                    </CTable>
                                  </CListGroupItem>
                                </CListGroup>
                              </CCard>

                            </CCol>
                            <CCol :xs="8">
                              <CCard>
                                <CCardBody>
                                  <CCardTitle>
                                    Descrição
                                  </CCardTitle>
                                  <CCardText>{{ item.description }}</CCardText>
                                </CCardBody>
                              </CCard>
                            </CCol>
                          </CRow>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCard>
              </CCol>

            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CModal :visible="itemModal" @close="closeitemModal()">
      <CModalHeader>
        <CModalTitle>Telefone</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Telefone</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="00 00000-0000"/>
          </div>
          <div class="mb-3">
            <CFormSelect
              aria-label="Default select example"
              :options="phoneTypes">
            </CFormSelect>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeitemModal()">
          Cancelar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>

  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Refund',
  setup() {
    const itemModal = ref(false)
    const item = {
      id: '001',
      created: '12/07/2022',
      created_by: 'James Stewart',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      type: 'Diversos',
      customer: 'Jones Lohan',
      value: 10280.99,
      active: true,
    }

    return {
      item,
      itemModal,
    }
  },
  methods: {
    openitemModal() {
      this.itemModal = true
    },
    closeitemModal() {
      this.itemModal = false
    },
  }
}
</script>
