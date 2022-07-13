<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes do Timesheet
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
                                    <span class="small text-medium-emphasis">
                                      {{ item.timesheet_date }}
                                      <span class="float-end">
                                        <CIcon v-if="item.is_conferred" class="text-success" name="cil-check-alt" size="xxl" />
                                        <CIcon v-else class="text-danger" name="cil-x" size="xxl" />
                                      </span>
                                    </span>
                                    <h4>{{ item.timesheet_hours }}</h4>
                                  </CCardTitle>
                                  <CCardSubtitle>{{ item.employee }}</CCardSubtitle>
                                </CCardBody>
                              </CCard>

                              <CCard class="mt-2">
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
                                            Conferido por
                                          </CTableDataCell>
                                          <CTableDataCell>
                                            <span v-if="item.is_conferred">{{ item.conferred_by }}</span>
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

  </div>
</template>
<script>
export default {
  name: 'TimeSheet',
  setup() {
    const item = {
      id: '001',
      timesheet_date: '12/07/2022',
      timesheet_hours: '7:00',
      employee: 'Edward Eric',
      customer: 'Jones Lohan',
      contract: '001 - Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      is_conferred: true,
      conferred_by: 'Regis',
    }

    return {
      item,
    }
  }
}
</script>
