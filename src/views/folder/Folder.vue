<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes da Pasta
            ({{ tableExample.length }} documentos)
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CRow v-for="item in tableExample" :key="item.id">
              <CCol>
                <CCard>
                  <CCardHeader>
                    {{ item.id }} - {{ item.title }}
                    <CButton color="primary" variant="link" size="sm">
                      <CIcon class="text-primary" name="cil-pencil" />
                    </CButton>
                    <CButton color="danger" variant="link" size="sm">
                      <CIcon class="text-danger" name="cil-trash" />
                    </CButton>
                    <span class="float-end ms-1">
                      <CBadge color="success" v-if="item.active">Ativo</CBadge>
                      <CBadge color="danger" v-else>Inativo</CBadge>
                    </span>
                    <span class="float-end">
                      <CBadge color="warning">{{ item.type_document }}</CBadge>
                    </span>
                  </CCardHeader>
                  <CListGroup flush>
                    <CListGroupItem>
                      <CTable align="middle" small hover responsive>
                        <CTableBody>
                          <CTableRow>
                            <CTableDataCell>
                              Cliente
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.customer }}
                            </CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableDataCell>
                              Contrato
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.contract }}
                            </CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableDataCell>
                              Descrição
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.description }}
                            </CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableDataCell>
                              Criado em
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.created }}
                            </CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CListGroupItem>
                  </CListGroup>
                </CCard>
              </CCol>

              <CCol>
                <CCard>
                  <CCardBody>
                    <embed :src="item.file" type="application/pdf" width="100%" height="750px">
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>
<script>
export default {
  name: 'Contract',
  setup() {
    const tableExample = [
      {
        id: 1,
        title: 'Cópia do Processo 001',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        created: '13/07/2022',
        file: 'http://www.africau.edu/images/default/sample.pdf',
        type_document: 'Ato Societário',
        active: true,
      },
      {
        id: 2,
        title: 'Cópia do Processo 002',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Posuere libero varius.',
        created: '14/07/2022',
        file: 'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
        type_document: 'Certidão',
        active: true,
      },
      {
        id: 3,
        title: 'Cópia do Processo 003',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Casamentiss faiz malandris se pirulitá. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        created: '15/07/2022',
        file: 'http://www.africau.edu/images/default/sample.pdf',
        type_document: 'Procuração',
        active: true,
      },
    ]

    return {
      tableExample,
    }
  }
}
</script>
