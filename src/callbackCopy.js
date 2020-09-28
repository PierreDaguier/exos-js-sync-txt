'use strict'

import fs from 'fs'



fs.copyFile('./file1.txt', './file3.txt', (err) => {
    if (err) console.log(err)
    else console.log('file3.txt')
})

console.log(`c'est gagné`)