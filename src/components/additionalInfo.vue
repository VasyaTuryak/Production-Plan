<script setup>
import {usePlanStore} from '../../store/usePlanStore.js'
import {onMounted, ref} from "vue";

const store = usePlanStore()
const averagePrintingSpeed = ref(null)
const timeChangeOver = ref([])
const meterChangeOver = ref([])
const AdditionalMeters=ref()

const SendData = () => {
  store.setAdditionalData(averagePrintingSpeed,timeChangeOver,meterChangeOver,AdditionalMeters)
}

onMounted(() => {
  averagePrintingSpeed.value=store.averagePrintingSpeed
  timeChangeOver.value=store.timeChangeOver
  meterChangeOver.value=store.meterChangeOver
  AdditionalMeters.value=store.AdditionalMeters
})

</script>

<template>
  <div class="mt-5 ml-5 w-full">
    <nav class="flex flex-row ml-5 sticky top-0">
      <RouterLink class="text-2xl text-red-500 mr-5" to="/">Plan</RouterLink>
      <RouterLink class="text-2xl text-red-500 mr-5" to="/add">Add design</RouterLink>
      <RouterLink class="text-2xl text-red-500 mr-5" to="/additionalInfo">Additional Information</RouterLink>
    </nav>
    <p class="text-center mt-10">Amount waste and time on changeover</p>
    <div class=" mt-10">

      <form @submit.prevent="SendData()" class="w-full flex flex-row justify-center">
        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-4 w-full">

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NO changes of section,
                meters</label>
              <input v-model="meterChangeOver[0]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NO changes of section,
                time, minutes</label>
              <input v-model="timeChangeOver[0]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">One Section,
                meters</label>
              <input v-model="meterChangeOver[1]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">One Section
                time, minutes</label>
              <input v-model="timeChangeOver[1]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Two Section,
                meters</label>
              <input v-model="meterChangeOver[2]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Two Section
                time, minutes</label>
              <input v-model="timeChangeOver[2]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Three
                Section, meters</label>
              <input v-model="meterChangeOver[3]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Three Section
                time, minutes</label>
              <input v-model="timeChangeOver[3]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Four Section,
                meters</label>
              <input v-model="meterChangeOver[4]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Four Section
                time, minutes</label>
              <input v-model="timeChangeOver[4]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Five Section,
                meters</label>
              <input v-model="meterChangeOver[5]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Five Section
                time, minutes</label>
              <input v-model="timeChangeOver[5]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Six Section,
                meters</label>
              <input v-model="meterChangeOver[6]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Six Section
                time, minutes</label>
              <input v-model="timeChangeOver[6]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seven
                Section, meters</label>
              <input v-model="meterChangeOver[7]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seven Section
                time, minutes</label>
              <input v-model="timeChangeOver[7]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Eight
                Section, meters</label>
              <input v-model="meterChangeOver[8]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Eight Section
                time, minutes</label>
              <input v-model="timeChangeOver[8]" type="number" id="first_name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required/>
            </div>

          </div>

          <div class="flex flex-row justify-between mt-5">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max-48">Average
              printing speed</label>
            <input v-model="averagePrintingSpeed" type="number" id="first_name"
                   class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required/>
          </div>

          <div class="flex flex-row justify-between mt-5">
            <label for="first_name" class="w-1/2 block mb-2 text-sm font-medium text-gray-900 dark:text-white text-wrap">
              Additional meters for next each 10.000 meters (removes some defects, clean plate, install new roll, etc)
            </label>
            <input v-model="AdditionalMeters" type="number" id="first_name"
                   class=" w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required/>
          </div>

          <div class=" flex flex-row justify-center  w-full mt-10">
            <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save
            </button>
          </div>
        </div>
      </form>

    </div>

  </div>
</template>

<style scoped>

</style>
