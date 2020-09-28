
import fs from 'fs/promises'

const creatFile5 = async () => {
    let content = await fs.writeFile(
        './file5.txt',
        'Jojolapin',
        'utf-8'
    )
    return content
}

const copyFile6 = async () => {
    let content = await fs.copyFile('./file5.txt', './file6.txt')
    return content
}



let content1 = await creatFile5()
console.log(content1)

let content2 = await copyFile6()
console.log(content2)

