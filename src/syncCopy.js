"use strict"

import fs from 'fs'

fs.readFile('./file1.txt', 'utf-8', (err, data) => {
    if (err) console.error(err)
    else console.log('file1.txt: ', data)
  })


fs.copyFile('./file1.txt', './file2.txt',(err,data) => {
    if (err) console.error(err)
    else console.log('file2.txt',data)
})