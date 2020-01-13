<template>
  <div class="maz-dialog-doc">
    <ComponentContainer :code="codeExample">
      <div class="flex">
        <PremoBtn
          class="mr-2"
          @click="hasDialogOpen = true"
        >
          Open Basic Dialog
        </PremoBtn>
        <PremoDialog
          v-model="hasDialogOpen"
        >
          <div slot="title">
            Basic Dialog
          </div>
          Dialog Content Basic
        </PremoDialog>

      </div>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoDialogDoc',
    data () {
      return {
        hasDialogOpen: false,
        hasDialogOpenDanger: false,
        hasDialogOpenSuccess: false,
        codeExample: `<template>
  <PremoBtn
    class="mr-2"
    @click="hasDialogOpen = true"
  >
    Open Basic Dialog
  </PremoBtn>
  <PremoDialog
    v-model="hasDialogOpen"
  >
    <div slot="title">
      Basic Dialog
    </div>
    Dialog Content Basic
  </PremoDialog>
  <PremoBtn
    type="success"
    class="mr-2"
    @click="hasDialogOpenSuccess = true"
  >
    Open Success Dialog
  </PremoBtn>
  <PremoDialog
    v-model="hasDialogOpenSuccess"
    success
  >
    <div slot="title">
      Success Dialog
    </div>
    Dialog Content Success
  </PremoDialog>
  <PremoBtn
    type="danger"
    @click="hasDialogOpenDanger = true"
  >
    Open Danger Dialog
  </PremoBtn>
  <PremoDialog
    v-model="hasDialogOpenDanger"
    danger
  >
    <div slot="title">
      Danger Dialog
    </div>
    Dialog Content Danger
  </PremoDialog>
</template>

export default {
  data () {
    return {
      hasDialogOpen: false,
      hasDialogOpenDanger: false,
      hasDialogOpenSuccess: false
    }
  }
}`
      }
    }
  }
</script>
