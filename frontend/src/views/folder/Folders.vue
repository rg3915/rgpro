<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>Pastas</CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Cliente/Contrato</CTableHeaderCell>
                  <CTableHeaderCell>Título</CTableHeaderCell>
                  <CTableHeaderCell>Descrição</CTableHeaderCell>
                  <CTableHeaderCell>Criado em</CTableHeaderCell>
                  <CTableHeaderCell>Ativo</CTableHeaderCell>
                  <CTableHeaderCell class="text-center">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.id">
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
                      <router-link :to="{ name: 'Pasta'}">{{ item.title }}</router-link>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.description }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {{ item.created }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CBadge color="success" v-if="item.active">Ativo</CBadge>
                    <CBadge color="danger" v-else>Inativo</CBadge>
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

  </div>
</template>
<script>
export default {
  name: 'Folders',
  setup() {
    const tableExample = [
      {
        id: 1,
        title: 'Lorem ipsum',
        customer: 'Jones Lohan',
        contract: '001 - Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        created: '13/07/2022',
        active: true,
      },
      {
        id: 2,
        title: 'Excepteur sint occaecat cupidatat',
        customer: 'James Stewart',
        contract: '002 - Deserunt mollit anim id est laborum',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        created: '13/07/2022',
        active: true,
      },
      {
        id: 3,
        title: 'Laboris nisi ut aliquip ex ea commodo consequat',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        created: '14/07/2022',
        active: true,
      },
      {
        id: 4,
        title: 'Consectetur adipisicing elit sed do',
        customer: 'Roy Mustang',
        contract: '003 - Laboris nisi ut aliquip',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        created: '14/07/2022',
        active: true,
      },
      {
        id: 5,
        title: 'Lorem ipsum',
        customer: 'James Stewart',
        contract: '002 - Deserunt mollit anim id est laborum',
        description: 'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Posuere libero varius.',
        created: '14/07/2022',
        active: true,
      },
    ]

    return {
      tableExample,
    }
  }
}
</script>
