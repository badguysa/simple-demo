function objToSelectOptionsArray(obj) {
   const arr = []
   for (const key in obj) {
     arr.push({
       label: obj[key],
       value: key
     })
   }
   return arr
}

export const examineStatusMap = {
    0:'男性体检',
    1:'女性体检',
    2:'孕前体检',
    3:'中老年体检',
    4:'入职体检',
    5:'青少年体检',
    6:'单位体检',
    7:'婚前体检',
}
export const examineStatusOptions = objToSelectOptionsArray(examineStatusMap)

export const reserveStatusMap={
    0:'未体检',
    1:'已体检',
}
export const reserveStatusOptions = objToSelectOptionsArray(reserveStatusMap)
