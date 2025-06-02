<template>
  <v-container class="mt-5" max-width="500">
    <v-card>
      <v-card-title>Registro de Vehículo</v-card-title>
      <v-card-text>
        <v-form v-model="frmUsuario">
          <v-text-field
            v-model="usuario.placa"
            label="Placa"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="usuario.duenio"
            label="Dueño"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-select
            v-model="usuario.lugar"
            label="Lugar"
            :items="lugares"
            :rules="[rules.required]"
            required
          ></v-select>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      frmUsuario: false,
      usuario: {
        placa: '',
        duenio: '',
        lugar: null,
      },
      lugares: ['Calle 1', 'Calle 2', 'Calle 3'],
      rules: {
        required: (value) => !!value || 'Este campo es requerido.',
      },
    }
  },
}
</script>

<style scoped>
.mt-5 {
  margin-top: 3rem !important;
}
</style>
