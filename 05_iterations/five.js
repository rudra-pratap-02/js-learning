const coding = ['JavaScript', 'Python', 'Ruby', 'Go', 'C++']

// coding.forEach(function (item){
//     console.log(item);
// });     

// coding.forEach((item) => {
//     console.log(item);
// });

// function printing(item){
//     console.log(item);
// }

// coding.forEach(printing);

// coding.forEach((item,index,arr) => {
//     console.log(index, item, arr);
    
// })

const coding2 = [
    {
        languageName: 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName: 'C++',
        languageFileName : 'cpp'
    },
    {
        languageName: 'Ruby',
        languageFileName : 'rb'
    },
]

coding2.forEach((item) => {
    console.log(item.languageName);
    
});