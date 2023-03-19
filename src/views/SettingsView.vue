<script>
import { defineComponent } from 'vue';
import ServerBar from '../components/ServerBar/ServerBar.vue';
import Navbar from "../components/Navbar.vue";
import UserList from '../components/UserList.vue';
import LanguageSelector from '../components/Inputs/LanguageSelector.vue'
import GoBackButton from '../components/Inputs/GoBackButton.vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
    components: {
        LanguageSelector,
        GoBackButton,
        Bar
    },
    data() {
        return {
            chartData: {
                labels: ['Español', 'Ingles'],
                datasets: [{ 
                    data: [40, 20],
                    label: this.$t('SETTINGS.CHART.USERSLANGUAGE'),
                 }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
})
</script>

<template>
    <div class="flex flex-col justify-center w-full items-center my-6">
        <div class="card w-3/5 bg-base-300 shadow-xl">
            <div class="card-body">
                <h1 class="card-title">{{ $t('SETTINGS.APPCONFIG.APPCONFIG') }}</h1>
                <hr class="text-base-300 my-3">
                <LanguageSelector cssClass="select-bordered"></LanguageSelector>
                <Bar id="my-chart-id" :options="this.chartOptions" :data="this.chartData" />
            </div>
        </div>
        <div class="flex flex-row justify-center w-full my-6">
            <GoBackButton route="/server" cssClass="btn-error" :text="$t('SETTINGS.APPCONFIG.BACKBUTTON')" />
        </div>
    </div>
</template>