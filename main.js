'use strict';

function start() {

    const members = document.querySelectorAll('input[type="checkbox"]:checked');

    const hitNum = +document.querySelector('select[name="hit"]').value;

    const missNum = +document.querySelector('select[name="miss"]').value;

    if (members.length > hitNum + missNum) {
        alert("くじの本数が足りないよ");
        return;
    }


    const lotArr = ('1'.repeat(hitNum) + '0'.repeat(missNum)).split('');

    const result = [
        [],
        []
    ];

    for (const e of members) {

        const rnd = Math.floor(Math.random() * lotArr.length);
        const pickup = lotArr.splice(rnd, 1)[0];

        result[pickup].push(e.value);
    }

    document.querySelector('#result h3:first-child').textContent = 'あたり：' + result[1].join();
    document.querySelector('#result h3:last-child').textContent = 'はずれ：' + result[0].join();
}