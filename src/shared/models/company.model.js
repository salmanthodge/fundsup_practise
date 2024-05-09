const sharedServices = require("../services");
const sharedConstants = require("../constants");

const companyModels = {}

companyModels.getCompanyBySymbol = async (symbol) =>{
    let where = []
    where.push(`listing_status_nse ='Active'`)
    where.push(`symbol = '${symbol}'`)
    let result = await new sharedServices.mysqlServices()
    .select("symbol")
    .from(sharedConstants.dbTableNames.company)

    if(where.length != 0){
        result = result.where(where.join(" AND "))
    }
    console.log(result.query)
    result = await result.build()
    return result[0] || null

}


companyModels.getCompany = async (whereParams) =>{
    let where = []
    where.push(`listing_status_nse = 'Active'`)
    if(whereParams.search) {
        where.push(`(
            company_name LIKE '%${whereParams.search}%' OR
            company_long_name LIKE '%${whereParams.search}%' OR
            symbol LIKE '%${whereParams.search}%'
        )`)
    }

    if(whereParams.exchange) {
        where.push(`exchange = '${whereParams.exchange}'`)
    }

    let result = await new sharedServices.mysqlServices()
    .select("capitaline_code as company_id,company_name,company_long_name,symbol,exchange")
    .from(sharedConstants.dbTableNames.company)
    
    if(where.length != 0){
    result = result.where(where.join(" AND "))
}

console.log(typeof whereParams.search == "undefined")

if(whereParams.search = "" || typeof whereParams.search == "undefined"){
    result = result.limit(15)
}

console.log(result.query)
result = await result.build()
return result
}

module.exports = companyModels