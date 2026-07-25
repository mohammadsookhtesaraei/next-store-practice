

export interface ICoupon {
    "type": string,
    "code": string,
    "amount": number,
    "usageLimit": number,
    "productIds" : string[],
    "expireDate" :string
}