<script setup lang="ts">
import { ref } from 'vue'
import { ElInput, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'

interface LoginForm {
  phoneNumber: string
  verificationCode: string[]
}

const router = useRouter()
const form = ref<LoginForm>({
  phoneNumber: '',
  verificationCode: ['', '', '', '', '', '']
})

const showVerificationCode = ref(false)

function handleSubmit() {
  if (!showVerificationCode.value) {
    showVerificationCode.value = true
  } else {
    console.log('Submitting:', form.value.verificationCode.join(''))
    // Navigate to the list page
    router.push('/ui-design/mobile-test/list')
  }
}

function handleCodeInput(index: number, event: Event) {
  const input = event.target as HTMLInputElement
  const value = input.value

  if (value.length > 0 && index < 5) {
    (document.getElementById(`code-${index + 1}`) as HTMLInputElement)?.focus()
  }
}
</script>

<template>
  <div class="w-[360px] h-[800px] bg-secondary flex flex-col">
    <main class="flex-1 p-6 flex flex-col">
      <h1 class="text-title-page text-primary-foreground mb-2">ITEM Check IN</h1>
      <h2 class="text-subtitle text-primary-foreground mb-4">Login</h2>
      
      <template v-if="!showVerificationCode">
        <p class="text-body text-secondary-foreground mb-6">Please Enter Your Phone Number</p>
        <ElInput 
          v-model="form.phoneNumber"
          placeholder="Enter phone number"
          class="mb-6"
        />
      </template>

      <template v-else>
        <p class="text-body text-secondary-foreground mb-6">Please Enter 6-digit Verification Code</p>
        <div class="flex justify-between mb-6">
          <input
            v-for="(digit, index) in form.verificationCode"
            :key="index"
            :id="`code-${index}`"
            v-model="form.verificationCode[index]"
            type="text"
            maxlength="1"
            class="w-12 h-12 text-center border rounded-md text-lg"
            @input="handleCodeInput(index, $event)"
          >
        </div>
      </template>

      <ElButton 
        type="primary" 
        class="w-24 mx-auto text-small-strong"
        @click="handleSubmit"
      >
        Submit
      </ElButton>
    </main>
  </div>
</template>
