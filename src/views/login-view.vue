<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
          </v-toolbar>

          <v-card-text v-if="mensajeVisible">
            <v-alert :icon="icono" :type="tipo" dense>
              {{ mensaje }}
            </v-alert>
          </v-card-text>

          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="usuario"
                label="Usuario"
                :rules="[rules.required]"
                required
                prepend-icon="mdi-user"
              ></v-text-field>

              <v-text-field
                v-model="contrasenia"
                label="Contraseña"
                type="password"
                :rules="[rules.required]"
                required
                prepend-icon="mdi-lock"
              ></v-text-field>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="login">Entrar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const usuario = ref('');
const contrasenia = ref('');
const valid = ref(false);
const mensaje = ref('');
const tipo = ref('');
const mensajeVisible = ref(false);
const icono = ref('');

const rules = {
  required: (value) => !!value || 'Este campo es obligatorio.',
  email: (value) => /.+@.+\..+/.test(value) || 'Debe ser un correo válido.',
};
</script>
