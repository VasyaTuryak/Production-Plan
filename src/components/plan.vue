<script setup>
import {usePlanStore} from '../../store/usePlanStore.js'
import moment from "moment/moment.js";
import {storeToRefs} from "pinia";
import {ref,computed} from "vue";

const store = usePlanStore()
const {averagePrintingSpeed} = storeToRefs(store)
const WeighChangeOver = ref([])
const TimeChangeOver=ref([])
const RunTime=ref([])
const profileGroupCMYK = ref([['gloss-lam', 'gloss-lam-without-white', 'pe-bag'], ['PE-FZ']])
const profileGroupPantone = ref([['gloss-lam'], ['gloss-lam-without-white'], ['pe-bag'], ['PE-FZ']])
const profileGroupWhite = ref([['surface'], ['revers']])

function deleteItem(item) {
  store.delete(item)
}

function moveUP(item) {
  store.moveUP(item)
}

function moveDown(item) {
  store.moveDown(item)
}

function Differance(item) {
  let difference = {
    PRIMER: '',
    // white: '',
    // whiteNumber: '',
    CMYK: '',
    CMYKdif: [],
    PANTONE: '',
    PANTONEdi: [],
    WHITE: '',
    WHITEdif: [],
    OTHER: '',
    OTHERdif: [],
    LAK: '',
    TOTAL: null,
  }

  if (item === 0) {
    difference.TOTAL = store.plan[0].finalColorModel.length
  }
  if (item > 0) {
    for (let i = 0; i < profileGroupCMYK.value.length; i++) {
      if (item >= 1) {
        if (profileGroupCMYK.value[i].includes(store.plan[item].profile) && profileGroupCMYK.value[i].includes(store.plan[item - 1].profile)) {
          difference.CMYK = 'the same category CMYK'
          difference.CMYKdif = store.plan[item].CMYK.filter(element => !store.plan[item - 1].CMYK.includes(element));
          break
        } else {
          difference.CMYK = 'different category CMYK'
          difference.CMYKdif = store.plan[item].CMYK
        }
      }
    }

    for (let i = 0; i < profileGroupPantone.value.length; i++) {
      if (item >= 1) {
        if (profileGroupPantone.value[i].includes(store.plan[item].profile) && profileGroupPantone.value[i].includes(store.plan[item - 1].profile)) {
          difference.PANTONE = 'the same category PANTONE'
          difference.PANTONEdi = store.plan[item].PANTONE.filter(element => !store.plan[item - 1].PANTONE.includes(element));
          break
        } else {
          difference.PANTONE = 'different category PANTONE'
          difference.PANTONEdi = store.plan[item].PANTONE
        }
      }
    }

    for (let i = 0; i < profileGroupWhite.value.length; i++) {
      if (item >= 1) {
        if (profileGroupWhite.value[i].includes(store.plan[item].typePrint) && profileGroupWhite.value[i].includes(store.plan[item - 1].typePrint)) {
          difference.WHITE = 'the same category White'
          difference.WHITEdif = store.plan[item].White.filter(element => !store.plan[item - 1].White.includes(element));
          break
        } else {
          difference.WHITE = 'different category white'
          difference.WHITEdif = store.plan[item].White
        }
      }
    }

    if (item >= 1) {
      difference.OTHERdif = store.plan[item].OtherInks.filter(element => !store.plan[item - 1].OtherInks.includes(element));
      if (difference.OTHERdif.length > 0) {
        difference.OTHER = ' different'
      } else {
        difference.WHITE = 'the same'
      }
    }

    difference.TOTAL = difference.CMYKdif.length + difference.PANTONEdi.length + difference.WHITEdif.length + difference.OTHERdif.length

  }

  if(!WeighChangeOver.value[item]){
    WeighChangeOver.value.push((((store.getMeterChangeOver()[difference.TOTAL]+AdditionalMetersForRun(item)) * store.plan[item].weight1000meters) / 1000).toFixed(2))
  }

  if(!TimeChangeOver.value[item]){
    TimeChangeOver.value.push(store.timeChangeOver[difference.TOTAL])
  }

  if(!RunTime.value[item]){
    RunTime.value.push(store.plan[item].runLength/store.averagePrintingSpeed)
  }

  return difference
}

function AdditionalMetersForRun(item){
  return ((store.plan[item].runLength-10000)/10000)*store.AdditionalMeters
}

function totalWaste(){
  return WeighChangeOver.value.reduce(function (result, item) {
    return result + parseFloat(item);
  }, 0);
}

const totalTime = computed(() => {
  let totalChangeOverTime=TimeChangeOver.value.reduce(function (result, item) {
    return result + parseFloat(item);
  }, 0);

  let totalRunTime=RunTime.value.reduce(function (result, item) {
    return result + parseFloat(item);
  }, 0);

  return ((totalChangeOverTime+totalRunTime)/60).toFixed(1)
})


</script>

<template>

  <div>
    <div class="flex flex-col w-full mb-20">

      <div class="sticky top-0 bg-opacity-100 bg-white">
        <nav class="flex flex-row ml-5 sticky top-0">
          <RouterLink class="text-2xl text-red-500 mr-5" to="/">Plan</RouterLink>
          <RouterLink class="text-2xl text-red-500 mr-5" to="/add">Add design</RouterLink>
          <RouterLink class="text-2xl text-red-500 mr-5" to="/additionalInfo">Additional Information</RouterLink>
        </nav>
        <h1 class="text-center mb-3 text-3xl ">Production Plan for printing films Sirius Extrusion, COMEXI F4</h1>
        <h1 class="text-right mr-10 mt-5 mb-1 text-red-500 text-2xl">TOTAL TIME {{totalTime}} hours </h1>
        <h1 class="text-right mr-10 mt-5 mb-1 text-red-500 text-2xl">TOTAL WASTE <b>{{totalWaste().toFixed(2)}}</b> kg </h1>
      </div>
<!--      <p>{{ $route.path }}</p>-->
<!--      <p>Weight Change Over: {{WeighChangeOver}}</p>-->
<!--      <p>Time Change Over: {{TimeChangeOver}}</p>-->
<!--      <p>Run Time: {{RunTime}}</p>-->

      <table class="border-collapse border mr-6 ml-6 border-slate-400">
        <thead class="sticky top-28 bg-amber-600">
        <tr>
          <th class="border border-slate-300 max-w-24">Order received</th>
          <th class="border border-slate-300 max-w-14">Days/ hours in work</th>
          <th class="border border-slate-300 max-w-24">Ready day</th>
          <th class="border border-slate-300 max-w-24">Due date</th>
          <th class="border border-slate-300 max-w-14">In time or not ?</th>
          <th class="border border-slate-300 max-w-28 min-w-20">Number of mockup</th>
          <th class="border border-slate-300 max-w-28 min-w-20">Thickness</th>
          <th class="border border-slate-300 max-w-64 min-w-32">Design Name</th>
          <th class="border border-slate-300 max-w-64 min-w-64">Colors in design</th>
          <th class="border border-slate-300 max-w-14 min-w-14">Run lengths, meters</th>
          <th class="border border-slate-300 max-w-14 min-w-14">Time to complete</th>
          <th class="border border-slate-300 max-w-14 min-w-14">Move order up or down</th>
          <th class="border border-slate-300 max-w-14 min-w-14">Delete</th>
        </tr>
        </thead>
        <tbody v-for="(order,index) in store.getItems()">
        <tr>
          <td colspan="9" class="border border-slate-300 text-center pt-2 pb-2">
            <p>Differences:.....</p>
            <p>{{ Differance(index) }}</p>
          </td>
          <td class="border border-slate-300 text-center pt-2 pb-2">
            <p>Changeover</p>
            <p>Time: {{ store.getTimeChangeOver()[Differance(index).TOTAL] }} min</p>
            <p>Wastes meters: {{ store.getMeterChangeOver()[Differance(index).TOTAL] }}</p>
            <p>Add wastes meters: {{AdditionalMetersForRun(index)}}</p>
            <p>Wastes weight:
              {{ ((((store.getMeterChangeOver()[Differance(index).TOTAL]+AdditionalMetersForRun(index)) * order.weight1000meters) / 1000)).toFixed(2)}}</p>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.date }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">
            {{ moment(`${order.date}`, "YYYYMMDD").fromNow("YYYYMMDD") }}
          </td>

          <td class="border border-slate-300 text-center pt-2 pb-2">

            {{ moment().add(100, 'hours').format('YYYY MMMM DD , h:mm') }}
          </td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.finishDate }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2 "
              :class="[moment(`${order.finishDate}`).diff('2024-08-25','days')<0 ? 'bg-red-500':'',
               moment(`${order.finishDate}`).diff('2024-08-25','days')===0 ? 'bg-orange-500':'',
               moment(`${order.finishDate}`).diff('2024-08-25','days')>0 ? 'bg-green-600':''
               ]"
          >
            <div>
              <!-- //TODO '2024-08-25' change for real one -->
              <p v-if="moment(`${order.finishDate}`).diff('2024-09-22','days')<0" class="text-white ">Delays:
                {{ moment(`${order.finishDate}`).diff('2024-09-22', 'days') }} days</p>
              <p v-if="moment(`${order.finishDate}`).diff('2024-09-22','days')===0">Ontime</p>
              <p v-if="moment(`${order.finishDate}`).diff('2024-09-22','days')>0">In time, +
                {{ moment(`${order.finishDate}`).diff('2024-09-22', 'days') }} days</p>
            </div>
          </td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.number }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.thickness }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.name }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.finalColorModel.join(' => ') }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">{{ order.runLength.toLocaleString('fr-FR') }}</td>
          <td class="border border-slate-300 text-center pt-2 pb-2">
            {{ Math.round((order.runLength / averagePrintingSpeed) / 60) }} hours
          </td>
          <td class="border border-slate-300 text-center pt-2 pb-2">
            <div class="flex flex-col">
              <button @click="moveUP(index); WeighChangeOver=[]; TimeChangeOver=[]; RunTime=[]" class="hover:bg-orange-500">&#8613; UP</button>
              <hr>
              <button @click="moveDown(index); WeighChangeOver=[]; TimeChangeOver=[]; RunTime=[]" class="hover:bg-green-600"> &#8615; DOWN</button>
            </div>
          </td>
          <td class="border border-slate-300 text-center pt-2 pb-2">
            <button @click.prevent="deleteItem(index)">
              x
            </button>
          </td>
        </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>

