<template>
    <div>
        <!-- <div>paramsdata: {{ $route.params.data }}</div>
        <div>propsdata: {{ data }}</div> -->
        <div class="profile">
            <div class="profile_contents">
                <img :src="`../images/${data.rank_name}.png`" :alt="data.rank_name">
            </div>
            <div class="table_flex">
                <table class="table_margin">
                    <tr>
                        <th>ユーザーID</th>
                        <td>{{data.userid}}</td>
                    </tr>
                    <tr>
                        <th>性別</th>
                        <td v-if="data.gender == true">女性</td>
                        <td v-else>男性</td>
                    </tr>
                    <tr>
                        <th>等級</th>
                        <td v-if="data.class == 1">ARTIST</td>
                        <td v-else-if="data.class == 2">EXPERT</td>
                        <td v-else>PRODUCER</td>
                    </tr>
                    <tr>
                        <th>自己紹介</th>
                        <td>{{data.introduction}}</td>
                    </tr>
                    <tr>
                        <th>加入日</th>
                        <td>{{String(data.created_at).substr(0, 10)}}</td>
                    </tr>
                    <tr>
                        <th>ランキング</th>
                        <td>{{data.rank_name}}</td>
                    </tr>
                    <tr v-if="data.class == 3">
                        <th>企業名</th>
                        <td>{{data.company_name}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="score">
            <canvas id="myChart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    name: 'Params',
    props: {
        data: {
            default: 'blank data',
        }
    },
    data() {
        var chartData = {label:[], score:[]};
        return {
            profiles: [],
            lectureData: [],
            l_score: [],
            auditionData: [],
            chart_label: [],
            chartData: chartData,
        }
    },
    mounted() {
        this.loadProfile();
    },
    methods: {
        loadProfile: async function() {
            const url = '/api/mypage/profile';

            try {
                this.axios.get(url).then(response => {
                    this.profiles = response.data[0];
                    this.lectureData = response.data[1];
                    this.auditionData = response.data[2];
                    for(var i = 0; i < this.lectureData.length; i ++) {
                        this.l_score.push(this.lectureData[i].accuracy);
                        this.chart_label.push(i+1);
                        this.chartData.score.push(this.lectureData[i].accuracy);
                        this.chartData.label.push(i+1);
                    }
                    this.createChart();
                });
            } catch(error) {
                console.log(error);
            }
        },
        createChart: async function() {
            const ctx = document.getElementById('myChart');
            // labels, datasets[{label[],data[],backgroundColor[],borerColor[],borderWidth:1}]
            var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.chartData.label,
                datasets: [{
                    label: '리듬트레이닝 1탄 바운스 보면서 따라하기',
                    data: this.chartData.score,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                },{
                    label: '트와이스 TT로 배우는 강의',
                    data: [52, 65, 70, 82, 95],
                    backgroundColor: [
                        'rgba(36,100,240, 0.2)',
                    ],
                    borderColor: [
                        'rgba(36,100,240, 0.8)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: true,
                    labels: {
                        fontSize: 18,
                    }
                }
            }
        });
    },
    }
}
</script>

<style>
.profile_contents > img {
    width: 250px;
}
.profile {
    display: flex;
    padding: 1vw;
}
.table_flex {
    display: flex;
}
.table_margin {
    border-collapse: separate;
    border-spacing: 1vh;
}
.score {
    text-align: -webkit-center;
}
#myChart {
    width: 90%;
    height: 400px;
}
</style>