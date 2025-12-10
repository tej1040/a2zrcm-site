const carcData = {
    "PR": {
        "1": {
            "short": "Deductible Amount",
            "full": "Deductible Amount"
        },
        "2": {
            "short": "Coinsurance Amount",
            "full": "Coinsurance Amount"
        },
        "3": {
            "short": "Co-payment Amount",
            "full": "Co-payment Amount"
        },
        "4": {
            "short": "The procedure code is inconsistent with the modifier used",
            "full": "The procedure code is inconsistent with the modifier used. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "5": {
            "short": "The procedure code/type of bill is inconsistent with the place of service",
            "full": "The procedure code/type of bill is inconsistent with the place of service. Usage: Refer to the 835 Healthcare Policy"
        },
        "6": {
            "short": "The procedure/revenue code is inconsistent with the patient's age",
            "full": "The procedure/revenue code is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy"
        },
        "7": {
            "short": "The procedure/revenue code is inconsistent with the patient's gender",
            "full": "The procedure/revenue code is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy"
        },
        "8": {
            "short": "The procedure code is inconsistent with the provider type/specialty (taxonomy)",
            "full": "The procedure code is inconsistent with the provider type/specialty (taxonomy). Usage: Refer to the 835 Healthcare"
        },
        "9": {
            "short": "The diagnosis is inconsistent with the patient's age",
            "full": "The diagnosis is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "10": {
            "short": "The diagnosis is inconsistent with the patient's gender",
            "full": "The diagnosis is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "11": {
            "short": "The diagnosis is inconsistent with the procedure",
            "full": "The diagnosis is inconsistent with the procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "12": {
            "short": "The diagnosis is inconsistent with the provider type",
            "full": "The diagnosis is inconsistent with the provider type. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "13": {
            "short": "The date of death precedes the date of service",
            "full": "The date of death precedes the date of service."
        },
        "14": {
            "short": "The date of birth follows the date of service",
            "full": "The date of birth follows the date of service."
        },
        "15": {
            "short": "The authorization number is missing, invalid, or does not apply to the billed services or provider",
            "full": "The authorization number is missing, invalid, or does not apply to the billed services or provider."
        },
        "16": {
            "short": "Claim/service lacks information or has submission/billing error(s)",
            "full": "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the 835 Healthcare Policy"
        },
        "17": {
            "short": "Requested information was not provided or was insufficient/incomplete",
            "full": "Requested information was not provided or was insufficient/incomplete. At least one Remark Code must be provided"
        },
        "18": {
            "short": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations",
            "full": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations"
        },
        "19": {
            "short": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier",
            "full": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier."
        },
        "20": {
            "short": "This injury/illness is covered by the liability carrier",
            "full": "This injury/illness is covered by the liability carrier."
        },
        "21": {
            "short": "This injury/illness is the liability of the no-fault carrier",
            "full": "This injury/illness is the liability of the no-fault carrier."
        },
        "22": {
            "short": "This care may be covered by another payer per coordination of benefits",
            "full": "This care may be covered by another payer per coordination of benefits."
        },
        "23": {
            "short": "The impact of prior payer(s) adjudication including payments and/or adjustments",
            "full": "The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)"
        },
        "24": {
            "short": "Charges are covered under a capitation agreement/managed care plan",
            "full": "Charges are covered under a capitation agreement/managed care plan."
        },
        "26": {
            "short": "Expenses incurred prior to coverage",
            "full": "Expenses incurred prior to coverage."
        },
        "27": {
            "short": "Expenses incurred after coverage terminated",
            "full": "Expenses incurred after coverage terminated."
        },
        "29": {
            "short": "The time limit for filing has expired",
            "full": "The time limit for filing has expired."
        },
        "31": {
            "short": "Patient cannot be identified as our insured",
            "full": "Patient cannot be identified as our insured."
        },
        "32": {
            "short": "Our records indicate the patient is not an eligible dependent",
            "full": "Our records indicate the patient is not an eligible dependent."
        },
        "33": {
            "short": "Insured has no dependent coverage",
            "full": "Insured has no dependent coverage."
        },
        "34": {
            "short": "Insured has no coverage for newborns",
            "full": "Insured has no coverage for newborns."
        },
        "35": {
            "short": "Lifetime benefit maximum has been reached",
            "full": "Lifetime benefit maximum has been reached."
        },
        "39": {
            "short": "Services denied at the time authorization/pre-certification was requested",
            "full": "Services denied at the time authorization/pre-certification was requested."
        },
        "40": {
            "short": "Charges do not meet qualifications for emergent/urgent care",
            "full": "Charges do not meet qualifications for emergent/urgent care. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "44": {
            "short": "Prompt-pay discount",
            "full": "Prompt-pay discount."
        },
        "45": {
            "short": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement",
            "full": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. (Use only with Group Codes"
        },
        "49": {
            "short": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam",
            "full": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "50": {
            "short": "These are non-covered services because this is not deemed a 'medical necessity' by the payer",
            "full": "These are non-covered services because this is not deemed a 'medical necessity' by the payer. Usage: Refer to the 835"
        },
        "51": {
            "short": "These are non-covered services because this is a pre-existing condition",
            "full": "These are non-covered services because this is a pre-existing condition. Usage: Refer to the 835 Healthcare Policy"
        },
        "53": {
            "short": "Services by an immediate relative or a member of the same household are not covered",
            "full": "Services by an immediate relative or a member of the same household are not covered."
        },
        "54": {
            "short": "Multiple physicians/assistants are not covered in this case",
            "full": "Multiple physicians/assistants are not covered in this case. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "55": {
            "short": "Procedure/treatment/drug is deemed experimental/investigational by the payer",
            "full": "Procedure/treatment/drug is deemed experimental/investigational by the payer. Usage: Refer to the 835 Healthcare"
        },
        "56": {
            "short": "Procedure/treatment has not been deemed 'proven to be effective' by the payer",
            "full": "Procedure/treatment has not been deemed 'proven to be effective' by the payer. Usage: Refer to the 835 Healthcare"
        },
        "58": {
            "short": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service",
            "full": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service. Usage: Refer"
        },
        "59": {
            "short": "Processed based on multiple or concurrent procedure rules",
            "full": "Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.) Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment"
        },
        "60": {
            "short": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient",
            "full": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient"
        },
        "61": {
            "short": "Adjusted for failure to obtain second surgical opinion",
            "full": "Adjusted for failure to obtain second surgical opinion"
        },
        "66": {
            "short": "Blood Deductible",
            "full": "Blood Deductible."
        },
        "69": {
            "short": "Day outlier amount",
            "full": "Day outlier amount."
        },
        "70": {
            "short": "Cost outlier - Adjustment to compensate for additional costs",
            "full": "Cost outlier - Adjustment to compensate for additional costs."
        },
        "74": {
            "short": "Indirect Medical Education Adjustment",
            "full": "Indirect Medical Education Adjustment."
        },
        "75": {
            "short": "Direct Medical Education Adjustment",
            "full": "Direct Medical Education Adjustment."
        },
        "76": {
            "short": "Disproportionate Share Adjustment",
            "full": "Disproportionate Share Adjustment."
        },
        "78": {
            "short": "Non-Covered days/Room charge adjustment",
            "full": "Non-Covered days/Room charge adjustment."
        },
        "85": {
            "short": "Patient Interest Adjustment (Use Only Group code PR)",
            "full": "Patient Interest Adjustment (Use Only Group code PR)"
        },
        "89": {
            "short": "Professional fees removed from charges",
            "full": "Professional fees removed from charges."
        },
        "90": {
            "short": "Ingredient cost adjustment",
            "full": "Ingredient cost adjustment. Usage: To be used for pharmaceuticals only."
        },
        "91": {
            "short": "Dispensing fee adjustment",
            "full": "Dispensing fee adjustment."
        },
        "94": {
            "short": "Processed in Excess of charges",
            "full": "Processed in Excess of charges."
        },
        "95": {
            "short": "Plan procedures not followed",
            "full": "Plan procedures not followed."
        },
        "96": {
            "short": "Non-covered charge(s)",
            "full": "Non-covered charge(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Refer to the 835 Healthcare Policy"
        },
        "97": {
            "short": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been",
            "full": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been"
        },
        "100": {
            "short": "Payment made to patient/insured/responsible party",
            "full": "Payment made to patient/insured/responsible party."
        },
        "101": {
            "short": "Predetermination: anticipated payment upon completion of services or claim adjudication",
            "full": "Predetermination: anticipated payment upon completion of services or claim adjudication."
        },
        "102": {
            "short": "Major Medical Adjustment",
            "full": "Major Medical Adjustment."
        },
        "103": {
            "short": "Provider promotional discount (e",
            "full": "Provider promotional discount (e.g., Senior citizen discount)."
        },
        "104": {
            "short": "Managed care withholding",
            "full": "Managed care withholding."
        },
        "105": {
            "short": "Tax withholding",
            "full": "Tax withholding."
        },
        "106": {
            "short": "Patient payment option/election not in effect",
            "full": "Patient payment option/election not in effect."
        },
        "107": {
            "short": "The related or qualifying claim/service was not identified on this claim",
            "full": "The related or qualifying claim/service was not identified on this claim. Usage: Refer to the 835 Healthcare Policy"
        },
        "108": {
            "short": "Rent/purchase guidelines were not met",
            "full": "Rent/purchase guidelines were not met. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110"
        },
        "109": {
            "short": "Claim/service not covered by this payer/contractor",
            "full": "Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."
        },
        "110": {
            "short": "Billing date predates service date",
            "full": "Billing date predates service date."
        },
        "111": {
            "short": "Not covered unless the provider accepts assignment",
            "full": "Not covered unless the provider accepts assignment."
        },
        "112": {
            "short": "Service not furnished directly to the patient and/or not documented",
            "full": "Service not furnished directly to the patient and/or not documented."
        },
        "114": {
            "short": "Procedure/product not approved by the Food and Drug Administration",
            "full": "Procedure/product not approved by the Food and Drug Administration."
        },
        "115": {
            "short": "Procedure postponed, canceled, or delayed",
            "full": "Procedure postponed, canceled, or delayed."
        },
        "116": {
            "short": "The advance indemnification notice signed by the patient did not comply with requirements",
            "full": "The advance indemnification notice signed by the patient did not comply with requirements."
        },
        "117": {
            "short": "Transportation is only covered to the closest facility that can provide the necessary care",
            "full": "Transportation is only covered to the closest facility that can provide the necessary care."
        },
        "118": {
            "short": "ESRD network support adjustment",
            "full": "ESRD network support adjustment."
        },
        "119": {
            "short": "Benefit maximum for this time period or occurrence has been reached",
            "full": "Benefit maximum for this time period or occurrence has been reached."
        },
        "121": {
            "short": "Indemnification adjustment - compensation for outstanding member responsibility",
            "full": "Indemnification adjustment - compensation for outstanding member responsibility."
        },
        "122": {
            "short": "Psychiatric reduction",
            "full": "Psychiatric reduction."
        },
        "128": {
            "short": "Newborn's services are covered in the mother's Allowance",
            "full": "Newborn's services are covered in the mother's Allowance."
        },
        "129": {
            "short": "Prior processing information appears incorrect",
            "full": "Prior processing information appears incorrect. At least one Remark Code must be provided (may be comprised of"
        },
        "130": {
            "short": "Claim submission fee",
            "full": "Claim submission fee."
        },
        "131": {
            "short": "Claim specific negotiated discount",
            "full": "Claim specific negotiated discount."
        },
        "132": {
            "short": "Prearranged demonstration project adjustment",
            "full": "Prearranged demonstration project adjustment."
        },
        "133": {
            "short": "The disposition of this service line is pending further review",
            "full": "The disposition of this service line is pending further review. (Use only with Group Code OA). Usage: Use of this code"
        },
        "134": {
            "short": "Technical fees removed from charges",
            "full": "Technical fees removed from charges."
        },
        "135": {
            "short": "Interim bills cannot be processed",
            "full": "Interim bills cannot be processed."
        },
        "136": {
            "short": "Failure to follow prior payer's coverage rules",
            "full": "Failure to follow prior payer's coverage rules. (Use only with Group Code OA)"
        },
        "137": {
            "short": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes",
            "full": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes."
        },
        "139": {
            "short": "Contracted funding agreement - Subscriber is employed by the provider of services",
            "full": "Contracted funding agreement - Subscriber is employed by the provider of services. Use only with Group Code CO."
        },
        "140": {
            "short": "Patient/Insured health identification number and name do not match",
            "full": "Patient/Insured health identification number and name do not match."
        },
        "142": {
            "short": "Monthly Medicaid patient liability amount",
            "full": "Monthly Medicaid patient liability amount."
        },
        "143": {
            "short": "Portion of payment deferred",
            "full": "Portion of payment deferred."
        },
        "144": {
            "short": "Incentive adjustment, e",
            "full": "Incentive adjustment, e.g. preferred product/service."
        },
        "146": {
            "short": "Diagnosis was invalid for the date(s) of service reported",
            "full": "Diagnosis was invalid for the date(s) of service reported."
        },
        "147": {
            "short": "Provider contracted/negotiated rate expired or not on file",
            "full": "Provider contracted/negotiated rate expired or not on file."
        },
        "148": {
            "short": "Information from another provider was not provided or was insufficient/incomplete",
            "full": "Information from another provider was not provided or was insufficient/incomplete. At least one Remark Code must be"
        },
        "149": {
            "short": "Lifetime benefit maximum has been reached for this service/benefit category",
            "full": "Lifetime benefit maximum has been reached for this service/benefit category."
        },
        "150": {
            "short": "Payer deems the information submitted does not support this level of service",
            "full": "Payer deems the information submitted does not support this level of service."
        },
        "151": {
            "short": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of",
            "full": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of"
        },
        "152": {
            "short": "Payer deems the information submitted does not support this length of service",
            "full": "Payer deems the information submitted does not support this length of service. Usage: Refer to the 835 Healthcare"
        },
        "153": {
            "short": "Payer deems the information submitted does not support this dosage",
            "full": "Payer deems the information submitted does not support this dosage."
        },
        "154": {
            "short": "Payer deems the information submitted does not support this day's supply",
            "full": "Payer deems the information submitted does not support this day's supply."
        },
        "155": {
            "short": "Patient refused the service/procedure",
            "full": "Patient refused the service/procedure."
        },
        "157": {
            "short": "Service/procedure was provided as a result of an act of war",
            "full": "Service/procedure was provided as a result of an act of war."
        },
        "158": {
            "short": "Service/procedure was provided outside of the United States",
            "full": "Service/procedure was provided outside of the United States."
        },
        "159": {
            "short": "Service/procedure was provided as a result of terrorism",
            "full": "Service/procedure was provided as a result of terrorism."
        },
        "160": {
            "short": "Injury/illness was the result of an activity that is a benefit exclusion",
            "full": "Injury/illness was the result of an activity that is a benefit exclusion."
        },
        "161": {
            "short": "Provider performance bonus",
            "full": "Provider performance bonus"
        },
        "163": {
            "short": "Attachment/other documentation referenced on the claim was not received",
            "full": "Attachment/other documentation referenced on the claim was not received."
        },
        "164": {
            "short": "Attachment/other documentation referenced on the claim was not received in a timely fashion",
            "full": "Attachment/other documentation referenced on the claim was not received in a timely fashion."
        },
        "166": {
            "short": "These services were submitted after this payers responsibility for processing claims under this plan ended",
            "full": "These services were submitted after this payers responsibility for processing claims under this plan ended."
        },
        "167": {
            "short": "This (these) diagnosis(es) is (are) not covered",
            "full": "This (these) diagnosis(es) is (are) not covered. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "169": {
            "short": "Alternate benefit has been provided",
            "full": "Alternate benefit has been provided."
        },
        "170": {
            "short": "Payment is denied when performed/billed by this type of provider",
            "full": "Payment is denied when performed/billed by this type of provider. Usage: Refer to the 835 Healthcare Policy"
        },
        "171": {
            "short": "Payment is denied when performed/billed by this type of provider in this type of facility",
            "full": "Payment is denied when performed/billed by this type of provider in this type of facility. Usage: Refer to the 835"
        },
        "172": {
            "short": "Payment is adjusted when performed/billed by a provider of this specialty",
            "full": "Payment is adjusted when performed/billed by a provider of this specialty. Usage: Refer to the 835 Healthcare Policy"
        },
        "173": {
            "short": "Service/equipment was not prescribed by a physician",
            "full": "Service/equipment was not prescribed by a physician."
        },
        "174": {
            "short": "Service was not prescribed prior to delivery",
            "full": "Service was not prescribed prior to delivery."
        },
        "175": {
            "short": "Prescription is incomplete",
            "full": "Prescription is incomplete."
        },
        "176": {
            "short": "Prescription is not current",
            "full": "Prescription is not current."
        },
        "177": {
            "short": "Patient has not met the required eligibility requirements",
            "full": "Patient has not met the required eligibility requirements."
        },
        "178": {
            "short": "Patient has not met the required spend down requirements",
            "full": "Patient has not met the required spend down requirements."
        },
        "179": {
            "short": "Patient has not met the required waiting requirements",
            "full": "Patient has not met the required waiting requirements. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "180": {
            "short": "Patient has not met the required residency requirements",
            "full": "Patient has not met the required residency requirements."
        },
        "181": {
            "short": "Procedure code was invalid on the date of service",
            "full": "Procedure code was invalid on the date of service."
        },
        "182": {
            "short": "Procedure modifier was invalid on the date of service",
            "full": "Procedure modifier was invalid on the date of service."
        },
        "183": {
            "short": "The referring provider is not eligible to refer the service billed",
            "full": "The referring provider is not eligible to refer the service billed. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "184": {
            "short": "The prescribing/ordering provider is not eligible to prescribe/order the service billed",
            "full": "The prescribing/ordering provider is not eligible to prescribe/order the service billed. Usage: Refer to the 835 Healthcare"
        },
        "185": {
            "short": "The rendering provider is not eligible to perform the service billed",
            "full": "The rendering provider is not eligible to perform the service billed. Usage: Refer to the 835 Healthcare Policy"
        },
        "186": {
            "short": "Level of care change adjustment",
            "full": "Level of care change adjustment."
        },
        "187": {
            "short": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings",
            "full": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings"
        },
        "188": {
            "short": "This product/procedure is only covered when used according to FDA recommendations",
            "full": "This product/procedure is only covered when used according to FDA recommendations."
        },
        "189": {
            "short": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code",
            "full": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code"
        },
        "190": {
            "short": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay",
            "full": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay."
        },
        "192": {
            "short": "Non standard adjustment code from paper remittance",
            "full": "Non standard adjustment code from paper remittance. Usage: This code is to be used by providers/payers providing Coordination of Benefits information to another payer in the 837 transaction only. This code is only used when the non- standard code cannot be reasonably mapped to an existing Claims Adjustment Reason Code, specifically Deductible,"
        },
        "193": {
            "short": "Original payment decision is being maintained",
            "full": "Original payment decision is being maintained. Upon review, it was determined that this claim was processed properly."
        },
        "194": {
            "short": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician",
            "full": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician."
        },
        "195": {
            "short": "Refund issued to an erroneous priority payer for this claim/service",
            "full": "Refund issued to an erroneous priority payer for this claim/service."
        },
        "197": {
            "short": "Precertification/authorization/notification/pre-treatment absent",
            "full": "Precertification/authorization/notification/pre-treatment absent."
        },
        "198": {
            "short": "Precertification/notification/authorization/pre-treatment exceeded",
            "full": "Precertification/notification/authorization/pre-treatment exceeded."
        },
        "199": {
            "short": "Revenue code and Procedure code do not match",
            "full": "Revenue code and Procedure code do not match."
        },
        "200": {
            "short": "Expenses incurred during lapse in coverage",
            "full": "Expenses incurred during lapse in coverage"
        },
        "201": {
            "short": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement",
            "full": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement. (Use only with Group Code PR) At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason"
        },
        "202": {
            "short": "Non-covered personal comfort or convenience services",
            "full": "Non-covered personal comfort or convenience services."
        },
        "203": {
            "short": "Discontinued or reduced service",
            "full": "Discontinued or reduced service."
        },
        "204": {
            "short": "This service/equipment/drug is not covered under the patient's current benefit plan",
            "full": "This service/equipment/drug is not covered under the patient's current benefit plan"
        },
        "205": {
            "short": "Pharmacy discount card processing fee",
            "full": "Pharmacy discount card processing fee"
        },
        "206": {
            "short": "National Provider Identifier - missing",
            "full": "National Provider Identifier - missing."
        },
        "207": {
            "short": "National Provider identifier - Invalid format",
            "full": "National Provider identifier - Invalid format"
        },
        "208": {
            "short": "National Provider Identifier - Not matched",
            "full": "National Provider Identifier - Not matched."
        },
        "209": {
            "short": "Per regulatory or other agreement",
            "full": "Per regulatory or other agreement. The provider cannot collect this amount from the patient. However, this amount"
        },
        "210": {
            "short": "Payment adjusted because pre-certification/authorization not received in a timely fashion",
            "full": "Payment adjusted because pre-certification/authorization not received in a timely fashion"
        },
        "211": {
            "short": "National Drug Codes (NDC) not eligible for rebate, are not covered",
            "full": "National Drug Codes (NDC) not eligible for rebate, are not covered."
        },
        "212": {
            "short": "Administrative surcharges are not covered",
            "full": "Administrative surcharges are not covered"
        },
        "213": {
            "short": "Non-compliance with the physician self referral prohibition legislation or payer policy",
            "full": "Non-compliance with the physician self referral prohibition legislation or payer policy."
        },
        "215": {
            "short": "Based on subrogation of a third party settlement",
            "full": "Based on subrogation of a third party settlement"
        },
        "216": {
            "short": "Based on the findings of a review organization",
            "full": "Based on the findings of a review organization"
        },
        "219": {
            "short": "Based on extent of injury",
            "full": "Based on extent of injury. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835"
        },
        "222": {
            "short": "Exceeds the contracted maximum number of hours/days/units by this provider for this period",
            "full": "Exceeds the contracted maximum number of hours/days/units by this provider for this period. This is not patient specific. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF),"
        },
        "223": {
            "short": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is",
            "full": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is"
        },
        "224": {
            "short": "Patient identification compromised by identity theft",
            "full": "Patient identification compromised by identity theft. Identity verification required for processing this and future claims."
        },
        "225": {
            "short": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)",
            "full": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)"
        },
        "226": {
            "short": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was",
            "full": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was"
        },
        "227": {
            "short": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete",
            "full": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance"
        },
        "228": {
            "short": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous",
            "full": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous"
        },
        "229": {
            "short": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X",
            "full": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X. Usage: This code can only be used in the 837 transaction to convey Coordination of Benefits information when the secondary payer's cost avoidance policy allows providers to bypass claim submission to a prior payer. (Use only with Group Code PR)"
        },
        "231": {
            "short": "Mutually exclusive procedures cannot be done in the same day/setting",
            "full": "Mutually exclusive procedures cannot be done in the same day/setting. Usage: Refer to the 835 Healthcare Policy"
        },
        "232": {
            "short": "Institutional Transfer Amount",
            "full": "Institutional Transfer Amount. Usage: Applies to institutional claims only and explains the DRG amount difference when"
        },
        "233": {
            "short": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error",
            "full": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error."
        },
        "234": {
            "short": "This procedure is not paid separately",
            "full": "This procedure is not paid separately. At least one Remark Code must be provided (may be comprised of either the"
        },
        "235": {
            "short": "Sales Tax",
            "full": "Sales Tax"
        },
        "236": {
            "short": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation",
            "full": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation"
        },
        "237": {
            "short": "Legislated/Regulatory Penalty",
            "full": "Legislated/Regulatory Penalty. At least one Remark Code must be provided (may be comprised of either the NCPDP"
        },
        "238": {
            "short": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period",
            "full": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period. (Use only with"
        },
        "239": {
            "short": "Claim spans eligible and ineligible periods of coverage",
            "full": "Claim spans eligible and ineligible periods of coverage. Rebill separate claims."
        },
        "240": {
            "short": "The diagnosis is inconsistent with the patient's birth weight",
            "full": "The diagnosis is inconsistent with the patient's birth weight. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "241": {
            "short": "Low Income Subsidy (LIS) Co-payment Amount",
            "full": "Low Income Subsidy (LIS) Co-payment Amount"
        },
        "242": {
            "short": "Services not provided by network/primary care providers",
            "full": "Services not provided by network/primary care providers."
        },
        "243": {
            "short": "Services not authorized by network/primary care providers",
            "full": "Services not authorized by network/primary care providers."
        },
        "245": {
            "short": "Provider performance program withhold",
            "full": "Provider performance program withhold."
        },
        "246": {
            "short": "This non-payable code is for required reporting only",
            "full": "This non-payable code is for required reporting only."
        },
        "247": {
            "short": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "248": {
            "short": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "249": {
            "short": "This claim has been identified as a readmission",
            "full": "This claim has been identified as a readmission. (Use only with Group Code CO)"
        },
        "250": {
            "short": "The attachment/other documentation that was received was the incorrect attachment/document",
            "full": "The attachment/other documentation that was received was the incorrect attachment/document. The expected attachment/document is still missing. At least one Remark Code must be provided (may be comprised of either the"
        },
        "251": {
            "short": "The attachment/other documentation that was received was incomplete or deficient",
            "full": "The attachment/other documentation that was received was incomplete or deficient. The necessary information is still needed to process the claim. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "252": {
            "short": "An attachment/other documentation is required to adjudicate this claim/service",
            "full": "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an"
        },
        "253": {
            "short": "Sequestration - reduction in federal payment",
            "full": "Sequestration - reduction in federal payment"
        },
        "254": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "256": {
            "short": "Service not payable per managed care contract",
            "full": "Service not payable per managed care contract."
        },
        "257": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium"
        },
        "258": {
            "short": "Claim/service not covered when patient is in custody/incarcerated",
            "full": "Claim/service not covered when patient is in custody/incarcerated. Applicable federal, state or local authority may cover"
        },
        "259": {
            "short": "Additional payment for Dental/Vision service utilization",
            "full": "Additional payment for Dental/Vision service utilization."
        },
        "260": {
            "short": "Processed under Medicaid ACA Enhanced Fee Schedule",
            "full": "Processed under Medicaid ACA Enhanced Fee Schedule"
        },
        "261": {
            "short": "The procedure or service is inconsistent with the patient's history",
            "full": "The procedure or service is inconsistent with the patient's history."
        },
        "262": {
            "short": "Adjustment for delivery cost",
            "full": "Adjustment for delivery cost. Usage: To be used for pharmaceuticals only."
        },
        "263": {
            "short": "Adjustment for shipping cost",
            "full": "Adjustment for shipping cost. Usage: To be used for pharmaceuticals only."
        },
        "264": {
            "short": "Adjustment for postage cost",
            "full": "Adjustment for postage cost. Usage: To be used for pharmaceuticals only."
        },
        "265": {
            "short": "Adjustment for administrative cost",
            "full": "Adjustment for administrative cost. Usage: To be used for pharmaceuticals only."
        },
        "266": {
            "short": "Adjustment for compound preparation cost",
            "full": "Adjustment for compound preparation cost. Usage: To be used for pharmaceuticals only."
        },
        "267": {
            "short": "Claim/service spans multiple months",
            "full": "Claim/service spans multiple months. At least one Remark Code must be provided (may be comprised of either the"
        },
        "268": {
            "short": "The Claim spans two calendar years",
            "full": "The Claim spans two calendar years. Please resubmit one claim per calendar year."
        },
        "269": {
            "short": "Anesthesia not covered for this service/procedure",
            "full": "Anesthesia not covered for this service/procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "270": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "271": {
            "short": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when",
            "full": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when"
        },
        "272": {
            "short": "Coverage/program guidelines were not met",
            "full": "Coverage/program guidelines were not met."
        },
        "273": {
            "short": "Coverage/program guidelines were exceeded",
            "full": "Coverage/program guidelines were exceeded."
        },
        "274": {
            "short": "Fee/Service not payable per patient Care Coordination arrangement",
            "full": "Fee/Service not payable per patient Care Coordination arrangement."
        },
        "275": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered. (Use only with Group"
        },
        "276": {
            "short": "Services denied by the prior payer(s) are not covered by this payer",
            "full": "Services denied by the prior payer(s) are not covered by this payer."
        },
        "277": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance"
        },
        "278": {
            "short": "Performance program proficiency requirements not met",
            "full": "Performance program proficiency requirements not met. (Use only with Group Codes CO or PI) Usage: Refer to the 835"
        },
        "279": {
            "short": "Services not provided by Preferred network providers",
            "full": "Services not provided by Preferred network providers. Usage: Use this code when there are member network"
        },
        "280": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "281": {
            "short": "Deductible waived per contractual agreement",
            "full": "Deductible waived per contractual agreement. Use only with Group Code CO."
        },
        "282": {
            "short": "The procedure/revenue code is inconsistent with the type of bill",
            "full": "The procedure/revenue code is inconsistent with the type of bill. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "283": {
            "short": "Attending provider is not eligible to provide direction of care",
            "full": "Attending provider is not eligible to provide direction of care."
        },
        "284": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services."
        },
        "285": {
            "short": "Appeal procedures not followed",
            "full": "Appeal procedures not followed"
        },
        "286": {
            "short": "Appeal time limits not met",
            "full": "Appeal time limits not met"
        },
        "287": {
            "short": "Referral exceeded",
            "full": "Referral exceeded"
        },
        "288": {
            "short": "Referral absent",
            "full": "Referral absent"
        },
        "289": {
            "short": "Services considered under the dental and medical plans, benefits not available",
            "full": "Services considered under the dental and medical plans, benefits not available."
        },
        "290": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "291": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "292": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "293": {
            "short": "Payment made to employer",
            "full": "Payment made to employer."
        },
        "294": {
            "short": "Payment made to attorney",
            "full": "Payment made to attorney."
        },
        "295": {
            "short": "Pharmacy Direct/Indirect Remuneration (DIR)",
            "full": "Pharmacy Direct/Indirect Remuneration (DIR)"
        },
        "296": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider."
        },
        "297": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "298": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "299": {
            "short": "The billing provider is not eligible to receive payment for the service billed",
            "full": "The billing provider is not eligible to receive payment for the service billed."
        },
        "300": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "301": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "302": {
            "short": "Precertification/notification/authorization/pre-treatment time limit has expired",
            "full": "Precertification/notification/authorization/pre-treatment time limit has expired."
        },
        "303": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified"
        },
        "304": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "305": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "835": {
            "short": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "2110": {
            "short": "Service Payment information REF)",
            "full": "Service Payment information REF). To be used for Workers' Compensation only."
        },
        "Segment": {
            "short": "(loop 2110 Service Payment Information REF), if present",
            "full": "(loop 2110 Service Payment Information REF), if present."
        },
        "Identification": {
            "short": "Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Policy": {
            "short": "Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "(loop": {
            "short": "2110 Service Payment Information REF), if present",
            "full": "2110 Service Payment Information REF), if present."
        },
        "(may": {
            "short": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code",
            "full": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code.)"
        },
        "requires": {
            "short": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)",
            "full": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)."
        },
        "PR": {
            "short": "or CO depending upon liability)",
            "full": "or CO depending upon liability)"
        },
        "Healthcare": {
            "short": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "to": {
            "short": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Information": {
            "short": "REF), if present",
            "full": "REF), if present."
        },
        "services.": {
            "short": "",
            "full": ""
        },
        "adjudicated.": {
            "short": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Service": {
            "short": "Payment Information REF), if present",
            "full": "Payment Information REF), if present."
        },
        "either": {
            "short": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "provided": {
            "short": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Account,": {
            "short": "Health Reimbursement Account, etc",
            "full": "Health Reimbursement Account, etc.)"
        },
        "for": {
            "short": "this procedure/service",
            "full": "this procedure/service"
        },
        "Coinsurance": {
            "short": "and Co-payment",
            "full": "and Co-payment."
        },
        "Code,": {
            "short": "or Remittance Advice Remark Code that is not an ALERT",
            "full": "or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "may": {
            "short": "be billed to subsequent payer",
            "full": "be billed to subsequent payer. Refund to patient if collected. (Use only with Group code OA)"
        },
        "if": {
            "short": "the regulations apply",
            "full": "the regulations apply. To be used for Property and Casualty Auto only."
        },
        "mandated": {
            "short": "before a new code can be created",
            "full": "before a new code can be created."
        },
        "insufficient/incomplete.": {
            "short": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Advice": {
            "short": "Remark Code that is not an ALERT",
            "full": "Remark Code that is not an ALERT.)"
        },
        "payer": {
            "short": "for their adjudication",
            "full": "for their adjudication"
        },
        "the": {
            "short": "claim/service",
            "full": "claim/service."
        },
        "NCPDP": {
            "short": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "state": {
            "short": "regulations/ fee schedule requirements",
            "full": "regulations/ fee schedule requirements."
        },
        "Reject": {
            "short": "Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Group": {
            "short": "Code PR)",
            "full": "Code PR)"
        },
        "Reason": {
            "short": "Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "ALERT).": {
            "short": "",
            "full": ""
        },
        "medical": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "payment": {
            "short": "or lack of premium payment)",
            "full": "or lack of premium payment). (Use only with Group Code OA)"
        },
        "dental": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "deferred": {
            "short": "amounts have been previously reported",
            "full": "amounts have been previously reported. (Use only with Group Code OA)"
        },
        "Code": {
            "short": "PR)",
            "full": "PR)"
        },
        "SHOP": {
            "short": "Exchange requirements",
            "full": "Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium payment or lack of premium payment). (Use only with Group Code OA)"
        },
        "limitations.": {
            "short": "For example, using contracted providers not in the member's 'narrow' network",
            "full": "For example, using contracted providers not in the member's 'narrow' network."
        },
        "Pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "vision": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "Behavioral": {
            "short": "Health Plan for further consideration",
            "full": "Health Plan for further consideration."
        },
        "Medicare": {
            "short": "and Medicaid Beneficiaries",
            "full": "and Medicaid Beneficiaries. (Use only with Group Code CO)"
        },
        "hearing": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "A0": {
            "short": "Patient refund amount",
            "full": "Patient refund amount."
        },
        "A1": {
            "short": "Claim/Service denied",
            "full": "Claim/Service denied. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "A5": {
            "short": "Medicare Claim PPS Capital Cost Outlier Amount",
            "full": "Medicare Claim PPS Capital Cost Outlier Amount."
        },
        "A6": {
            "short": "Prior hospitalization or 30 day transfer requirement not met",
            "full": "Prior hospitalization or 30 day transfer requirement not met."
        },
        "A8": {
            "short": "Ungroupable DRG",
            "full": "Ungroupable DRG."
        },
        "B1": {
            "short": "Non-covered visits",
            "full": "Non-covered visits."
        },
        "B10": {
            "short": "Allowed amount has been reduced because a component of the basic procedure/test was paid",
            "full": "Allowed amount has been reduced because a component of the basic procedure/test was paid. The beneficiary is not"
        },
        "liable": {
            "short": "for more than the charge limit for the basic procedure/test",
            "full": "for more than the charge limit for the basic procedure/test."
        },
        "B11": {
            "short": "The claim/service has been transferred to the proper payer/processor for processing",
            "full": "The claim/service has been transferred to the proper payer/processor for processing. Claim/service not covered by this"
        },
        "payer/processor.": {
            "short": "",
            "full": ""
        },
        "B12": {
            "short": "Services not documented in patient's medical records",
            "full": "Services not documented in patient's medical records."
        },
        "B13": {
            "short": "Previously paid",
            "full": "Previously paid. Payment for this claim/service may have been provided in a previous payment."
        },
        "B14": {
            "short": "Only one visit or consultation per physician per day is covered",
            "full": "Only one visit or consultation per physician per day is covered."
        },
        "B15": {
            "short": "This service/procedure requires that a qualifying service/procedure be received and covered",
            "full": "This service/procedure requires that a qualifying service/procedure be received and covered. The qualifying other"
        },
        "service/procedure": {
            "short": "has not been received/adjudicated",
            "full": "has not been received/adjudicated. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "B16": {
            "short": "'New Patient' qualifications were not met",
            "full": "'New Patient' qualifications were not met."
        },
        "B20": {
            "short": "Procedure/service was partially or fully furnished by another provider",
            "full": "Procedure/service was partially or fully furnished by another provider."
        },
        "B22": {
            "short": "This payment is adjusted based on the diagnosis",
            "full": "This payment is adjusted based on the diagnosis."
        },
        "B23": {
            "short": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test",
            "full": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test."
        },
        "B4": {
            "short": "Late filing penalty",
            "full": "Late filing penalty."
        },
        "B5": {
            "short": "Coverage/program guidelines were not met or were exceeded",
            "full": "Coverage/program guidelines were not met or were exceeded."
        },
        "B7": {
            "short": "This provider was not certified/eligible to be paid for this procedure/service on this date of service",
            "full": "This provider was not certified/eligible to be paid for this procedure/service on this date of service. Usage: Refer to the"
        },
        "B8": {
            "short": "Alternative services were available, and should have been utilized",
            "full": "Alternative services were available, and should have been utilized. Usage: Refer to the 835 Healthcare Policy"
        },
        "B9": {
            "short": "Patient is enrolled in a Hospice",
            "full": "Patient is enrolled in a Hospice."
        },
        "P1": {
            "short": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation",
            "full": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation. To"
        },
        "be": {
            "short": "used for Property and Casualty only",
            "full": "used for Property and Casualty only. (Use only with Group Code CO)."
        },
        "P10": {
            "short": "Payment reduced to zero due to litigation",
            "full": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To"
        },
        "P11": {
            "short": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation",
            "full": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. To be used for"
        },
        "Property": {
            "short": "and Casualty only",
            "full": "and Casualty only."
        },
        "P12": {
            "short": "Workers' compensation jurisdictional fee schedule adjustment",
            "full": "Workers' compensation jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "To": {
            "short": "be used for Property and Casualty only",
            "full": "be used for Property and Casualty only."
        },
        "P13": {
            "short": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable",
            "full": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P14": {
            "short": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day",
            "full": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service"
        },
        "Payment": {
            "short": "Information REF), if present",
            "full": "Information REF), if present. To be used for Property and Casualty only."
        },
        "P15": {
            "short": "Workers' Compensation Medical Treatment Guideline Adjustment",
            "full": "Workers' Compensation Medical Treatment Guideline Adjustment. To be used for Workers' Compensation only."
        },
        "P16": {
            "short": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction",
            "full": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. To be used for"
        },
        "Workers'": {
            "short": "Compensation only",
            "full": "Compensation only. (Use with Group Code CO or OA)"
        },
        "P17": {
            "short": "Referral not authorized by attending physician per regulatory requirement",
            "full": "Referral not authorized by attending physician per regulatory requirement. To be used for Property and Casualty only."
        },
        "P18": {
            "short": "Procedure is not listed in the jurisdiction fee schedule",
            "full": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service. To be"
        },
        "used": {
            "short": "for Property and Casualty only",
            "full": "for Property and Casualty only."
        },
        "P19": {
            "short": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due",
            "full": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due. To be used for"
        },
        "P2": {
            "short": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation",
            "full": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "P20": {
            "short": "Service not paid under jurisdiction allowed outpatient facility fee schedule",
            "full": "Service not paid under jurisdiction allowed outpatient facility fee schedule. To be used for Property and Casualty only."
        },
        "P21": {
            "short": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P22": {
            "short": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P23": {
            "short": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment",
            "full": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property and Casualty Auto only."
        },
        "P24": {
            "short": "Payment adjusted based on Preferred Provider Organization (PPO)",
            "full": "Payment adjusted based on Preferred Provider Organization (PPO). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P25": {
            "short": "Payment adjusted based on Medical Provider Network (MPN)",
            "full": "Payment adjusted based on Medical Provider Network (MPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To"
        },
        "P26": {
            "short": "Payment adjusted based on Voluntary Provider network (VPN)",
            "full": "Payment adjusted based on Voluntary Provider network (VPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P27": {
            "short": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "and": {
            "short": "Casualty only",
            "full": "Casualty only."
        },
        "P28": {
            "short": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "P29": {
            "short": "Liability Benefits jurisdictional fee schedule adjustment",
            "full": "Liability Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be"
        },
        "P3": {
            "short": "Workers' Compensation case settled",
            "full": "Workers' Compensation case settled. Patient is responsible for amount of this claim/service through WC 'Medicare set aside arrangement' or other agreement. To be used for Workers' Compensation only. (Use only with Group Code PR)"
        },
        "P30": {
            "short": "Payment denied for exacerbation when supporting documentation was not complete",
            "full": "Payment denied for exacerbation when supporting documentation was not complete. To be used for Property and"
        },
        "Casualty": {
            "short": "only",
            "full": "only."
        },
        "P31": {
            "short": "Payment denied for exacerbation when treatment exceeds time allowed",
            "full": "Payment denied for exacerbation when treatment exceeds time allowed. To be used for Property and Casualty only."
        },
        "P4": {
            "short": "Workers' Compensation claim adjudicated as non-compensable",
            "full": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Workers' Compensation only"
        },
        "P5": {
            "short": "Based on payer reasonable and customary fees",
            "full": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. To be"
        },
        "P6": {
            "short": "Based on entitlement to benefits",
            "full": "Based on entitlement to benefits. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property"
        },
        "P7": {
            "short": "The applicable fee schedule/fee database does not contain the billed code",
            "full": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided and supporting documentation if required."
        },
        "P8": {
            "short": "Claim is under investigation",
            "full": "Claim is under investigation. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property and"
        },
        "P9": {
            "short": "No available or correlating CPT/HCPCS code to describe this service",
            "full": "No available or correlating CPT/HCPCS code to describe this service. To be used for Property and Casualty only."
        }
    },
    "CO": {
        "1": {
            "short": "Deductible Amount",
            "full": "Deductible Amount"
        },
        "2": {
            "short": "Coinsurance Amount",
            "full": "Coinsurance Amount"
        },
        "3": {
            "short": "Co-payment Amount",
            "full": "Co-payment Amount"
        },
        "4": {
            "short": "The procedure code is inconsistent with the modifier used",
            "full": "The procedure code is inconsistent with the modifier used. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "5": {
            "short": "The procedure code/type of bill is inconsistent with the place of service",
            "full": "The procedure code/type of bill is inconsistent with the place of service. Usage: Refer to the 835 Healthcare Policy"
        },
        "6": {
            "short": "The procedure/revenue code is inconsistent with the patient's age",
            "full": "The procedure/revenue code is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy"
        },
        "7": {
            "short": "The procedure/revenue code is inconsistent with the patient's gender",
            "full": "The procedure/revenue code is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy"
        },
        "8": {
            "short": "The procedure code is inconsistent with the provider type/specialty (taxonomy)",
            "full": "The procedure code is inconsistent with the provider type/specialty (taxonomy). Usage: Refer to the 835 Healthcare"
        },
        "9": {
            "short": "The diagnosis is inconsistent with the patient's age",
            "full": "The diagnosis is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "10": {
            "short": "The diagnosis is inconsistent with the patient's gender",
            "full": "The diagnosis is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "11": {
            "short": "The diagnosis is inconsistent with the procedure",
            "full": "The diagnosis is inconsistent with the procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "12": {
            "short": "The diagnosis is inconsistent with the provider type",
            "full": "The diagnosis is inconsistent with the provider type. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "13": {
            "short": "The date of death precedes the date of service",
            "full": "The date of death precedes the date of service."
        },
        "14": {
            "short": "The date of birth follows the date of service",
            "full": "The date of birth follows the date of service."
        },
        "15": {
            "short": "The authorization number is missing, invalid, or does not apply to the billed services or provider",
            "full": "The authorization number is missing, invalid, or does not apply to the billed services or provider."
        },
        "16": {
            "short": "Claim/service lacks information or has submission/billing error(s)",
            "full": "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the 835 Healthcare Policy"
        },
        "17": {
            "short": "Requested information was not provided or was insufficient/incomplete",
            "full": "Requested information was not provided or was insufficient/incomplete. At least one Remark Code must be provided"
        },
        "18": {
            "short": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations",
            "full": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations"
        },
        "19": {
            "short": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier",
            "full": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier."
        },
        "20": {
            "short": "This injury/illness is covered by the liability carrier",
            "full": "This injury/illness is covered by the liability carrier."
        },
        "21": {
            "short": "This injury/illness is the liability of the no-fault carrier",
            "full": "This injury/illness is the liability of the no-fault carrier."
        },
        "22": {
            "short": "This care may be covered by another payer per coordination of benefits",
            "full": "This care may be covered by another payer per coordination of benefits."
        },
        "23": {
            "short": "The impact of prior payer(s) adjudication including payments and/or adjustments",
            "full": "The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)"
        },
        "24": {
            "short": "Charges are covered under a capitation agreement/managed care plan",
            "full": "Charges are covered under a capitation agreement/managed care plan."
        },
        "26": {
            "short": "Expenses incurred prior to coverage",
            "full": "Expenses incurred prior to coverage."
        },
        "27": {
            "short": "Expenses incurred after coverage terminated",
            "full": "Expenses incurred after coverage terminated."
        },
        "29": {
            "short": "The time limit for filing has expired",
            "full": "The time limit for filing has expired."
        },
        "31": {
            "short": "Patient cannot be identified as our insured",
            "full": "Patient cannot be identified as our insured."
        },
        "32": {
            "short": "Our records indicate the patient is not an eligible dependent",
            "full": "Our records indicate the patient is not an eligible dependent."
        },
        "33": {
            "short": "Insured has no dependent coverage",
            "full": "Insured has no dependent coverage."
        },
        "34": {
            "short": "Insured has no coverage for newborns",
            "full": "Insured has no coverage for newborns."
        },
        "35": {
            "short": "Lifetime benefit maximum has been reached",
            "full": "Lifetime benefit maximum has been reached."
        },
        "39": {
            "short": "Services denied at the time authorization/pre-certification was requested",
            "full": "Services denied at the time authorization/pre-certification was requested."
        },
        "40": {
            "short": "Charges do not meet qualifications for emergent/urgent care",
            "full": "Charges do not meet qualifications for emergent/urgent care. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "44": {
            "short": "Prompt-pay discount",
            "full": "Prompt-pay discount."
        },
        "45": {
            "short": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement",
            "full": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. (Use only with Group Codes"
        },
        "49": {
            "short": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam",
            "full": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "50": {
            "short": "These are non-covered services because this is not deemed a 'medical necessity' by the payer",
            "full": "These are non-covered services because this is not deemed a 'medical necessity' by the payer. Usage: Refer to the 835"
        },
        "51": {
            "short": "These are non-covered services because this is a pre-existing condition",
            "full": "These are non-covered services because this is a pre-existing condition. Usage: Refer to the 835 Healthcare Policy"
        },
        "53": {
            "short": "Services by an immediate relative or a member of the same household are not covered",
            "full": "Services by an immediate relative or a member of the same household are not covered."
        },
        "54": {
            "short": "Multiple physicians/assistants are not covered in this case",
            "full": "Multiple physicians/assistants are not covered in this case. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "55": {
            "short": "Procedure/treatment/drug is deemed experimental/investigational by the payer",
            "full": "Procedure/treatment/drug is deemed experimental/investigational by the payer. Usage: Refer to the 835 Healthcare"
        },
        "56": {
            "short": "Procedure/treatment has not been deemed 'proven to be effective' by the payer",
            "full": "Procedure/treatment has not been deemed 'proven to be effective' by the payer. Usage: Refer to the 835 Healthcare"
        },
        "58": {
            "short": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service",
            "full": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service. Usage: Refer"
        },
        "59": {
            "short": "Processed based on multiple or concurrent procedure rules",
            "full": "Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.) Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment"
        },
        "60": {
            "short": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient",
            "full": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient"
        },
        "61": {
            "short": "Adjusted for failure to obtain second surgical opinion",
            "full": "Adjusted for failure to obtain second surgical opinion"
        },
        "66": {
            "short": "Blood Deductible",
            "full": "Blood Deductible."
        },
        "69": {
            "short": "Day outlier amount",
            "full": "Day outlier amount."
        },
        "70": {
            "short": "Cost outlier - Adjustment to compensate for additional costs",
            "full": "Cost outlier - Adjustment to compensate for additional costs."
        },
        "74": {
            "short": "Indirect Medical Education Adjustment",
            "full": "Indirect Medical Education Adjustment."
        },
        "75": {
            "short": "Direct Medical Education Adjustment",
            "full": "Direct Medical Education Adjustment."
        },
        "76": {
            "short": "Disproportionate Share Adjustment",
            "full": "Disproportionate Share Adjustment."
        },
        "78": {
            "short": "Non-Covered days/Room charge adjustment",
            "full": "Non-Covered days/Room charge adjustment."
        },
        "85": {
            "short": "Patient Interest Adjustment (Use Only Group code PR)",
            "full": "Patient Interest Adjustment (Use Only Group code PR)"
        },
        "89": {
            "short": "Professional fees removed from charges",
            "full": "Professional fees removed from charges."
        },
        "90": {
            "short": "Ingredient cost adjustment",
            "full": "Ingredient cost adjustment. Usage: To be used for pharmaceuticals only."
        },
        "91": {
            "short": "Dispensing fee adjustment",
            "full": "Dispensing fee adjustment."
        },
        "94": {
            "short": "Processed in Excess of charges",
            "full": "Processed in Excess of charges."
        },
        "95": {
            "short": "Plan procedures not followed",
            "full": "Plan procedures not followed."
        },
        "96": {
            "short": "Non-covered charge(s)",
            "full": "Non-covered charge(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Refer to the 835 Healthcare Policy"
        },
        "97": {
            "short": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been",
            "full": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been"
        },
        "100": {
            "short": "Payment made to patient/insured/responsible party",
            "full": "Payment made to patient/insured/responsible party."
        },
        "101": {
            "short": "Predetermination: anticipated payment upon completion of services or claim adjudication",
            "full": "Predetermination: anticipated payment upon completion of services or claim adjudication."
        },
        "102": {
            "short": "Major Medical Adjustment",
            "full": "Major Medical Adjustment."
        },
        "103": {
            "short": "Provider promotional discount (e",
            "full": "Provider promotional discount (e.g., Senior citizen discount)."
        },
        "104": {
            "short": "Managed care withholding",
            "full": "Managed care withholding."
        },
        "105": {
            "short": "Tax withholding",
            "full": "Tax withholding."
        },
        "106": {
            "short": "Patient payment option/election not in effect",
            "full": "Patient payment option/election not in effect."
        },
        "107": {
            "short": "The related or qualifying claim/service was not identified on this claim",
            "full": "The related or qualifying claim/service was not identified on this claim. Usage: Refer to the 835 Healthcare Policy"
        },
        "108": {
            "short": "Rent/purchase guidelines were not met",
            "full": "Rent/purchase guidelines were not met. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110"
        },
        "109": {
            "short": "Claim/service not covered by this payer/contractor",
            "full": "Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."
        },
        "110": {
            "short": "Billing date predates service date",
            "full": "Billing date predates service date."
        },
        "111": {
            "short": "Not covered unless the provider accepts assignment",
            "full": "Not covered unless the provider accepts assignment."
        },
        "112": {
            "short": "Service not furnished directly to the patient and/or not documented",
            "full": "Service not furnished directly to the patient and/or not documented."
        },
        "114": {
            "short": "Procedure/product not approved by the Food and Drug Administration",
            "full": "Procedure/product not approved by the Food and Drug Administration."
        },
        "115": {
            "short": "Procedure postponed, canceled, or delayed",
            "full": "Procedure postponed, canceled, or delayed."
        },
        "116": {
            "short": "The advance indemnification notice signed by the patient did not comply with requirements",
            "full": "The advance indemnification notice signed by the patient did not comply with requirements."
        },
        "117": {
            "short": "Transportation is only covered to the closest facility that can provide the necessary care",
            "full": "Transportation is only covered to the closest facility that can provide the necessary care."
        },
        "118": {
            "short": "ESRD network support adjustment",
            "full": "ESRD network support adjustment."
        },
        "119": {
            "short": "Benefit maximum for this time period or occurrence has been reached",
            "full": "Benefit maximum for this time period or occurrence has been reached."
        },
        "121": {
            "short": "Indemnification adjustment - compensation for outstanding member responsibility",
            "full": "Indemnification adjustment - compensation for outstanding member responsibility."
        },
        "122": {
            "short": "Psychiatric reduction",
            "full": "Psychiatric reduction."
        },
        "128": {
            "short": "Newborn's services are covered in the mother's Allowance",
            "full": "Newborn's services are covered in the mother's Allowance."
        },
        "129": {
            "short": "Prior processing information appears incorrect",
            "full": "Prior processing information appears incorrect. At least one Remark Code must be provided (may be comprised of"
        },
        "130": {
            "short": "Claim submission fee",
            "full": "Claim submission fee."
        },
        "131": {
            "short": "Claim specific negotiated discount",
            "full": "Claim specific negotiated discount."
        },
        "132": {
            "short": "Prearranged demonstration project adjustment",
            "full": "Prearranged demonstration project adjustment."
        },
        "133": {
            "short": "The disposition of this service line is pending further review",
            "full": "The disposition of this service line is pending further review. (Use only with Group Code OA). Usage: Use of this code"
        },
        "134": {
            "short": "Technical fees removed from charges",
            "full": "Technical fees removed from charges."
        },
        "135": {
            "short": "Interim bills cannot be processed",
            "full": "Interim bills cannot be processed."
        },
        "136": {
            "short": "Failure to follow prior payer's coverage rules",
            "full": "Failure to follow prior payer's coverage rules. (Use only with Group Code OA)"
        },
        "137": {
            "short": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes",
            "full": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes."
        },
        "139": {
            "short": "Contracted funding agreement - Subscriber is employed by the provider of services",
            "full": "Contracted funding agreement - Subscriber is employed by the provider of services. Use only with Group Code CO."
        },
        "140": {
            "short": "Patient/Insured health identification number and name do not match",
            "full": "Patient/Insured health identification number and name do not match."
        },
        "142": {
            "short": "Monthly Medicaid patient liability amount",
            "full": "Monthly Medicaid patient liability amount."
        },
        "143": {
            "short": "Portion of payment deferred",
            "full": "Portion of payment deferred."
        },
        "144": {
            "short": "Incentive adjustment, e",
            "full": "Incentive adjustment, e.g. preferred product/service."
        },
        "146": {
            "short": "Diagnosis was invalid for the date(s) of service reported",
            "full": "Diagnosis was invalid for the date(s) of service reported."
        },
        "147": {
            "short": "Provider contracted/negotiated rate expired or not on file",
            "full": "Provider contracted/negotiated rate expired or not on file."
        },
        "148": {
            "short": "Information from another provider was not provided or was insufficient/incomplete",
            "full": "Information from another provider was not provided or was insufficient/incomplete. At least one Remark Code must be"
        },
        "149": {
            "short": "Lifetime benefit maximum has been reached for this service/benefit category",
            "full": "Lifetime benefit maximum has been reached for this service/benefit category."
        },
        "150": {
            "short": "Payer deems the information submitted does not support this level of service",
            "full": "Payer deems the information submitted does not support this level of service."
        },
        "151": {
            "short": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of",
            "full": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of"
        },
        "152": {
            "short": "Payer deems the information submitted does not support this length of service",
            "full": "Payer deems the information submitted does not support this length of service. Usage: Refer to the 835 Healthcare"
        },
        "153": {
            "short": "Payer deems the information submitted does not support this dosage",
            "full": "Payer deems the information submitted does not support this dosage."
        },
        "154": {
            "short": "Payer deems the information submitted does not support this day's supply",
            "full": "Payer deems the information submitted does not support this day's supply."
        },
        "155": {
            "short": "Patient refused the service/procedure",
            "full": "Patient refused the service/procedure."
        },
        "157": {
            "short": "Service/procedure was provided as a result of an act of war",
            "full": "Service/procedure was provided as a result of an act of war."
        },
        "158": {
            "short": "Service/procedure was provided outside of the United States",
            "full": "Service/procedure was provided outside of the United States."
        },
        "159": {
            "short": "Service/procedure was provided as a result of terrorism",
            "full": "Service/procedure was provided as a result of terrorism."
        },
        "160": {
            "short": "Injury/illness was the result of an activity that is a benefit exclusion",
            "full": "Injury/illness was the result of an activity that is a benefit exclusion."
        },
        "161": {
            "short": "Provider performance bonus",
            "full": "Provider performance bonus"
        },
        "163": {
            "short": "Attachment/other documentation referenced on the claim was not received",
            "full": "Attachment/other documentation referenced on the claim was not received."
        },
        "164": {
            "short": "Attachment/other documentation referenced on the claim was not received in a timely fashion",
            "full": "Attachment/other documentation referenced on the claim was not received in a timely fashion."
        },
        "166": {
            "short": "These services were submitted after this payers responsibility for processing claims under this plan ended",
            "full": "These services were submitted after this payers responsibility for processing claims under this plan ended."
        },
        "167": {
            "short": "This (these) diagnosis(es) is (are) not covered",
            "full": "This (these) diagnosis(es) is (are) not covered. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "169": {
            "short": "Alternate benefit has been provided",
            "full": "Alternate benefit has been provided."
        },
        "170": {
            "short": "Payment is denied when performed/billed by this type of provider",
            "full": "Payment is denied when performed/billed by this type of provider. Usage: Refer to the 835 Healthcare Policy"
        },
        "171": {
            "short": "Payment is denied when performed/billed by this type of provider in this type of facility",
            "full": "Payment is denied when performed/billed by this type of provider in this type of facility. Usage: Refer to the 835"
        },
        "172": {
            "short": "Payment is adjusted when performed/billed by a provider of this specialty",
            "full": "Payment is adjusted when performed/billed by a provider of this specialty. Usage: Refer to the 835 Healthcare Policy"
        },
        "173": {
            "short": "Service/equipment was not prescribed by a physician",
            "full": "Service/equipment was not prescribed by a physician."
        },
        "174": {
            "short": "Service was not prescribed prior to delivery",
            "full": "Service was not prescribed prior to delivery."
        },
        "175": {
            "short": "Prescription is incomplete",
            "full": "Prescription is incomplete."
        },
        "176": {
            "short": "Prescription is not current",
            "full": "Prescription is not current."
        },
        "177": {
            "short": "Patient has not met the required eligibility requirements",
            "full": "Patient has not met the required eligibility requirements."
        },
        "178": {
            "short": "Patient has not met the required spend down requirements",
            "full": "Patient has not met the required spend down requirements."
        },
        "179": {
            "short": "Patient has not met the required waiting requirements",
            "full": "Patient has not met the required waiting requirements. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "180": {
            "short": "Patient has not met the required residency requirements",
            "full": "Patient has not met the required residency requirements."
        },
        "181": {
            "short": "Procedure code was invalid on the date of service",
            "full": "Procedure code was invalid on the date of service."
        },
        "182": {
            "short": "Procedure modifier was invalid on the date of service",
            "full": "Procedure modifier was invalid on the date of service."
        },
        "183": {
            "short": "The referring provider is not eligible to refer the service billed",
            "full": "The referring provider is not eligible to refer the service billed. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "184": {
            "short": "The prescribing/ordering provider is not eligible to prescribe/order the service billed",
            "full": "The prescribing/ordering provider is not eligible to prescribe/order the service billed. Usage: Refer to the 835 Healthcare"
        },
        "185": {
            "short": "The rendering provider is not eligible to perform the service billed",
            "full": "The rendering provider is not eligible to perform the service billed. Usage: Refer to the 835 Healthcare Policy"
        },
        "186": {
            "short": "Level of care change adjustment",
            "full": "Level of care change adjustment."
        },
        "187": {
            "short": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings",
            "full": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings"
        },
        "188": {
            "short": "This product/procedure is only covered when used according to FDA recommendations",
            "full": "This product/procedure is only covered when used according to FDA recommendations."
        },
        "189": {
            "short": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code",
            "full": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code"
        },
        "190": {
            "short": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay",
            "full": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay."
        },
        "192": {
            "short": "Non standard adjustment code from paper remittance",
            "full": "Non standard adjustment code from paper remittance. Usage: This code is to be used by providers/payers providing Coordination of Benefits information to another payer in the 837 transaction only. This code is only used when the non- standard code cannot be reasonably mapped to an existing Claims Adjustment Reason Code, specifically Deductible,"
        },
        "193": {
            "short": "Original payment decision is being maintained",
            "full": "Original payment decision is being maintained. Upon review, it was determined that this claim was processed properly."
        },
        "194": {
            "short": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician",
            "full": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician."
        },
        "195": {
            "short": "Refund issued to an erroneous priority payer for this claim/service",
            "full": "Refund issued to an erroneous priority payer for this claim/service."
        },
        "197": {
            "short": "Precertification/authorization/notification/pre-treatment absent",
            "full": "Precertification/authorization/notification/pre-treatment absent."
        },
        "198": {
            "short": "Precertification/notification/authorization/pre-treatment exceeded",
            "full": "Precertification/notification/authorization/pre-treatment exceeded."
        },
        "199": {
            "short": "Revenue code and Procedure code do not match",
            "full": "Revenue code and Procedure code do not match."
        },
        "200": {
            "short": "Expenses incurred during lapse in coverage",
            "full": "Expenses incurred during lapse in coverage"
        },
        "201": {
            "short": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement",
            "full": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement. (Use only with Group Code PR) At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason"
        },
        "202": {
            "short": "Non-covered personal comfort or convenience services",
            "full": "Non-covered personal comfort or convenience services."
        },
        "203": {
            "short": "Discontinued or reduced service",
            "full": "Discontinued or reduced service."
        },
        "204": {
            "short": "This service/equipment/drug is not covered under the patient's current benefit plan",
            "full": "This service/equipment/drug is not covered under the patient's current benefit plan"
        },
        "205": {
            "short": "Pharmacy discount card processing fee",
            "full": "Pharmacy discount card processing fee"
        },
        "206": {
            "short": "National Provider Identifier - missing",
            "full": "National Provider Identifier - missing."
        },
        "207": {
            "short": "National Provider identifier - Invalid format",
            "full": "National Provider identifier - Invalid format"
        },
        "208": {
            "short": "National Provider Identifier - Not matched",
            "full": "National Provider Identifier - Not matched."
        },
        "209": {
            "short": "Per regulatory or other agreement",
            "full": "Per regulatory or other agreement. The provider cannot collect this amount from the patient. However, this amount"
        },
        "210": {
            "short": "Payment adjusted because pre-certification/authorization not received in a timely fashion",
            "full": "Payment adjusted because pre-certification/authorization not received in a timely fashion"
        },
        "211": {
            "short": "National Drug Codes (NDC) not eligible for rebate, are not covered",
            "full": "National Drug Codes (NDC) not eligible for rebate, are not covered."
        },
        "212": {
            "short": "Administrative surcharges are not covered",
            "full": "Administrative surcharges are not covered"
        },
        "213": {
            "short": "Non-compliance with the physician self referral prohibition legislation or payer policy",
            "full": "Non-compliance with the physician self referral prohibition legislation or payer policy."
        },
        "215": {
            "short": "Based on subrogation of a third party settlement",
            "full": "Based on subrogation of a third party settlement"
        },
        "216": {
            "short": "Based on the findings of a review organization",
            "full": "Based on the findings of a review organization"
        },
        "219": {
            "short": "Based on extent of injury",
            "full": "Based on extent of injury. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835"
        },
        "222": {
            "short": "Exceeds the contracted maximum number of hours/days/units by this provider for this period",
            "full": "Exceeds the contracted maximum number of hours/days/units by this provider for this period. This is not patient specific. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF),"
        },
        "223": {
            "short": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is",
            "full": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is"
        },
        "224": {
            "short": "Patient identification compromised by identity theft",
            "full": "Patient identification compromised by identity theft. Identity verification required for processing this and future claims."
        },
        "225": {
            "short": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)",
            "full": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)"
        },
        "226": {
            "short": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was",
            "full": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was"
        },
        "227": {
            "short": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete",
            "full": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance"
        },
        "228": {
            "short": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous",
            "full": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous"
        },
        "229": {
            "short": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X",
            "full": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X. Usage: This code can only be used in the 837 transaction to convey Coordination of Benefits information when the secondary payer's cost avoidance policy allows providers to bypass claim submission to a prior payer. (Use only with Group Code PR)"
        },
        "231": {
            "short": "Mutually exclusive procedures cannot be done in the same day/setting",
            "full": "Mutually exclusive procedures cannot be done in the same day/setting. Usage: Refer to the 835 Healthcare Policy"
        },
        "232": {
            "short": "Institutional Transfer Amount",
            "full": "Institutional Transfer Amount. Usage: Applies to institutional claims only and explains the DRG amount difference when"
        },
        "233": {
            "short": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error",
            "full": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error."
        },
        "234": {
            "short": "This procedure is not paid separately",
            "full": "This procedure is not paid separately. At least one Remark Code must be provided (may be comprised of either the"
        },
        "235": {
            "short": "Sales Tax",
            "full": "Sales Tax"
        },
        "236": {
            "short": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation",
            "full": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation"
        },
        "237": {
            "short": "Legislated/Regulatory Penalty",
            "full": "Legislated/Regulatory Penalty. At least one Remark Code must be provided (may be comprised of either the NCPDP"
        },
        "238": {
            "short": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period",
            "full": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period. (Use only with"
        },
        "239": {
            "short": "Claim spans eligible and ineligible periods of coverage",
            "full": "Claim spans eligible and ineligible periods of coverage. Rebill separate claims."
        },
        "240": {
            "short": "The diagnosis is inconsistent with the patient's birth weight",
            "full": "The diagnosis is inconsistent with the patient's birth weight. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "241": {
            "short": "Low Income Subsidy (LIS) Co-payment Amount",
            "full": "Low Income Subsidy (LIS) Co-payment Amount"
        },
        "242": {
            "short": "Services not provided by network/primary care providers",
            "full": "Services not provided by network/primary care providers."
        },
        "243": {
            "short": "Services not authorized by network/primary care providers",
            "full": "Services not authorized by network/primary care providers."
        },
        "245": {
            "short": "Provider performance program withhold",
            "full": "Provider performance program withhold."
        },
        "246": {
            "short": "This non-payable code is for required reporting only",
            "full": "This non-payable code is for required reporting only."
        },
        "247": {
            "short": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "248": {
            "short": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "249": {
            "short": "This claim has been identified as a readmission",
            "full": "This claim has been identified as a readmission. (Use only with Group Code CO)"
        },
        "250": {
            "short": "The attachment/other documentation that was received was the incorrect attachment/document",
            "full": "The attachment/other documentation that was received was the incorrect attachment/document. The expected attachment/document is still missing. At least one Remark Code must be provided (may be comprised of either the"
        },
        "251": {
            "short": "The attachment/other documentation that was received was incomplete or deficient",
            "full": "The attachment/other documentation that was received was incomplete or deficient. The necessary information is still needed to process the claim. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "252": {
            "short": "An attachment/other documentation is required to adjudicate this claim/service",
            "full": "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an"
        },
        "253": {
            "short": "Sequestration - reduction in federal payment",
            "full": "Sequestration - reduction in federal payment"
        },
        "254": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "256": {
            "short": "Service not payable per managed care contract",
            "full": "Service not payable per managed care contract."
        },
        "257": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium"
        },
        "258": {
            "short": "Claim/service not covered when patient is in custody/incarcerated",
            "full": "Claim/service not covered when patient is in custody/incarcerated. Applicable federal, state or local authority may cover"
        },
        "259": {
            "short": "Additional payment for Dental/Vision service utilization",
            "full": "Additional payment for Dental/Vision service utilization."
        },
        "260": {
            "short": "Processed under Medicaid ACA Enhanced Fee Schedule",
            "full": "Processed under Medicaid ACA Enhanced Fee Schedule"
        },
        "261": {
            "short": "The procedure or service is inconsistent with the patient's history",
            "full": "The procedure or service is inconsistent with the patient's history."
        },
        "262": {
            "short": "Adjustment for delivery cost",
            "full": "Adjustment for delivery cost. Usage: To be used for pharmaceuticals only."
        },
        "263": {
            "short": "Adjustment for shipping cost",
            "full": "Adjustment for shipping cost. Usage: To be used for pharmaceuticals only."
        },
        "264": {
            "short": "Adjustment for postage cost",
            "full": "Adjustment for postage cost. Usage: To be used for pharmaceuticals only."
        },
        "265": {
            "short": "Adjustment for administrative cost",
            "full": "Adjustment for administrative cost. Usage: To be used for pharmaceuticals only."
        },
        "266": {
            "short": "Adjustment for compound preparation cost",
            "full": "Adjustment for compound preparation cost. Usage: To be used for pharmaceuticals only."
        },
        "267": {
            "short": "Claim/service spans multiple months",
            "full": "Claim/service spans multiple months. At least one Remark Code must be provided (may be comprised of either the"
        },
        "268": {
            "short": "The Claim spans two calendar years",
            "full": "The Claim spans two calendar years. Please resubmit one claim per calendar year."
        },
        "269": {
            "short": "Anesthesia not covered for this service/procedure",
            "full": "Anesthesia not covered for this service/procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "270": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "271": {
            "short": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when",
            "full": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when"
        },
        "272": {
            "short": "Coverage/program guidelines were not met",
            "full": "Coverage/program guidelines were not met."
        },
        "273": {
            "short": "Coverage/program guidelines were exceeded",
            "full": "Coverage/program guidelines were exceeded."
        },
        "274": {
            "short": "Fee/Service not payable per patient Care Coordination arrangement",
            "full": "Fee/Service not payable per patient Care Coordination arrangement."
        },
        "275": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered. (Use only with Group"
        },
        "276": {
            "short": "Services denied by the prior payer(s) are not covered by this payer",
            "full": "Services denied by the prior payer(s) are not covered by this payer."
        },
        "277": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance"
        },
        "278": {
            "short": "Performance program proficiency requirements not met",
            "full": "Performance program proficiency requirements not met. (Use only with Group Codes CO or PI) Usage: Refer to the 835"
        },
        "279": {
            "short": "Services not provided by Preferred network providers",
            "full": "Services not provided by Preferred network providers. Usage: Use this code when there are member network"
        },
        "280": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "281": {
            "short": "Deductible waived per contractual agreement",
            "full": "Deductible waived per contractual agreement. Use only with Group Code CO."
        },
        "282": {
            "short": "The procedure/revenue code is inconsistent with the type of bill",
            "full": "The procedure/revenue code is inconsistent with the type of bill. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "283": {
            "short": "Attending provider is not eligible to provide direction of care",
            "full": "Attending provider is not eligible to provide direction of care."
        },
        "284": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services."
        },
        "285": {
            "short": "Appeal procedures not followed",
            "full": "Appeal procedures not followed"
        },
        "286": {
            "short": "Appeal time limits not met",
            "full": "Appeal time limits not met"
        },
        "287": {
            "short": "Referral exceeded",
            "full": "Referral exceeded"
        },
        "288": {
            "short": "Referral absent",
            "full": "Referral absent"
        },
        "289": {
            "short": "Services considered under the dental and medical plans, benefits not available",
            "full": "Services considered under the dental and medical plans, benefits not available."
        },
        "290": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "291": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "292": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "293": {
            "short": "Payment made to employer",
            "full": "Payment made to employer."
        },
        "294": {
            "short": "Payment made to attorney",
            "full": "Payment made to attorney."
        },
        "295": {
            "short": "Pharmacy Direct/Indirect Remuneration (DIR)",
            "full": "Pharmacy Direct/Indirect Remuneration (DIR)"
        },
        "296": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider."
        },
        "297": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "298": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "299": {
            "short": "The billing provider is not eligible to receive payment for the service billed",
            "full": "The billing provider is not eligible to receive payment for the service billed."
        },
        "300": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "301": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "302": {
            "short": "Precertification/notification/authorization/pre-treatment time limit has expired",
            "full": "Precertification/notification/authorization/pre-treatment time limit has expired."
        },
        "303": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified"
        },
        "304": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "305": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "835": {
            "short": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "2110": {
            "short": "Service Payment information REF)",
            "full": "Service Payment information REF). To be used for Workers' Compensation only."
        },
        "Segment": {
            "short": "(loop 2110 Service Payment Information REF), if present",
            "full": "(loop 2110 Service Payment Information REF), if present."
        },
        "Identification": {
            "short": "Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Policy": {
            "short": "Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "(loop": {
            "short": "2110 Service Payment Information REF), if present",
            "full": "2110 Service Payment Information REF), if present."
        },
        "(may": {
            "short": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code",
            "full": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code.)"
        },
        "requires": {
            "short": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)",
            "full": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)."
        },
        "PR": {
            "short": "or CO depending upon liability)",
            "full": "or CO depending upon liability)"
        },
        "Healthcare": {
            "short": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "to": {
            "short": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Information": {
            "short": "REF), if present",
            "full": "REF), if present."
        },
        "services.": {
            "short": "",
            "full": ""
        },
        "adjudicated.": {
            "short": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Service": {
            "short": "Payment Information REF), if present",
            "full": "Payment Information REF), if present."
        },
        "either": {
            "short": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "provided": {
            "short": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Account,": {
            "short": "Health Reimbursement Account, etc",
            "full": "Health Reimbursement Account, etc.)"
        },
        "for": {
            "short": "this procedure/service",
            "full": "this procedure/service"
        },
        "Coinsurance": {
            "short": "and Co-payment",
            "full": "and Co-payment."
        },
        "Code,": {
            "short": "or Remittance Advice Remark Code that is not an ALERT",
            "full": "or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "may": {
            "short": "be billed to subsequent payer",
            "full": "be billed to subsequent payer. Refund to patient if collected. (Use only with Group code OA)"
        },
        "if": {
            "short": "the regulations apply",
            "full": "the regulations apply. To be used for Property and Casualty Auto only."
        },
        "mandated": {
            "short": "before a new code can be created",
            "full": "before a new code can be created."
        },
        "insufficient/incomplete.": {
            "short": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Advice": {
            "short": "Remark Code that is not an ALERT",
            "full": "Remark Code that is not an ALERT.)"
        },
        "payer": {
            "short": "for their adjudication",
            "full": "for their adjudication"
        },
        "the": {
            "short": "claim/service",
            "full": "claim/service."
        },
        "NCPDP": {
            "short": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "state": {
            "short": "regulations/ fee schedule requirements",
            "full": "regulations/ fee schedule requirements."
        },
        "Reject": {
            "short": "Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Group": {
            "short": "Code PR)",
            "full": "Code PR)"
        },
        "Reason": {
            "short": "Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "ALERT).": {
            "short": "",
            "full": ""
        },
        "medical": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "payment": {
            "short": "or lack of premium payment)",
            "full": "or lack of premium payment). (Use only with Group Code OA)"
        },
        "dental": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "deferred": {
            "short": "amounts have been previously reported",
            "full": "amounts have been previously reported. (Use only with Group Code OA)"
        },
        "Code": {
            "short": "PR)",
            "full": "PR)"
        },
        "SHOP": {
            "short": "Exchange requirements",
            "full": "Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium payment or lack of premium payment). (Use only with Group Code OA)"
        },
        "limitations.": {
            "short": "For example, using contracted providers not in the member's 'narrow' network",
            "full": "For example, using contracted providers not in the member's 'narrow' network."
        },
        "Pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "vision": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "Behavioral": {
            "short": "Health Plan for further consideration",
            "full": "Health Plan for further consideration."
        },
        "Medicare": {
            "short": "and Medicaid Beneficiaries",
            "full": "and Medicaid Beneficiaries. (Use only with Group Code CO)"
        },
        "hearing": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "A0": {
            "short": "Patient refund amount",
            "full": "Patient refund amount."
        },
        "A1": {
            "short": "Claim/Service denied",
            "full": "Claim/Service denied. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "A5": {
            "short": "Medicare Claim PPS Capital Cost Outlier Amount",
            "full": "Medicare Claim PPS Capital Cost Outlier Amount."
        },
        "A6": {
            "short": "Prior hospitalization or 30 day transfer requirement not met",
            "full": "Prior hospitalization or 30 day transfer requirement not met."
        },
        "A8": {
            "short": "Ungroupable DRG",
            "full": "Ungroupable DRG."
        },
        "B1": {
            "short": "Non-covered visits",
            "full": "Non-covered visits."
        },
        "B10": {
            "short": "Allowed amount has been reduced because a component of the basic procedure/test was paid",
            "full": "Allowed amount has been reduced because a component of the basic procedure/test was paid. The beneficiary is not"
        },
        "liable": {
            "short": "for more than the charge limit for the basic procedure/test",
            "full": "for more than the charge limit for the basic procedure/test."
        },
        "B11": {
            "short": "The claim/service has been transferred to the proper payer/processor for processing",
            "full": "The claim/service has been transferred to the proper payer/processor for processing. Claim/service not covered by this"
        },
        "payer/processor.": {
            "short": "",
            "full": ""
        },
        "B12": {
            "short": "Services not documented in patient's medical records",
            "full": "Services not documented in patient's medical records."
        },
        "B13": {
            "short": "Previously paid",
            "full": "Previously paid. Payment for this claim/service may have been provided in a previous payment."
        },
        "B14": {
            "short": "Only one visit or consultation per physician per day is covered",
            "full": "Only one visit or consultation per physician per day is covered."
        },
        "B15": {
            "short": "This service/procedure requires that a qualifying service/procedure be received and covered",
            "full": "This service/procedure requires that a qualifying service/procedure be received and covered. The qualifying other"
        },
        "service/procedure": {
            "short": "has not been received/adjudicated",
            "full": "has not been received/adjudicated. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "B16": {
            "short": "'New Patient' qualifications were not met",
            "full": "'New Patient' qualifications were not met."
        },
        "B20": {
            "short": "Procedure/service was partially or fully furnished by another provider",
            "full": "Procedure/service was partially or fully furnished by another provider."
        },
        "B22": {
            "short": "This payment is adjusted based on the diagnosis",
            "full": "This payment is adjusted based on the diagnosis."
        },
        "B23": {
            "short": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test",
            "full": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test."
        },
        "B4": {
            "short": "Late filing penalty",
            "full": "Late filing penalty."
        },
        "B5": {
            "short": "Coverage/program guidelines were not met or were exceeded",
            "full": "Coverage/program guidelines were not met or were exceeded."
        },
        "B7": {
            "short": "This provider was not certified/eligible to be paid for this procedure/service on this date of service",
            "full": "This provider was not certified/eligible to be paid for this procedure/service on this date of service. Usage: Refer to the"
        },
        "B8": {
            "short": "Alternative services were available, and should have been utilized",
            "full": "Alternative services were available, and should have been utilized. Usage: Refer to the 835 Healthcare Policy"
        },
        "B9": {
            "short": "Patient is enrolled in a Hospice",
            "full": "Patient is enrolled in a Hospice."
        },
        "P1": {
            "short": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation",
            "full": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation. To"
        },
        "be": {
            "short": "used for Property and Casualty only",
            "full": "used for Property and Casualty only. (Use only with Group Code CO)."
        },
        "P10": {
            "short": "Payment reduced to zero due to litigation",
            "full": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To"
        },
        "P11": {
            "short": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation",
            "full": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. To be used for"
        },
        "Property": {
            "short": "and Casualty only",
            "full": "and Casualty only."
        },
        "P12": {
            "short": "Workers' compensation jurisdictional fee schedule adjustment",
            "full": "Workers' compensation jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "To": {
            "short": "be used for Property and Casualty only",
            "full": "be used for Property and Casualty only."
        },
        "P13": {
            "short": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable",
            "full": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P14": {
            "short": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day",
            "full": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service"
        },
        "Payment": {
            "short": "Information REF), if present",
            "full": "Information REF), if present. To be used for Property and Casualty only."
        },
        "P15": {
            "short": "Workers' Compensation Medical Treatment Guideline Adjustment",
            "full": "Workers' Compensation Medical Treatment Guideline Adjustment. To be used for Workers' Compensation only."
        },
        "P16": {
            "short": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction",
            "full": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. To be used for"
        },
        "Workers'": {
            "short": "Compensation only",
            "full": "Compensation only. (Use with Group Code CO or OA)"
        },
        "P17": {
            "short": "Referral not authorized by attending physician per regulatory requirement",
            "full": "Referral not authorized by attending physician per regulatory requirement. To be used for Property and Casualty only."
        },
        "P18": {
            "short": "Procedure is not listed in the jurisdiction fee schedule",
            "full": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service. To be"
        },
        "used": {
            "short": "for Property and Casualty only",
            "full": "for Property and Casualty only."
        },
        "P19": {
            "short": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due",
            "full": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due. To be used for"
        },
        "P2": {
            "short": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation",
            "full": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "P20": {
            "short": "Service not paid under jurisdiction allowed outpatient facility fee schedule",
            "full": "Service not paid under jurisdiction allowed outpatient facility fee schedule. To be used for Property and Casualty only."
        },
        "P21": {
            "short": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P22": {
            "short": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P23": {
            "short": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment",
            "full": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property and Casualty Auto only."
        },
        "P24": {
            "short": "Payment adjusted based on Preferred Provider Organization (PPO)",
            "full": "Payment adjusted based on Preferred Provider Organization (PPO). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P25": {
            "short": "Payment adjusted based on Medical Provider Network (MPN)",
            "full": "Payment adjusted based on Medical Provider Network (MPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To"
        },
        "P26": {
            "short": "Payment adjusted based on Voluntary Provider network (VPN)",
            "full": "Payment adjusted based on Voluntary Provider network (VPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P27": {
            "short": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "and": {
            "short": "Casualty only",
            "full": "Casualty only."
        },
        "P28": {
            "short": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "P29": {
            "short": "Liability Benefits jurisdictional fee schedule adjustment",
            "full": "Liability Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be"
        },
        "P3": {
            "short": "Workers' Compensation case settled",
            "full": "Workers' Compensation case settled. Patient is responsible for amount of this claim/service through WC 'Medicare set aside arrangement' or other agreement. To be used for Workers' Compensation only. (Use only with Group Code PR)"
        },
        "P30": {
            "short": "Payment denied for exacerbation when supporting documentation was not complete",
            "full": "Payment denied for exacerbation when supporting documentation was not complete. To be used for Property and"
        },
        "Casualty": {
            "short": "only",
            "full": "only."
        },
        "P31": {
            "short": "Payment denied for exacerbation when treatment exceeds time allowed",
            "full": "Payment denied for exacerbation when treatment exceeds time allowed. To be used for Property and Casualty only."
        },
        "P4": {
            "short": "Workers' Compensation claim adjudicated as non-compensable",
            "full": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Workers' Compensation only"
        },
        "P5": {
            "short": "Based on payer reasonable and customary fees",
            "full": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. To be"
        },
        "P6": {
            "short": "Based on entitlement to benefits",
            "full": "Based on entitlement to benefits. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property"
        },
        "P7": {
            "short": "The applicable fee schedule/fee database does not contain the billed code",
            "full": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided and supporting documentation if required."
        },
        "P8": {
            "short": "Claim is under investigation",
            "full": "Claim is under investigation. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property and"
        },
        "P9": {
            "short": "No available or correlating CPT/HCPCS code to describe this service",
            "full": "No available or correlating CPT/HCPCS code to describe this service. To be used for Property and Casualty only."
        }
    },
    "OA": {
        "1": {
            "short": "Deductible Amount",
            "full": "Deductible Amount"
        },
        "2": {
            "short": "Coinsurance Amount",
            "full": "Coinsurance Amount"
        },
        "3": {
            "short": "Co-payment Amount",
            "full": "Co-payment Amount"
        },
        "4": {
            "short": "The procedure code is inconsistent with the modifier used",
            "full": "The procedure code is inconsistent with the modifier used. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "5": {
            "short": "The procedure code/type of bill is inconsistent with the place of service",
            "full": "The procedure code/type of bill is inconsistent with the place of service. Usage: Refer to the 835 Healthcare Policy"
        },
        "6": {
            "short": "The procedure/revenue code is inconsistent with the patient's age",
            "full": "The procedure/revenue code is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy"
        },
        "7": {
            "short": "The procedure/revenue code is inconsistent with the patient's gender",
            "full": "The procedure/revenue code is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy"
        },
        "8": {
            "short": "The procedure code is inconsistent with the provider type/specialty (taxonomy)",
            "full": "The procedure code is inconsistent with the provider type/specialty (taxonomy). Usage: Refer to the 835 Healthcare"
        },
        "9": {
            "short": "The diagnosis is inconsistent with the patient's age",
            "full": "The diagnosis is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "10": {
            "short": "The diagnosis is inconsistent with the patient's gender",
            "full": "The diagnosis is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "11": {
            "short": "The diagnosis is inconsistent with the procedure",
            "full": "The diagnosis is inconsistent with the procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "12": {
            "short": "The diagnosis is inconsistent with the provider type",
            "full": "The diagnosis is inconsistent with the provider type. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "13": {
            "short": "The date of death precedes the date of service",
            "full": "The date of death precedes the date of service."
        },
        "14": {
            "short": "The date of birth follows the date of service",
            "full": "The date of birth follows the date of service."
        },
        "15": {
            "short": "The authorization number is missing, invalid, or does not apply to the billed services or provider",
            "full": "The authorization number is missing, invalid, or does not apply to the billed services or provider."
        },
        "16": {
            "short": "Claim/service lacks information or has submission/billing error(s)",
            "full": "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the 835 Healthcare Policy"
        },
        "17": {
            "short": "Requested information was not provided or was insufficient/incomplete",
            "full": "Requested information was not provided or was insufficient/incomplete. At least one Remark Code must be provided"
        },
        "18": {
            "short": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations",
            "full": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations"
        },
        "19": {
            "short": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier",
            "full": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier."
        },
        "20": {
            "short": "This injury/illness is covered by the liability carrier",
            "full": "This injury/illness is covered by the liability carrier."
        },
        "21": {
            "short": "This injury/illness is the liability of the no-fault carrier",
            "full": "This injury/illness is the liability of the no-fault carrier."
        },
        "22": {
            "short": "This care may be covered by another payer per coordination of benefits",
            "full": "This care may be covered by another payer per coordination of benefits."
        },
        "23": {
            "short": "The impact of prior payer(s) adjudication including payments and/or adjustments",
            "full": "The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)"
        },
        "24": {
            "short": "Charges are covered under a capitation agreement/managed care plan",
            "full": "Charges are covered under a capitation agreement/managed care plan."
        },
        "26": {
            "short": "Expenses incurred prior to coverage",
            "full": "Expenses incurred prior to coverage."
        },
        "27": {
            "short": "Expenses incurred after coverage terminated",
            "full": "Expenses incurred after coverage terminated."
        },
        "29": {
            "short": "The time limit for filing has expired",
            "full": "The time limit for filing has expired."
        },
        "31": {
            "short": "Patient cannot be identified as our insured",
            "full": "Patient cannot be identified as our insured."
        },
        "32": {
            "short": "Our records indicate the patient is not an eligible dependent",
            "full": "Our records indicate the patient is not an eligible dependent."
        },
        "33": {
            "short": "Insured has no dependent coverage",
            "full": "Insured has no dependent coverage."
        },
        "34": {
            "short": "Insured has no coverage for newborns",
            "full": "Insured has no coverage for newborns."
        },
        "35": {
            "short": "Lifetime benefit maximum has been reached",
            "full": "Lifetime benefit maximum has been reached."
        },
        "39": {
            "short": "Services denied at the time authorization/pre-certification was requested",
            "full": "Services denied at the time authorization/pre-certification was requested."
        },
        "40": {
            "short": "Charges do not meet qualifications for emergent/urgent care",
            "full": "Charges do not meet qualifications for emergent/urgent care. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "44": {
            "short": "Prompt-pay discount",
            "full": "Prompt-pay discount."
        },
        "45": {
            "short": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement",
            "full": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. (Use only with Group Codes"
        },
        "49": {
            "short": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam",
            "full": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "50": {
            "short": "These are non-covered services because this is not deemed a 'medical necessity' by the payer",
            "full": "These are non-covered services because this is not deemed a 'medical necessity' by the payer. Usage: Refer to the 835"
        },
        "51": {
            "short": "These are non-covered services because this is a pre-existing condition",
            "full": "These are non-covered services because this is a pre-existing condition. Usage: Refer to the 835 Healthcare Policy"
        },
        "53": {
            "short": "Services by an immediate relative or a member of the same household are not covered",
            "full": "Services by an immediate relative or a member of the same household are not covered."
        },
        "54": {
            "short": "Multiple physicians/assistants are not covered in this case",
            "full": "Multiple physicians/assistants are not covered in this case. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "55": {
            "short": "Procedure/treatment/drug is deemed experimental/investigational by the payer",
            "full": "Procedure/treatment/drug is deemed experimental/investigational by the payer. Usage: Refer to the 835 Healthcare"
        },
        "56": {
            "short": "Procedure/treatment has not been deemed 'proven to be effective' by the payer",
            "full": "Procedure/treatment has not been deemed 'proven to be effective' by the payer. Usage: Refer to the 835 Healthcare"
        },
        "58": {
            "short": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service",
            "full": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service. Usage: Refer"
        },
        "59": {
            "short": "Processed based on multiple or concurrent procedure rules",
            "full": "Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.) Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment"
        },
        "60": {
            "short": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient",
            "full": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient"
        },
        "61": {
            "short": "Adjusted for failure to obtain second surgical opinion",
            "full": "Adjusted for failure to obtain second surgical opinion"
        },
        "66": {
            "short": "Blood Deductible",
            "full": "Blood Deductible."
        },
        "69": {
            "short": "Day outlier amount",
            "full": "Day outlier amount."
        },
        "70": {
            "short": "Cost outlier - Adjustment to compensate for additional costs",
            "full": "Cost outlier - Adjustment to compensate for additional costs."
        },
        "74": {
            "short": "Indirect Medical Education Adjustment",
            "full": "Indirect Medical Education Adjustment."
        },
        "75": {
            "short": "Direct Medical Education Adjustment",
            "full": "Direct Medical Education Adjustment."
        },
        "76": {
            "short": "Disproportionate Share Adjustment",
            "full": "Disproportionate Share Adjustment."
        },
        "78": {
            "short": "Non-Covered days/Room charge adjustment",
            "full": "Non-Covered days/Room charge adjustment."
        },
        "85": {
            "short": "Patient Interest Adjustment (Use Only Group code PR)",
            "full": "Patient Interest Adjustment (Use Only Group code PR)"
        },
        "89": {
            "short": "Professional fees removed from charges",
            "full": "Professional fees removed from charges."
        },
        "90": {
            "short": "Ingredient cost adjustment",
            "full": "Ingredient cost adjustment. Usage: To be used for pharmaceuticals only."
        },
        "91": {
            "short": "Dispensing fee adjustment",
            "full": "Dispensing fee adjustment."
        },
        "94": {
            "short": "Processed in Excess of charges",
            "full": "Processed in Excess of charges."
        },
        "95": {
            "short": "Plan procedures not followed",
            "full": "Plan procedures not followed."
        },
        "96": {
            "short": "Non-covered charge(s)",
            "full": "Non-covered charge(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Refer to the 835 Healthcare Policy"
        },
        "97": {
            "short": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been",
            "full": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been"
        },
        "100": {
            "short": "Payment made to patient/insured/responsible party",
            "full": "Payment made to patient/insured/responsible party."
        },
        "101": {
            "short": "Predetermination: anticipated payment upon completion of services or claim adjudication",
            "full": "Predetermination: anticipated payment upon completion of services or claim adjudication."
        },
        "102": {
            "short": "Major Medical Adjustment",
            "full": "Major Medical Adjustment."
        },
        "103": {
            "short": "Provider promotional discount (e",
            "full": "Provider promotional discount (e.g., Senior citizen discount)."
        },
        "104": {
            "short": "Managed care withholding",
            "full": "Managed care withholding."
        },
        "105": {
            "short": "Tax withholding",
            "full": "Tax withholding."
        },
        "106": {
            "short": "Patient payment option/election not in effect",
            "full": "Patient payment option/election not in effect."
        },
        "107": {
            "short": "The related or qualifying claim/service was not identified on this claim",
            "full": "The related or qualifying claim/service was not identified on this claim. Usage: Refer to the 835 Healthcare Policy"
        },
        "108": {
            "short": "Rent/purchase guidelines were not met",
            "full": "Rent/purchase guidelines were not met. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110"
        },
        "109": {
            "short": "Claim/service not covered by this payer/contractor",
            "full": "Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."
        },
        "110": {
            "short": "Billing date predates service date",
            "full": "Billing date predates service date."
        },
        "111": {
            "short": "Not covered unless the provider accepts assignment",
            "full": "Not covered unless the provider accepts assignment."
        },
        "112": {
            "short": "Service not furnished directly to the patient and/or not documented",
            "full": "Service not furnished directly to the patient and/or not documented."
        },
        "114": {
            "short": "Procedure/product not approved by the Food and Drug Administration",
            "full": "Procedure/product not approved by the Food and Drug Administration."
        },
        "115": {
            "short": "Procedure postponed, canceled, or delayed",
            "full": "Procedure postponed, canceled, or delayed."
        },
        "116": {
            "short": "The advance indemnification notice signed by the patient did not comply with requirements",
            "full": "The advance indemnification notice signed by the patient did not comply with requirements."
        },
        "117": {
            "short": "Transportation is only covered to the closest facility that can provide the necessary care",
            "full": "Transportation is only covered to the closest facility that can provide the necessary care."
        },
        "118": {
            "short": "ESRD network support adjustment",
            "full": "ESRD network support adjustment."
        },
        "119": {
            "short": "Benefit maximum for this time period or occurrence has been reached",
            "full": "Benefit maximum for this time period or occurrence has been reached."
        },
        "121": {
            "short": "Indemnification adjustment - compensation for outstanding member responsibility",
            "full": "Indemnification adjustment - compensation for outstanding member responsibility."
        },
        "122": {
            "short": "Psychiatric reduction",
            "full": "Psychiatric reduction."
        },
        "128": {
            "short": "Newborn's services are covered in the mother's Allowance",
            "full": "Newborn's services are covered in the mother's Allowance."
        },
        "129": {
            "short": "Prior processing information appears incorrect",
            "full": "Prior processing information appears incorrect. At least one Remark Code must be provided (may be comprised of"
        },
        "130": {
            "short": "Claim submission fee",
            "full": "Claim submission fee."
        },
        "131": {
            "short": "Claim specific negotiated discount",
            "full": "Claim specific negotiated discount."
        },
        "132": {
            "short": "Prearranged demonstration project adjustment",
            "full": "Prearranged demonstration project adjustment."
        },
        "133": {
            "short": "The disposition of this service line is pending further review",
            "full": "The disposition of this service line is pending further review. (Use only with Group Code OA). Usage: Use of this code"
        },
        "134": {
            "short": "Technical fees removed from charges",
            "full": "Technical fees removed from charges."
        },
        "135": {
            "short": "Interim bills cannot be processed",
            "full": "Interim bills cannot be processed."
        },
        "136": {
            "short": "Failure to follow prior payer's coverage rules",
            "full": "Failure to follow prior payer's coverage rules. (Use only with Group Code OA)"
        },
        "137": {
            "short": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes",
            "full": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes."
        },
        "139": {
            "short": "Contracted funding agreement - Subscriber is employed by the provider of services",
            "full": "Contracted funding agreement - Subscriber is employed by the provider of services. Use only with Group Code CO."
        },
        "140": {
            "short": "Patient/Insured health identification number and name do not match",
            "full": "Patient/Insured health identification number and name do not match."
        },
        "142": {
            "short": "Monthly Medicaid patient liability amount",
            "full": "Monthly Medicaid patient liability amount."
        },
        "143": {
            "short": "Portion of payment deferred",
            "full": "Portion of payment deferred."
        },
        "144": {
            "short": "Incentive adjustment, e",
            "full": "Incentive adjustment, e.g. preferred product/service."
        },
        "146": {
            "short": "Diagnosis was invalid for the date(s) of service reported",
            "full": "Diagnosis was invalid for the date(s) of service reported."
        },
        "147": {
            "short": "Provider contracted/negotiated rate expired or not on file",
            "full": "Provider contracted/negotiated rate expired or not on file."
        },
        "148": {
            "short": "Information from another provider was not provided or was insufficient/incomplete",
            "full": "Information from another provider was not provided or was insufficient/incomplete. At least one Remark Code must be"
        },
        "149": {
            "short": "Lifetime benefit maximum has been reached for this service/benefit category",
            "full": "Lifetime benefit maximum has been reached for this service/benefit category."
        },
        "150": {
            "short": "Payer deems the information submitted does not support this level of service",
            "full": "Payer deems the information submitted does not support this level of service."
        },
        "151": {
            "short": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of",
            "full": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of"
        },
        "152": {
            "short": "Payer deems the information submitted does not support this length of service",
            "full": "Payer deems the information submitted does not support this length of service. Usage: Refer to the 835 Healthcare"
        },
        "153": {
            "short": "Payer deems the information submitted does not support this dosage",
            "full": "Payer deems the information submitted does not support this dosage."
        },
        "154": {
            "short": "Payer deems the information submitted does not support this day's supply",
            "full": "Payer deems the information submitted does not support this day's supply."
        },
        "155": {
            "short": "Patient refused the service/procedure",
            "full": "Patient refused the service/procedure."
        },
        "157": {
            "short": "Service/procedure was provided as a result of an act of war",
            "full": "Service/procedure was provided as a result of an act of war."
        },
        "158": {
            "short": "Service/procedure was provided outside of the United States",
            "full": "Service/procedure was provided outside of the United States."
        },
        "159": {
            "short": "Service/procedure was provided as a result of terrorism",
            "full": "Service/procedure was provided as a result of terrorism."
        },
        "160": {
            "short": "Injury/illness was the result of an activity that is a benefit exclusion",
            "full": "Injury/illness was the result of an activity that is a benefit exclusion."
        },
        "161": {
            "short": "Provider performance bonus",
            "full": "Provider performance bonus"
        },
        "163": {
            "short": "Attachment/other documentation referenced on the claim was not received",
            "full": "Attachment/other documentation referenced on the claim was not received."
        },
        "164": {
            "short": "Attachment/other documentation referenced on the claim was not received in a timely fashion",
            "full": "Attachment/other documentation referenced on the claim was not received in a timely fashion."
        },
        "166": {
            "short": "These services were submitted after this payers responsibility for processing claims under this plan ended",
            "full": "These services were submitted after this payers responsibility for processing claims under this plan ended."
        },
        "167": {
            "short": "This (these) diagnosis(es) is (are) not covered",
            "full": "This (these) diagnosis(es) is (are) not covered. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "169": {
            "short": "Alternate benefit has been provided",
            "full": "Alternate benefit has been provided."
        },
        "170": {
            "short": "Payment is denied when performed/billed by this type of provider",
            "full": "Payment is denied when performed/billed by this type of provider. Usage: Refer to the 835 Healthcare Policy"
        },
        "171": {
            "short": "Payment is denied when performed/billed by this type of provider in this type of facility",
            "full": "Payment is denied when performed/billed by this type of provider in this type of facility. Usage: Refer to the 835"
        },
        "172": {
            "short": "Payment is adjusted when performed/billed by a provider of this specialty",
            "full": "Payment is adjusted when performed/billed by a provider of this specialty. Usage: Refer to the 835 Healthcare Policy"
        },
        "173": {
            "short": "Service/equipment was not prescribed by a physician",
            "full": "Service/equipment was not prescribed by a physician."
        },
        "174": {
            "short": "Service was not prescribed prior to delivery",
            "full": "Service was not prescribed prior to delivery."
        },
        "175": {
            "short": "Prescription is incomplete",
            "full": "Prescription is incomplete."
        },
        "176": {
            "short": "Prescription is not current",
            "full": "Prescription is not current."
        },
        "177": {
            "short": "Patient has not met the required eligibility requirements",
            "full": "Patient has not met the required eligibility requirements."
        },
        "178": {
            "short": "Patient has not met the required spend down requirements",
            "full": "Patient has not met the required spend down requirements."
        },
        "179": {
            "short": "Patient has not met the required waiting requirements",
            "full": "Patient has not met the required waiting requirements. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "180": {
            "short": "Patient has not met the required residency requirements",
            "full": "Patient has not met the required residency requirements."
        },
        "181": {
            "short": "Procedure code was invalid on the date of service",
            "full": "Procedure code was invalid on the date of service."
        },
        "182": {
            "short": "Procedure modifier was invalid on the date of service",
            "full": "Procedure modifier was invalid on the date of service."
        },
        "183": {
            "short": "The referring provider is not eligible to refer the service billed",
            "full": "The referring provider is not eligible to refer the service billed. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "184": {
            "short": "The prescribing/ordering provider is not eligible to prescribe/order the service billed",
            "full": "The prescribing/ordering provider is not eligible to prescribe/order the service billed. Usage: Refer to the 835 Healthcare"
        },
        "185": {
            "short": "The rendering provider is not eligible to perform the service billed",
            "full": "The rendering provider is not eligible to perform the service billed. Usage: Refer to the 835 Healthcare Policy"
        },
        "186": {
            "short": "Level of care change adjustment",
            "full": "Level of care change adjustment."
        },
        "187": {
            "short": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings",
            "full": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings"
        },
        "188": {
            "short": "This product/procedure is only covered when used according to FDA recommendations",
            "full": "This product/procedure is only covered when used according to FDA recommendations."
        },
        "189": {
            "short": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code",
            "full": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code"
        },
        "190": {
            "short": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay",
            "full": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay."
        },
        "192": {
            "short": "Non standard adjustment code from paper remittance",
            "full": "Non standard adjustment code from paper remittance. Usage: This code is to be used by providers/payers providing Coordination of Benefits information to another payer in the 837 transaction only. This code is only used when the non- standard code cannot be reasonably mapped to an existing Claims Adjustment Reason Code, specifically Deductible,"
        },
        "193": {
            "short": "Original payment decision is being maintained",
            "full": "Original payment decision is being maintained. Upon review, it was determined that this claim was processed properly."
        },
        "194": {
            "short": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician",
            "full": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician."
        },
        "195": {
            "short": "Refund issued to an erroneous priority payer for this claim/service",
            "full": "Refund issued to an erroneous priority payer for this claim/service."
        },
        "197": {
            "short": "Precertification/authorization/notification/pre-treatment absent",
            "full": "Precertification/authorization/notification/pre-treatment absent."
        },
        "198": {
            "short": "Precertification/notification/authorization/pre-treatment exceeded",
            "full": "Precertification/notification/authorization/pre-treatment exceeded."
        },
        "199": {
            "short": "Revenue code and Procedure code do not match",
            "full": "Revenue code and Procedure code do not match."
        },
        "200": {
            "short": "Expenses incurred during lapse in coverage",
            "full": "Expenses incurred during lapse in coverage"
        },
        "201": {
            "short": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement",
            "full": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement. (Use only with Group Code PR) At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason"
        },
        "202": {
            "short": "Non-covered personal comfort or convenience services",
            "full": "Non-covered personal comfort or convenience services."
        },
        "203": {
            "short": "Discontinued or reduced service",
            "full": "Discontinued or reduced service."
        },
        "204": {
            "short": "This service/equipment/drug is not covered under the patient's current benefit plan",
            "full": "This service/equipment/drug is not covered under the patient's current benefit plan"
        },
        "205": {
            "short": "Pharmacy discount card processing fee",
            "full": "Pharmacy discount card processing fee"
        },
        "206": {
            "short": "National Provider Identifier - missing",
            "full": "National Provider Identifier - missing."
        },
        "207": {
            "short": "National Provider identifier - Invalid format",
            "full": "National Provider identifier - Invalid format"
        },
        "208": {
            "short": "National Provider Identifier - Not matched",
            "full": "National Provider Identifier - Not matched."
        },
        "209": {
            "short": "Per regulatory or other agreement",
            "full": "Per regulatory or other agreement. The provider cannot collect this amount from the patient. However, this amount"
        },
        "210": {
            "short": "Payment adjusted because pre-certification/authorization not received in a timely fashion",
            "full": "Payment adjusted because pre-certification/authorization not received in a timely fashion"
        },
        "211": {
            "short": "National Drug Codes (NDC) not eligible for rebate, are not covered",
            "full": "National Drug Codes (NDC) not eligible for rebate, are not covered."
        },
        "212": {
            "short": "Administrative surcharges are not covered",
            "full": "Administrative surcharges are not covered"
        },
        "213": {
            "short": "Non-compliance with the physician self referral prohibition legislation or payer policy",
            "full": "Non-compliance with the physician self referral prohibition legislation or payer policy."
        },
        "215": {
            "short": "Based on subrogation of a third party settlement",
            "full": "Based on subrogation of a third party settlement"
        },
        "216": {
            "short": "Based on the findings of a review organization",
            "full": "Based on the findings of a review organization"
        },
        "219": {
            "short": "Based on extent of injury",
            "full": "Based on extent of injury. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835"
        },
        "222": {
            "short": "Exceeds the contracted maximum number of hours/days/units by this provider for this period",
            "full": "Exceeds the contracted maximum number of hours/days/units by this provider for this period. This is not patient specific. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF),"
        },
        "223": {
            "short": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is",
            "full": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is"
        },
        "224": {
            "short": "Patient identification compromised by identity theft",
            "full": "Patient identification compromised by identity theft. Identity verification required for processing this and future claims."
        },
        "225": {
            "short": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)",
            "full": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)"
        },
        "226": {
            "short": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was",
            "full": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was"
        },
        "227": {
            "short": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete",
            "full": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance"
        },
        "228": {
            "short": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous",
            "full": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous"
        },
        "229": {
            "short": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X",
            "full": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X. Usage: This code can only be used in the 837 transaction to convey Coordination of Benefits information when the secondary payer's cost avoidance policy allows providers to bypass claim submission to a prior payer. (Use only with Group Code PR)"
        },
        "231": {
            "short": "Mutually exclusive procedures cannot be done in the same day/setting",
            "full": "Mutually exclusive procedures cannot be done in the same day/setting. Usage: Refer to the 835 Healthcare Policy"
        },
        "232": {
            "short": "Institutional Transfer Amount",
            "full": "Institutional Transfer Amount. Usage: Applies to institutional claims only and explains the DRG amount difference when"
        },
        "233": {
            "short": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error",
            "full": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error."
        },
        "234": {
            "short": "This procedure is not paid separately",
            "full": "This procedure is not paid separately. At least one Remark Code must be provided (may be comprised of either the"
        },
        "235": {
            "short": "Sales Tax",
            "full": "Sales Tax"
        },
        "236": {
            "short": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation",
            "full": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation"
        },
        "237": {
            "short": "Legislated/Regulatory Penalty",
            "full": "Legislated/Regulatory Penalty. At least one Remark Code must be provided (may be comprised of either the NCPDP"
        },
        "238": {
            "short": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period",
            "full": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period. (Use only with"
        },
        "239": {
            "short": "Claim spans eligible and ineligible periods of coverage",
            "full": "Claim spans eligible and ineligible periods of coverage. Rebill separate claims."
        },
        "240": {
            "short": "The diagnosis is inconsistent with the patient's birth weight",
            "full": "The diagnosis is inconsistent with the patient's birth weight. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "241": {
            "short": "Low Income Subsidy (LIS) Co-payment Amount",
            "full": "Low Income Subsidy (LIS) Co-payment Amount"
        },
        "242": {
            "short": "Services not provided by network/primary care providers",
            "full": "Services not provided by network/primary care providers."
        },
        "243": {
            "short": "Services not authorized by network/primary care providers",
            "full": "Services not authorized by network/primary care providers."
        },
        "245": {
            "short": "Provider performance program withhold",
            "full": "Provider performance program withhold."
        },
        "246": {
            "short": "This non-payable code is for required reporting only",
            "full": "This non-payable code is for required reporting only."
        },
        "247": {
            "short": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "248": {
            "short": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "249": {
            "short": "This claim has been identified as a readmission",
            "full": "This claim has been identified as a readmission. (Use only with Group Code CO)"
        },
        "250": {
            "short": "The attachment/other documentation that was received was the incorrect attachment/document",
            "full": "The attachment/other documentation that was received was the incorrect attachment/document. The expected attachment/document is still missing. At least one Remark Code must be provided (may be comprised of either the"
        },
        "251": {
            "short": "The attachment/other documentation that was received was incomplete or deficient",
            "full": "The attachment/other documentation that was received was incomplete or deficient. The necessary information is still needed to process the claim. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "252": {
            "short": "An attachment/other documentation is required to adjudicate this claim/service",
            "full": "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an"
        },
        "253": {
            "short": "Sequestration - reduction in federal payment",
            "full": "Sequestration - reduction in federal payment"
        },
        "254": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "256": {
            "short": "Service not payable per managed care contract",
            "full": "Service not payable per managed care contract."
        },
        "257": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium"
        },
        "258": {
            "short": "Claim/service not covered when patient is in custody/incarcerated",
            "full": "Claim/service not covered when patient is in custody/incarcerated. Applicable federal, state or local authority may cover"
        },
        "259": {
            "short": "Additional payment for Dental/Vision service utilization",
            "full": "Additional payment for Dental/Vision service utilization."
        },
        "260": {
            "short": "Processed under Medicaid ACA Enhanced Fee Schedule",
            "full": "Processed under Medicaid ACA Enhanced Fee Schedule"
        },
        "261": {
            "short": "The procedure or service is inconsistent with the patient's history",
            "full": "The procedure or service is inconsistent with the patient's history."
        },
        "262": {
            "short": "Adjustment for delivery cost",
            "full": "Adjustment for delivery cost. Usage: To be used for pharmaceuticals only."
        },
        "263": {
            "short": "Adjustment for shipping cost",
            "full": "Adjustment for shipping cost. Usage: To be used for pharmaceuticals only."
        },
        "264": {
            "short": "Adjustment for postage cost",
            "full": "Adjustment for postage cost. Usage: To be used for pharmaceuticals only."
        },
        "265": {
            "short": "Adjustment for administrative cost",
            "full": "Adjustment for administrative cost. Usage: To be used for pharmaceuticals only."
        },
        "266": {
            "short": "Adjustment for compound preparation cost",
            "full": "Adjustment for compound preparation cost. Usage: To be used for pharmaceuticals only."
        },
        "267": {
            "short": "Claim/service spans multiple months",
            "full": "Claim/service spans multiple months. At least one Remark Code must be provided (may be comprised of either the"
        },
        "268": {
            "short": "The Claim spans two calendar years",
            "full": "The Claim spans two calendar years. Please resubmit one claim per calendar year."
        },
        "269": {
            "short": "Anesthesia not covered for this service/procedure",
            "full": "Anesthesia not covered for this service/procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "270": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "271": {
            "short": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when",
            "full": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when"
        },
        "272": {
            "short": "Coverage/program guidelines were not met",
            "full": "Coverage/program guidelines were not met."
        },
        "273": {
            "short": "Coverage/program guidelines were exceeded",
            "full": "Coverage/program guidelines were exceeded."
        },
        "274": {
            "short": "Fee/Service not payable per patient Care Coordination arrangement",
            "full": "Fee/Service not payable per patient Care Coordination arrangement."
        },
        "275": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered. (Use only with Group"
        },
        "276": {
            "short": "Services denied by the prior payer(s) are not covered by this payer",
            "full": "Services denied by the prior payer(s) are not covered by this payer."
        },
        "277": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance"
        },
        "278": {
            "short": "Performance program proficiency requirements not met",
            "full": "Performance program proficiency requirements not met. (Use only with Group Codes CO or PI) Usage: Refer to the 835"
        },
        "279": {
            "short": "Services not provided by Preferred network providers",
            "full": "Services not provided by Preferred network providers. Usage: Use this code when there are member network"
        },
        "280": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "281": {
            "short": "Deductible waived per contractual agreement",
            "full": "Deductible waived per contractual agreement. Use only with Group Code CO."
        },
        "282": {
            "short": "The procedure/revenue code is inconsistent with the type of bill",
            "full": "The procedure/revenue code is inconsistent with the type of bill. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "283": {
            "short": "Attending provider is not eligible to provide direction of care",
            "full": "Attending provider is not eligible to provide direction of care."
        },
        "284": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services."
        },
        "285": {
            "short": "Appeal procedures not followed",
            "full": "Appeal procedures not followed"
        },
        "286": {
            "short": "Appeal time limits not met",
            "full": "Appeal time limits not met"
        },
        "287": {
            "short": "Referral exceeded",
            "full": "Referral exceeded"
        },
        "288": {
            "short": "Referral absent",
            "full": "Referral absent"
        },
        "289": {
            "short": "Services considered under the dental and medical plans, benefits not available",
            "full": "Services considered under the dental and medical plans, benefits not available."
        },
        "290": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "291": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "292": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "293": {
            "short": "Payment made to employer",
            "full": "Payment made to employer."
        },
        "294": {
            "short": "Payment made to attorney",
            "full": "Payment made to attorney."
        },
        "295": {
            "short": "Pharmacy Direct/Indirect Remuneration (DIR)",
            "full": "Pharmacy Direct/Indirect Remuneration (DIR)"
        },
        "296": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider."
        },
        "297": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "298": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "299": {
            "short": "The billing provider is not eligible to receive payment for the service billed",
            "full": "The billing provider is not eligible to receive payment for the service billed."
        },
        "300": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "301": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "302": {
            "short": "Precertification/notification/authorization/pre-treatment time limit has expired",
            "full": "Precertification/notification/authorization/pre-treatment time limit has expired."
        },
        "303": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified"
        },
        "304": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "305": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "835": {
            "short": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "2110": {
            "short": "Service Payment information REF)",
            "full": "Service Payment information REF). To be used for Workers' Compensation only."
        },
        "Segment": {
            "short": "(loop 2110 Service Payment Information REF), if present",
            "full": "(loop 2110 Service Payment Information REF), if present."
        },
        "Identification": {
            "short": "Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Policy": {
            "short": "Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "(loop": {
            "short": "2110 Service Payment Information REF), if present",
            "full": "2110 Service Payment Information REF), if present."
        },
        "(may": {
            "short": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code",
            "full": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code.)"
        },
        "requires": {
            "short": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)",
            "full": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)."
        },
        "PR": {
            "short": "or CO depending upon liability)",
            "full": "or CO depending upon liability)"
        },
        "Healthcare": {
            "short": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "to": {
            "short": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Information": {
            "short": "REF), if present",
            "full": "REF), if present."
        },
        "services.": {
            "short": "",
            "full": ""
        },
        "adjudicated.": {
            "short": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Service": {
            "short": "Payment Information REF), if present",
            "full": "Payment Information REF), if present."
        },
        "either": {
            "short": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "provided": {
            "short": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Account,": {
            "short": "Health Reimbursement Account, etc",
            "full": "Health Reimbursement Account, etc.)"
        },
        "for": {
            "short": "this procedure/service",
            "full": "this procedure/service"
        },
        "Coinsurance": {
            "short": "and Co-payment",
            "full": "and Co-payment."
        },
        "Code,": {
            "short": "or Remittance Advice Remark Code that is not an ALERT",
            "full": "or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "may": {
            "short": "be billed to subsequent payer",
            "full": "be billed to subsequent payer. Refund to patient if collected. (Use only with Group code OA)"
        },
        "if": {
            "short": "the regulations apply",
            "full": "the regulations apply. To be used for Property and Casualty Auto only."
        },
        "mandated": {
            "short": "before a new code can be created",
            "full": "before a new code can be created."
        },
        "insufficient/incomplete.": {
            "short": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Advice": {
            "short": "Remark Code that is not an ALERT",
            "full": "Remark Code that is not an ALERT.)"
        },
        "payer": {
            "short": "for their adjudication",
            "full": "for their adjudication"
        },
        "the": {
            "short": "claim/service",
            "full": "claim/service."
        },
        "NCPDP": {
            "short": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "state": {
            "short": "regulations/ fee schedule requirements",
            "full": "regulations/ fee schedule requirements."
        },
        "Reject": {
            "short": "Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Group": {
            "short": "Code PR)",
            "full": "Code PR)"
        },
        "Reason": {
            "short": "Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "ALERT).": {
            "short": "",
            "full": ""
        },
        "medical": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "payment": {
            "short": "or lack of premium payment)",
            "full": "or lack of premium payment). (Use only with Group Code OA)"
        },
        "dental": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "deferred": {
            "short": "amounts have been previously reported",
            "full": "amounts have been previously reported. (Use only with Group Code OA)"
        },
        "Code": {
            "short": "PR)",
            "full": "PR)"
        },
        "SHOP": {
            "short": "Exchange requirements",
            "full": "Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium payment or lack of premium payment). (Use only with Group Code OA)"
        },
        "limitations.": {
            "short": "For example, using contracted providers not in the member's 'narrow' network",
            "full": "For example, using contracted providers not in the member's 'narrow' network."
        },
        "Pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "vision": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "Behavioral": {
            "short": "Health Plan for further consideration",
            "full": "Health Plan for further consideration."
        },
        "Medicare": {
            "short": "and Medicaid Beneficiaries",
            "full": "and Medicaid Beneficiaries. (Use only with Group Code CO)"
        },
        "hearing": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "A0": {
            "short": "Patient refund amount",
            "full": "Patient refund amount."
        },
        "A1": {
            "short": "Claim/Service denied",
            "full": "Claim/Service denied. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "A5": {
            "short": "Medicare Claim PPS Capital Cost Outlier Amount",
            "full": "Medicare Claim PPS Capital Cost Outlier Amount."
        },
        "A6": {
            "short": "Prior hospitalization or 30 day transfer requirement not met",
            "full": "Prior hospitalization or 30 day transfer requirement not met."
        },
        "A8": {
            "short": "Ungroupable DRG",
            "full": "Ungroupable DRG."
        },
        "B1": {
            "short": "Non-covered visits",
            "full": "Non-covered visits."
        },
        "B10": {
            "short": "Allowed amount has been reduced because a component of the basic procedure/test was paid",
            "full": "Allowed amount has been reduced because a component of the basic procedure/test was paid. The beneficiary is not"
        },
        "liable": {
            "short": "for more than the charge limit for the basic procedure/test",
            "full": "for more than the charge limit for the basic procedure/test."
        },
        "B11": {
            "short": "The claim/service has been transferred to the proper payer/processor for processing",
            "full": "The claim/service has been transferred to the proper payer/processor for processing. Claim/service not covered by this"
        },
        "payer/processor.": {
            "short": "",
            "full": ""
        },
        "B12": {
            "short": "Services not documented in patient's medical records",
            "full": "Services not documented in patient's medical records."
        },
        "B13": {
            "short": "Previously paid",
            "full": "Previously paid. Payment for this claim/service may have been provided in a previous payment."
        },
        "B14": {
            "short": "Only one visit or consultation per physician per day is covered",
            "full": "Only one visit or consultation per physician per day is covered."
        },
        "B15": {
            "short": "This service/procedure requires that a qualifying service/procedure be received and covered",
            "full": "This service/procedure requires that a qualifying service/procedure be received and covered. The qualifying other"
        },
        "service/procedure": {
            "short": "has not been received/adjudicated",
            "full": "has not been received/adjudicated. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "B16": {
            "short": "'New Patient' qualifications were not met",
            "full": "'New Patient' qualifications were not met."
        },
        "B20": {
            "short": "Procedure/service was partially or fully furnished by another provider",
            "full": "Procedure/service was partially or fully furnished by another provider."
        },
        "B22": {
            "short": "This payment is adjusted based on the diagnosis",
            "full": "This payment is adjusted based on the diagnosis."
        },
        "B23": {
            "short": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test",
            "full": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test."
        },
        "B4": {
            "short": "Late filing penalty",
            "full": "Late filing penalty."
        },
        "B5": {
            "short": "Coverage/program guidelines were not met or were exceeded",
            "full": "Coverage/program guidelines were not met or were exceeded."
        },
        "B7": {
            "short": "This provider was not certified/eligible to be paid for this procedure/service on this date of service",
            "full": "This provider was not certified/eligible to be paid for this procedure/service on this date of service. Usage: Refer to the"
        },
        "B8": {
            "short": "Alternative services were available, and should have been utilized",
            "full": "Alternative services were available, and should have been utilized. Usage: Refer to the 835 Healthcare Policy"
        },
        "B9": {
            "short": "Patient is enrolled in a Hospice",
            "full": "Patient is enrolled in a Hospice."
        },
        "P1": {
            "short": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation",
            "full": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation. To"
        },
        "be": {
            "short": "used for Property and Casualty only",
            "full": "used for Property and Casualty only. (Use only with Group Code CO)."
        },
        "P10": {
            "short": "Payment reduced to zero due to litigation",
            "full": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To"
        },
        "P11": {
            "short": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation",
            "full": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. To be used for"
        },
        "Property": {
            "short": "and Casualty only",
            "full": "and Casualty only."
        },
        "P12": {
            "short": "Workers' compensation jurisdictional fee schedule adjustment",
            "full": "Workers' compensation jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "To": {
            "short": "be used for Property and Casualty only",
            "full": "be used for Property and Casualty only."
        },
        "P13": {
            "short": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable",
            "full": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P14": {
            "short": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day",
            "full": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service"
        },
        "Payment": {
            "short": "Information REF), if present",
            "full": "Information REF), if present. To be used for Property and Casualty only."
        },
        "P15": {
            "short": "Workers' Compensation Medical Treatment Guideline Adjustment",
            "full": "Workers' Compensation Medical Treatment Guideline Adjustment. To be used for Workers' Compensation only."
        },
        "P16": {
            "short": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction",
            "full": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. To be used for"
        },
        "Workers'": {
            "short": "Compensation only",
            "full": "Compensation only. (Use with Group Code CO or OA)"
        },
        "P17": {
            "short": "Referral not authorized by attending physician per regulatory requirement",
            "full": "Referral not authorized by attending physician per regulatory requirement. To be used for Property and Casualty only."
        },
        "P18": {
            "short": "Procedure is not listed in the jurisdiction fee schedule",
            "full": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service. To be"
        },
        "used": {
            "short": "for Property and Casualty only",
            "full": "for Property and Casualty only."
        },
        "P19": {
            "short": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due",
            "full": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due. To be used for"
        },
        "P2": {
            "short": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation",
            "full": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "P20": {
            "short": "Service not paid under jurisdiction allowed outpatient facility fee schedule",
            "full": "Service not paid under jurisdiction allowed outpatient facility fee schedule. To be used for Property and Casualty only."
        },
        "P21": {
            "short": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P22": {
            "short": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P23": {
            "short": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment",
            "full": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property and Casualty Auto only."
        },
        "P24": {
            "short": "Payment adjusted based on Preferred Provider Organization (PPO)",
            "full": "Payment adjusted based on Preferred Provider Organization (PPO). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P25": {
            "short": "Payment adjusted based on Medical Provider Network (MPN)",
            "full": "Payment adjusted based on Medical Provider Network (MPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To"
        },
        "P26": {
            "short": "Payment adjusted based on Voluntary Provider network (VPN)",
            "full": "Payment adjusted based on Voluntary Provider network (VPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P27": {
            "short": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "and": {
            "short": "Casualty only",
            "full": "Casualty only."
        },
        "P28": {
            "short": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "P29": {
            "short": "Liability Benefits jurisdictional fee schedule adjustment",
            "full": "Liability Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be"
        },
        "P3": {
            "short": "Workers' Compensation case settled",
            "full": "Workers' Compensation case settled. Patient is responsible for amount of this claim/service through WC 'Medicare set aside arrangement' or other agreement. To be used for Workers' Compensation only. (Use only with Group Code PR)"
        },
        "P30": {
            "short": "Payment denied for exacerbation when supporting documentation was not complete",
            "full": "Payment denied for exacerbation when supporting documentation was not complete. To be used for Property and"
        },
        "Casualty": {
            "short": "only",
            "full": "only."
        },
        "P31": {
            "short": "Payment denied for exacerbation when treatment exceeds time allowed",
            "full": "Payment denied for exacerbation when treatment exceeds time allowed. To be used for Property and Casualty only."
        },
        "P4": {
            "short": "Workers' Compensation claim adjudicated as non-compensable",
            "full": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Workers' Compensation only"
        },
        "P5": {
            "short": "Based on payer reasonable and customary fees",
            "full": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. To be"
        },
        "P6": {
            "short": "Based on entitlement to benefits",
            "full": "Based on entitlement to benefits. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property"
        },
        "P7": {
            "short": "The applicable fee schedule/fee database does not contain the billed code",
            "full": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided and supporting documentation if required."
        },
        "P8": {
            "short": "Claim is under investigation",
            "full": "Claim is under investigation. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property and"
        },
        "P9": {
            "short": "No available or correlating CPT/HCPCS code to describe this service",
            "full": "No available or correlating CPT/HCPCS code to describe this service. To be used for Property and Casualty only."
        }
    },
    "PI": {
        "1": {
            "short": "Deductible Amount",
            "full": "Deductible Amount"
        },
        "2": {
            "short": "Coinsurance Amount",
            "full": "Coinsurance Amount"
        },
        "3": {
            "short": "Co-payment Amount",
            "full": "Co-payment Amount"
        },
        "4": {
            "short": "The procedure code is inconsistent with the modifier used",
            "full": "The procedure code is inconsistent with the modifier used. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "5": {
            "short": "The procedure code/type of bill is inconsistent with the place of service",
            "full": "The procedure code/type of bill is inconsistent with the place of service. Usage: Refer to the 835 Healthcare Policy"
        },
        "6": {
            "short": "The procedure/revenue code is inconsistent with the patient's age",
            "full": "The procedure/revenue code is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy"
        },
        "7": {
            "short": "The procedure/revenue code is inconsistent with the patient's gender",
            "full": "The procedure/revenue code is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy"
        },
        "8": {
            "short": "The procedure code is inconsistent with the provider type/specialty (taxonomy)",
            "full": "The procedure code is inconsistent with the provider type/specialty (taxonomy). Usage: Refer to the 835 Healthcare"
        },
        "9": {
            "short": "The diagnosis is inconsistent with the patient's age",
            "full": "The diagnosis is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "10": {
            "short": "The diagnosis is inconsistent with the patient's gender",
            "full": "The diagnosis is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "11": {
            "short": "The diagnosis is inconsistent with the procedure",
            "full": "The diagnosis is inconsistent with the procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "12": {
            "short": "The diagnosis is inconsistent with the provider type",
            "full": "The diagnosis is inconsistent with the provider type. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "13": {
            "short": "The date of death precedes the date of service",
            "full": "The date of death precedes the date of service."
        },
        "14": {
            "short": "The date of birth follows the date of service",
            "full": "The date of birth follows the date of service."
        },
        "15": {
            "short": "The authorization number is missing, invalid, or does not apply to the billed services or provider",
            "full": "The authorization number is missing, invalid, or does not apply to the billed services or provider."
        },
        "16": {
            "short": "Claim/service lacks information or has submission/billing error(s)",
            "full": "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the 835 Healthcare Policy"
        },
        "17": {
            "short": "Requested information was not provided or was insufficient/incomplete",
            "full": "Requested information was not provided or was insufficient/incomplete. At least one Remark Code must be provided"
        },
        "18": {
            "short": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations",
            "full": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations"
        },
        "19": {
            "short": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier",
            "full": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier."
        },
        "20": {
            "short": "This injury/illness is covered by the liability carrier",
            "full": "This injury/illness is covered by the liability carrier."
        },
        "21": {
            "short": "This injury/illness is the liability of the no-fault carrier",
            "full": "This injury/illness is the liability of the no-fault carrier."
        },
        "22": {
            "short": "This care may be covered by another payer per coordination of benefits",
            "full": "This care may be covered by another payer per coordination of benefits."
        },
        "23": {
            "short": "The impact of prior payer(s) adjudication including payments and/or adjustments",
            "full": "The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)"
        },
        "24": {
            "short": "Charges are covered under a capitation agreement/managed care plan",
            "full": "Charges are covered under a capitation agreement/managed care plan."
        },
        "26": {
            "short": "Expenses incurred prior to coverage",
            "full": "Expenses incurred prior to coverage."
        },
        "27": {
            "short": "Expenses incurred after coverage terminated",
            "full": "Expenses incurred after coverage terminated."
        },
        "29": {
            "short": "The time limit for filing has expired",
            "full": "The time limit for filing has expired."
        },
        "31": {
            "short": "Patient cannot be identified as our insured",
            "full": "Patient cannot be identified as our insured."
        },
        "32": {
            "short": "Our records indicate the patient is not an eligible dependent",
            "full": "Our records indicate the patient is not an eligible dependent."
        },
        "33": {
            "short": "Insured has no dependent coverage",
            "full": "Insured has no dependent coverage."
        },
        "34": {
            "short": "Insured has no coverage for newborns",
            "full": "Insured has no coverage for newborns."
        },
        "35": {
            "short": "Lifetime benefit maximum has been reached",
            "full": "Lifetime benefit maximum has been reached."
        },
        "39": {
            "short": "Services denied at the time authorization/pre-certification was requested",
            "full": "Services denied at the time authorization/pre-certification was requested."
        },
        "40": {
            "short": "Charges do not meet qualifications for emergent/urgent care",
            "full": "Charges do not meet qualifications for emergent/urgent care. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "44": {
            "short": "Prompt-pay discount",
            "full": "Prompt-pay discount."
        },
        "45": {
            "short": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement",
            "full": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. (Use only with Group Codes"
        },
        "49": {
            "short": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam",
            "full": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "50": {
            "short": "These are non-covered services because this is not deemed a 'medical necessity' by the payer",
            "full": "These are non-covered services because this is not deemed a 'medical necessity' by the payer. Usage: Refer to the 835"
        },
        "51": {
            "short": "These are non-covered services because this is a pre-existing condition",
            "full": "These are non-covered services because this is a pre-existing condition. Usage: Refer to the 835 Healthcare Policy"
        },
        "53": {
            "short": "Services by an immediate relative or a member of the same household are not covered",
            "full": "Services by an immediate relative or a member of the same household are not covered."
        },
        "54": {
            "short": "Multiple physicians/assistants are not covered in this case",
            "full": "Multiple physicians/assistants are not covered in this case. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "55": {
            "short": "Procedure/treatment/drug is deemed experimental/investigational by the payer",
            "full": "Procedure/treatment/drug is deemed experimental/investigational by the payer. Usage: Refer to the 835 Healthcare"
        },
        "56": {
            "short": "Procedure/treatment has not been deemed 'proven to be effective' by the payer",
            "full": "Procedure/treatment has not been deemed 'proven to be effective' by the payer. Usage: Refer to the 835 Healthcare"
        },
        "58": {
            "short": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service",
            "full": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service. Usage: Refer"
        },
        "59": {
            "short": "Processed based on multiple or concurrent procedure rules",
            "full": "Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.) Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment"
        },
        "60": {
            "short": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient",
            "full": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient"
        },
        "61": {
            "short": "Adjusted for failure to obtain second surgical opinion",
            "full": "Adjusted for failure to obtain second surgical opinion"
        },
        "66": {
            "short": "Blood Deductible",
            "full": "Blood Deductible."
        },
        "69": {
            "short": "Day outlier amount",
            "full": "Day outlier amount."
        },
        "70": {
            "short": "Cost outlier - Adjustment to compensate for additional costs",
            "full": "Cost outlier - Adjustment to compensate for additional costs."
        },
        "74": {
            "short": "Indirect Medical Education Adjustment",
            "full": "Indirect Medical Education Adjustment."
        },
        "75": {
            "short": "Direct Medical Education Adjustment",
            "full": "Direct Medical Education Adjustment."
        },
        "76": {
            "short": "Disproportionate Share Adjustment",
            "full": "Disproportionate Share Adjustment."
        },
        "78": {
            "short": "Non-Covered days/Room charge adjustment",
            "full": "Non-Covered days/Room charge adjustment."
        },
        "85": {
            "short": "Patient Interest Adjustment (Use Only Group code PR)",
            "full": "Patient Interest Adjustment (Use Only Group code PR)"
        },
        "89": {
            "short": "Professional fees removed from charges",
            "full": "Professional fees removed from charges."
        },
        "90": {
            "short": "Ingredient cost adjustment",
            "full": "Ingredient cost adjustment. Usage: To be used for pharmaceuticals only."
        },
        "91": {
            "short": "Dispensing fee adjustment",
            "full": "Dispensing fee adjustment."
        },
        "94": {
            "short": "Processed in Excess of charges",
            "full": "Processed in Excess of charges."
        },
        "95": {
            "short": "Plan procedures not followed",
            "full": "Plan procedures not followed."
        },
        "96": {
            "short": "Non-covered charge(s)",
            "full": "Non-covered charge(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Refer to the 835 Healthcare Policy"
        },
        "97": {
            "short": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been",
            "full": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been"
        },
        "100": {
            "short": "Payment made to patient/insured/responsible party",
            "full": "Payment made to patient/insured/responsible party."
        },
        "101": {
            "short": "Predetermination: anticipated payment upon completion of services or claim adjudication",
            "full": "Predetermination: anticipated payment upon completion of services or claim adjudication."
        },
        "102": {
            "short": "Major Medical Adjustment",
            "full": "Major Medical Adjustment."
        },
        "103": {
            "short": "Provider promotional discount (e",
            "full": "Provider promotional discount (e.g., Senior citizen discount)."
        },
        "104": {
            "short": "Managed care withholding",
            "full": "Managed care withholding."
        },
        "105": {
            "short": "Tax withholding",
            "full": "Tax withholding."
        },
        "106": {
            "short": "Patient payment option/election not in effect",
            "full": "Patient payment option/election not in effect."
        },
        "107": {
            "short": "The related or qualifying claim/service was not identified on this claim",
            "full": "The related or qualifying claim/service was not identified on this claim. Usage: Refer to the 835 Healthcare Policy"
        },
        "108": {
            "short": "Rent/purchase guidelines were not met",
            "full": "Rent/purchase guidelines were not met. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110"
        },
        "109": {
            "short": "Claim/service not covered by this payer/contractor",
            "full": "Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."
        },
        "110": {
            "short": "Billing date predates service date",
            "full": "Billing date predates service date."
        },
        "111": {
            "short": "Not covered unless the provider accepts assignment",
            "full": "Not covered unless the provider accepts assignment."
        },
        "112": {
            "short": "Service not furnished directly to the patient and/or not documented",
            "full": "Service not furnished directly to the patient and/or not documented."
        },
        "114": {
            "short": "Procedure/product not approved by the Food and Drug Administration",
            "full": "Procedure/product not approved by the Food and Drug Administration."
        },
        "115": {
            "short": "Procedure postponed, canceled, or delayed",
            "full": "Procedure postponed, canceled, or delayed."
        },
        "116": {
            "short": "The advance indemnification notice signed by the patient did not comply with requirements",
            "full": "The advance indemnification notice signed by the patient did not comply with requirements."
        },
        "117": {
            "short": "Transportation is only covered to the closest facility that can provide the necessary care",
            "full": "Transportation is only covered to the closest facility that can provide the necessary care."
        },
        "118": {
            "short": "ESRD network support adjustment",
            "full": "ESRD network support adjustment."
        },
        "119": {
            "short": "Benefit maximum for this time period or occurrence has been reached",
            "full": "Benefit maximum for this time period or occurrence has been reached."
        },
        "121": {
            "short": "Indemnification adjustment - compensation for outstanding member responsibility",
            "full": "Indemnification adjustment - compensation for outstanding member responsibility."
        },
        "122": {
            "short": "Psychiatric reduction",
            "full": "Psychiatric reduction."
        },
        "128": {
            "short": "Newborn's services are covered in the mother's Allowance",
            "full": "Newborn's services are covered in the mother's Allowance."
        },
        "129": {
            "short": "Prior processing information appears incorrect",
            "full": "Prior processing information appears incorrect. At least one Remark Code must be provided (may be comprised of"
        },
        "130": {
            "short": "Claim submission fee",
            "full": "Claim submission fee."
        },
        "131": {
            "short": "Claim specific negotiated discount",
            "full": "Claim specific negotiated discount."
        },
        "132": {
            "short": "Prearranged demonstration project adjustment",
            "full": "Prearranged demonstration project adjustment."
        },
        "133": {
            "short": "The disposition of this service line is pending further review",
            "full": "The disposition of this service line is pending further review. (Use only with Group Code OA). Usage: Use of this code"
        },
        "134": {
            "short": "Technical fees removed from charges",
            "full": "Technical fees removed from charges."
        },
        "135": {
            "short": "Interim bills cannot be processed",
            "full": "Interim bills cannot be processed."
        },
        "136": {
            "short": "Failure to follow prior payer's coverage rules",
            "full": "Failure to follow prior payer's coverage rules. (Use only with Group Code OA)"
        },
        "137": {
            "short": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes",
            "full": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes."
        },
        "139": {
            "short": "Contracted funding agreement - Subscriber is employed by the provider of services",
            "full": "Contracted funding agreement - Subscriber is employed by the provider of services. Use only with Group Code CO."
        },
        "140": {
            "short": "Patient/Insured health identification number and name do not match",
            "full": "Patient/Insured health identification number and name do not match."
        },
        "142": {
            "short": "Monthly Medicaid patient liability amount",
            "full": "Monthly Medicaid patient liability amount."
        },
        "143": {
            "short": "Portion of payment deferred",
            "full": "Portion of payment deferred."
        },
        "144": {
            "short": "Incentive adjustment, e",
            "full": "Incentive adjustment, e.g. preferred product/service."
        },
        "146": {
            "short": "Diagnosis was invalid for the date(s) of service reported",
            "full": "Diagnosis was invalid for the date(s) of service reported."
        },
        "147": {
            "short": "Provider contracted/negotiated rate expired or not on file",
            "full": "Provider contracted/negotiated rate expired or not on file."
        },
        "148": {
            "short": "Information from another provider was not provided or was insufficient/incomplete",
            "full": "Information from another provider was not provided or was insufficient/incomplete. At least one Remark Code must be"
        },
        "149": {
            "short": "Lifetime benefit maximum has been reached for this service/benefit category",
            "full": "Lifetime benefit maximum has been reached for this service/benefit category."
        },
        "150": {
            "short": "Payer deems the information submitted does not support this level of service",
            "full": "Payer deems the information submitted does not support this level of service."
        },
        "151": {
            "short": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of",
            "full": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of"
        },
        "152": {
            "short": "Payer deems the information submitted does not support this length of service",
            "full": "Payer deems the information submitted does not support this length of service. Usage: Refer to the 835 Healthcare"
        },
        "153": {
            "short": "Payer deems the information submitted does not support this dosage",
            "full": "Payer deems the information submitted does not support this dosage."
        },
        "154": {
            "short": "Payer deems the information submitted does not support this day's supply",
            "full": "Payer deems the information submitted does not support this day's supply."
        },
        "155": {
            "short": "Patient refused the service/procedure",
            "full": "Patient refused the service/procedure."
        },
        "157": {
            "short": "Service/procedure was provided as a result of an act of war",
            "full": "Service/procedure was provided as a result of an act of war."
        },
        "158": {
            "short": "Service/procedure was provided outside of the United States",
            "full": "Service/procedure was provided outside of the United States."
        },
        "159": {
            "short": "Service/procedure was provided as a result of terrorism",
            "full": "Service/procedure was provided as a result of terrorism."
        },
        "160": {
            "short": "Injury/illness was the result of an activity that is a benefit exclusion",
            "full": "Injury/illness was the result of an activity that is a benefit exclusion."
        },
        "161": {
            "short": "Provider performance bonus",
            "full": "Provider performance bonus"
        },
        "163": {
            "short": "Attachment/other documentation referenced on the claim was not received",
            "full": "Attachment/other documentation referenced on the claim was not received."
        },
        "164": {
            "short": "Attachment/other documentation referenced on the claim was not received in a timely fashion",
            "full": "Attachment/other documentation referenced on the claim was not received in a timely fashion."
        },
        "166": {
            "short": "These services were submitted after this payers responsibility for processing claims under this plan ended",
            "full": "These services were submitted after this payers responsibility for processing claims under this plan ended."
        },
        "167": {
            "short": "This (these) diagnosis(es) is (are) not covered",
            "full": "This (these) diagnosis(es) is (are) not covered. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "169": {
            "short": "Alternate benefit has been provided",
            "full": "Alternate benefit has been provided."
        },
        "170": {
            "short": "Payment is denied when performed/billed by this type of provider",
            "full": "Payment is denied when performed/billed by this type of provider. Usage: Refer to the 835 Healthcare Policy"
        },
        "171": {
            "short": "Payment is denied when performed/billed by this type of provider in this type of facility",
            "full": "Payment is denied when performed/billed by this type of provider in this type of facility. Usage: Refer to the 835"
        },
        "172": {
            "short": "Payment is adjusted when performed/billed by a provider of this specialty",
            "full": "Payment is adjusted when performed/billed by a provider of this specialty. Usage: Refer to the 835 Healthcare Policy"
        },
        "173": {
            "short": "Service/equipment was not prescribed by a physician",
            "full": "Service/equipment was not prescribed by a physician."
        },
        "174": {
            "short": "Service was not prescribed prior to delivery",
            "full": "Service was not prescribed prior to delivery."
        },
        "175": {
            "short": "Prescription is incomplete",
            "full": "Prescription is incomplete."
        },
        "176": {
            "short": "Prescription is not current",
            "full": "Prescription is not current."
        },
        "177": {
            "short": "Patient has not met the required eligibility requirements",
            "full": "Patient has not met the required eligibility requirements."
        },
        "178": {
            "short": "Patient has not met the required spend down requirements",
            "full": "Patient has not met the required spend down requirements."
        },
        "179": {
            "short": "Patient has not met the required waiting requirements",
            "full": "Patient has not met the required waiting requirements. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "180": {
            "short": "Patient has not met the required residency requirements",
            "full": "Patient has not met the required residency requirements."
        },
        "181": {
            "short": "Procedure code was invalid on the date of service",
            "full": "Procedure code was invalid on the date of service."
        },
        "182": {
            "short": "Procedure modifier was invalid on the date of service",
            "full": "Procedure modifier was invalid on the date of service."
        },
        "183": {
            "short": "The referring provider is not eligible to refer the service billed",
            "full": "The referring provider is not eligible to refer the service billed. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "184": {
            "short": "The prescribing/ordering provider is not eligible to prescribe/order the service billed",
            "full": "The prescribing/ordering provider is not eligible to prescribe/order the service billed. Usage: Refer to the 835 Healthcare"
        },
        "185": {
            "short": "The rendering provider is not eligible to perform the service billed",
            "full": "The rendering provider is not eligible to perform the service billed. Usage: Refer to the 835 Healthcare Policy"
        },
        "186": {
            "short": "Level of care change adjustment",
            "full": "Level of care change adjustment."
        },
        "187": {
            "short": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings",
            "full": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings"
        },
        "188": {
            "short": "This product/procedure is only covered when used according to FDA recommendations",
            "full": "This product/procedure is only covered when used according to FDA recommendations."
        },
        "189": {
            "short": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code",
            "full": "'Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code"
        },
        "190": {
            "short": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay",
            "full": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay."
        },
        "192": {
            "short": "Non standard adjustment code from paper remittance",
            "full": "Non standard adjustment code from paper remittance. Usage: This code is to be used by providers/payers providing Coordination of Benefits information to another payer in the 837 transaction only. This code is only used when the non- standard code cannot be reasonably mapped to an existing Claims Adjustment Reason Code, specifically Deductible,"
        },
        "193": {
            "short": "Original payment decision is being maintained",
            "full": "Original payment decision is being maintained. Upon review, it was determined that this claim was processed properly."
        },
        "194": {
            "short": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician",
            "full": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician."
        },
        "195": {
            "short": "Refund issued to an erroneous priority payer for this claim/service",
            "full": "Refund issued to an erroneous priority payer for this claim/service."
        },
        "197": {
            "short": "Precertification/authorization/notification/pre-treatment absent",
            "full": "Precertification/authorization/notification/pre-treatment absent."
        },
        "198": {
            "short": "Precertification/notification/authorization/pre-treatment exceeded",
            "full": "Precertification/notification/authorization/pre-treatment exceeded."
        },
        "199": {
            "short": "Revenue code and Procedure code do not match",
            "full": "Revenue code and Procedure code do not match."
        },
        "200": {
            "short": "Expenses incurred during lapse in coverage",
            "full": "Expenses incurred during lapse in coverage"
        },
        "201": {
            "short": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement",
            "full": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement. (Use only with Group Code PR) At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason"
        },
        "202": {
            "short": "Non-covered personal comfort or convenience services",
            "full": "Non-covered personal comfort or convenience services."
        },
        "203": {
            "short": "Discontinued or reduced service",
            "full": "Discontinued or reduced service."
        },
        "204": {
            "short": "This service/equipment/drug is not covered under the patient's current benefit plan",
            "full": "This service/equipment/drug is not covered under the patient's current benefit plan"
        },
        "205": {
            "short": "Pharmacy discount card processing fee",
            "full": "Pharmacy discount card processing fee"
        },
        "206": {
            "short": "National Provider Identifier - missing",
            "full": "National Provider Identifier - missing."
        },
        "207": {
            "short": "National Provider identifier - Invalid format",
            "full": "National Provider identifier - Invalid format"
        },
        "208": {
            "short": "National Provider Identifier - Not matched",
            "full": "National Provider Identifier - Not matched."
        },
        "209": {
            "short": "Per regulatory or other agreement",
            "full": "Per regulatory or other agreement. The provider cannot collect this amount from the patient. However, this amount"
        },
        "210": {
            "short": "Payment adjusted because pre-certification/authorization not received in a timely fashion",
            "full": "Payment adjusted because pre-certification/authorization not received in a timely fashion"
        },
        "211": {
            "short": "National Drug Codes (NDC) not eligible for rebate, are not covered",
            "full": "National Drug Codes (NDC) not eligible for rebate, are not covered."
        },
        "212": {
            "short": "Administrative surcharges are not covered",
            "full": "Administrative surcharges are not covered"
        },
        "213": {
            "short": "Non-compliance with the physician self referral prohibition legislation or payer policy",
            "full": "Non-compliance with the physician self referral prohibition legislation or payer policy."
        },
        "215": {
            "short": "Based on subrogation of a third party settlement",
            "full": "Based on subrogation of a third party settlement"
        },
        "216": {
            "short": "Based on the findings of a review organization",
            "full": "Based on the findings of a review organization"
        },
        "219": {
            "short": "Based on extent of injury",
            "full": "Based on extent of injury. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835"
        },
        "222": {
            "short": "Exceeds the contracted maximum number of hours/days/units by this provider for this period",
            "full": "Exceeds the contracted maximum number of hours/days/units by this provider for this period. This is not patient specific. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF),"
        },
        "223": {
            "short": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is",
            "full": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is"
        },
        "224": {
            "short": "Patient identification compromised by identity theft",
            "full": "Patient identification compromised by identity theft. Identity verification required for processing this and future claims."
        },
        "225": {
            "short": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)",
            "full": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)"
        },
        "226": {
            "short": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was",
            "full": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was"
        },
        "227": {
            "short": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete",
            "full": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance"
        },
        "228": {
            "short": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous",
            "full": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous"
        },
        "229": {
            "short": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X",
            "full": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X. Usage: This code can only be used in the 837 transaction to convey Coordination of Benefits information when the secondary payer's cost avoidance policy allows providers to bypass claim submission to a prior payer. (Use only with Group Code PR)"
        },
        "231": {
            "short": "Mutually exclusive procedures cannot be done in the same day/setting",
            "full": "Mutually exclusive procedures cannot be done in the same day/setting. Usage: Refer to the 835 Healthcare Policy"
        },
        "232": {
            "short": "Institutional Transfer Amount",
            "full": "Institutional Transfer Amount. Usage: Applies to institutional claims only and explains the DRG amount difference when"
        },
        "233": {
            "short": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error",
            "full": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error."
        },
        "234": {
            "short": "This procedure is not paid separately",
            "full": "This procedure is not paid separately. At least one Remark Code must be provided (may be comprised of either the"
        },
        "235": {
            "short": "Sales Tax",
            "full": "Sales Tax"
        },
        "236": {
            "short": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation",
            "full": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiative or workers compensation"
        },
        "237": {
            "short": "Legislated/Regulatory Penalty",
            "full": "Legislated/Regulatory Penalty. At least one Remark Code must be provided (may be comprised of either the NCPDP"
        },
        "238": {
            "short": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period",
            "full": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period. (Use only with"
        },
        "239": {
            "short": "Claim spans eligible and ineligible periods of coverage",
            "full": "Claim spans eligible and ineligible periods of coverage. Rebill separate claims."
        },
        "240": {
            "short": "The diagnosis is inconsistent with the patient's birth weight",
            "full": "The diagnosis is inconsistent with the patient's birth weight. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "241": {
            "short": "Low Income Subsidy (LIS) Co-payment Amount",
            "full": "Low Income Subsidy (LIS) Co-payment Amount"
        },
        "242": {
            "short": "Services not provided by network/primary care providers",
            "full": "Services not provided by network/primary care providers."
        },
        "243": {
            "short": "Services not authorized by network/primary care providers",
            "full": "Services not authorized by network/primary care providers."
        },
        "245": {
            "short": "Provider performance program withhold",
            "full": "Provider performance program withhold."
        },
        "246": {
            "short": "This non-payable code is for required reporting only",
            "full": "This non-payable code is for required reporting only."
        },
        "247": {
            "short": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "248": {
            "short": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim",
            "full": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim."
        },
        "249": {
            "short": "This claim has been identified as a readmission",
            "full": "This claim has been identified as a readmission. (Use only with Group Code CO)"
        },
        "250": {
            "short": "The attachment/other documentation that was received was the incorrect attachment/document",
            "full": "The attachment/other documentation that was received was the incorrect attachment/document. The expected attachment/document is still missing. At least one Remark Code must be provided (may be comprised of either the"
        },
        "251": {
            "short": "The attachment/other documentation that was received was incomplete or deficient",
            "full": "The attachment/other documentation that was received was incomplete or deficient. The necessary information is still needed to process the claim. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "252": {
            "short": "An attachment/other documentation is required to adjudicate this claim/service",
            "full": "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an"
        },
        "253": {
            "short": "Sequestration - reduction in federal payment",
            "full": "Sequestration - reduction in federal payment"
        },
        "254": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "256": {
            "short": "Service not payable per managed care contract",
            "full": "Service not payable per managed care contract."
        },
        "257": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium"
        },
        "258": {
            "short": "Claim/service not covered when patient is in custody/incarcerated",
            "full": "Claim/service not covered when patient is in custody/incarcerated. Applicable federal, state or local authority may cover"
        },
        "259": {
            "short": "Additional payment for Dental/Vision service utilization",
            "full": "Additional payment for Dental/Vision service utilization."
        },
        "260": {
            "short": "Processed under Medicaid ACA Enhanced Fee Schedule",
            "full": "Processed under Medicaid ACA Enhanced Fee Schedule"
        },
        "261": {
            "short": "The procedure or service is inconsistent with the patient's history",
            "full": "The procedure or service is inconsistent with the patient's history."
        },
        "262": {
            "short": "Adjustment for delivery cost",
            "full": "Adjustment for delivery cost. Usage: To be used for pharmaceuticals only."
        },
        "263": {
            "short": "Adjustment for shipping cost",
            "full": "Adjustment for shipping cost. Usage: To be used for pharmaceuticals only."
        },
        "264": {
            "short": "Adjustment for postage cost",
            "full": "Adjustment for postage cost. Usage: To be used for pharmaceuticals only."
        },
        "265": {
            "short": "Adjustment for administrative cost",
            "full": "Adjustment for administrative cost. Usage: To be used for pharmaceuticals only."
        },
        "266": {
            "short": "Adjustment for compound preparation cost",
            "full": "Adjustment for compound preparation cost. Usage: To be used for pharmaceuticals only."
        },
        "267": {
            "short": "Claim/service spans multiple months",
            "full": "Claim/service spans multiple months. At least one Remark Code must be provided (may be comprised of either the"
        },
        "268": {
            "short": "The Claim spans two calendar years",
            "full": "The Claim spans two calendar years. Please resubmit one claim per calendar year."
        },
        "269": {
            "short": "Anesthesia not covered for this service/procedure",
            "full": "Anesthesia not covered for this service/procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment"
        },
        "270": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "271": {
            "short": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when",
            "full": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when"
        },
        "272": {
            "short": "Coverage/program guidelines were not met",
            "full": "Coverage/program guidelines were not met."
        },
        "273": {
            "short": "Coverage/program guidelines were exceeded",
            "full": "Coverage/program guidelines were exceeded."
        },
        "274": {
            "short": "Fee/Service not payable per patient Care Coordination arrangement",
            "full": "Fee/Service not payable per patient Care Coordination arrangement."
        },
        "275": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered. (Use only with Group"
        },
        "276": {
            "short": "Services denied by the prior payer(s) are not covered by this payer",
            "full": "Services denied by the prior payer(s) are not covered by this payer."
        },
        "277": {
            "short": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance",
            "full": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance"
        },
        "278": {
            "short": "Performance program proficiency requirements not met",
            "full": "Performance program proficiency requirements not met. (Use only with Group Codes CO or PI) Usage: Refer to the 835"
        },
        "279": {
            "short": "Services not provided by Preferred network providers",
            "full": "Services not provided by Preferred network providers. Usage: Use this code when there are member network"
        },
        "280": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "281": {
            "short": "Deductible waived per contractual agreement",
            "full": "Deductible waived per contractual agreement. Use only with Group Code CO."
        },
        "282": {
            "short": "The procedure/revenue code is inconsistent with the type of bill",
            "full": "The procedure/revenue code is inconsistent with the type of bill. Usage: Refer to the 835 Healthcare Policy Identification"
        },
        "283": {
            "short": "Attending provider is not eligible to provide direction of care",
            "full": "Attending provider is not eligible to provide direction of care."
        },
        "284": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services."
        },
        "285": {
            "short": "Appeal procedures not followed",
            "full": "Appeal procedures not followed"
        },
        "286": {
            "short": "Appeal time limits not met",
            "full": "Appeal time limits not met"
        },
        "287": {
            "short": "Referral exceeded",
            "full": "Referral exceeded"
        },
        "288": {
            "short": "Referral absent",
            "full": "Referral absent"
        },
        "289": {
            "short": "Services considered under the dental and medical plans, benefits not available",
            "full": "Services considered under the dental and medical plans, benefits not available."
        },
        "290": {
            "short": "Claim received by the dental plan, but benefits not available under this plan",
            "full": "Claim received by the dental plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "291": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "292": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "293": {
            "short": "Payment made to employer",
            "full": "Payment made to employer."
        },
        "294": {
            "short": "Payment made to attorney",
            "full": "Payment made to attorney."
        },
        "295": {
            "short": "Pharmacy Direct/Indirect Remuneration (DIR)",
            "full": "Pharmacy Direct/Indirect Remuneration (DIR)"
        },
        "296": {
            "short": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider",
            "full": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider."
        },
        "297": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "298": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "299": {
            "short": "The billing provider is not eligible to receive payment for the service billed",
            "full": "The billing provider is not eligible to receive payment for the service billed."
        },
        "300": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "301": {
            "short": "Claim received by the Medical Plan, but benefits not available under this plan",
            "full": "Claim received by the Medical Plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "302": {
            "short": "Precertification/notification/authorization/pre-treatment time limit has expired",
            "full": "Precertification/notification/authorization/pre-treatment time limit has expired."
        },
        "303": {
            "short": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified",
            "full": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified"
        },
        "304": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's"
        },
        "305": {
            "short": "Claim received by the medical plan, but benefits not available under this plan",
            "full": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's"
        },
        "835": {
            "short": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "2110": {
            "short": "Service Payment information REF)",
            "full": "Service Payment information REF). To be used for Workers' Compensation only."
        },
        "Segment": {
            "short": "(loop 2110 Service Payment Information REF), if present",
            "full": "(loop 2110 Service Payment Information REF), if present."
        },
        "Identification": {
            "short": "Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Policy": {
            "short": "Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "(loop": {
            "short": "2110 Service Payment Information REF), if present",
            "full": "2110 Service Payment Information REF), if present."
        },
        "(may": {
            "short": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code",
            "full": "be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason Code.)"
        },
        "requires": {
            "short": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)",
            "full": "a reversal and correction when the service line is finalized (use only in Loop 2110 CAS segment of the 835 or Loop 2430 of the 837)."
        },
        "PR": {
            "short": "or CO depending upon liability)",
            "full": "or CO depending upon liability)"
        },
        "Healthcare": {
            "short": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "to": {
            "short": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Information": {
            "short": "REF), if present",
            "full": "REF), if present."
        },
        "services.": {
            "short": "",
            "full": ""
        },
        "adjudicated.": {
            "short": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present",
            "full": "Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "Service": {
            "short": "Payment Information REF), if present",
            "full": "Payment Information REF), if present."
        },
        "either": {
            "short": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "provided": {
            "short": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "(may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Account,": {
            "short": "Health Reimbursement Account, etc",
            "full": "Health Reimbursement Account, etc.)"
        },
        "for": {
            "short": "this procedure/service",
            "full": "this procedure/service"
        },
        "Coinsurance": {
            "short": "and Co-payment",
            "full": "and Co-payment."
        },
        "Code,": {
            "short": "or Remittance Advice Remark Code that is not an ALERT",
            "full": "or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "may": {
            "short": "be billed to subsequent payer",
            "full": "be billed to subsequent payer. Refund to patient if collected. (Use only with Group code OA)"
        },
        "if": {
            "short": "the regulations apply",
            "full": "the regulations apply. To be used for Property and Casualty Auto only."
        },
        "mandated": {
            "short": "before a new code can be created",
            "full": "before a new code can be created."
        },
        "insufficient/incomplete.": {
            "short": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Advice": {
            "short": "Remark Code that is not an ALERT",
            "full": "Remark Code that is not an ALERT.)"
        },
        "payer": {
            "short": "for their adjudication",
            "full": "for their adjudication"
        },
        "the": {
            "short": "claim/service",
            "full": "claim/service."
        },
        "NCPDP": {
            "short": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "state": {
            "short": "regulations/ fee schedule requirements",
            "full": "regulations/ fee schedule requirements."
        },
        "Reject": {
            "short": "Reason Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "Group": {
            "short": "Code PR)",
            "full": "Code PR)"
        },
        "Reason": {
            "short": "Code, or Remittance Advice Remark Code that is not an ALERT",
            "full": "Code, or Remittance Advice Remark Code that is not an ALERT.)"
        },
        "ALERT).": {
            "short": "",
            "full": ""
        },
        "medical": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "payment": {
            "short": "or lack of premium payment)",
            "full": "or lack of premium payment). (Use only with Group Code OA)"
        },
        "dental": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "deferred": {
            "short": "amounts have been previously reported",
            "full": "amounts have been previously reported. (Use only with Group Code OA)"
        },
        "Code": {
            "short": "PR)",
            "full": "PR)"
        },
        "SHOP": {
            "short": "Exchange requirements",
            "full": "Exchange requirements. This claim/service will be reversed and corrected when the grace period ends (due to premium payment or lack of premium payment). (Use only with Group Code OA)"
        },
        "limitations.": {
            "short": "For example, using contracted providers not in the member's 'narrow' network",
            "full": "For example, using contracted providers not in the member's 'narrow' network."
        },
        "Pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "pharmacy": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "vision": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "Behavioral": {
            "short": "Health Plan for further consideration",
            "full": "Health Plan for further consideration."
        },
        "Medicare": {
            "short": "and Medicaid Beneficiaries",
            "full": "and Medicaid Beneficiaries. (Use only with Group Code CO)"
        },
        "hearing": {
            "short": "plan for further consideration",
            "full": "plan for further consideration."
        },
        "A0": {
            "short": "Patient refund amount",
            "full": "Patient refund amount."
        },
        "A1": {
            "short": "Claim/Service denied",
            "full": "Claim/Service denied. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject"
        },
        "A5": {
            "short": "Medicare Claim PPS Capital Cost Outlier Amount",
            "full": "Medicare Claim PPS Capital Cost Outlier Amount."
        },
        "A6": {
            "short": "Prior hospitalization or 30 day transfer requirement not met",
            "full": "Prior hospitalization or 30 day transfer requirement not met."
        },
        "A8": {
            "short": "Ungroupable DRG",
            "full": "Ungroupable DRG."
        },
        "B1": {
            "short": "Non-covered visits",
            "full": "Non-covered visits."
        },
        "B10": {
            "short": "Allowed amount has been reduced because a component of the basic procedure/test was paid",
            "full": "Allowed amount has been reduced because a component of the basic procedure/test was paid. The beneficiary is not"
        },
        "liable": {
            "short": "for more than the charge limit for the basic procedure/test",
            "full": "for more than the charge limit for the basic procedure/test."
        },
        "B11": {
            "short": "The claim/service has been transferred to the proper payer/processor for processing",
            "full": "The claim/service has been transferred to the proper payer/processor for processing. Claim/service not covered by this"
        },
        "payer/processor.": {
            "short": "",
            "full": ""
        },
        "B12": {
            "short": "Services not documented in patient's medical records",
            "full": "Services not documented in patient's medical records."
        },
        "B13": {
            "short": "Previously paid",
            "full": "Previously paid. Payment for this claim/service may have been provided in a previous payment."
        },
        "B14": {
            "short": "Only one visit or consultation per physician per day is covered",
            "full": "Only one visit or consultation per physician per day is covered."
        },
        "B15": {
            "short": "This service/procedure requires that a qualifying service/procedure be received and covered",
            "full": "This service/procedure requires that a qualifying service/procedure be received and covered. The qualifying other"
        },
        "service/procedure": {
            "short": "has not been received/adjudicated",
            "full": "has not been received/adjudicated. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
        },
        "B16": {
            "short": "'New Patient' qualifications were not met",
            "full": "'New Patient' qualifications were not met."
        },
        "B20": {
            "short": "Procedure/service was partially or fully furnished by another provider",
            "full": "Procedure/service was partially or fully furnished by another provider."
        },
        "B22": {
            "short": "This payment is adjusted based on the diagnosis",
            "full": "This payment is adjusted based on the diagnosis."
        },
        "B23": {
            "short": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test",
            "full": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test."
        },
        "B4": {
            "short": "Late filing penalty",
            "full": "Late filing penalty."
        },
        "B5": {
            "short": "Coverage/program guidelines were not met or were exceeded",
            "full": "Coverage/program guidelines were not met or were exceeded."
        },
        "B7": {
            "short": "This provider was not certified/eligible to be paid for this procedure/service on this date of service",
            "full": "This provider was not certified/eligible to be paid for this procedure/service on this date of service. Usage: Refer to the"
        },
        "B8": {
            "short": "Alternative services were available, and should have been utilized",
            "full": "Alternative services were available, and should have been utilized. Usage: Refer to the 835 Healthcare Policy"
        },
        "B9": {
            "short": "Patient is enrolled in a Hospice",
            "full": "Patient is enrolled in a Hospice."
        },
        "P1": {
            "short": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation",
            "full": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation. To"
        },
        "be": {
            "short": "used for Property and Casualty only",
            "full": "used for Property and Casualty only. (Use only with Group Code CO)."
        },
        "P10": {
            "short": "Payment reduced to zero due to litigation",
            "full": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To"
        },
        "P11": {
            "short": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation",
            "full": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. To be used for"
        },
        "Property": {
            "short": "and Casualty only",
            "full": "and Casualty only."
        },
        "P12": {
            "short": "Workers' compensation jurisdictional fee schedule adjustment",
            "full": "Workers' compensation jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "To": {
            "short": "be used for Property and Casualty only",
            "full": "be used for Property and Casualty only."
        },
        "P13": {
            "short": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable",
            "full": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P14": {
            "short": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day",
            "full": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service"
        },
        "Payment": {
            "short": "Information REF), if present",
            "full": "Information REF), if present. To be used for Property and Casualty only."
        },
        "P15": {
            "short": "Workers' Compensation Medical Treatment Guideline Adjustment",
            "full": "Workers' Compensation Medical Treatment Guideline Adjustment. To be used for Workers' Compensation only."
        },
        "P16": {
            "short": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction",
            "full": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. To be used for"
        },
        "Workers'": {
            "short": "Compensation only",
            "full": "Compensation only. (Use with Group Code CO or OA)"
        },
        "P17": {
            "short": "Referral not authorized by attending physician per regulatory requirement",
            "full": "Referral not authorized by attending physician per regulatory requirement. To be used for Property and Casualty only."
        },
        "P18": {
            "short": "Procedure is not listed in the jurisdiction fee schedule",
            "full": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service. To be"
        },
        "used": {
            "short": "for Property and Casualty only",
            "full": "for Property and Casualty only."
        },
        "P19": {
            "short": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due",
            "full": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due. To be used for"
        },
        "P2": {
            "short": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation",
            "full": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop"
        },
        "P20": {
            "short": "Service not paid under jurisdiction allowed outpatient facility fee schedule",
            "full": "Service not paid under jurisdiction allowed outpatient facility fee schedule. To be used for Property and Casualty only."
        },
        "P21": {
            "short": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P22": {
            "short": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies",
            "full": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF)"
        },
        "P23": {
            "short": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment",
            "full": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property and Casualty Auto only."
        },
        "P24": {
            "short": "Payment adjusted based on Preferred Provider Organization (PPO)",
            "full": "Payment adjusted based on Preferred Provider Organization (PPO). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P25": {
            "short": "Payment adjusted based on Medical Provider Network (MPN)",
            "full": "Payment adjusted based on Medical Provider Network (MPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To"
        },
        "P26": {
            "short": "Payment adjusted based on Voluntary Provider network (VPN)",
            "full": "Payment adjusted based on Voluntary Provider network (VPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply."
        },
        "P27": {
            "short": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "and": {
            "short": "Casualty only",
            "full": "Casualty only."
        },
        "P28": {
            "short": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies",
            "full": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') if the jurisdictional regulation applies. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be used for Property"
        },
        "P29": {
            "short": "Liability Benefits jurisdictional fee schedule adjustment",
            "full": "Liability Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identification Segment (Loop 2100 Other Claim Related Information REF). If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF) if the regulations apply. To be"
        },
        "P3": {
            "short": "Workers' Compensation case settled",
            "full": "Workers' Compensation case settled. Patient is responsible for amount of this claim/service through WC 'Medicare set aside arrangement' or other agreement. To be used for Workers' Compensation only. (Use only with Group Code PR)"
        },
        "P30": {
            "short": "Payment denied for exacerbation when supporting documentation was not complete",
            "full": "Payment denied for exacerbation when supporting documentation was not complete. To be used for Property and"
        },
        "Casualty": {
            "short": "only",
            "full": "only."
        },
        "P31": {
            "short": "Payment denied for exacerbation when treatment exceeds time allowed",
            "full": "Payment denied for exacerbation when treatment exceeds time allowed. To be used for Property and Casualty only."
        },
        "P4": {
            "short": "Workers' Compensation claim adjudicated as non-compensable",
            "full": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Workers' Compensation only"
        },
        "P5": {
            "short": "Based on payer reasonable and customary fees",
            "full": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. To be"
        },
        "P6": {
            "short": "Based on entitlement to benefits",
            "full": "Based on entitlement to benefits. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property"
        },
        "P7": {
            "short": "The applicable fee schedule/fee database does not contain the billed code",
            "full": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided and supporting documentation if required."
        },
        "P8": {
            "short": "Claim is under investigation",
            "full": "Claim is under investigation. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related Information REF qualifier 'IG') for the jurisdictional regulation. If adjustment is at the Line Level, the payer must send and the provider should refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment information REF). To be used for Property and"
        },
        "P9": {
            "short": "No available or correlating CPT/HCPCS code to describe this service",
            "full": "No available or correlating CPT/HCPCS code to describe this service. To be used for Property and Casualty only."
        }
    }
};