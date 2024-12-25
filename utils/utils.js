import Checklist from "../source/controller/rules.js"

const checklist = new Checklist()

function checkValuation (data){
    const result = data.map((obj)=>{
        console.log(obj.isValuationFeePaid,obj.isUkResident,obj.riskRating,obj.ltv)
        return {
            isValuationFeePaid:checklist.isValuationFeePaid(obj.isValuationFeePaid),
            isUkResident:checklist.isUkResident(obj.isUkResident),
            riskRating:checklist.riskRating(obj.riskRating),
            ltv:checklist.ltv(obj.ltv)
        }
    })
    return result
}

export {checkValuation};