import Rules from "../source/controller/rules.js"

const rule = new Rules()

// this will return the result of all the checklist which is required we can add or remove the checklist point as per need
function checkValuation (data){
    const result = data.map((obj)=>{
        // console.log(obj.isValuationFeePaid,obj.isUkResident,obj.riskRating,obj.ltv)
        return {
            isValuationFeePaid:rule.isValuationFeePaid(obj.isValuationFeePaid),
            isUkResident:rule.isUkResident(obj.isUkResident),
            riskRating:rule.riskRating(obj.riskRating),
            ltv:rule.ltv(obj.ltv)
        }
    })
    return result
}

export {checkValuation};