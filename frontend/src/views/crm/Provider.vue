<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes do Fornecedor
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
                    <CCol xs="4">
                      <CCardImage orientation="top" :src="item.avatar.src" style="width: 120px;" />
                    </CCol>
                    <CCol>
                      <CCard class="h-100" style="border: 0;">
                        <CCardBody>
                          <CCardTitle>{{ item.user.name }}</CCardTitle>
                          <p>
                            <a href=".">{{ item.user.email }}</a>
                          </p>
                          <p>{{ item.user.phone }}
                            <span class="float-end">
                              <CBadge color="success" v-if="item.active">Ativo</CBadge>
                              <CBadge color="danger" v-else>Inativo</CBadge>
                            </span>
                          </p>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                  <CCardBody>
                    <!-- <CCardTitle>{{ item.user.name }}</CCardTitle> -->
                    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>

                    <CCard style="width: 18rem">
                      <CCardHeader>Cargo</CCardHeader>
                      <CListGroup flush>
                        <CListGroupItem>
                          <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow>
                                <CTableDataCell>
                                  Cargo
                                </CTableDataCell>
                                <CTableDataCell>
                                  Advogado
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  Departamento
                                </CTableDataCell>
                                <CTableDataCell>
                                  Jurídico
                                </CTableDataCell>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                        </CListGroupItem>
                      </CListGroup>
                    </CCard>

                    <CCard class="mt-2" style="width: 18rem">
                      <CCardHeader>Documentos</CCardHeader>
                      <CListGroup flush>
                        <CListGroupItem>
                          <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow>
                                <CTableDataCell>
                                  RG
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.user.rg }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  CPF
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.user.cpf }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  OAB
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.user.oab }}
                                </CTableDataCell>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                        </CListGroupItem>
                      </CListGroup>
                    </CCard>

                    <CCard class="mt-2" style="width: 18rem">
                      <CCardHeader>Endereço</CCardHeader>
                      <CListGroup flush>
                        <CListGroupItem>
                          <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow>
                                <CTableDataCell colspan="2">
                                  {{ item.address.street }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  Complemento
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.address.complement }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  Bairro
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.address.district }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  Estado
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.address.city }} - {{ item.address.uf }}
                                </CTableDataCell>
                              </CTableRow>
                              <CTableRow>
                                <CTableDataCell>
                                  CEP
                                </CTableDataCell>
                                <CTableDataCell>
                                  {{ item.address.cep }}
                                </CTableDataCell>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                        </CListGroupItem>
                      </CListGroup>
                    </CCard>

                    <br>
                    <CCardSubtitle>Observações</CCardSubtitle>
                    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol>
                <CRow class="align-items-start">
                  <CCol>
                    <CCard class="h-100">
                      <CCardHeader>
                        Telefones
                        <CButton
                          color="success"
                          variant="outline"
                          size="sm"
                          class="float-end"
                          @click="openPhoneModal()"
                        >
                          <CIcon class="text-success" name="cil-plus" />
                        </CButton>
                      </CCardHeader>
                      <CCardBody>
                        <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow v-for="phone in item.phones" :key="item.id">
                                <td>
                                  {{ phone.number }} <br>
                                  <small>{{ phone.type }}</small>
                                </td>
                                <td align="right">
                                  <CButton color="primary" variant="link" size="sm">
                                    <CIcon class="text-primary" name="cil-pencil" />
                                  </CButton>
                                  <CButton color="danger" variant="link" size="sm">
                                    <CIcon class="text-danger" name="cil-trash" />
                                  </CButton>
                                </td>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>

                <CRow class="align-items-start mt-4">
                  <CCol>
                    <CCard class="h-100">
                      <CCardHeader>
                        Contatos
                        <CButton
                          color="success"
                          variant="outline"
                          size="sm"
                          class="float-end"
                          @click="openContactModal()"
                        >
                          <CIcon class="text-success" name="cil-plus" />
                        </CButton>
                      </CCardHeader>
                      <CCardBody>
                        <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow v-for="contact in item.contacts" :key="item.id">
                                <td>
                                  <div>
                                    {{ contact.name }}
                                  </div>
                                  <div class="small text-medium-emphasis">
                                    {{ contact.email }}
                                  </div>
                                  <div class="small text-medium-emphasis">
                                    {{ contact.phone }}
                                  </div>
                                </td>
                                <td align="right">
                                  <CButton color="primary" variant="link" size="sm">
                                    <CIcon class="text-primary" name="cil-pencil" />
                                  </CButton>
                                  <CButton color="danger" variant="link" size="sm">
                                    <CIcon class="text-danger" name="cil-trash" />
                                  </CButton>
                                </td>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCol>

              <CCol>
                <CRow class="align-items-start">
                  <CCol>
                    <CCard class="h-100">
                      <CCardHeader>
                        Permissões
                        <CButton color="primary" variant="outline" size="sm" class="float-end">
                          <CIcon class="text-primary" name="cil-pencil" />
                        </CButton>
                      </CCardHeader>
                      <CCardBody>
                        <CTable align="middle" small responsive>
                          <CTableBody>
                            <tr>
                              <td></td>
                              <td>C</td>
                              <td>R</td>
                              <td>U</td>
                              <td>D</td>
                            </tr>
                            <tr>
                              <td>CRM</td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                            </tr>
                            <tr>
                              <td>Financeiro</td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                            </tr>
                            <tr>
                              <td>Contrato</td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                            </tr>
                            <tr>
                              <td>TimeSheet</td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                            </tr>
                            <tr>
                              <td>Pastas</td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck checked disabled/>
                              </td>
                              <td>
                                <CFormCheck disabled/>
                              </td>
                            </tr>
                          </CTableBody>
                        </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>

                <CRow class="align-items-start mt-4">
                  <CCol>
                    <CCard class="h-100">
                      <CCardHeader>
                        Dados Bancários
                        <CButton
                          color="success"
                          variant="outline"
                          size="sm"
                          class="float-end"
                          @click="openBankModal()"
                        >
                          <CIcon class="text-success" name="cil-plus" />
                        </CButton>
                      </CCardHeader>
                      <CCardBody>
                        <CTable align="middle" small hover responsive>
                            <CTableBody>
                              <CTableRow v-for="bank in item.banks" :key="item.id">
                                <td>
                                  <div>
                                    Banco: {{ bank.number }} - {{ bank.name }}
                                  </div>
                                  <div class="small text-medium-emphasis">
                                    Agência: {{ bank.agency }}
                                  </div>
                                  <div class="small text-medium-emphasis">
                                    Conta: {{ bank.count }}
                                  </div>
                                </td>
                                <td align="right">
                                  <CButton color="primary" variant="link" size="sm">
                                    <CIcon class="text-primary" name="cil-pencil" />
                                  </CButton>
                                  <CButton color="danger" variant="link" size="sm">
                                    <CIcon class="text-danger" name="cil-trash" />
                                  </CButton>
                                </td>
                              </CTableRow>
                            </CTableBody>
                          </CTable>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCol>

            </CRow>
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
                <CFormInput type="text" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput2">Sobrenome</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput2" placeholder=""/>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput3">E-mail</CFormLabel>
                <CFormInput type="email" id="exampleFormControlInput3" placeholder=""/>
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

    <CModal :visible="phoneModal" @close="closePhoneModal()">
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
        <CButton color="secondary" @click="closePhoneModal()">
          Cancelar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>

    <CModal :visible="contactModal" @close="closeContactModal()">
      <CModalHeader>
        <CModalTitle>Contato</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Nome</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput2">E-mail</CFormLabel>
            <CFormInput type="email" id="exampleFormControlInput2"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Telefone</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput3" placeholder="00 00000-0000"/>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeContactModal()">
          Cancelar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>

    <CModal :visible="bankModal" @close="closeBankModal()">
      <CModalHeader>
        <CModalTitle>Dados Bancários</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Nome do Banco</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="Nubank"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput2">Número do Banco</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput2" placeholder="260"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Agência</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput3" placeholder="001"/>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput3">Conta</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput3" placeholder="4200"/>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeBankModal()">
          Cancelar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>

  </div>
</template>
<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
import { ref } from 'vue'

export default {
  name: 'Provider',
  setup() {
    const employeeModal = ref(false)
    const phoneModal = ref(false)
    const contactModal = ref(false)
    const bankModal = ref(false)
    const item = {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Rebecca Avraamu',
        email: 'rebecca@email.com',
        phone: '11 98765-4321',
        new: true,
        registered: 'Jan 1, 2021',
        rg: '780.314.035-0',
        cpf: '790.450.643-01',
        oab: '149276',
      },
      address: {
        street: 'Av. Bartolomeu de Carvalho, 201',
        complement: '2 andar',
        district: 'Vila Clarice',
        city: 'São Paulo',
        uf: 'SP',
        cep: '01413-000',
      },
      phones: [
        {
          id: 1,
          number: '11 94222-0000',
          type: 'Principal',
        },
        {
          id: 2,
          number: '11 98000-4900',
          type: 'Celular',
        },
        {
          id: 3,
          number: '11 98765-4321',
          type: 'Recado',
        },
      ],
      contacts: [
        {
          id: 1,
          name: 'Mary Avraamu',
          email: 'mary@email.com',
          phone: '11 94650-0000'
        },
        {
          id: 2,
          name: 'John Avraamu',
          email: 'john@email.com',
          phone: '11 94650-0001'
        },
        {
          id: 3,
          name: 'Stewart Avraamu',
          email: 'stewart@email.com',
          phone: '11 94650-0002'
        },
      ],
      banks: [
        {
          id: 1,
          name: 'Nubank',
          number: '260',
          agency: '001',
          count: '4200',
        },
        {
          id: 2,
          name: 'Inter',
          number: '77',
          agency: '002',
          count: '3201',
        },
      ],
      active: true,
    }
    const phoneTypes = [
      '-----',
      {
        value: 1,
        label: 'Principal',
      },
      {
        value: 2,
        label: 'Celular',
      },
      {
        value: 3,
        label: 'Recado',
      },
    ]

    return {
      item,
      employeeModal,
      phoneModal,
      contactModal,
      bankModal,
      phoneTypes,
    }
  },
  methods: {
    openEmployeeModal() {
      this.employeeModal = true
    },
    closeEmployeeModal() {
      this.employeeModal = false
    },
    openPhoneModal() {
      this.phoneModal = true
    },
    closePhoneModal() {
      this.phoneModal = false
    },
    openContactModal() {
      this.contactModal = true
    },
    closeContactModal() {
      this.contactModal = false
    },
    openBankModal() {
      this.bankModal = true
    },
    closeBankModal() {
      this.bankModal = false
    },
  }
}
</script>
