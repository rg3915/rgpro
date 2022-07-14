<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            Detalhes do Relatório de Timesheet
            <CButton
              class="float-end"
              color="info"
              size="sm"
            >
              <CIcon class="text-light" name="cil-print" /> <span class="text-light">Imprimir</span>
            </CButton>
          </CCardHeader>
          <CCardBody>
            <div id="printme" class="col-sm-12">
          <div class="row">
            <div class="col-sm-12">
              <!-- <img src="/app/img/brand/logo.jpg" alt="" width="200px"> -->
              <h4 class="text-center border" style="background-color: #f3f3f2; padding: 10px 0;margin-bottom:0;border-bottom:0!important">
                <div class="d-flex">
                  <span style="flex: 1;">Relatório de TimeSheet</span>
                  <span style="padding-right: 10px;">{{ item.id }}</span>
                </div>
              </h4>
              <table class="table border lead" style="padding: 10px 0">
                <tbody v-if="item.customer">
                  <tr>
                    <th style="width:75px">Cliente:</th>
                    <td>{{ item.customer }}</td>
                  </tr>
                  <tr>
                    <th style="width:75px">CPF:</th>
                    <td>{{ item.cpf }}</td>
                  </tr>
                  <tr>
                    <th style="width:75px">Contrato:</th>
                    <td>{{ item.contract }}</td>
                  </tr>
                  <tr>
                    <th style="width:75px">Período:</th>
                    <td>({{ item.month }}) - {{ item.period }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-responsive-sm table-bordered table-striped lead">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Data</th>
                    <th>Profissional</th>
                    <th>Descrição</th>
                    <th class="text-end">Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(timesheet, itemIdx) in item.timesheets" :key="timesheet.id">
                    <td>{{ itemIdx + 1 }}</td>
                    <td>{{ timesheet.timesheet_date }}</td>
                    <td>{{ timesheet.employee }}</td>
                    <td>{{ timesheet.description }}</td>
                    <td><span class="float-end">{{ timesheet.timesheet_hours }}</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="4">
                      <span class="float-end">Horas Total</span>
                    </th>
                    <th><span class="float-end">{{ item.total_hours }}</span></th>
                  </tr>
                  <tr>
                    <th colspan="4">
                      <span class="float-end">Valor Total</span>
                    </th>
                    <th style="width:150px">R$ <span class="float-end">{{ item.total_price }}</span></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="text-center lead" style="padding-top:20px;line-height:1em">
            <p>Rua Lorem Ipsum, 12 - Vila Itupeva - Ferreira Gomes - AP - Fone: 96 1234-5678</p>
            <p>www.example.com</p>
          </div>
          <div class="page-break">
            <ul class="list-group">
            </ul>
          </div>
        </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>
<script>
export default {
  name: 'TimesheetReport',
  setup() {
    const item = {
      id: '001/2022',
      created_by: 'Edward Eric',
      customer: 'Jones Lohan',
      cpf: '863.257.650-01',
      contract: '001 - Lorem ipsum',
      month: 'Julho/2022',
      period: '01/07/2022 à 30/07/2022',
      timesheets: [
        {
          id: 1,
          timesheet_date: '12/07/2022',
          timesheet_hours: '7:00',
          employee: 'Edward Eric',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          timesheet_date: '13/07/2022',
          timesheet_hours: '2:00',
          employee: 'Edward Eric',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 2,
          timesheet_date: '14/07/2022',
          timesheet_hours: '5:00',
          employee: 'Edward Eric',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
      ],
      total_hours: '14:00',
      total_price: '250.59'
    }

    return {
      item,
    }
  }
}
</script>
