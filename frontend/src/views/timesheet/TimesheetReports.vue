<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Relatórios de Timesheet
            <CButton color="success" size="sm" @click="addItem()">
              <CIcon class="text-light" name="cil-plus"/>
                <span class="text-light">Adicionar</span>
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>ID / Criado por</CTableHeaderCell>
                  <CTableHeaderCell>Cliente</CTableHeaderCell>
                  <CTableHeaderCell>Contrato</CTableHeaderCell>
                  <CTableHeaderCell>Período</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
                  <CTableDataCell>
                    <div>
                      <router-link :to="{ name: 'TimesheetReport'}">
                        <h6>{{ item.id }}</h6>
                      </router-link>
                    </div>
                    <div class="small text-medium-emphasis">
                      {{ item.created_by }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.customer }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.contract }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      <CBadge color="warning">{{ item.month }}</CBadge>
                    </div>
                    <div>
                      {{ item.period }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon class="text-primary" name="cil-pencil" />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>
<script>
export default {
  name: 'TimesheetReports',
  setup() {
    const tableExample = [
      {
        id: '001/2022',
        created_by: 'Edward Eric',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        month: 'Julho/2022',
        period: '01/07/2022 à 30/07/2022',
      },
      {
        id: '002/2022',
        created_by: 'Edward Eric',
        customer: 'James Stewart',
        contract: '002 - Deserunt mollit anim id est laborum',
        month: 'Julho/2022',
        period: '01/07/2022 à 30/07/2022',
      },
      {
        id: '003/2022',
        created_by: 'Edward Eric',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        month: 'Julho/2022',
        period: '01/07/2022 à 30/07/2022',
      },
    ]

    return {
      tableExample,
    }
  }
}
</script>
