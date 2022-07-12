<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes da Nota de Despesa da Fonte Pagadora
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

            <CCard style="width: 18rem">
              <CCardHeader>
                {{ item.id }}
                <span class="float-end">
                  <CBadge color="success" v-if="item.is_paid">Pago</CBadge>
                  <CBadge color="danger" v-else>Não Pago</CBadge>
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
                          Vencimento
                        </CTableDataCell>
                        <CTableDataCell>
                          {{ item.due_date }}
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>
                          Valor
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
      id: '001/2022',
      customer: 'Jones Lohan',
      due_date: '12/07/2022',
      value: 10280.99,
      is_paid: true,
    }

    return {
      item,
    }
  }
}
</script>
