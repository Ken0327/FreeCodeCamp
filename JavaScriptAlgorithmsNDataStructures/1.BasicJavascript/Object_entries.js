const object1 = {
    a: 'somestring',
    b: 42
};

for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

const barcodepair = {
    Golden: { esn: '1111111111', getResult: false },
    Port2: { esn: '3911111111', getResult: true },
    Port3: { esn: '1111111111', getResult: false },
    Port4: { esn: '3911111111', getResult: true },
    Port5: { esn: '1111111111', getResult: false },
    Port6: { esn: '1111111111', getResult: false },
    Port7: { esn: '3911111111', getResult: true },
    Port8: { esn: '3911111111', getResult: true },
    Port9: { esn: '3911111111', getResult: true },
    Port10: { esn: '1111111111' }
}

for (var [key, value] of Object.entries(barcodepair)) {
    if (value['esn'] !== '1111111111' && value['esn'] !== '') {
        if (!value['getResult']) {
            console.log('Fail')
        }
    }
}
console.log('Done.')