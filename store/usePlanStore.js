import { defineStore } from 'pinia'
import {ref} from "vue";

export const usePlanStore = defineStore('plan', {
        state: () => {
            return {
                plan: [],
                averagePrintingSpeed: ref(200),
                timeChangeOver: ref([15,15,30,45,60,75,90,115,120]),
                meterChangeOver: ref([300,370,370,400,430,460,490,520,550]),
                AdditionalMeters: ref([115])
            }
        },
    getters: {

    },
    actions: {
        getItems() {
            return this.plan
        },
        getTimeChangeOver() {
            return this.timeChangeOver
        },
        getMeterChangeOver() {
            return this.meterChangeOver
        },
        setAdditionalData(averagePrintingSpeed,timeChangeOver,meterChangeOver,AdditionalMeters){
          this.averagePrintingSpeed=averagePrintingSpeed
            this.timeChangeOver=timeChangeOver
            this.meterChangeOver=meterChangeOver
            this.AdditionalMeters=AdditionalMeters
        },
        addDesignToPlan(newDesign){
            this.plan.push(newDesign)
        },
        delete(item){
            this.plan.splice(item,1)
        },
        moveUP(index){
            if(index!==0){
                let above=this.plan[index-1]
                let target=this.plan[index]
                this.plan[index]=above
                this.plan[index-1]=target
            }

        },
        moveDown(index) {
            if(index!==this.plan.length-1){
                let below = this.plan[index + 1]
                let target = this.plan[index]
                this.plan[index] = below
                this.plan[index + 1] = target
            }
        }
    },
})
