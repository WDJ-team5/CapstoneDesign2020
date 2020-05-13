<template>
<div>
    <div class="apply">
        <div class="apply_container">
            <table id="apply_table">
                <thead>
                    <th>오디션명</th>
                    <th>지원분야</th>
                    <th>날짜</th>
                </thead>
                <tbody>
                    <tr>
                        <td>IOIOI</td>
                        <td>마임</td>
                        <td>yyyy-mm-dd</td>
                    </tr>
                    <tr>
                        <td>IOIOI</td>
                        <td>마임</td>
                        <td>yyyy-mm-dd</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.apply_container {
    padding: 1vw;
}
#apply_table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 2vh;
    border-top: solid 1px black;
}
thead {
}
th {
    text-align: center;
}
tbody {
    border-top: solid 1px black;

}
tr {
}
td {
    text-align: center;
}
</style>