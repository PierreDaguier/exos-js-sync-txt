import fs from 'fs/promises'

const copyFile = async () => {
    let content = await fs.copyFile('./file1.txt', './file4.txt')
    return content
}



let copyFile1 = await copyFile()
console.log(copyFile1)

