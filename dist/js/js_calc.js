let doms = {}

for (let i = 0; i < 10; i++) {
    doms[`n${i}`] = document.querySelector(`#num-${i}`);
}

doms.n7.addEventListener('click', () => {
    console.log('n7 clicked.');
})

console.log('n7 is bind.');

const printValue = () => {
    console.log('Value Is Change.');
}

let account = document.querySelector('#account');

// account.addEventListener('change', printValue()); // error
account.addEventListener('change', printValue);
account.addEventListener('blur', () => {
    console.log('Input Is Blur.');
});
