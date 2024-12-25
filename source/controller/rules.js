export default class Checklist{

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

