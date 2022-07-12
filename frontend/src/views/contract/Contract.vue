<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes do Contrato
            <CButton
              color="primary"
              variant="link"
              size="sm"
            >
              <CIcon class="text-primary" name="cil-pencil" />
            </CButton>
            <CButton color="danger" variant="link" size="sm">
              <CIcon class="text-danger" name="cil-trash" />
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                  <CCardHeader>
                    {{ item.id }} - {{ item.title }}
                    <span class="float-end ms-1">
                      <CBadge color="success" v-if="item.active">Ativo</CBadge>
                      <CBadge color="danger" v-else>Inativo</CBadge>
                    </span>
                    <span class="float-end">
                      <CBadge :color="item.type_color">{{ item.type }}</CBadge>
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
                              Data de Início de Vigência
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.due_date }}
                            </CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableDataCell>
                              Data de Término
                            </CTableDataCell>
                            <CTableDataCell>
                              {{ item.end_date }}
                            </CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableDataCell>
                              Valor do Contrato
                            </CTableDataCell>
                            <CTableDataCell>
                              R$ {{ item.value }}
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
                    <embed src="http://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="750px">
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
  name: 'Employee',
  setup() {
    const item = {
      id: '001',
      customer: 'Jones Lohan',
      title: 'Lorem ipsum',
      type: 'mensal',
      type_color: 'warning',
      due_date: '12/07/2022',
      end_date: '12/07/2023',
      value: 300.01,
      active: true,
    }

    return {
      item,
    }
  }
}
</script>
