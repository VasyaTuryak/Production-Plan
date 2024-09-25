<script setup>
import {usePlanStore} from '../../store/usePlanStore.js'
import {ref} from "vue";

const store = usePlanStore()

const design = ref(
    {
      number: '2800',
      name: 'Qualiko file 830*360',
      C: '',
      M: '',
      Y: '',
      K: '',
      w1: '',
      w2: '',
      date: '',
      finishDate: '',
      typePrint: '',
      thickness: '',
      width: '',
      profile: '',
      runLength: '',
      pantone1: '',
      pantone2: '',
      pantone3: '',
      pantone4: '',
      pantone5: '',
      pantone6: '',
      pantone7: '',
      pantone8: '',
      primer:'',
      lak:'',
      finalColorModel:'',
      CMYK: [],
      PANTONE: [],
      White:[],
      OtherInks:[],
      density: '',
      weight1000meters:''
    }
);

const sendData = () => {

  let model=[]
  let CMYK=[]
  let PANTONE =[]
  let WHITE =[]
let OtherInk=[]

  if(design.value.primer){
    model.push('Primer')
    OtherInk.push('Primer')
  }

  if(design.value.typePrint === 'surface' && design.value.w1 ){
    model.push('w1')
    WHITE.push('w1')
  }

  if(design.value.typePrint === 'surface' && design.value.w2 ){
    model.push('w2')
    WHITE.push('w2')
  }

  if(design.value.C ){
    model.push('C')
    CMYK.push('C')
  }

  if(design.value.M ){
    model.push('M')
    CMYK.push('M')
  }

  if(design.value.Y ){
    model.push('Y')
    CMYK.push('Y')
  }

  if(design.value.K ){
    model.push('K')
    CMYK.push('K')
  }

  if(design.value.pantone1 ){
    model.push('P'+design.value.pantone1)
    PANTONE.push(design.value.pantone1)
  }

  if(design.value.pantone2 ){
    model.push('P'+design.value.pantone2)
    PANTONE.push(design.value.pantone2)
  }

  if(design.value.pantone3 ){
    model.push('P'+design.value.pantone3)
    PANTONE.push(design.value.pantone3)
  }

  if(design.value.pantone4){
    model.push('P'+design.value.pantone4)
    PANTONE.push(design.value.pantone4)
  }

  if(design.value.pantone5){
    model.push('P'+design.value.pantone5)
    PANTONE.push(design.value.pantone5)
  }

  if(design.value.pantone6){
    model.push('P'+design.value.pantone6)
    PANTONE.push(design.value.pantone6)
  }

  if(design.value.pantone7){
    model.push('P'+design.value.pantone7)
    PANTONE.push(design.value.pantone7)
  }

  if(design.value.pantone8){
    model.push('P'+design.value.pantone8)
    PANTONE.push(design.value.pantone8)
  }

  if(design.value.typePrint === 'revers' && design.value.w1 ){
    model.push('w1')
    WHITE.push('w1')
  }

  if(design.value.typePrint === 'revers' && design.value.w2 ){
    model.push('w2')
    WHITE.push('w2')
  }

  if(design.value.lak){
    model.push('lak')
    OtherInk.push('lak')
  }

  design.value.finalColorModel=model
  design.value.CMYK=CMYK
  design.value.PANTONE=PANTONE
  design.value.White=WHITE
  design.value.OtherInks=OtherInk

  design.value.weight1000meters=(design.value.thickness*design.value.width*1000*design.value.density)/1000000

  // console.log(design.value.finalColorModel)
  console.log(design.value)
  store.addDesignToPlan(design.value)
  design.value={
    number: '',
    name: '',
    C: '',
    M: '',
    Y: '',
    K: '',
    w1: '',
    w2: '',
    date: '',
    finishDate: '',
    typePrint: '',
    thickness: '',
    width: '',
    profile: '',
    runLength: '',
    pantone1: '',
    pantone2: '',
    pantone3: '',
    pantone4: '',
    pantone5: '',
    pantone6: '',
    pantone7: '',
    pantone8: '',
    primer:'',
    lak:'',
    finalColorModel:'',
    density: '',
    weight1000meters:''
  }
}

</script>

<template>
  <nav class="flex flex-row ml-5 sticky top-0">
    <RouterLink class="text-2xl text-red-500 mr-5" to="/">Plan</RouterLink>
    <RouterLink class="text-2xl text-red-500 mr-5" to="/add">Add design</RouterLink>
    <RouterLink class="text-2xl text-red-500 mr-5" to="/additionalInfo">Additional Information</RouterLink>
  </nav>
  <div class="flex flex-row justify-center">
    <form @submit.prevent="sendData">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Design
            Number</label>
          <input v-model="design.number" type="number" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Design
            name</label>
          <input v-model="design.name" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order
            received</label>
          <input v-model="design.date" type="date" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Finish until this
            date</label>
          <input v-model="design.finishDate" type="date" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Cyan</label>
          <input v-model="design.C" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Magenta</label>
          <input v-model="design.M" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Yellow</label>
          <input v-model="design.Y" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Black</label>
          <input v-model="design.K" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">W-1</label>
          <input v-model="design.w1" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">W-2</label>
          <input v-model="design.w2" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Primer</label>
          <input v-model="design.primer" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div>
          <label for="last_name"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Lak</label>
          <input v-model="design.lak" type="checkbox" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>


        <form class="max-w-sm mx-auto">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of
            printing</label>
          <select id="countries" v-model="design.typePrint"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="revers">Revers</option>
            <option value="surface">Surface</option>
          </select>
        </form>

        <form class="max-w-sm mx-auto">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
          <select id="countries" v-model="design.profile"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="gloss-lam">Revers gloss lam</option>
            <option value="gloss-lam-without-white">Revers gloss lam without white ink</option>
            <option value="pe-bag">Pe-bag</option>
            <option value="PE-FZ">PE-FZ</option>
          </select>
        </form>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 1</label>
          <input v-model="design.pantone1" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 2</label>
          <input v-model="design.pantone2" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 3</label>
          <input v-model="design.pantone3" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 4</label>
          <input v-model="design.pantone4" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 5</label>
          <input v-model="design.pantone5" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 6</label>
          <input v-model="design.pantone6" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 7</label>
          <input v-model="design.pantone7" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
        </div>

        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PANTONE 8</label>
          <input v-model="design.pantone8" type="text" id="last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
        </div>

        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Run Length</label>
          <input v-model="design.runLength" type="number" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>


        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thickness of
            film</label>
          <input v-model="design.thickness" type="number" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width of
            film</label>
          <input v-model="design.width" type="number" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required/>
        </div>

        <form class="max-w-sm mx-auto">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of film</label>
          <select id="countries" v-model="design.density"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0.92">PE</option>
            <option value="0.97">PE-W-bag</option>
            <option value="1.4">BoPET</option>
          </select>
        </form>

      </div>
      <div class=" flex flex-row justify-center  w-full">
        <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>

    </form>
  </div>

  <div>
    <pre>{{ store.getItems() }}</pre>
  </div>


</template>

<style scoped>

</style>
