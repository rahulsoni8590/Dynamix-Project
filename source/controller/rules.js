
// class contains all the checklist functions which return true/false based on the condition
// can add as many checks inside this class and utililze them in the checkEvaluation function in the utility module

export default class Rules{

    isValuationFeePaid(isValuationFeePaid){
        return isValuationFeePaid
    }

    isUkResident(isUkResident){
        return isUkResident
    }

    riskRating(riskRating){
        return riskRating === "Medium"
    }

    ltv(ltv){
        return Number(ltv.slice(0,ltv.length-1)) < 60
    }

}

