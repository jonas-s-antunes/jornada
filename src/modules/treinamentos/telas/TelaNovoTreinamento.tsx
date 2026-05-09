import { useState } from 'react'

import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import { v4 as uuid } from 'uuid'

import { useTreinamentosStore } from '../estado/treinamentos-store'

export function TelaNovoTreinamento() {
  const adicionarTreinamento =
    useTreinamentosStore(
      state => state.adicionarTreinamento
    )

  const [titulo, setTitulo] =
    useState('')

  const [validadeDias, setValidadeDias] =
    useState('365')

  const [descricao, setDescricao] =
    useState('')

  async function salvar() {
    if (!titulo.trim()) {
      Alert.alert(
        'Título obrigatório'
      )

      return
    }

    await adicionarTreinamento({
      id: uuid(),

      titulo,

      validade_dias:
        Number(validadeDias),

      descricao,

      criado_em:
        new Date().toISOString(),
    })

    Alert.alert(
      'Treinamento criado'
    )

    setTitulo('')
    setValidadeDias('365')
    setDescricao('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>
          Título
        </Text>

        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ex: NR35"
        />

        <Text style={styles.label}>
          Validade (dias)
        </Text>

        <TextInput
          style={styles.input}
          value={validadeDias}
          onChangeText={setValidadeDias}
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          Descrição
        </Text>

        <TextInput
          style={[
            styles.input,
            styles.textarea,
          ]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <Pressable
          style={styles.botao}
          onPress={salvar}
        >
          <Text style={styles.botaoTexto}>
            Salvar
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f5f7fb',

    padding: 24,
  },

  form: {
    marginTop: 12,
  },

  label: {
    marginBottom: 8,

    fontSize: 14,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',

    borderRadius: 14,

    paddingHorizontal: 16,
    paddingVertical: 14,

    marginBottom: 20,
  },

  textarea: {
    minHeight: 100,

    textAlignVertical: 'top',
  },

  botao: {
    height: 54,

    borderRadius: 14,

    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',

    fontSize: 16,
    fontWeight: '700',
  },
})
