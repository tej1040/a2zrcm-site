const rarcData = {
    "RARC": {
  "N1": {
    short: "Appeal rights available.",
    full: "Alert: You may appeal this decision in writing within the required time limits following receipt of this notice."
  },

  "N2": {
    short: "Allowance based on appropriate treatment.",
    full: "This allowance has been made in accordance with the most appropriate course of treatment provision of the plan."
  },

  "N3": {
    short: "Consent form missing.",
    full: "Missing consent form."
  },

  "N4": {
    short: "Prior payer EOB missing.",
    full: "Missing, incomplete, or invalid prior insurance carrier Explanation of Benefits."
  },

  "N5": {
    short: "Claim not on file.",
    full: "Explanation of Benefits received from previous payer. Claim not on file."
  },

  "N6": {
    short: "Payment limited by FEHB law.",
    full: "Under FEHB law, payment cannot exceed what Medicare would allow."
  },

  "N7": {
    short: "Major Medical provisions applied.",
    full: "Alert: Processing included consideration under Major Medical provisions."
  },

  "N8": {
    short: "Crossover data missing.",
    full: "Crossover claim denied by previous payer and complete claim data not forwarded."
  },

  "N9": {
    short: "Estimated previous payer payment.",
    full: "Adjustment represents the estimated amount a previous payer may pay."
  },

  "N10": {
    short: "Medical review adjustment.",
    full: "Adjustment based on findings of review organization or professional consult."
  },

  "N11": {
    short: "Denial reversed.",
    full: "Denial reversed because of medical review."
  },

  "N12": {
    short: "Medicare not enrolled.",
    full: "Policy provides coverage supplemental to Medicare. Member not enrolled in Medicare."
  },

  "N13": {
    short: "Professional/technical modifier applied.",
    full: "Payment based on professional or technical component modifiers."
  },

  "N15": {
    short: "Newborn billed incorrectly.",
    full: "Services for a newborn must be billed separately."
  },

  "N16": {
    short: "Out-of-pocket maximum met.",
    full: "Family or member out-of-pocket maximum has been met."
  },

  "N19": {
    short: "Procedure incidental.",
    full: "Procedure code incidental to primary procedure."
  },

  "N20": {
    short: "Not payable with other service.",
    full: "Service not payable with other service rendered on the same date."
  },

  "N21": {
    short: "Line items separated.",
    full: "Alert: Line item separated into multiple lines for processing."
  },

  "N22": {
    short: "Procedure code changed.",
    full: "Alert: Procedure code was added or changed to better describe services rendered."
  },

  "N23": {
    short: "COB may affect patient liability.",
    full: "Alert: Patient liability may be affected due to coordination of benefits."
  },

  "N24": {
    short: "EFT information missing.",
    full: "Missing, incomplete, or invalid Electronic Funds Transfer banking information."
  },

  "N25": {
    short: "Administrative services only.",
    full: "This company provides administrative claims payment services only and assumes no financial risk."
  },
  "N26": {
    short: "Itemized bill missing.",
    full: "Missing itemized bill or statement."
  },

  "N27": {
    short: "Treatment number missing.",
    full: "Missing, incomplete, or invalid treatment number."
  },

  "N28": {
    short: "Consent form requirements not met.",
    full: "Consent form requirements not fulfilled."
  },

  "N30": {
    short: "Patient ineligible.",
    full: "Patient ineligible for this service."
  },

  "N31": {
    short: "Prescribing provider ID missing.",
    full: "Missing, incomplete, or invalid prescribing provider identifier."
  },

  "N32": {
    short: "Wrong billing provider.",
    full: "Claim must be submitted by the provider who rendered the service."
  },

  "N33": {
    short: "Health check missing.",
    full: "No record of health check prior to initiation of treatment."
  },

  "N34": {
    short: "Incorrect claim format.",
    full: "Incorrect claim form or format for this service."
  },

  "N35": {
    short: "Utilization review decision.",
    full: "Program integrity or utilization review decision."
  },

  "N36": {
    short: "Primary payer rules not met.",
    full: "Claim must meet primary payer requirements before consideration."
  },

  "N37": {
    short: "Tooth number missing.",
    full: "Missing, incomplete, or invalid tooth number or letter."
  },

  "N39": {
    short: "Procedure incompatible with tooth.",
    full: "Procedure code is not compatible with tooth number or letter."
  },

  "N40": {
    short: "Radiology images missing.",
    full: "Missing radiology films or images."
  },

  "N42": {
    short: "Mental health assessment missing.",
    full: "Missing mental health assessment."
  },

  "N43": {
    short: "Bed hold exceeded.",
    full: "Bed hold or leave days exceeded."
  },

  "N45": {
    short: "Authorized amount applied.",
    full: "Payment based on authorized amount."
  },

  "N46": {
    short: "Admission hour missing.",
    full: "Missing, incomplete, or invalid admission hour."
  },

  "N47": {
    short: "Inpatient stay conflict.",
    full: "Claim conflicts with another inpatient stay."
  },

  "N48": {
    short: "Insurance info mismatch.",
    full: "Claim information does not match information from another payer."
  },

  "N49": {
    short: "Court ordered coverage not verified.",
    full: "Court ordered coverage information requires validation."
  },

  "N50": {
    short: "Discharge info missing.",
    full: "Missing, incomplete, or invalid discharge information."
  },

  "N51": {
    short: "EDI agreement missing.",
    full: "Electronic interchange agreement not on file."
  },

  "N52": {
    short: "Patient not enrolled in plan.",
    full: "Patient not enrolled in providers managed care plan on date of service."
  },

  "N53": {
    short: "Pickup address missing.",
    full: "Missing, incomplete, or invalid point of pick-up address."
  },

  "N54": {
    short: "Service inconsistent with authorization.",
    full: "Claim information inconsistent with pre-certified or authorized services."
  },

  "N55": {
    short: "Provider billing rules not followed.",
    full: "Procedures for billing with group, referring, or performing providers not followed."
  },

  "N56": {
    short: "Invalid procedure code.",
    full: "Procedure code billed is not correct or valid for services rendered."
  },

  "N57": {
    short: "Prescribing date missing.",
    full: "Missing, incomplete, or invalid prescribing date."
  },

  "N58": {
    short: "Patient liability missing.",
    full: "Missing, incomplete, or invalid patient liability amount."
  },

  "N59": {
    short: "Refer provider manual.",
    full: "Alert: Refer to provider manual for additional information."
  },

  "N61": {
    short: "Rebill on separate claims.",
    full: "Rebill services on separate claims."
  },

  "N62": {
    short: "Multiple rate periods.",
    full: "Dates of service span multiple rate periods."
  },

  "N63": {
    short: "Rebill on separate claim lines.",
    full: "Rebill services on separate claim lines."
  },

  "N64": {
    short: "From and to dates invalid.",
    full: "The from and to dates must be different."
  },

  "N65": {
    short: "Rate not on file.",
    full: "Procedure code or rate cannot be determined for date of service."
  },

  "N67": {
    short: "Professional services included in facility payment.",
    full: "Professional provider services included in facility payment under demonstration project."
  },

  "N68": {
    short: "Prior payment cancelled.",
    full: "Prior payment cancelled due to demonstration project coverage."
  },

  "N69": {
    short: "PPS code changed by system.",
    full: "Alert: PPS code changed by claims processing system."
  },

  "N70": {
    short: "Consolidated billing applies.",
    full: "Consolidated billing and payment applies."
  },

  "N71": {
    short: "Unassigned claim processed as assigned.",
    full: "Unassigned drug or lab claim processed as assigned."
  },

  "N72": {
    short: "PPS code changed by reviewer.",
    full: "PPS code changed by medical reviewers."
  },

  "N74": {
    short: "Monthly rebilling required.",
    full: "Resubmit separate claims for each calendar month."
  },

  "N75": {
    short: "Tooth surface missing.",
    full: "Missing, incomplete, or invalid tooth surface information."
  },
  "N76": {
    short: "Diagnosis information missing.",
    full: "Missing, incomplete, or invalid diagnosis or condition."
  },

  "N77": {
    short: "Designated provider number missing.",
    full: "Missing, incomplete, or invalid designated provider number."
  },

  "N78": {
    short: "EPSDT components incomplete.",
    full: "The necessary components of the child and teen checkup (EPSDT) were not completed."
  },

  "N79": {
    short: "Service incompatible with patient location.",
    full: "Service billed is not compatible with patient location information."
  },

  "N80": {
    short: "Prenatal screening info missing.",
    full: "Missing, incomplete, or invalid prenatal screening information."
  },

  "N81": {
    short: "Procedure incompatible with tooth surface.",
    full: "Procedure billed is not compatible with tooth surface code."
  },

  "N82": {
    short: "Accept insurance as full payment.",
    full: "Provider must accept insurance payment as payment in full."
  },

  "N83": {
    short: "No appeal rights under demonstration.",
    full: "No appeal rights. Decision based on demonstration project provisions."
  },

  "N84": {
    short: "Additional installment payments forthcoming.",
    full: "Alert: Further installment payments are forthcoming."
  },

  "N85": {
    short: "Final installment payment.",
    full: "Alert: This is the final installment payment."
  },

  "N86": {
    short: "Failed pelvic muscle training required.",
    full: "A failed trial of pelvic muscle exercise training is required for coverage."
  },

  "N87": {
    short: "Home biofeedback not covered.",
    full: "Home use of biofeedback therapy is not covered."
  },

  "N88": {
    short: "Conditional payment due to home health.",
    full: "Alert: Payment made conditionally due to possible home health episode of care."
  },

  "N89": {
    short: "Payment forwarded to other payers.",
    full: "Alert: Payment information forwarded to one or more other payers."
  },

  "N90": {
    short: "Covered only by attending physician.",
    full: "Covered only when performed by the attending physician."
  },

  "N91": {
    short: "Service excluded from appeal review.",
    full: "Services not included in the appeal review."
  },

  "N92": {
    short: "Facility not certified for digital mammography.",
    full: "This facility is not certified for digital mammography."
  },

  "N93": {
    short: "Separate claim per place of service.",
    full: "A separate claim must be submitted for each place of service."
  },

  "N94": {
    short: "More specific taxonomy required.",
    full: "Claim denied because a more specific taxonomy code is required."
  },

  "N95": {
    short: "Provider specialty cannot bill service.",
    full: "This provider type or specialty may not bill this service."
  },

  "N96": {
    short: "Refractory to conventional therapy required.",
    full: "Patient must be refractory to conventional therapy and an appropriate surgical candidate."
  },

  "N97": {
    short: "Neurologic conditions excluded.",
    full: "Patients with certain neurologic conditions are excluded from coverage."
  },

  "N98": {
    short: "Successful test stimulation required.",
    full: "Patient must demonstrate at least 50 percent improvement through test stimulation."
  },

  "N99": {
    short: "Voiding diary required.",
    full: "Patient must be able to record adequate voiding diary data."
  },

  "N100": {
    short: "Provider not authorized for service.",
    full: "Provider not authorized to perform or bill this service."
  },

  "N101": {
    short: "Invalid procedure modifier.",
    full: "Missing, incomplete, or invalid procedure modifier."
  },

  "N102": {
    short: "Invalid revenue code.",
    full: "Missing, incomplete, or invalid revenue code."
  },

  "N103": {
    short: "Patient in custody during service.",
    full: "Records indicate this patient was in custody when the service was rendered."
  },

  "N104": {
    short: "Not payable in this jurisdiction.",
    full: "This claim or service is not payable under our claims jurisdiction."
  },

  "N105": {
    short: "Misdirected RRB claim.",
    full: "This is a misdirected claim or service for a Railroad Retirement Board beneficiary."
  },

  "N106": {
    short: "SNF inpatient services payable to SNF.",
    full: "Payment for services furnished to Skilled Nursing Facility inpatients can only be made to the SNF."
  },

  "N107": {
    short: "SNF services must be billed inpatient.",
    full: "Services furnished to SNF inpatients must be billed on the inpatient claim."
  },

  "N108": {
    short: "Upgrade information missing.",
    full: "Missing, incomplete, or invalid upgrade information."
  },

  "N109": {
    short: "Claim selected for complex review.",
    full: "Alert: This claim or service was chosen for complex review."
  },

  "N110": {
    short: "Facility not certified for film mammography.",
    full: "This facility is not certified for film mammography."
  },

  "N111": {
    short: "No appeal except duplicate issue.",
    full: "No appeal rights except for duplicate claim or service issues."
  },

  "N112": {
    short: "Excluded from electronic remittance.",
    full: "This claim is excluded from electronic remittance advice."
  },

  "N113": {
    short: "Only one initial visit allowed.",
    full: "Only one initial visit is covered per provider or group practice."
  },

  "N114": {
    short: "Ambulance blended rate applied.",
    full: "Payment based on blended amounts during transition to Ambulance Fee Schedule."
  },

  "N115": {
    short: "Decision based on LCD.",
    full: "This decision was based on a Local Coverage Determination (LCD)."
  },

  "N116": {
    short: "Conditional payment due to home health.",
    full: "Alert: Conditional payment made due to possible home health episode of care."
  },

  "N117": {
    short: "Payable once per lifetime.",
    full: "This service is paid only once in a patients lifetime."
  },

  "N118": {
    short: "Frequency limit every 28 days.",
    full: "This service is not paid if billed more than once every 28 days."
  },

  "N119": {
    short: "Recent inpatient stay prevents payment.",
    full: "Service not paid if patient had five or more consecutive inpatient days within 28 days."
  },

  "N120": {
    short: "Home health payment adjustment.",
    full: "Payment subject to home health prospective payment system adjustment."
  },

  "N121": {
    short: "Part B not payable during SNF stay.",
    full: "Medicare Part B does not pay for services during a Part A covered SNF stay."
  },

  "N122": {
    short: "Add-on code billed alone.",
    full: "Add-on code cannot be billed by itself."
  },

  "N123": {
    short: "Split service payment.",
    full: "Alert: This is a split service representing part of the original service."
  },

  "N124": {
    short: "Documentation does not support extensive service.",
    full: "Payment denied or reduced because documentation does not support the more extensive service."
  },

  "N125": {
    short: "Refund required for unsupported service.",
    full: "Refund required if payment was collected for an unsupported service."
  },
  "N126": {
    short: "Service not covered for deported individuals.",
    full: "This payer does not cover services furnished to individuals who have been deported."
  },

  "N127": {
    short: "Misdirected UMWA claim.",
    full: "This is a misdirected claim or service for a United Mine Workers of America beneficiary."
  },

  "N128": {
    short: "Prior-to-coverage allowance.",
    full: "This amount represents the prior to coverage portion of the allowance."
  },

  "N129": {
    short: "Not eligible due to age.",
    full: "Not eligible due to the patients age."
  },

  "N130": {
    short: "Refer to plan benefit documents.",
    full: "Consult plan benefit documents or guidelines for information about restrictions for this service."
  },

  "N131": {
    short: "Consult Medicare manual.",
    full: "Consult the applicable Medicare manual for coverage and payment policy."
  },

  "N132": {
    short: "Decision based on NCD.",
    full: "This decision was based on a National Coverage Determination (NCD)."
  },

  "N133": {
    short: "Service not covered when provided by relative.",
    full: "This service is not covered when provided by a relative of the patient."
  },

  "N134": {
    short: "Service excluded by statute.",
    full: "Claim or service denied because it is excluded by statute."
  },

  "N135": {
    short: "Interim billing not supported.",
    full: "Interim bills are not supported for this claim or service."
  },

  "N136": {
    short: "Appeal instructions via state authority.",
    full: "Alert: Appeal instructions are available through the state authority."
  },

  "N137": {
    short: "Competitive bidding adjustment.",
    full: "Payment adjusted due to participation in a competitive bidding program."
  },

  "N138": {
    short: "Subject to medical review.",
    full: "Services subject to medical review."
  },

  "N139": {
    short: "Prior authorization required.",
    full: "This service requires prior authorization."
  },

  "N140": {
    short: "Invalid therapy cap modifier.",
    full: "Missing, incorrect, or invalid therapy cap modifier."
  },

  "N141": {
    short: "Not in long-term care.",
    full: "Patient was not residing in a long-term care facility during the dates of service."
  },

  "N142": {
    short: "Resubmit as new claim.",
    full: "Original claim denied. Submit a new claim."
  },

  "N143": {
    short: "Frequency limit exceeded.",
    full: "Service denied because it exceeds frequency limitations."
  },

  "N144": {
    short: "Invalid provider taxonomy.",
    full: "Missing or invalid provider taxonomy code."
  },

  "N145": {
    short: "Provider not certified.",
    full: "Provider is not certified or approved to furnish this service."
  },

  "N146": {
    short: "Required screening document missing.",
    full: "Missing required screening document."
  },

  "N147": {
    short: "Lack of documentation.",
    full: "Claim or service denied due to lack of supporting documentation."
  },

  "N148": {
    short: "Ordering provider ID missing.",
    full: "Missing, incomplete, or invalid ordering provider identifier."
  },

  "N149": {
    short: "Referring provider ID missing.",
    full: "Missing, incomplete, or invalid referring provider identifier."
  },

  "N150": {
    short: "Diagnosis not covered.",
    full: "Service denied because diagnosis is not covered for this procedure."
  },

  "N151": {
    short: "Invalid place of service.",
    full: "Service denied due to invalid or non-covered place of service."
  },

  "N152": {
    short: "Accident information missing.",
    full: "Missing, incomplete, or invalid accident-related information."
  },

  "N153": {
    short: "Included in global surgery.",
    full: "Service is included in the global surgery period."
  },

  "N154": {
    short: "Not separately payable.",
    full: "Service is not separately payable."
  },

  "N155": {
    short: "Provider signature missing.",
    full: "Missing or invalid provider signature."
  },

  "N156": {
    short: "Supervising provider info missing.",
    full: "Missing, incomplete, or invalid supervising provider information."
  },

  "N157": {
    short: "Experimental or investigational.",
    full: "Service denied because it is experimental or investigational."
  },

  "N158": {
    short: "Ambulance modifier missing.",
    full: "Missing, incomplete, or invalid ambulance modifier."
  },

  "N159": {
    short: "Transport not medically necessary.",
    full: "Ambulance transport not medically necessary."
  },

  "N160": {
    short: "CLIA number missing.",
    full: "Missing or invalid CLIA laboratory number."
  },

  "N161": {
    short: "Provider enrollment issue.",
    full: "Service denied due to provider enrollment status."
  },

  "N162": {
    short: "Non-participating provider.",
    full: "Service denied because provider is non-participating."
  },

  "N163": {
    short: "Coverage terminated.",
    full: "Claim or service denied due to coverage termination."
  },

  "N164": {
    short: "Invalid modifier.",
    full: "Service denied due to invalid modifier."
  },

  "N165": {
    short: "Incomplete documentation.",
    full: "Service denied due to incomplete documentation."
  },

  "N166": {
    short: "Benefit maximum reached.",
    full: "Service denied because benefit maximum has been reached."
  },

  "N167": {
    short: "Authorization number missing.",
    full: "Missing or invalid authorization number."
  },

  "N168": {
    short: "Invalid units billed.",
    full: "Service denied due to invalid or excessive units."
  },

  "N169": {
    short: "Duplicate billing.",
    full: "Service denied due to duplicate billing."
  },

  "N170": {
    short: "New or revised CMN required.",
    full: "A new or revised Certificate of Medical Necessity is required."
  },

  "N171": {
    short: "Invalid date range.",
    full: "Service denied due to invalid date range."
  },

  "N172": {
    short: "Patient not liable.",
    full: "The patient is not liable for the denied charge or charges."
  },

  "N173": {
    short: "Progress notes missing.",
    full: "Service denied due to missing progress notes."
  },

  "N174": {
    short: "Provider specialty restriction.",
    full: "Service denied due to provider specialty restriction."
  },

  "N175": {
    short: "Invalid revenue code.",
    full: "Service denied due to invalid revenue code."
  },
  "N176": {
    short: "Invalid HCPCS code.",
    full: "Service denied due to invalid HCPCS code."
  },

  "N177": {
    short: "Invalid diagnosis pointer.",
    full: "Service denied due to invalid diagnosis pointer."
  },

  "N178": {
    short: "Invalid charge amount.",
    full: "Service denied due to invalid charge amount."
  },

  "N179": {
    short: "Invalid billing provider.",
    full: "Service denied due to invalid billing provider."
  },

  "N180": {
    short: "Invalid rendering provider.",
    full: "Service denied due to invalid rendering provider."
  },

  "N181": {
    short: "Documentation missing.",
    full: "Service denied due to missing documentation."
  },

  "N182": {
    short: "Invalid claim frequency.",
    full: "Service denied due to invalid claim frequency."
  },

  "N183": {
    short: "Invalid payer information.",
    full: "Service denied due to invalid payer information."
  },

  "N184": {
    short: "Coordination of benefits issue.",
    full: "Service denied due to coordination of benefits."
  },

  "N185": {
    short: "Do not resubmit.",
    full: "Alert: Do not resubmit this claim or service."
  },

  "N186": {
    short: "Invalid patient information.",
    full: "Service denied due to invalid patient information."
  },

  "N187": {
    short: "Invalid policy number.",
    full: "Service denied due to invalid policy number."
  },

  "N188": {
    short: "Invalid subscriber information.",
    full: "Service denied due to invalid subscriber information."
  },

  "N189": {
    short: "Invalid group number.",
    full: "Service denied due to invalid group number."
  },

  "N190": {
    short: "Invalid authorization.",
    full: "Service denied due to invalid authorization."
  },

  "N191": {
    short: "Invalid coverage dates.",
    full: "Service denied due to invalid coverage dates."
  },

  "N192": {
    short: "Invalid benefit plan.",
    full: "Service denied due to invalid benefit plan."
  },

  "N193": {
    short: "Invalid claim status.",
    full: "Service denied due to invalid claim status."
  },

  "N194": {
    short: "Invalid network status.",
    full: "Service denied due to invalid network status."
  },

  "N195": {
    short: "Invalid service location.",
    full: "Service denied due to invalid service location."
  },

  "N196": {
    short: "Invalid provider contract.",
    full: "Service denied due to invalid provider contract."
  },

  "N197": {
    short: "Invalid referral.",
    full: "Service denied due to invalid referral."
  },

  "N198": {
    short: "Invalid coverage type.",
    full: "Service denied due to invalid coverage type."
  },

  "N199": {
    short: "Invalid payment methodology.",
    full: "Service denied due to invalid payment methodology."
  },

  "N200": {
    short: "Invalid billing arrangement.",
    full: "Service denied due to invalid billing arrangement."
  },

  "N201": {
    short: "Invalid accident date.",
    full: "Service denied due to invalid accident date."
  },

  "N202": {
    short: "Invalid accident state.",
    full: "Service denied due to invalid accident state."
  },

  "N203": {
    short: "Invalid accident type.",
    full: "Service denied due to invalid accident type."
  },

  "N204": {
    short: "Invalid DRG.",
    full: "Service denied due to invalid Diagnosis Related Group."
  },

  "N205": {
    short: "Invalid PPS indicator.",
    full: "Service denied due to invalid PPS indicator."
  },

  "N206": {
    short: "Invalid discharge status.",
    full: "Service denied due to invalid discharge status."
  },

  "N207": {
    short: "Invalid admission source.",
    full: "Service denied due to invalid admission source."
  },

  "N208": {
    short: "Invalid admission type.",
    full: "Service denied due to invalid admission type."
  },

  "N209": {
    short: "Invalid occurrence code.",
    full: "Service denied due to invalid occurrence code."
  },

  "N210": {
    short: "Appeal allowed.",
    full: "Alert: You may appeal this decision."
  },

  "N211": {
    short: "No appeal allowed.",
    full: "Alert: You may not appeal this decision."
  },

  "N212": {
    short: "Invalid value code.",
    full: "Service denied due to invalid value code."
  },

  "N213": {
    short: "Invalid condition code.",
    full: "Service denied due to invalid condition code."
  },

  "N214": {
    short: "Invalid occurrence span code.",
    full: "Service denied due to invalid occurrence span code."
  },

  "N215": {
    short: "Invalid admission diagnosis.",
    full: "Service denied due to invalid admission diagnosis."
  },

  "N216": {
    short: "Invalid patient status.",
    full: "Service denied due to invalid patient status."
  },

  "N217": {
    short: "Invalid attending provider.",
    full: "Service denied due to invalid attending provider."
  },

  "N218": {
    short: "Invalid operating provider.",
    full: "Service denied due to invalid operating provider."
  },

  "N219": {
    short: "Invalid other provider.",
    full: "Service denied due to invalid other provider."
  },

  "N220": {
    short: "Invalid principal diagnosis.",
    full: "Service denied due to invalid principal diagnosis."
  },

  "N221": {
    short: "Invalid admitting diagnosis.",
    full: "Service denied due to invalid admitting diagnosis."
  },

  "N222": {
    short: "Invalid principal procedure.",
    full: "Service denied due to invalid principal procedure."
  },

  "N223": {
    short: "Invalid other procedure.",
    full: "Service denied due to invalid other procedure."
  },

  "N224": {
    short: "Invalid anesthesia code.",
    full: "Service denied due to invalid anesthesia code."
  },

  "N225": {
    short: "Invalid surgical procedure.",
    full: "Service denied due to invalid surgical procedure."
  },
  "N226": {
    short: "Invalid diagnosis version.",
    full: "Service denied due to invalid diagnosis code version."
  },

  "N227": {
    short: "Invalid procedure version.",
    full: "Service denied due to invalid procedure code version."
  },

  "N228": {
    short: "Invalid DRG version.",
    full: "Service denied due to invalid Diagnosis Related Group version."
  },

  "N229": {
    short: "Invalid admission date.",
    full: "Service denied due to invalid admission date."
  },

  "N230": {
    short: "Invalid discharge date.",
    full: "Service denied due to invalid discharge date."
  },

  "N231": {
    short: "Invalid statement dates.",
    full: "Service denied due to invalid statement covers period."
  },

  "N232": {
    short: "Invalid occurrence date.",
    full: "Service denied due to invalid occurrence date."
  },

  "N233": {
    short: "Invalid span dates.",
    full: "Service denied due to invalid occurrence span dates."
  },

  "N234": {
    short: "Invalid service units.",
    full: "Service denied due to invalid units of service."
  },

  "N235": {
    short: "Invalid billed amount.",
    full: "Service denied due to invalid billed amount."
  },

  "N236": {
    short: "Invalid coinsurance amount.",
    full: "Service denied due to invalid coinsurance amount."
  },

  "N237": {
    short: "Invalid deductible amount.",
    full: "Service denied due to invalid deductible amount."
  },

  "N238": {
    short: "Invalid non-covered amount.",
    full: "Service denied due to invalid non-covered amount."
  },

  "N239": {
    short: "Invalid provider ZIP code.",
    full: "Service denied due to invalid provider ZIP code."
  },

  "N240": {
    short: "Invalid patient ZIP code.",
    full: "Service denied due to invalid patient ZIP code."
  },

  "N241": {
    short: "Invalid provider specialty.",
    full: "Service denied due to invalid provider specialty."
  },

  "N242": {
    short: "Invalid provider taxonomy.",
    full: "Service denied due to invalid provider taxonomy."
  },

  "N243": {
    short: "Invalid referring provider.",
    full: "Service denied due to invalid referring provider."
  },

  "N244": {
    short: "Invalid ordering provider.",
    full: "Service denied due to invalid ordering provider."
  },

  "N245": {
    short: "Invalid supervising provider.",
    full: "Service denied due to invalid supervising provider."
  },

  "N246": {
    short: "Invalid service facility.",
    full: "Service denied due to invalid service facility location."
  },

  "N247": {
    short: "Invalid billing entity.",
    full: "Service denied due to invalid billing entity."
  },

  "N248": {
    short: "Invalid pay-to provider.",
    full: "Service denied due to invalid pay-to provider."
  },

  "N249": {
    short: "Invalid rendering facility.",
    full: "Service denied due to invalid rendering facility."
  },

  "N250": {
    short: "Invalid admitting provider.",
    full: "Service denied due to invalid admitting provider."
  },

  "N251": {
    short: "Invalid attending provider.",
    full: "Service denied due to invalid attending provider."
  },

  "N252": {
    short: "Invalid operating provider.",
    full: "Service denied due to invalid operating provider."
  },

  "N253": {
    short: "Invalid other provider.",
    full: "Service denied due to invalid other provider."
  },

  "N254": {
    short: "Invalid claim note.",
    full: "Service denied due to invalid claim note."
  },

  "N255": {
    short: "Invalid documentation indicator.",
    full: "Service denied due to invalid documentation indicator."
  },

  "N256": {
    short: "Invalid condition indicator.",
    full: "Service denied due to invalid condition indicator."
  },

  "N257": {
    short: "Invalid admission indicator.",
    full: "Service denied due to invalid admission indicator."
  },

  "N258": {
    short: "Invalid discharge indicator.",
    full: "Service denied due to invalid discharge indicator."
  },

  "N259": {
    short: "Invalid treatment authorization.",
    full: "Service denied due to invalid treatment authorization."
  },

  "N260": {
    short: "Invalid precertification.",
    full: "Service denied due to invalid precertification."
  },

  "N261": {
    short: "Invalid referral authorization.",
    full: "Service denied due to invalid referral authorization."
  },

  "N262": {
    short: "Invalid prior authorization.",
    full: "Service denied due to invalid prior authorization."
  },

  "N263": {
    short: "Invalid service category.",
    full: "Service denied due to invalid service category."
  },

  "N264": {
    short: "Invalid benefit category.",
    full: "Service denied due to invalid benefit category."
  },

  "N265": {
    short: "Invalid coverage indicator.",
    full: "Service denied due to invalid coverage indicator."
  },

  "N266": {
    short: "Invalid plan indicator.",
    full: "Service denied due to invalid plan indicator."
  },

  "N267": {
    short: "Invalid contract indicator.",
    full: "Service denied due to invalid contract indicator."
  },

  "N268": {
    short: "Invalid eligibility indicator.",
    full: "Service denied due to invalid eligibility indicator."
  },

  "N269": {
    short: "Invalid enrollment indicator.",
    full: "Service denied due to invalid enrollment indicator."
  },

  "N270": {
    short: "Invalid coordination of benefits.",
    full: "Service denied due to invalid coordination of benefits information."
  },

  "N271": {
    short: "Invalid third-party liability.",
    full: "Service denied due to invalid third-party liability information."
  },

  "N272": {
    short: "Invalid accident indicator.",
    full: "Service denied due to invalid accident indicator."
  },

  "N273": {
    short: "Invalid employment indicator.",
    full: "Service denied due to invalid employment indicator."
  },

  "N274": {
    short: "Invalid student indicator.",
    full: "Service denied due to invalid student indicator."
  },

  "N275": {
    short: "Invalid disability indicator.",
    full: "Service denied due to invalid disability indicator."
  },
  "N276": {
    short: "Invalid accident date.",
    full: "Service denied due to invalid accident date."
  },

  "N277": {
    short: "Invalid injury date.",
    full: "Service denied due to invalid injury date."
  },

  "N278": {
    short: "Invalid onset date.",
    full: "Service denied due to invalid onset date."
  },

  "N279": {
    short: "Invalid last worked date.",
    full: "Service denied due to invalid last worked date."
  },

  "N280": {
    short: "Invalid return to work date.",
    full: "Service denied due to invalid return to work date."
  },

  "N281": {
    short: "Invalid assumed care date.",
    full: "Service denied due to invalid assumed care date."
  },

  "N282": {
    short: "Invalid relinquished care date.",
    full: "Service denied due to invalid relinquished care date."
  },

  "N283": {
    short: "Invalid certification date.",
    full: "Service denied due to invalid certification date."
  },

  "N284": {
    short: "Invalid recertification date.",
    full: "Service denied due to invalid recertification date."
  },

  "N285": {
    short: "Invalid revision date.",
    full: "Service denied due to invalid revision date."
  },

  "N286": {
    short: "Invalid evaluation date.",
    full: "Service denied due to invalid evaluation date."
  },

  "N287": {
    short: "Invalid re-evaluation date.",
    full: "Service denied due to invalid re-evaluation date."
  },

  "N288": {
    short: "Invalid therapy start date.",
    full: "Service denied due to invalid therapy start date."
  },

  "N289": {
    short: "Invalid therapy end date.",
    full: "Service denied due to invalid therapy end date."
  },

  "N290": {
    short: "Invalid prescription date.",
    full: "Service denied due to invalid prescription date."
  },

  "N291": {
    short: "Invalid order date.",
    full: "Service denied due to invalid physician order date."
  },

  "N292": {
    short: "Invalid procedure date.",
    full: "Service denied due to invalid procedure date."
  },

  "N293": {
    short: "Invalid surgery date.",
    full: "Service denied due to invalid surgery date."
  },

  "N294": {
    short: "Invalid test date.",
    full: "Service denied due to invalid test performed date."
  },

  "N295": {
    short: "Invalid dispense date.",
    full: "Service denied due to invalid dispensed date."
  },

  "N296": {
    short: "Invalid shipment date.",
    full: "Service denied due to invalid shipped date."
  },

  "N297": {
    short: "Invalid delivery date.",
    full: "Service denied due to invalid delivery date."
  },

  "N298": {
    short: "Invalid placement date.",
    full: "Service denied due to invalid appliance placement date."
  },

  "N299": {
    short: "Invalid assessment date.",
    full: "Service denied due to invalid assessment date."
  },

  "N300": {
    short: "Invalid discharge date/time.",
    full: "Service denied due to invalid discharge date or time."
  },

  "N301": {
    short: "Invalid admission hour.",
    full: "Service denied due to invalid admission hour."
  },

  "N302": {
    short: "Invalid discharge hour.",
    full: "Service denied due to invalid discharge hour."
  },

  "N303": {
    short: "Invalid last contact date.",
    full: "Service denied due to invalid last contact date."
  },

  "N304": {
    short: "Invalid last visit date.",
    full: "Service denied due to invalid last seen or visit date."
  },

  "N305": {
    short: "Invalid last x-ray date.",
    full: "Service denied due to invalid last x-ray date."
  },

  "N306": {
    short: "Invalid oxygen test date.",
    full: "Service denied due to invalid oxygen saturation test date."
  },

  "N307": {
    short: "Invalid blood gas test date.",
    full: "Service denied due to invalid blood gas test date."
  },

  "N308": {
    short: "Invalid sleep study date.",
    full: "Service denied due to invalid sleep study date."
  },

  "N309": {
    short: "Invalid vein study date.",
    full: "Service denied due to invalid vein study date."
  },

  "N310": {
    short: "Invalid imaging date.",
    full: "Service denied due to invalid imaging study date."
  },

  "N311": {
    short: "Invalid pathology date.",
    full: "Service denied due to invalid pathology report date."
  },

  "N312": {
    short: "Invalid radiology date.",
    full: "Service denied due to invalid radiology report date."
  },

  "N313": {
    short: "Invalid lab report date.",
    full: "Service denied due to invalid laboratory report date."
  },

  "N314": {
    short: "Invalid progress note date.",
    full: "Service denied due to invalid progress note date."
  },

  "N315": {
    short: "Invalid operative note date.",
    full: "Service denied due to invalid operative note date."
  },

  "N316": {
    short: "Invalid discharge summary date.",
    full: "Service denied due to invalid discharge summary date."
  },

  "N317": {
    short: "Invalid consultation date.",
    full: "Service denied due to invalid consultation report date."
  },

  "N318": {
    short: "Invalid history & physical date.",
    full: "Service denied due to invalid history and physical report date."
  },

  "N319": {
    short: "Invalid therapy note date.",
    full: "Service denied due to invalid therapy note date."
  },

  "N320": {
    short: "Invalid nursing note date.",
    full: "Service denied due to invalid nursing note date."
  },

  "N321": {
    short: "Invalid face-to-face date.",
    full: "Service denied due to invalid face-to-face encounter date."
  },

  "N322": {
    short: "Invalid certification period.",
    full: "Service denied due to invalid certification period."
  },

  "N323": {
    short: "Invalid coverage period.",
    full: "Service denied due to invalid coverage period."
  },

  "N324": {
    short: "Invalid benefit period.",
    full: "Service denied due to invalid benefit period."
  },

  "N325": {
    short: "Invalid service period.",
    full: "Service denied due to invalid service period."
  },
  "N326": {
    short: "Invalid similar illness date.",
    full: "Service denied due to invalid similar illness or symptom date."
  },

  "N327": {
    short: "Invalid other insured birth date.",
    full: "Service denied due to invalid other insured birth date."
  },

  "N328": {
    short: "Invalid oxygen saturation date.",
    full: "Service denied due to invalid oxygen saturation test date."
  },

  "N329": {
    short: "Invalid patient birth date.",
    full: "Service denied due to invalid patient birth date."
  },

  "N330": {
    short: "Invalid patient death date.",
    full: "Service denied due to invalid patient death date."
  },

  "N331": {
    short: "Invalid physician order date.",
    full: "Service denied due to invalid physician order date."
  },

  "N332": {
    short: "Invalid prior discharge date.",
    full: "Service denied due to invalid prior hospital discharge date."
  },

  "N333": {
    short: "Invalid prior placement date.",
    full: "Service denied due to invalid prior placement date."
  },

  "N334": {
    short: "Invalid re-evaluation date.",
    full: "Service denied due to invalid re-evaluation date."
  },

  "N335": {
    short: "Invalid referral date.",
    full: "Service denied due to invalid referral date."
  },

  "N336": {
    short: "Invalid replacement date.",
    full: "Service denied due to invalid replacement date."
  },

  "N337": {
    short: "Invalid secondary diagnosis date.",
    full: "Service denied due to invalid secondary diagnosis date."
  },

  "N338": {
    short: "Invalid shipped date.",
    full: "Service denied due to invalid shipped date."
  },

  "N339": {
    short: "Invalid symptom date.",
    full: "Service denied due to invalid similar illness or symptom date."
  },

  "N340": {
    short: "Invalid subscriber birth date.",
    full: "Service denied due to invalid subscriber birth date."
  },

  "N341": {
    short: "Invalid surgery date.",
    full: "Service denied due to invalid surgery date."
  },

  "N342": {
    short: "Invalid test date.",
    full: "Service denied due to invalid test performed date."
  },

  "N343": {
    short: "Invalid TENS trial start date.",
    full: "Service denied due to invalid TENS trial start date."
  },

  "N344": {
    short: "Invalid TENS trial end date.",
    full: "Service denied due to invalid TENS trial end date."
  },

  "N345": {
    short: "Invalid date range.",
    full: "Date range not valid with units submitted."
  },

  "N346": {
    short: "Invalid oral cavity code.",
    full: "Service denied due to invalid oral cavity designation code."
  },

  "N347": {
    short: "Duplicate payment made.",
    full: "Payment already made for this service to another provider."
  },

  "N348": {
    short: "Different billing provider chosen.",
    full: "You chose that this service would be billed by a different provider."
  },

  "N349": {
    short: "Administration method missing.",
    full: "Administration method and drug must be reported to adjudicate this service."
  },

  "N350": {
    short: "Unlisted/NOC description missing.",
    full: "Missing description for unlisted or Not Otherwise Classified code."
  },

  "N351": {
    short: "Service date outside plan.",
    full: "Service date outside of the approved treatment plan service dates."
  },

  "N352": {
    short: "No scheduled payments.",
    full: "Alert: No scheduled payments for this service. Submit a claim for each visit."
  },

  "N353": {
    short: "Estimated benefits only.",
    full: "Benefits estimated. Additional payment may be considered after claim submission."
  },

  "N354": {
    short: "Invalid invoice.",
    full: "Incomplete or invalid invoice."
  },

  "N355": {
    short: "Refund exceptions apply.",
    full: "Law permits exceptions to refund requirement under specific conditions."
  },

  "N356": {
    short: "Related to non-covered service.",
    full: "Not covered when performed with or after a non-covered service."
  },

  "N357": {
    short: "Timeframe not met.",
    full: "Required time frame between related services was not met."
  },

  "N358": {
    short: "Decision may be reviewed.",
    full: "Decision may be reviewed if additional documentation is submitted."
  },

  "N359": {
    short: "Invalid height.",
    full: "Missing, incomplete, or invalid height."
  },

  "N360": {
    short: "COB not calculated.",
    full: "Coordination of benefits not calculated. Submit primary payer payment info."
  },

  "N362": {
    short: "Units exceed maximum.",
    full: "Days or units of service exceed acceptable maximum."
  },

  "N363": {
    short: "Policy changes upcoming.",
    full: "Alert: New policies or procedures may affect this determination."
  },

  "N364": {
    short: "Cost share must be waived.",
    full: "Provider must waive deductible and/or coinsurance amounts."
  },

  "N366": {
    short: "Requested info not provided.",
    full: "Requested information not provided. Claim may be reopened if submitted within one year."
  },

  "N367": {
    short: "Consumer account review.",
    full: "Claim forwarded to Consumer Spending Account processor."
  },

  "N368": {
    short: "Appeal prior claim.",
    full: "Must appeal the previously adjudicated claim."
  },

  "N369": {
    short: "State regulation deficiency.",
    full: "Claim processed but deficient under state regulation."
  },

  "N370": {
    short: "Rental months exceeded.",
    full: "Billing exceeds rental months covered or approved by payer."
  },

  "N371": {
    short: "Equipment title transfer required.",
    full: "Title of this equipment must be transferred to the patient."
  },

  "N372": {
    short: "Maintenance only covered.",
    full: "Only reasonable and necessary maintenance or service charges are covered."
  },

  "N373": {
    short: "Refund to primary payer.",
    full: "Another payer paid as primary incorrectly. Refund issued to that payer."
  },

  "N374": {
    short: "Part A exhausted.",
    full: "Primary Medicare Part A exhausted. Part B remittance required."
  },

  "N375": {
    short: "Eligibility questionnaire missing.",
    full: "Missing or invalid questionnaire needed to determine dependent eligibility."
  },
  "N376": {
    short: "Active military duty.",
    full: "Subscriber or patient is assigned to active military duty; primary coverage may be TRICARE."
  },

  "N377": {
    short: "Replacement claim payment.",
    full: "Payment based on a processed replacement claim."
  },

  "N378": {
    short: "Invalid prescription quantity.",
    full: "Missing, incomplete, or invalid prescription quantity."
  },

  "N379": {
    short: "Claim level mismatch.",
    full: "Claim level information does not match line level information."
  },

  "N380": {
    short: "Submit corrected claim.",
    full: "Original claim processed. Submit a corrected claim."
  },

  "N381": {
    short: "Contract restrictions apply.",
    full: "Consult contractual agreement for restrictions related to these charges."
  },

  "N382": {
    short: "Invalid patient identifier.",
    full: "Missing, incomplete, or invalid patient identifier."
  },

  "N383": {
    short: "Cosmetic service.",
    full: "Not covered when deemed cosmetic."
  },

  "N384": {
    short: "Body part previously removed.",
    full: "Referenced body part or tooth removed in a prior procedure."
  },

  "N385": {
    short: "Late admission notification.",
    full: "Notification of admission was not timely per plan procedures."
  },

  "N386": {
    short: "National Coverage Determination.",
    full: "Decision based on a National Coverage Determination (NCD)."
  },

  "N387": {
    short: "Submit to other insurer.",
    full: "Submit this claim to the patients other insurer for potential payment."
  },

  "N388": {
    short: "Invalid prescription number.",
    full: "Missing, incomplete, or invalid prescription number."
  },

  "N389": {
    short: "Duplicate prescription.",
    full: "Duplicate prescription number submitted."
  },

  "N390": {
    short: "Not separately billable.",
    full: "This service or report cannot be billed separately."
  },

  "N391": {
    short: "ED records missing.",
    full: "Missing emergency department records."
  },

  "N392": {
    short: "Invalid ED records.",
    full: "Incomplete or invalid emergency department records."
  },

  "N393": {
    short: "Progress notes missing.",
    full: "Missing progress notes or report."
  },

  "N394": {
    short: "Invalid progress notes.",
    full: "Incomplete or invalid progress notes or report."
  },

  "N395": {
    short: "Lab report missing.",
    full: "Missing laboratory report."
  },

  "N396": {
    short: "Invalid lab report.",
    full: "Incomplete or invalid laboratory report."
  },

  "N397": {
    short: "Incomplete service.",
    full: "Benefits not available for incomplete services or undelivered items."
  },

  "N398": {
    short: "Elective consent missing.",
    full: "Missing elective consent form."
  },

  "N399": {
    short: "Invalid elective consent.",
    full: "Incomplete or invalid elective consent form."
  },

  "N400": {
    short: "Submit electronically.",
    full: "Alert: Providers should submit claims electronically."
  },

  "N401": {
    short: "Periodontal charting missing.",
    full: "Missing periodontal charting."
  },

  "N402": {
    short: "Invalid periodontal charting.",
    full: "Incomplete or invalid periodontal charting."
  },

  "N403": {
    short: "Facility certification missing.",
    full: "Missing facility certification."
  },

  "N404": {
    short: "Invalid facility certification.",
    full: "Incomplete or invalid facility certification."
  },

  "N405": {
    short: "Donor coverage rule.",
    full: "Covered only when donors insurer does not cover the service."
  },

  "N406": {
    short: "Recipient coverage rule.",
    full: "Covered only when recipients insurer does not cover the service."
  },

  "N407": {
    short: "Unapproved submitter.",
    full: "You are not an approved submitter for this transmission format."
  },

  "N408": {
    short: "Prior payer deductible not covered.",
    full: "Deductibles assessed by a previous payer are not covered."
  },

  "N409": {
    short: "Accidental injury timing.",
    full: "Service related to accidental injury and not within covered timeframe."
  },

  "N410": {
    short: "Prescription unchanged.",
    full: "Not covered unless the prescription changes."
  },

  "N411": {
    short: "Frequency limit met.",
    full: "This service is allowed one time in a six-month period."
  },

  "N412": {
    short: "12-month frequency limit.",
    full: "This service is allowed two times in a twelve-month period."
  },

  "N413": {
    short: "Benefit year limit.",
    full: "This service is allowed two times in a benefit year."
  },

  "N414": {
    short: "Four times yearly limit.",
    full: "This service is allowed four times in a twelve-month period."
  },

  "N415": {
    short: "18-month frequency limit.",
    full: "This service is allowed one time in an eighteen-month period."
  },

  "N416": {
    short: "3-year frequency limit.",
    full: "This service is allowed one time in a three-year period."
  },

  "N417": {
    short: "5-year frequency limit.",
    full: "This service is allowed one time in a five-year period."
  },

  "N418": {
    short: "Misrouted claim.",
    full: "Misrouted claim. Follow payer submission instructions."
  },

  "N419": {
    short: "Retroactive rate change.",
    full: "Payment due to retroactive rate change."
  },

  "N420": {
    short: "COB retro adjustment.",
    full: "Payment due to coordination of benefits retroactive adjustment."
  },

  "N421": {
    short: "Review organization adjustment.",
    full: "Payment due to review organization decision."
  },

  "N422": {
    short: "Contract incentive adjustment.",
    full: "Payment due to payer contract incentive program."
  },

  "N423": {
    short: "Non-standard program.",
    full: "Payment due to a non-standard program."
  },

  "N424": {
    short: "Geographic restriction.",
    full: "Patient does not reside in required geographic area."
  },

  "N425": {
    short: "Statutorily excluded.",
    full: "Statutorily excluded service."
  },
  "N426": {
    short: "Self-administered service.",
    full: "No coverage when service is self-administered."
  },

  "N427": {
    short: "Post-cataract eyewear only.",
    full: "Eyeglasses or contact lenses covered only after cataract surgery."
  },

  "N428": {
    short: "Place of service not covered.",
    full: "Not covered when performed in this place of service."
  },

  "N429": {
    short: "Routine service.",
    full: "Not covered when considered routine."
  },

  "N430": {
    short: "Units inconsistent.",
    full: "Procedure code inconsistent with units billed."
  },

  "N431": {
    short: "Not covered with procedure.",
    full: "Not covered when billed with this procedure."
  },

  "N432": {
    short: "Recovery Audit adjustment.",
    full: "Alert: Adjustment based on a Recovery Audit."
  },

  "N433": {
    short: "Resubmit with NPI.",
    full: "Resubmit this claim using only your National Provider Identifier."
  },

  "N434": {
    short: "POA indicator missing.",
    full: "Missing, incomplete, or invalid Present on Admission indicator."
  },

  "N435": {
    short: "Frequency exceeded.",
    full: "Exceeds number or frequency approved without documentation."
  },

  "N436": {
    short: "Injury claim pending.",
    full: "Injury claim not accepted; mandatory medical reimbursement made."
  },

  "N437": {
    short: "Charges reconsidered if accepted.",
    full: "Charges will be reconsidered if injury claim is accepted."
  },

  "N438": {
    short: "Paper claims only.",
    full: "This jurisdiction only accepts paper claims."
  },

  "N439": {
    short: "Anesthesia indicators missing.",
    full: "Missing anesthesia physical status report or indicators."
  },

  "N440": {
    short: "Invalid anesthesia indicators.",
    full: "Incomplete or invalid anesthesia physical status report."
  },

  "N441": {
    short: "Missed appointment.",
    full: "Missed or cancelled appointment is not covered."
  },

  "N442": {
    short: "Alternate fee schedule.",
    full: "Payment based on an alternate fee schedule."
  },

  "N443": {
    short: "Time documentation missing.",
    full: "Missing or invalid total time or begin/end time."
  },

  "N444": {
    short: "High cost outlier not filed.",
    full: "Facility has not filed the High Cost Outlier election form."
  },

  "N445": {
    short: "Cost document missing.",
    full: "Missing document for actual cost or paid amount."
  },

  "N446": {
    short: "Invalid cost document.",
    full: "Incomplete or invalid document for actual cost or paid amount."
  },

  "N447": {
    short: "Generic equivalent paid.",
    full: "Payment based on generic equivalent due to missing documentation."
  },

  "N448": {
    short: "Not in fee schedule.",
    full: "Drug or service not included in fee schedule or contract."
  },

  "N449": {
    short: "Comparable service used.",
    full: "Payment based on comparable drug or service."
  },

  "N450": {
    short: "Primary physician only.",
    full: "Covered only when performed by the primary treating physician."
  },

  "N451": {
    short: "Admission summary missing.",
    full: "Missing Admission Summary Report."
  },

  "N452": {
    short: "Invalid admission summary.",
    full: "Incomplete or invalid Admission Summary Report."
  },

  "N453": {
    short: "Consult report missing.",
    full: "Missing Consultation Report."
  },

  "N454": {
    short: "Invalid consult report.",
    full: "Incomplete or invalid Consultation Report."
  },

  "N455": {
    short: "Physician order missing.",
    full: "Missing Physician Order."
  },

  "N456": {
    short: "Invalid physician order.",
    full: "Incomplete or invalid Physician Order."
  },

  "N457": {
    short: "Diagnostic report missing.",
    full: "Missing Diagnostic Report."
  },

  "N458": {
    short: "Invalid diagnostic report.",
    full: "Incomplete or invalid Diagnostic Report."
  },

  "N459": {
    short: "Discharge summary missing.",
    full: "Missing Discharge Summary."
  },

  "N460": {
    short: "Invalid discharge summary.",
    full: "Incomplete or invalid Discharge Summary."
  },

  "N461": {
    short: "Nursing notes missing.",
    full: "Missing Nursing Notes."
  },

  "N462": {
    short: "Invalid nursing notes.",
    full: "Incomplete or invalid Nursing Notes."
  },

  "N463": {
    short: "Support data missing.",
    full: "Missing support data for claim."
  },

  "N464": {
    short: "Invalid support data.",
    full: "Incomplete or invalid support data for claim."
  },

  "N465": {
    short: "PT notes missing.",
    full: "Missing Physical Therapy Notes or Report."
  },

  "N466": {
    short: "Invalid PT notes.",
    full: "Incomplete or invalid Physical Therapy Notes or Report."
  },

  "N467": {
    short: "Tests report missing.",
    full: "Missing Tests and Analysis Report."
  },

  "N468": {
    short: "Invalid tests report.",
    full: "Incomplete or invalid Tests and Analysis Report."
  },

  "N469": {
    short: "Subject to appeal process.",
    full: "Claim subject to appeal process under Medicare Modernization Act."
  },

  "N470": {
    short: "Reimbursement limit reached.",
    full: "Payment completes mandatory medical reimbursement limit."
  },

  "N471": {
    short: "HIPPS code missing.",
    full: "Missing or invalid HIPPS rate code."
  },

  "N472": {
    short: "Paid to another provider.",
    full: "Payment for this service issued to another provider."
  },

  "N473": {
    short: "Certification missing.",
    full: "Missing certification."
  },

  "N474": {
    short: "Invalid certification.",
    full: "Incomplete or invalid certification."
  },

  "N475": {
    short: "Referral form missing.",
    full: "Missing completed referral form."
  },
  "N476": {
    short: "Invalid referral form.",
    full: "Incomplete or invalid completed referral form."
  },

  "N477": {
    short: "Dental models missing.",
    full: "Missing Dental Models."
  },

  "N478": {
    short: "Invalid dental models.",
    full: "Incomplete or invalid Dental Models."
  },

  "N479": {
    short: "EOB missing.",
    full: "Missing Explanation of Benefits from other insurance."
  },

  "N480": {
    short: "Invalid EOB.",
    full: "Incomplete or invalid Explanation of Benefits."
  },

  "N481": {
    short: "Models missing.",
    full: "Missing Models."
  },

  "N482": {
    short: "Invalid models.",
    full: "Incomplete or invalid Models."
  },

  "N485": {
    short: "PT certification missing.",
    full: "Missing Physical Therapy Certification."
  },

  "N486": {
    short: "Invalid PT certification.",
    full: "Incomplete or invalid Physical Therapy Certification."
  },

  "N487": {
    short: "Prosthetic certification missing.",
    full: "Missing Prosthetics or Orthotics Certification."
  },

  "N488": {
    short: "Invalid prosthetic certification.",
    full: "Incomplete or invalid Prosthetics or Orthotics Certification."
  },

  "N489": {
    short: "Referral form missing.",
    full: "Missing referral form."
  },

  "N490": {
    short: "Invalid referral form.",
    full: "Incomplete or invalid referral form."
  },

  "N491": {
    short: "Exclusionary rider missing.",
    full: "Missing or invalid exclusionary rider condition."
  },

  "N492": {
    short: "Member requested service.",
    full: "Member requested service and agreed in writing to financial responsibility."
  },

  "N493": {
    short: "Injury report missing.",
    full: "Missing Doctor First Report of Injury."
  },

  "N494": {
    short: "Invalid injury report.",
    full: "Incomplete or invalid Doctor First Report of Injury."
  },

  "N495": {
    short: "Supplemental report missing.",
    full: "Missing Supplemental Medical Report."
  },

  "N496": {
    short: "Invalid supplemental report.",
    full: "Incomplete or invalid Supplemental Medical Report."
  },

  "N497": {
    short: "Impairment report missing.",
    full: "Missing Medical Permanent Impairment or Disability Report."
  },

  "N498": {
    short: "Invalid impairment report.",
    full: "Incomplete or invalid Medical Permanent Impairment or Disability Report."
  },

  "N499": {
    short: "Medical legal report missing.",
    full: "Missing Medical Legal Report."
  },

  "N500": {
    short: "Invalid medical legal report.",
    full: "Incomplete or invalid Medical Legal Report."
  },

  "N501": {
    short: "Vocational report missing.",
    full: "Missing Vocational Report."
  },

  "N502": {
    short: "Invalid vocational report.",
    full: "Incomplete or invalid Vocational Report."
  },

  "N503": {
    short: "Work status report missing.",
    full: "Missing Work Status Report."
  },

  "N504": {
    short: "Invalid work status report.",
    full: "Incomplete or invalid Work Status Report."
  },

  "N505": {
    short: "Partial estimate only.",
    full: "Only services that could be estimated in real-time are included."
  },

  "N506": {
    short: "Estimate only.",
    full: "Estimate of member liability; not a guarantee of payment."
  },

  "N507": {
    short: "Distance requirement not met.",
    full: "Plan distance requirements were not met."
  },

  "N508": {
    short: "Real-time member responsibility.",
    full: "Real-time adjudication showing member responsibility."
  },

  "N509": {
    short: "Sufficient account funds.",
    full: "Consumer Spending Account contains sufficient funds."
  },

  "N510": {
    short: "Insufficient account funds.",
    full: "Consumer Spending Account does not contain sufficient funds."
  },

  "N511": {
    short: "Account info unavailable.",
    full: "Consumer Spending Account fund availability unknown."
  },

  "N512": {
    short: "Initial non-NCPDP remit.",
    full: "Initial remit of a non-NCPDP claim without adjudication change."
  },

  "N513": {
    short: "Adjusted non-NCPDP remit.",
    full: "Initial remit of a non-NCPDP claim with adjudication change."
  },

  "N516": {
    short: "NPI/EIN mismatch.",
    full: "Mismatch between submitted NPI and EIN."
  },

  "N517": {
    short: "Resubmit claim.",
    full: "Resubmit a new claim with requested information."
  },

  "N518": {
    short: "Accessories not paid.",
    full: "No separate payment for oxygen equipment accessories."
  },

  "N519": {
    short: "Invalid modifier combination.",
    full: "Invalid combination of HCPCS modifiers."
  },

  "N520": {
    short: "Consumer account payment.",
    full: "Payment made from Consumer Spending Account."
  },

  "N521": {
    short: "Provider info mismatch.",
    full: "Submitted provider info does not match payer records."
  },

  "N522": {
    short: "Duplicate crossover claim.",
    full: "Duplicate of a claim processed or to be processed as a crossover claim."
  },

  "N523": {
    short: "Outlier limit met.",
    full: "Outlier payment limit met; no outlier payment issued."
  },

  "N524": {
    short: "Payment in full.",
    full: "Payment constitutes payment in full per policy."
  },

  "N525": {
    short: "Global period applies.",
    full: "Services not covered within the global period of another service."
  },
  "N526": {
    short: "Employer size recovery rule.",
    full: "Not qualified for recovery based on employer size."
  },

  "N527": {
    short: "Primary payer processing.",
    full: "Claim processed as primary payer prior to recovery demand."
  },

  "N528": {
    short: "Institutional services only.",
    full: "Patient eligible for institutional services only."
  },

  "N529": {
    short: "Professional services only.",
    full: "Patient eligible for professional services only."
  },

  "N530": {
    short: "Enrollment recovery rule.",
    full: "Not qualified for recovery based on enrollment information."
  },

  "N531": {
    short: "Premium payment recovery rule.",
    full: "Not qualified for recovery based on direct payment of premium."
  },

  "N532": {
    short: "Disability recovery rule.",
    full: "Not qualified for recovery based on disability and working status."
  },

  "N533": {
    short: "Indian Health Services facility.",
    full: "Services performed in an Indian Health Services facility under a self-insured tribal plan."
  },

  "N534": {
    short: "Individual policy.",
    full: "Individual policy; employer does not participate in plan sponsorship."
  },

  "N535": {
    short: "POS based payment.",
    full: "Payment adjusted based on place of service."
  },

  "N536": {
    short: "Prior payer responsibility unchanged.",
    full: "Prior payer determination of patient responsibility not changed."
  },

  "N537": {
    short: "No service history found.",
    full: "No records of the billed services were found."
  },

  "N538": {
    short: "Facility responsible.",
    full: "Facility responsible for payment to outside providers."
  },

  "N539": {
    short: "Appeal denied.",
    full: "Appeals or waiver requests processed and denied."
  },

  "N540": {
    short: "Interrupted stay policy.",
    full: "Payment adjusted based on interrupted stay policy."
  },

  "N541": {
    short: "Insurance type mismatch.",
    full: "Mismatch between submitted insurance type and payer records."
  },

  "N542": {
    short: "Income verification missing.",
    full: "Missing income verification."
  },

  "N543": {
    short: "Invalid income verification.",
    full: "Incomplete or invalid income verification."
  },

  "N544": {
    short: "Ordering provider mismatch.",
    full: "Ordering provider information does not match payer records."
  },

  "N545": {
    short: "eRx penalty applied.",
    full: "Payment reduced due to unsuccessful electronic prescribing."
  },

  "N546": {
    short: "eRx prior reduction.",
    full: "Payment represents a previous eRx incentive reduction."
  },

  "N547": {
    short: "Refund already processed.",
    full: "Refund request was processed previously."
  },

  "N548": {
    short: "Deductible met.",
    full: "Patients calendar year deductible has been met."
  },

  "N549": {
    short: "Out-of-pocket max met.",
    full: "Patients calendar year out-of-pocket maximum has been met."
  },

  "N550": {
    short: "Enrollment revalidation required.",
    full: "Provider enrollment not revalidated; payment hold pending."
  },

  "N551": {
    short: "ASC quality adjustment.",
    full: "Payment adjusted based on ASC Quality Reporting Program."
  },

  "N552": {
    short: "Withhold reversed.",
    full: "Payment adjusted to reverse prior withhold or bonus."
  },

  "N554": {
    short: "Family planning indicator missing.",
    full: "Missing or invalid Family Planning Indicator."
  },

  "N555": {
    short: "Medication list missing.",
    full: "Missing medication list."
  },

  "N556": {
    short: "Invalid medication list.",
    full: "Incomplete or invalid medication list."
  },

  "N557": {
    short: "Service area mismatch.",
    full: "Claim not payable under this service area."
  },

  "N558": {
    short: "Equipment service area mismatch.",
    full: "Claim must be filed where equipment was received."
  },

  "N559": {
    short: "Ordering physician service area.",
    full: "Claim must be filed where ordering physician is located."
  },

  "N560": {
    short: "NOA claim missing.",
    full: "Required claim not received within 60 days of Notice of Admission."
  },

  "N561": {
    short: "Bundled readmission.",
    full: "Bundled claim includes related readmissions."
  },

  "N562": {
    short: "Provider number mismatch.",
    full: "Claim provider number does not match Notice of Admission."
  },

  "N563": {
    short: "ABN missing.",
    full: "Advance Beneficiary Notice missing; patient not liable."
  },

  "N564": {
    short: "Demo criteria not met.",
    full: "Patient did not meet demonstration project inclusion criteria."
  },

  "N565": {
    short: "Modifier required.",
    full: "Non-payable reporting code requires a modifier."
  },

  "N566": {
    short: "Functional reporting required.",
    full: "Procedure code requires functional reporting."
  },

  "N567": {
    short: "Preventive service.",
    full: "Not covered when considered preventive."
  },

  "N568": {
    short: "Bundled payment model.",
    full: "Initial payment based on Notice of Admission under bundled payment model."
  },

  "N569": {
    short: "Diagnosis not covered.",
    full: "Not covered when performed for reported diagnosis."
  },

  "N570": {
    short: "Credentialing data missing.",
    full: "Missing or invalid credentialing data."
  },

  "N571": {
    short: "Quarterly payment.",
    full: "Payment will be issued quarterly by another payer."
  },

  "N572": {
    short: "Non-payable code required.",
    full: "Procedure not payable unless appropriate non-payable code submitted."
  },

  "N573": {
    short: "Overpayment refund required.",
    full: "Overpayment identified; refund required."
  },

  "N574": {
    short: "Ordering provider not allowed.",
    full: "Ordering or referring provider not eligible to order services."
  },

  "N575": {
    short: "Ordering provider name mismatch.",
    full: "Ordering provider name does not match payer records."
  },
  "N576": {
    short: "Referring provider specialty mismatch.",
    full: "Referring provider specialty does not match service requirements."
  },

  "N577": {
    short: "Billing provider specialty mismatch.",
    full: "Billing provider specialty does not match service requirements."
  },

  "N578": {
    short: "Rendering provider specialty mismatch.",
    full: "Rendering provider specialty does not match service requirements."
  },

  "N579": {
    short: "Supervising provider specialty mismatch.",
    full: "Supervising provider specialty does not match service requirements."
  },

  "N580": {
    short: "Outpatient admission overlap.",
    full: "Service overlaps with an outpatient admission."
  },

  "N581": {
    short: "Inpatient admission overlap.",
    full: "Service overlaps with an inpatient admission."
  },

  "N582": {
    short: "Observation stay overlap.",
    full: "Service overlaps with an observation stay."
  },

  "N583": {
    short: "Emergency visit overlap.",
    full: "Service overlaps with an emergency department visit."
  },

  "N584": {
    short: "Telehealth requirements not met.",
    full: "Telehealth service requirements were not met."
  },

  "N585": {
    short: "Audio-only telehealth not covered.",
    full: "Audio-only telehealth services are not covered for this service."
  },

  "N586": {
    short: "Originating site requirement not met.",
    full: "Telehealth originating site requirements were not met."
  },

  "N587": {
    short: "Distant site provider not eligible.",
    full: "Distant site provider is not eligible to bill telehealth services."
  },

  "N588": {
    short: "Telehealth modifier missing.",
    full: "Missing or invalid telehealth modifier."
  },

  "N589": {
    short: "Telehealth POS mismatch.",
    full: "Place of service does not match telehealth requirements."
  },

  "N590": {
    short: "Home infusion criteria not met.",
    full: "Home infusion therapy coverage criteria not met."
  },

  "N591": {
    short: "Home health face-to-face missing.",
    full: "Required home health face-to-face encounter documentation missing."
  },

  "N592": {
    short: "Invalid face-to-face documentation.",
    full: "Incomplete or invalid home health face-to-face documentation."
  },

  "N593": {
    short: "Hospice level of care mismatch.",
    full: "Level of hospice care billed does not match patient status."
  },

  "N594": {
    short: "Hospice election period exceeded.",
    full: "Hospice election period has been exceeded."
  },

  "N595": {
    short: "Invalid hospice diagnosis.",
    full: "Hospice diagnosis does not meet eligibility requirements."
  },

  "N596": {
    short: "Palliative care only.",
    full: "Service covered only when provided as palliative care."
  },

  "N597": {
    short: "SNF consolidated billing applies.",
    full: "Service subject to Skilled Nursing Facility consolidated billing."
  },

  "N598": {
    short: "SNF non-covered service.",
    full: "Service not covered when furnished to a SNF resident."
  },

  "N599": {
    short: "Therapy plan of care missing.",
    full: "Therapy plan of care missing or not certified."
  },

  "N600": {
    short: "Invalid therapy plan of care.",
    full: "Incomplete or invalid therapy plan of care."
  },

  "N601": {
    short: "Therapy certification expired.",
    full: "Therapy certification period expired."
  },

  "N602": {
    short: "Therapy services exceeded cap.",
    full: "Therapy services exceed allowable cap or threshold."
  },

  "N603": {
    short: "Maintenance therapy not covered.",
    full: "Maintenance therapy is not covered for this condition."
  },

  "N604": {
    short: "Group therapy not covered.",
    full: "Group therapy sessions are not covered for this service."
  },

  "N605": {
    short: "Therapy assistant supervision missing.",
    full: "Required supervision for therapy assistant services missing."
  },

  "N606": {
    short: "Invalid therapy modifier.",
    full: "Missing or invalid therapy modifier."
  },

  "N607": {
    short: "DME coverage criteria not met.",
    full: "Durable Medical Equipment coverage criteria not met."
  },

  "N608": {
    short: "DME frequency limit exceeded.",
    full: "DME frequency limitation exceeded."
  },

  "N609": {
    short: "DME same or similar item.",
    full: "Same or similar DME previously provided."
  },

  "N610": {
    short: "DME rental period exceeded.",
    full: "Rental period for DME has been exceeded."
  },

  "N611": {
    short: "DME purchase option applies.",
    full: "Purchase option applies in place of rental."
  },

  "N612": {
    short: "DME maintenance not covered.",
    full: "Routine maintenance of DME is not covered."
  },

  "N613": {
    short: "Prosthetic coverage criteria not met.",
    full: "Prosthetic device coverage criteria not met."
  },

  "N614": {
    short: "Orthotic coverage criteria not met.",
    full: "Orthotic device coverage criteria not met."
  },

  "N615": {
    short: "Supply included in primary service.",
    full: "Supplies are included in the payment for the primary service."
  },

  "N616": {
    short: "Disposable supply not covered.",
    full: "Disposable supplies are not covered separately."
  },

  "N617": {
    short: "Drug coverage criteria not met.",
    full: "Drug coverage criteria were not met."
  },

  "N618": {
    short: "Off-label drug use.",
    full: "Off-label drug use not covered."
  },

  "N619": {
    short: "Step therapy required.",
    full: "Step therapy requirements not satisfied."
  },

  "N620": {
    short: "Quantity limit exceeded.",
    full: "Drug quantity limit exceeded."
  },

  "N621": {
    short: "Refill too soon.",
    full: "Prescription refill requested too soon."
  },

  "N622": {
    short: "Brand required.",
    full: "Generic substitution not allowed; brand required."
  },

  "N623": {
    short: "Specialty pharmacy required.",
    full: "Drug must be dispensed by a specialty pharmacy."
  },

  "N624": {
    short: "Drug prior authorization required.",
    full: "Prior authorization required for this drug."
  },

  "N625": {
    short: "Drug prior authorization denied.",
    full: "Prior authorization request for this drug was denied."
  },
  "N626": {
    short: "Drug step therapy failed.",
    full: "Step therapy requirements were attempted but not satisfied."
  },

  "N627": {
    short: "Drug age restriction.",
    full: "Drug not covered due to patient age restrictions."
  },

  "N628": {
    short: "Drug gender restriction.",
    full: "Drug not covered due to gender restrictions."
  },

  "N629": {
    short: "Drug diagnosis restriction.",
    full: "Drug not covered for the reported diagnosis."
  },

  "N630": {
    short: "Drug indication not approved.",
    full: "Drug not approved for this clinical indication."
  },

  "N631": {
    short: "Drug formulary exclusion.",
    full: "Drug excluded from plan formulary."
  },

  "N632": {
    short: "Formulary alternative available.",
    full: "Formulary alternative drug is available."
  },

  "N633": {
    short: "Therapeutic duplication.",
    full: "Therapeutic duplication of drug therapy."
  },

  "N634": {
    short: "Dose exceeds maximum.",
    full: "Prescribed dose exceeds plan maximum."
  },

  "N635": {
    short: "Drug interaction concern.",
    full: "Potential drug interaction identified."
  },

  "N636": {
    short: "Clinical criteria not met.",
    full: "Clinical criteria for coverage were not met."
  },

  "N637": {
    short: "Special authorization required.",
    full: "Special authorization required for this service."
  },

  "N638": {
    short: "Limited distribution drug.",
    full: "Drug available only through limited distribution channels."
  },

  "N639": {
    short: "Compound drug not covered.",
    full: "Compound drug preparation is not covered."
  },

  "N640": {
    short: "Experimental drug.",
    full: "Drug considered experimental or investigational."
  },

  "N641": {
    short: "New drug review pending.",
    full: "Coverage pending review for newly marketed drug."
  },

  "N642": {
    short: "Non-preferred drug.",
    full: "Drug is non-preferred under plan formulary."
  },

  "N643": {
    short: "Brand override denied.",
    full: "Brand override request denied."
  },

  "N644": {
    short: "Specialty drug criteria not met.",
    full: "Specialty drug coverage criteria not met."
  },

  "N645": {
    short: "Drug benefit exhausted.",
    full: "Annual drug benefit maximum exhausted."
  },

  "N646": {
    short: "Mail order required.",
    full: "Drug must be obtained through mail order pharmacy."
  },

  "N647": {
    short: "Retail fill limit exceeded.",
    full: "Retail pharmacy fill limit exceeded."
  },

  "N648": {
    short: "Emergency fill only.",
    full: "Only emergency fill permitted for this drug."
  },

  "N649": {
    short: "Partial fill allowed.",
    full: "Only partial fill permitted under plan rules."
  },

  "N650": {
    short: "Transition fill provided.",
    full: "Transition supply provided pending coverage determination."
  },

  "N651": {
    short: "Vaccination coverage limit.",
    full: "Vaccination coverage limit exceeded."
  },

  "N652": {
    short: "Immunization not covered.",
    full: "Immunization not covered under this plan."
  },

  "N653": {
    short: "Preventive service age limit.",
    full: "Preventive service not covered due to age limits."
  },

  "N654": {
    short: "Preventive frequency exceeded.",
    full: "Preventive service frequency exceeded."
  },

  "N655": {
    short: "Wellness benefit exhausted.",
    full: "Wellness benefit maximum exhausted."
  },

  "N656": {
    short: "Screening criteria not met.",
    full: "Screening service criteria not met."
  },

  "N657": {
    short: "Diagnostic vs screening mismatch.",
    full: "Service billed as screening but processed as diagnostic."
  },

  "N658": {
    short: "Diagnostic criteria not met.",
    full: "Diagnostic service criteria not met."
  },

  "N659": {
    short: "Bundled preventive service.",
    full: "Preventive service bundled into another service."
  },

  "N660": {
    short: "Telehealth policy expired.",
    full: "Temporary telehealth policy has expired."
  },

  "N661": {
    short: "Telehealth consent missing.",
    full: "Required patient consent for telehealth missing."
  },

  "N662": {
    short: "Remote monitoring criteria not met.",
    full: "Remote patient monitoring coverage criteria not met."
  },

  "N663": {
    short: "RPM frequency exceeded.",
    full: "Remote patient monitoring frequency exceeded."
  },

  "N664": {
    short: "Device not approved.",
    full: "Monitoring device not approved for coverage."
  },

  "N665": {
    short: "Data submission insufficient.",
    full: "Insufficient data submitted to support monitoring service."
  },

  "N666": {
    short: "Care management criteria not met.",
    full: "Care management service criteria not met."
  },

  "N667": {
    short: "Care plan missing.",
    full: "Required care plan documentation missing."
  },

  "N668": {
    short: "Invalid care plan.",
    full: "Incomplete or invalid care plan documentation."
  },

  "N669": {
    short: "Chronic condition count insufficient.",
    full: "Patient does not meet minimum chronic condition requirement."
  },

  "N670": {
    short: "Behavioral health criteria not met.",
    full: "Behavioral health service criteria not met."
  },

  "N671": {
    short: "BH provider credentialing issue.",
    full: "Behavioral health provider credentialing requirements not met."
  },

  "N672": {
    short: "Substance use treatment criteria not met.",
    full: "Substance use disorder treatment criteria not met."
  },

  "N673": {
    short: "Residential treatment not covered.",
    full: "Residential treatment services not covered."
  },

  "N674": {
    short: "Partial hospitalization criteria not met.",
    full: "Partial hospitalization coverage criteria not met."
  },

  "N675": {
    short: "Intensive outpatient criteria not met.",
    full: "Intensive outpatient program criteria not met."
  },
  "N676": {
    short: "PHP frequency exceeded.",
    full: "Partial hospitalization program frequency limit exceeded."
  },

  "N677": {
    short: "IOP frequency exceeded.",
    full: "Intensive outpatient program frequency limit exceeded."
  },

  "N678": {
    short: "Tele-behavioral health not covered.",
    full: "Tele-behavioral health services not covered under this plan."
  },

  "N679": {
    short: "Crisis intervention criteria not met.",
    full: "Crisis intervention service criteria not met."
  },

  "N680": {
    short: "Medication assisted treatment criteria not met.",
    full: "Medication-assisted treatment coverage criteria not met."
  },

  "N681": {
    short: "Opioid treatment program not certified.",
    full: "Opioid treatment program is not certified or approved."
  },

  "N682": {
    short: "MAT prior authorization required.",
    full: "Prior authorization required for medication-assisted treatment."
  },

  "N683": {
    short: "MAT prior authorization denied.",
    full: "Prior authorization request denied for medication-assisted treatment."
  },

  "N684": {
    short: "Preventive counseling limit exceeded.",
    full: "Preventive counseling service frequency exceeded."
  },

  "N685": {
    short: "Nutrition counseling criteria not met.",
    full: "Nutrition counseling coverage criteria not met."
  },

  "N686": {
    short: "Obesity treatment criteria not met.",
    full: "Medical obesity treatment coverage criteria not met."
  },

  "N687": {
    short: "Smoking cessation limit exceeded.",
    full: "Smoking cessation service frequency exceeded."
  },

  "N688": {
    short: "Smoking cessation criteria not met.",
    full: "Smoking cessation service criteria not met."
  },

  "N689": {
    short: "Cardiac rehab criteria not met.",
    full: "Cardiac rehabilitation coverage criteria not met."
  },

  "N690": {
    short: "Pulmonary rehab criteria not met.",
    full: "Pulmonary rehabilitation coverage criteria not met."
  },

  "N691": {
    short: "Post-transplant care limit exceeded.",
    full: "Post-transplant care benefit limit exceeded."
  },

  "N692": {
    short: "Transplant donor service not covered.",
    full: "Transplant donor services not covered under recipient plan."
  },

  "N693": {
    short: "Clinical trial phase not covered.",
    full: "Clinical trial phase is not covered."
  },

  "N694": {
    short: "Investigational device not covered.",
    full: "Investigational device or procedure not covered."
  },

  "N695": {
    short: "Genetic testing criteria not met.",
    full: "Genetic testing coverage criteria not met."
  },

  "N696": {
    short: "Pharmacogenomic testing not covered.",
    full: "Pharmacogenomic testing not covered."
  },

  "N697": {
    short: "Advanced imaging criteria not met.",
    full: "Advanced diagnostic imaging coverage criteria not met."
  },

  "N698": {
    short: "Second opinion required.",
    full: "Second opinion required prior to service."
  },

  "N699": {
    short: "Second opinion not obtained.",
    full: "Required second opinion was not obtained."
  },

  "N700": {
    short: "Experimental imaging.",
    full: "Imaging service considered experimental or investigational."
  },

  "N701": {
    short: "Preventive imaging not covered.",
    full: "Preventive imaging service not covered."
  },

  "N702": {
    short: "Radiology frequency exceeded.",
    full: "Radiology service frequency exceeded."
  },

  "N703": {
    short: "Radiology supervision missing.",
    full: "Required radiologist supervision documentation missing."
  },

  "N704": {
    short: "Radiology equipment not accredited.",
    full: "Radiology equipment not accredited or approved."
  },

  "N705": {
    short: "Pathology consult not covered.",
    full: "Pathology consultation not covered."
  },

  "N706": {
    short: "Second pathology opinion not covered.",
    full: "Second pathology opinion not covered."
  },

  "N707": {
    short: "Molecular pathology criteria not met.",
    full: "Molecular pathology testing criteria not met."
  },

  "N708": {
    short: "Lab frequency exceeded.",
    full: "Laboratory service frequency exceeded."
  },

  "N709": {
    short: "Reference lab not approved.",
    full: "Reference laboratory not approved or contracted."
  },

  "N710": {
    short: "Specimen handling not covered.",
    full: "Specimen handling charges not covered."
  },

  "N711": {
    short: "Point-of-care testing not covered.",
    full: "Point-of-care testing not covered."
  },

  "N712": {
    short: "Home lab testing not covered.",
    full: "Home-based laboratory testing not covered."
  },

  "N713": {
    short: "Lab panel components bundled.",
    full: "Individual lab tests bundled into a panel."
  },

  "N714": {
    short: "Therapeutic phlebotomy criteria not met.",
    full: "Therapeutic phlebotomy coverage criteria not met."
  },

  "N715": {
    short: "Blood product not covered.",
    full: "Blood or blood product not covered."
  },

  "N716": {
    short: "Autologous blood storage not covered.",
    full: "Autologous blood storage not covered."
  },

  "N717": {
    short: "Dialysis frequency exceeded.",
    full: "Dialysis service frequency exceeded."
  },

  "N718": {
    short: "Dialysis location not covered.",
    full: "Dialysis service not covered at this location."
  },

  "N719": {
    short: "Home dialysis criteria not met.",
    full: "Home dialysis coverage criteria not met."
  },

  "N720": {
    short: "Dialysis training not covered.",
    full: "Dialysis training services not covered."
  },

  "N721": {
    short: "ESRD coordination issue.",
    full: "End-stage renal disease coordination of benefits issue."
  },

  "N722": {
    short: "Transitional care criteria not met.",
    full: "Transitional care management criteria not met."
  },

  "N723": {
    short: "Chronic care management criteria not met.",
    full: "Chronic care management coverage criteria not met."
  },

  "N724": {
    short: "Principal care management criteria not met.",
    full: "Principal care management coverage criteria not met."
  },

  "N725": {
    short: "Care coordination bundled.",
    full: "Care coordination services bundled into another service."
  },
  "N726": {
    short: "Conditional payment not allowed.",
    full: "A conditional payment is not allowed."
  },

  "N727": {
    short: "No-fault ORM reported.",
    full: "A no-fault insurer has reported having ongoing responsibility for medical services for this diagnosis."
  },

  "N728": {
    short: "Workers' compensation ORM reported.",
    full: "A workers' compensation insurer has reported having ongoing responsibility for medical services for this diagnosis."
  },

  "N729": {
    short: "Missing patient medical/dental record.",
    full: "Missing patient medical or dental record for this service."
  },

  "N730": {
    short: "Incomplete patient medical/dental record.",
    full: "Incomplete or invalid patient medical or dental record for this service."
  },

  "N731": {
    short: "Incomplete mental health assessment.",
    full: "Incomplete or invalid mental health assessment."
  },

  "N732": {
    short: "Unlicensed facility.",
    full: "Services performed at an unlicensed facility are not reimbursable."
  },

  "N733": {
    short: "Regulatory surcharges.",
    full: "Regulatory surcharges are paid directly to the state."
  },

  "N734": {
    short: "Unable to work requirement.",
    full: "The patient is eligible for these medical services only when unable to work or perform normal activities due to illness or injury."
  },

  "N736": {
    short: "Incomplete sleep study report.",
    full: "Incomplete or invalid sleep study report."
  },

  "N737": {
    short: "Missing sleep study report.",
    full: "Missing sleep study report."
  },

  "N738": {
    short: "Incomplete vein study report.",
    full: "Incomplete or invalid vein study report."
  },

  "N739": {
    short: "Missing vein study report.",
    full: "Missing vein study report."
  },

  "N740": {
    short: "Insufficient consumer spending funds.",
    full: "The members Consumer Spending Account does not contain sufficient funds to cover the members liability."
  },

  "N741": {
    short: "Site neutral payment.",
    full: "This is a site neutral payment."
  },

  "N743": {
    short: "Employment accident related.",
    full: "Adjusted because the services may be related to an employment accident."
  },

  "N744": {
    short: "Auto accident related.",
    full: "Adjusted because the services may be related to an auto or other accident."
  },

  "N745": {
    short: "Missing ambulance report.",
    full: "Missing ambulance report."
  },

  "N746": {
    short: "Incomplete ambulance report.",
    full: "Incomplete or invalid ambulance report."
  },

  "N747": {
    short: "Misdirected claim.",
    full: "This is a misdirected claim or service. Submit the claim to the payer where the patient resides."
  },

  "N748": {
    short: "Hospital charges not received.",
    full: "Adjusted because the related hospital charges have not been received."
  },

  "N749": {
    short: "Missing blood gas report.",
    full: "Missing blood gas report."
  },

  "N750": {
    short: "Incomplete blood gas report.",
    full: "Incomplete or invalid blood gas report."
  },

  "N751": {
    short: "Medicare Part D coverage.",
    full: "Adjusted because the patient is covered under a Medicare Part D plan."
  },

  "N752": {
    short: "Missing HIPPS authorization code.",
    full: "Missing or invalid HIPPS Treatment Authorization Code."
  },

  "N753": {
    short: "Missing attachment control number.",
    full: "Missing or invalid Attachment Control Number."
  },

  "N754": {
    short: "Missing referring provider qualifier.",
    full: "Missing or invalid referring provider or other source qualifier on the claim."
  },

  "N755": {
    short: "Missing ICD indicator.",
    full: "Missing or invalid ICD indicator."
  },

  "N756": {
    short: "Missing drop-off address.",
    full: "Missing or invalid point of drop-off address."
  },

  "N757": {
    short: "Federal Indian fee schedule.",
    full: "Adjusted based on the Federal Indian Fees schedule."
  },

  "N758": {
    short: "Prior authorization adjustment.",
    full: "Adjusted based on the prior authorization decision."
  },

  "N759": {
    short: "XR-29 standard adjustment.",
    full: "Payment adjusted based on the National Electrical Manufacturers Association Standard XR-29-2013."
  },

  "N760": {
    short: "Facility not authorized.",
    full: "This facility is not authorized to receive payment for the service."
  },

  "N761": {
    short: "Provider not authorized.",
    full: "This provider is not authorized to receive payment for the service."
  },

  "N762": {
    short: "Tomosynthesis not certified.",
    full: "This facility is not certified for Tomosynthesis (3-D) mammography."
  },

  "N763": {
    short: "Invalid demonstration code.",
    full: "Demonstration code is not appropriate for this claim."
  },

  "N764": {
    short: "Missing hematocrit value.",
    full: "Missing or invalid hematocrit (HCT) value."
  },

  "N765": {
    short: "Coinsurance not covered.",
    full: "This payer does not cover coinsurance assessed by a previous payer."
  },

  "N766": {
    short: "Copayment not covered.",
    full: "This payer does not cover copayment assessed by a previous payer."
  },

  "N767": {
    short: "Medicaid enrollment required.",
    full: "Provider must be enrolled in the members Medicaid state program prior to claim processing."
  },

  "N768": {
    short: "Invalid initial evaluation report.",
    full: "Incomplete or invalid initial evaluation report."
  },

  "N769": {
    short: "Lateral diagnosis required.",
    full: "A lateral diagnosis is required."
  },

  "N770": {
    short: "Adjustment request processed.",
    full: "The adjustment request received has been processed and the claim updated."
  },

  "N771": {
    short: "Limiting charge applies.",
    full: "Under Federal law you cannot charge more than the limiting charge amount."
  },

  "N772": {
    short: "Rebill urgent services separately.",
    full: "Rebill urgent, emergent, and ancillary services separately."
  },

  "N773": {
    short: "Drug not from specialty vendor.",
    full: "Drug supplied was not obtained from an approved specialty vendor."
  },

  "N774": {
    short: "Refer to processor agreement.",
    full: "Refer to your Third Party Processor Agreement for fee information."
  },

  "N775": {
    short: "Film x-ray adjustment.",
    full: "Payment adjusted based on x-ray radiograph on film."
  },
  "N776": {
    short: "Telehealth not covered.",
    full: "This service is not a covered telehealth service."
  },

  "N777": {
    short: "Missing assignment of benefits.",
    full: "Missing Assignment of Benefits indicator."
  },

  "N778": {
    short: "Missing PCP information.",
    full: "Missing Primary Care Physician information."
  },

  "N779": {
    short: "Replacement claim pending.",
    full: "Replacement or void claims cannot be submitted until the original claim is finalized."
  },

  "N780": {
    short: "Missing end therapy date.",
    full: "Missing or invalid end therapy date."
  },

  "N781": {
    short: "QMB deductible review.",
    full: "Patient is a Medicaid/Qualified Medicare Beneficiary. Review deductible collection."
  },

  "N782": {
    short: "QMB coinsurance review.",
    full: "Patient is a Medicaid/Qualified Medicare Beneficiary. Review coinsurance collection."
  },

  "N783": {
    short: "QMB copayment review.",
    full: "Patient is a Medicaid/Qualified Medicare Beneficiary. Review copayment collection."
  },

  "N784": {
    short: "Missing comprehensive procedure code.",
    full: "Missing comprehensive procedure code."
  },

  "N785": {
    short: "Missing radiology images.",
    full: "Missing current radiology films or images."
  },

  "N786": {
    short: "Orthodontic benefit limit.",
    full: "Benefit limitation for orthodontic active or retention phase of treatment."
  },

  "N787": {
    short: "PHP hours requirement.",
    full: "Partial Hospitalization Program requires minimum weekly service hours per plan."
  },

  "N788": {
    short: "Information not received.",
    full: "Required information was not received by the review organization."
  },

  "N789": {
    short: "Clinical trial excluded.",
    full: "Clinical trial services are not a covered benefit."
  },

  "N790": {
    short: "Provider not accredited.",
    full: "Provider or supplier is not accredited for this product or service."
  },

  "N791": {
    short: "Missing history & physical.",
    full: "Missing history and physical report."
  },

  "N792": {
    short: "Invalid history & physical.",
    full: "Incomplete or invalid history and physical report."
  },

  "N794": {
    short: "Technology-based adjustment.",
    full: "Payment adjusted based on type of technology used."
  },

  "N795": {
    short: "Resubmit as purchase.",
    full: "Item must be resubmitted as a purchase."
  },

  "N796": {
    short: "Missing hemoglobin value.",
    full: "Missing or invalid hemoglobin (Hb or Hgb) value."
  },

  "N797": {
    short: "Missing date qualifier.",
    full: "Missing or invalid date qualifier."
  },

  "N798": {
    short: "Void and resubmit.",
    full: "Submit a void request for the original claim and resubmit a new claim."
  },

  "N799": {
    short: "Individual identifier required.",
    full: "Submitted identifier must be an individual identifier, not a group identifier."
  },

  "N800": {
    short: "Single service date only.",
    full: "Only one service date is allowed per claim."
  },

  "N801": {
    short: "Tribal facility coverage.",
    full: "Services performed in a Medicare participating or CAH facility under a tribal health plan."
  },

  "N802": {
    short: "Service area restriction.",
    full: "Claim must be filed to the payer where the rendering physician is located."
  },

  "N803": {
    short: "Submission responsibility.",
    full: "Claim submission is the responsibility of the contracted medical group or hospital."
  },

  "N804": {
    short: "Processed through OCE.",
    full: "Claim or service was processed through the Outpatient Code Editor."
  },

  "N805": {
    short: "Processed through CCE.",
    full: "Claim or service was processed through the Correct Code Editor."
  },

  "N806": {
    short: "Global transplant payment.",
    full: "Payment is included in the global transplant allowance."
  },

  "N807": {
    short: "MIPS adjustment.",
    full: "Payment adjustment based on the Merit-based Incentive Payment System."
  },

  "N808": {
    short: "Provider specialty restriction.",
    full: "Service not covered for this provider type or specialty."
  },

  "N809": {
    short: "Competitive bidding adjustment.",
    full: "Fee schedule adjusted based on competitive bidding rates."
  },

  "N810": {
    short: "Disaster in-network processing.",
    full: "Claim processed at in-network level due to disaster declaration."
  },

  "N811": {
    short: "Missing sequestration reduction.",
    full: "Missing Federal Sequestration Reduction from prior payer."
  },

  "N812": {
    short: "Service date span exceeded.",
    full: "Service dates cannot span more than the allowed period."
  },

  "N815": {
    short: "Missing NDC unit count.",
    full: "Missing or invalid National Drug Code unit count."
  },

  "N816": {
    short: "Missing NDC unit of measure.",
    full: "Missing or invalid National Drug Code unit of measure."
  },

  "N817": {
    short: "Private payer data reporting.",
    full: "Laboratories must collect and report private payer data to CMS."
  },

  "N818": {
    short: "EVV date mismatch.",
    full: "Dates of service do not match Electronic Visit Verification records."
  },

  "N819": {
    short: "EVV enrollment missing.",
    full: "Patient not enrolled in Electronic Visit Verification system."
  },

  "N820": {
    short: "EVV unit mismatch.",
    full: "EVV units do not meet visit requirements."
  },

  "N821": {
    short: "EVV visit not found.",
    full: "Electronic Visit Verification visit not found."
  },

  "N822": {
    short: "Missing procedure modifiers.",
    full: "Missing required procedure modifier(s)."
  },

  "N823": {
    short: "Invalid procedure modifiers.",
    full: "Incomplete or invalid procedure modifier(s)."
  },

  "N824": {
    short: "EVV vendor submission required.",
    full: "EVV data must be submitted through approved EVV vendor."
  },

  "N825": {
    short: "Early intervention criteria not met.",
    full: "Early intervention guidelines were not met."
  },
  "N826": {
    short: "MSSP criteria not met.",
    full: "Patient did not meet the inclusion criteria for the Medicare Shared Savings Program."
  },

  "N827": {
    short: "Missing FIPS code.",
    full: "Missing or invalid Federal Information Processing Standard (FIPS) code."
  },

  "N828": {
    short: "Payment suppressed.",
    full: "Payment is suppressed due to contracted funding."
  },

  "N829": {
    short: "Missing Z-code identifier.",
    full: "Missing or invalid Diagnostics Exchange Z-Code identifier."
  },

  "N830": {
    short: "No Surprises Act processing.",
    full: "Charges processed in accordance with Federal or State No Surprise Billing regulations."
  },

  "N831": {
    short: "Enrollment revalidation pending.",
    full: "Provider has not responded to requests to revalidate enrollment information."
  },

  "N832": {
    short: "Duplicate occurrence codes.",
    full: "Duplicate occurrence or occurrence span codes."
  },

  "N833": {
    short: "Share of cost waived.",
    full: "Patient share of cost has been waived."
  },

  "N834": {
    short: "Tax exempt jurisdiction.",
    full: "Jurisdiction exempt from sales and health tax charges."
  },

  "N835": {
    short: "Unrelated service reduced.",
    full: "Unrelated service or treatment reduced; remaining balance is patient responsibility."
  },

  "N836": {
    short: "W9 not on file.",
    full: "Provider W9 or payee registration not on file."
  },

  "N837": {
    short: "Modifier added.",
    full: "Missing modifier was added during claim processing."
  },

  "N838": {
    short: "Service postponed due to disaster.",
    full: "Service postponed due to federal, state, or local mandate or disaster declaration."
  },

  "N839": {
    short: "Procedure code adjusted.",
    full: "Procedure code adjusted because service exceeded compensable conditions."
  },

  "N840": {
    short: "Out-of-state workers' compensation.",
    full: "Workers' compensation claim filed with a different state."
  },

  "N841": {
    short: "North Dakota rule applied.",
    full: "North Dakota Administrative Rule 92-01-02-50.3 applied."
  },

  "N842": {
    short: "Patient cannot be billed.",
    full: "Patient cannot be billed for these charges."
  },

  "N843": {
    short: "Missing CBSA code.",
    full: "Missing or invalid Core-Based Statistical Area (CBSA) code."
  },

  "N844": {
    short: "Nebraska emergency act applied.",
    full: "Processed under Nebraska Out-of-Network Emergency Medical Care Act."
  },

  "N845": {
    short: "Nebraska emergency act notice.",
    full: "Nebraska Out-of-Network Emergency Medical Care Act notice."
  },

  "N846": {
    short: "NDC mismatch.",
    full: "National Drug Code does not correspond to the HCPCS or CPT billed."
  },

  "N847": {
    short: "Obsolete NDC.",
    full: "National Drug Code billed is obsolete."
  },

  "N848": {
    short: "Invalid NDC product.",
    full: "National Drug Code cannot be associated with a valid product."
  },

  "N849": {
    short: "Tooth missing clause.",
    full: "Tooth missing prior to member effective date."
  },

  "N850": {
    short: "Missing narrative.",
    full: "Missing or invalid narrative describing the service or treatment."
  },

  "N851": {
    short: "Therapy assistant reduction.",
    full: "Payment reduced because services were furnished by a therapy assistant."
  },

  "N852": {
    short: "TIN mismatch.",
    full: "Pay-to and rendering provider tax identification numbers do not match."
  },

  "N853": {
    short: "Modality limit exceeded.",
    full: "Number of therapy modalities per session exceeds allowable maximum."
  },

  "N854": {
    short: "Primary OHI appeal required.",
    full: "All appeal levels with primary other health insurance must be exhausted."
  },

  "N855": {
    short: "ERISA governed coverage.",
    full: "Coverage subject to exclusive jurisdiction of ERISA."
  },

  "N856": {
    short: "Non-ERISA coverage.",
    full: "Coverage not subject to ERISA jurisdiction."
  },

  "N857": {
    short: "Copayment refund required.",
    full: "Claim adjusted or reversed; refund any collected copayment to the member."
  },

  "N858": {
    short: "State emergency billing law applied.",
    full: "Processed under state Out-of-Network Emergency Medical Care regulations."
  },

  "N859": {
    short: "Federal No Surprises Act applied.",
    full: "Processed under Federal No Surprises Billing Act."
  },

  "N860": {
    short: "QPA used for cost sharing.",
    full: "Cost sharing calculated using the qualifying payment amount."
  },

  "N861": {
    short: "Patient liability mismatch.",
    full: "Mismatch between submitted patient liability and payer records."
  },

  "N862": {
    short: "NSA compliant cost share.",
    full: "Member cost share calculated in compliance with No Surprises Act."
  },

  "N863": {
    short: "NSA final out-of-network rate.",
    full: "Final out-of-network rate determined under No Surprises Act."
  },

  "N864": {
    short: "NSA emergency services.",
    full: "Claim subject to No Surprises Act emergency services provisions."
  },

  "N865": {
    short: "NSA non-emergency facility services.",
    full: "Claim subject to No Surprises Act non-emergency facility provisions."
  },

  "N866": {
    short: "NSA air ambulance services.",
    full: "Claim subject to No Surprises Act air ambulance provisions."
  },

  "N867": {
    short: "State law cost sharing.",
    full: "Cost sharing calculated based on applicable state law."
  },

  "N868": {
    short: "All-payer model cost sharing.",
    full: "Cost sharing calculated under All-Payer Model Agreement."
  },

  "N869": {
    short: "QPA-based cost sharing.",
    full: "Cost sharing calculated using the qualifying payment amount."
  },

  "N870": {
    short: "Lower billed amount used.",
    full: "Cost sharing based on billed amount because it was lower than QPA."
  },

  "N871": {
    short: "Initial NSA payment.",
    full: "Initial payment calculated under No Surprises Act."
  },

  "N872": {
    short: "Final state-law payment.",
    full: "Final payment calculated under applicable state law."
  },

  "N873": {
    short: "Final all-payer model payment.",
    full: "Final payment calculated under All-Payer Model Agreement."
  },

  "N874": {
    short: "Open negotiation payment.",
    full: "Final payment determined through open negotiation under No Surprises Act."
  },

  "N875": {
    short: "IDR selected payment.",
    full: "Final payment determined by Federal Independent Dispute Resolution entity."
  },
  "N876": {
    short: "NSA denial notice.",
    full: "This item or service is covered under the plan. This is a notice of denial of payment provided in accordance with the No Surprises Act."
  },

  "N877": {
    short: "NSA initial payment notice.",
    full: "Initial payment provided under the No Surprises Act. Provider may initiate open negotiation."
  },

  "N878": {
    short: "Invalid NSA consent.",
    full: "Notice and consent to balance bill was not obtained in compliance with Federal law; balance billing prohibited."
  },

  "N879": {
    short: "NSA consent not permitted.",
    full: "Notice and consent to balance bill is not permitted for these services; balance billing prohibited."
  },

  "N880": {
    short: "Original claim closed.",
    full: "Original claim closed due to changes in submitted data. Adjustment processed under new claim number."
  },

  "N881": {
    short: "Client obligation HCBS.",
    full: "Client obligation or patient responsibility for Home and Community Based Services."
  },

  "N882": {
    short: "NSA consent-based payment.",
    full: "Out-of-network payment based on plan allowance due to patient consent to waive balance billing protections."
  },

  "N883": {
    short: "Processed per state law.",
    full: "Claim processed according to applicable state law."
  },

  "N884": {
    short: "NSA applicability review.",
    full: "No Surprises Act may apply. Contact payer for instructions on submitting additional information."
  },

  "N885": {
    short: "NSA determination disputed.",
    full: "Claim not processed under No Surprises Act requirements. Provider may appeal this determination."
  },

  "N886": {
    short: "277 RFAI sent.",
    full: "Health Care Claim Request for Additional Information (277 RFAI) has been sent."
  },

  "N887": {
    short: "MA provider appeal rights.",
    full: "Medicare Advantage non-participating provider appeal rights apply with waiver of liability."
  },

  "N888": {
    short: "Electronic RFAI sent.",
    full: "Electronic request for additional information has been sent for this claim."
  },

  "N889": {
    short: "Real-time processing notice.",
    full: "Claim originally processed in real-time with a real-time 835 response."
  },

  "N890": {
    short: "EVV requirements not met.",
    full: "Electronic Visit Verification data element requirements were not met."
  },

  "N891": {
    short: "Primary max paid.",
    full: "Maximum allowable payment was paid by the primary insurance; no further payment due."
  },

  "N892": {
    short: "Invalid delay reason.",
    full: "Claim does not meet criteria for acceptable use of Delay Reason Code."
  },

  "N893": {
    short: "Missing child evaluation.",
    full: "Missing or invalid child medical evaluation form or checklist."
  },

  "N894": {
    short: "Reservation of rights.",
    full: "Payment made subject to reservation of rights for potential future recoupment."
  },

  "N895": {
    short: "Specialty drug pricing.",
    full: "Processed based on a negotiated fee schedule for a specialty drug program."
  },

  "N896": {
    short: "Missing trauma activation.",
    full: "Missing or invalid trauma activation sheet."
  },

  "N897": {
    short: "Missing proof of payment.",
    full: "Missing or invalid proof of member payment."
  },

  "N898": {
    short: "Missing RUG codes.",
    full: "Missing or invalid Resource Utilization Group (RUG) codes."
  },

  "N899": {
    short: "Missing initial evaluation.",
    full: "Missing initial evaluation report."
  },

  "N900": {
    short: "Missing therapy notes.",
    full: "Missing therapy notes or report."
  },

  "N901": {
    short: "Invalid therapy notes.",
    full: "Incomplete or invalid therapy notes or report."
  },

  "N902": {
    short: "Missing HRA.",
    full: "Missing Health Risk Assessment."
  },

  "N903": {
    short: "Invalid HRA.",
    full: "Incomplete or invalid Health Risk Assessment."
  },

  "N904": {
    short: "Transportation vendor liability.",
    full: "Transportation vendor is responsible for this claim."
  },

  "N905": {
    short: "Opted-out Medicare provider.",
    full: "Provider opted out of Medicare; claim not payable and patient not responsible."
  },

  "N906": {
    short: "Age restriction applies.",
    full: "Service is not covered when patient is under the specified age limit."
  },

  "N907": {
    short: "340B no refund.",
    full: "No refund due to 340B ceiling price eligibility."
  },

  "N908": {
    short: "Prospective drug purchase.",
    full: "Drug purchased prospectively at maximum fair price; no refund applicable."
  },

  "N909": {
    short: "Alternate refund methodology.",
    full: "Refund calculated using an alternate methodology."
  },

  "N910": {
    short: "Manufacturer refund required.",
    full: "Refund cannot be provided at this time; contact manufacturer."
  },

  "N911": {
    short: "Part D PDE correction required.",
    full: "Claim cannot be reimbursed until corrected prescription drug event data is submitted."
  },

  "N912": {
    short: "Hospice not elected.",
    full: "Records indicate beneficiary did not elect hospice."
  },

  "N913": {
    short: "Duplicate EVV records.",
    full: "More than one Electronic Visit Verification record exists for the service."
  },

  "N914": {
    short: "California AB-72 applied.",
    full: "Claim processed in accordance with California AB-72."
  },

  "N915": {
    short: "Predetermination not allowed.",
    full: "Predetermination of services is not allowed under the members plan."
  },

  "N916": {
    short: "Third-party payment.",
    full: "Third party will render payment to the provider and reimburse covered services."
  },

  "M1": {
    short: "X-ray not taken within required time frame.",
    full: "X-ray not taken within the past 12 months or near enough to the start of treatment."
  },

  "M2": {
    short: "Not paid separately for inpatient.",
    full: "Not paid separately when the patient is an inpatient."
  },

  "M3": {
    short: "Equipment already in use.",
    full: "Equipment is the same or similar to equipment already being used."
  },

  "M4": {
    short: "Last rental installment payment.",
    full: "Alert: This is the last monthly installment payment for this durable medical equipment."
  },

  "M5": {
    short: "Rental payments limited by policy.",
    full: "Monthly rental payments can continue until the earlier of the 15th month from the first rental month, or the month when the equipment is no longer needed."
  },

  "M6": {
    short: "Supplier must furnish and service equipment.",
    full: "Alert: You must furnish and service this item for any period of medical need for the remainder of the reasonable useful lifetime of the equipment."
  },

  "M7": {
    short: "No rental after purchase or return.",
    full: "No rental payments after the item is purchased, returned, or after total rental payments equal the purchase price."
  },

  "M8": {
    short: "Blood gas test not acceptable.",
    full: "We do not accept blood gas test results when conducted by a medical supplier or taken while the patient is on oxygen."
  },

  "M9": {
    short: "10th rental month – purchase option required.",
    full: "Alert: This is the tenth rental month. You must offer the patient the choice of changing the rental to a purchase agreement."
  },

  "M10": {
    short: "Equipment purchase month limitation.",
    full: "Equipment purchases are limited to the first or the tenth month of medical necessity."
  },

  "M11": {
    short: "Bill DME carrier by ZIP code.",
    full: "DME, orthotics, and prosthetics must be billed to the DME carrier who services the patients ZIP code."
  },

  "M12": {
    short: "Purchased diagnostic service indicator missing.",
    full: "Diagnostic tests performed by a physician must indicate whether purchased services are included on the claim."
  },

  "M13": {
    short: "Only one initial visit allowed.",
    full: "Only one initial visit is covered per specialty per medical group."
  },

  "M14": {
    short: "Injection bundled with office visit.",
    full: "No separate payment for an injection administered during an office visit, and no payment for a full office visit if the patient only received an injection."
  },

  "M15": {
    short: "Services bundled together.",
    full: "Separately billed services/tests have been bundled as they are considered components of the same procedure. Separate payment is not allowed."
  },

  "M16": {
    short: "Refer to policy or bulletin.",
    full: "Alert: Please see our website, mailings, or bulletins for more details concerning this policy, procedure, or decision."
  },

  "M17": {
    short: "Payment approved under limitation of liability.",
    full: "Alert: Payment approved as you did not know, and could not reasonably have been expected to know, that this service would not normally be covered for this patient."
  },

  "M18": {
    short: "Service approved only for home use.",
    full: "Certain services may be approved for home use. Neither a hospital nor a skilled nursing facility is considered a patients home."
  },

  "M19": {
    short: "Missing oxygen certification.",
    full: "Missing oxygen certification or re-certification."
  },

  "M20": {
    short: "Invalid or missing HCPCS code.",
    full: "Missing, incomplete, or invalid HCPCS code."
  },

  "M21": {
    short: "Invalid place of residence.",
    full: "Missing, incomplete, or invalid place of residence for this service or item provided in a home."
  },

  "M22": {
    short: "Invalid mileage information.",
    full: "Missing, incomplete, or invalid number of miles traveled."
  },

  "M23": {
    short: "Invoice missing.",
    full: "Missing invoice."
  },

  "M24": {
    short: "Invalid dosage per vial.",
    full: "Missing, incomplete, or invalid number of doses per vial."
  },

  "M25": {
    short: "Medical necessity not supported.",
    full: "The information furnished does not substantiate the need for this level of service."
  },

  "M26": {
    short: "Refund required due to unsupported service.",
    full: "The information furnished does not substantiate the need for this level of service. Refund requirements apply if patient was billed."
  },

  "M27": {
    short: "Patient relieved of liability.",
    full: "Alert: The patient has been relieved of liability for payment of these items and services under the limitation of liability provision."
  },

  "M28": {
    short: "Not payable under Part B.",
    full: "This service does not qualify for payment under Medicare Part B when Part A coverage is exhausted or not available."
  },

  "M29": {
    short: "Operative report missing.",
    full: "Missing operative note or operative report."
  },

  "M30": {
    short: "Pathology report missing.",
    full: "Missing pathology report."
  },
  "M31": {
    short: "Radiology report missing.",
    full: "Missing radiology report."
  },

  "M32": {
    short: "Conditional payment pending primary payer decision.",
    full: "Alert: This is a conditional payment made pending a decision on this service by the patients primary payer."
  },

  "M33": {
    short: "Missing durable medical equipment information.",
    full: "Missing or incomplete durable medical equipment information."
  },

  "M34": {
    short: "Missing or invalid patient weight.",
    full: "Missing or invalid patient weight."
  },

  "M35": {
    short: "Missing or invalid patient height.",
    full: "Missing or invalid patient height."
  },

  "M36": {
    short: "11th rental month – purchase option not documented.",
    full: "This is the 11th rental month. Payment cannot be made until documentation shows the patient was given the option to change the rental to a purchase."
  },

  "M37": {
    short: "Not covered for patients under age 35.",
    full: "This service is not covered when the patient is under age 35."
  },

  "M38": {
    short: "Patient liable due to prior written notice.",
    full: "Alert: The patient is liable for the charges for this service as they were informed in writing before the service was furnished that payment would not be made."
  },

  "M39": {
    short: "Patient not liable due to invalid ABN.",
    full: "Alert: The patient is not liable for payment of this service as the advance notice of non-coverage did not comply with program requirements."
  },

  "M40": {
    short: "Claim must be assigned and billed by employer.",
    full: "Claim must be assigned and must be filed by the practitioners employer."
  },

  "M41": {
    short: "Patient has no legal obligation to pay.",
    full: "We do not pay for this service because the patient has no legal obligation to pay for it."
  },

  "M42": {
    short: "Physician signature missing on medical necessity form.",
    full: "The medical necessity form must be personally signed by the attending physician."
  },

  "M43": {
    short: "Missing or invalid revenue center code.",
    full: "Missing or invalid revenue center code."
  },

  "M44": {
    short: "Invalid condition code.",
    full: "Missing, incomplete, or invalid condition code."
  },

  "M45": {
    short: "Invalid occurrence code.",
    full: "Missing, incomplete, or invalid occurrence code(s)."
  },

  "M46": {
    short: "Invalid occurrence span code.",
    full: "Missing, incomplete, or invalid occurrence span code(s)."
  },

  "M47": {
    short: "Invalid payer claim control number.",
    full: "Missing, incomplete, or invalid payer claim control number."
  },

  "M48": {
    short: "Missing or invalid anesthesia time.",
    full: "Missing or invalid anesthesia time."
  },

  "M49": {
    short: "Invalid value code or amount.",
    full: "Missing, incomplete, or invalid value code(s) or amount(s)."
  },

  "M50": {
    short: "Invalid revenue code.",
    full: "Missing, incomplete, or invalid revenue code(s)."
  },

  "M51": {
    short: "Invalid procedure code.",
    full: "Missing, incomplete, or invalid procedure code(s)."
  },

  "M52": {
    short: "Invalid from-date of service.",
    full: "Missing, incomplete, or invalid 'from' date(s) of service."
  },

  "M53": {
    short: "Invalid days or units billed.",
    full: "Missing, incomplete, or invalid days or units of service."
  },

  "M54": {
    short: "Invalid total charges.",
    full: "Missing, incomplete, or invalid total charges."
  },

  "M55": {
    short: "Self-administered anti-emetic not covered.",
    full: "We do not pay for self-administered anti-emetic drugs that are not administered with a covered oral anti-cancer drug."
  },

  "M56": {
    short: "Invalid payer identifier.",
    full: "Missing, incomplete, or invalid payer identifier."
  },

  "M57": {
    short: "Invalid attending provider identifier.",
    full: "Missing or invalid attending provider identifier."
  },

  "M58": {
    short: "Invalid rendering provider identifier.",
    full: "Missing or invalid rendering provider identifier."
  },

  "M59": {
    short: "Invalid to-date of service.",
    full: "Missing, incomplete, or invalid 'to' date(s) of service."
  },

  "M60": {
    short: "Certificate of Medical Necessity missing.",
    full: "Missing Certificate of Medical Necessity."
  },
  "M61": {
    short: "Clinical trial approval expired.",
    full: "We cannot pay for this as the approval period for the FDA clinical trial has expired."
  },

  "M62": {
    short: "Missing authorization code.",
    full: "Missing or invalid treatment authorization code."
  },

  "M63": {
    short: "Procedure code incorrect for diagnosis.",
    full: "Procedure code is incorrect for the reported diagnosis."
  },

  "M64": {
    short: "Invalid other diagnosis.",
    full: "Missing or invalid other diagnosis."
  },

  "M65": {
    short: "Only one interpreting physician allowed.",
    full: "One interpreting physician charge can be submitted per claim."
  },

  "M66": {
    short: "Professional and technical components must be separate.",
    full: "Submit the technical and professional components as separate line items."
  },

  "M67": {
    short: "Invalid other procedure code.",
    full: "Missing or invalid other procedure code(s)."
  },

  "M69": {
    short: "Documentation not submitted for modifier.",
    full: "Paid at the regular rate as documentation was not submitted to justify the modified procedure code."
  },

  "M70": {
    short: "NDC translated to HCPCS.",
    full: "Alert: NDC code was translated to HCPCS. Continue submitting NDC on future claims."
  },

  "M71": {
    short: "Payment reduced due to overlapping tests.",
    full: "Total payment reduced due to overlap of tests billed."
  },

  "M73": {
    short: "HPSA bonus applies only to professional component.",
    full: "HPSA bonus can only be paid on the professional component."
  },

  "M74": {
    short: "Service not eligible for HPSA bonus.",
    full: "This service does not qualify for a HPSA bonus payment."
  },

  "M75": {
    short: "Multiple tests combined for payment.",
    full: "Multiple automated tests performed on the same day combined for payment."
  },

  "M76": {
    short: "Invalid diagnosis code.",
    full: "Missing or invalid diagnosis or condition."
  },

  "M77": {
    short: "Invalid place of service.",
    full: "Missing or invalid place of service."
  },

  "M79": {
    short: "Invalid charge amount.",
    full: "Missing or invalid charge."
  },

  "M80": {
    short: "Service already processed for same date.",
    full: "Not covered when performed during the same session or date as a previously processed service."
  },

  "M81": {
    short: "Code must be more specific.",
    full: "You are required to code to the highest level of specificity."
  },

  "M82": {
    short: "Not covered under age 50.",
    full: "Service is not covered when patient is under age 50."
  },

  "M83": {
    short: "Patient not classified as high risk.",
    full: "Service is not covered unless patient is classified as high risk."
  },

  "M84": {
    short: "Incorrect code set used.",
    full: "Medical code sets used must be the codes in effect at the time of service."
  },

  "M85": {
    short: "Subject to E/M review.",
    full: "Subjected to review of physician evaluation and management services."
  },

  "M86": {
    short: "Duplicate or similar procedure paid earlier.",
    full: "Service denied because payment already made for same or similar procedure."
  },

  "M87": {
    short: "Claim under prepayment review.",
    full: "Claim subjected to CFO-CAP prepayment review."
  },

  "M89": {
    short: "Frequency limit under age 40.",
    full: "Not covered more than once under age 40."
  },

  "M90": {
    short: "Frequency limit in 12 months.",
    full: "Not covered more than once in a 12 month period."
  },
  "M91": {
    short: "Different CLIA numbers require separate claims.",
    full: "Lab procedures with different CLIA certification numbers must be billed on separate claims."
  },

  "M93": {
    short: "Break in therapy supported.",
    full: "Information supplied supports a break in therapy. A new capped rental period began with delivery of this equipment."
  },

  "M94": {
    short: "Break in therapy not supported.",
    full: "Information supplied does not support a break in therapy. A new capped rental period will not begin."
  },

  "M95": {
    short: "Home Health Initiative review.",
    full: "Services subjected to Home Health Initiative medical review or cost report audit."
  },

  "M96": {
    short: "Technical component billed incorrectly.",
    full: "Technical component furnished to an inpatient may only be billed by the inpatient facility."
  },

  "M97": {
    short: "Included in facility payment.",
    full: "Not paid to practitioner when provided in this place of service. Payment included in facility reimbursement."
  },

  "M99": {
    short: "Missing product or serial number.",
    full: "Missing or invalid Universal Product Number or Serial Number."
  },

  "M100": {
    short: "Oral anti-emetic not covered.",
    full: "We do not pay for oral anti-emetic drugs not administered with covered chemotherapy."
  },

  "M102": {
    short: "Equipment not FDA approved.",
    full: "Service not performed on equipment approved by the FDA for this purpose."
  },

  "M103": {
    short: "Break in therapy with reduced payment.",
    full: "Break in therapy supported but medical necessity not fully supported. Payment approved at reduced level."
  },

  "M104": {
    short: "Maximum allowed under fee schedule.",
    full: "Break in therapy supported. This is the maximum approved under the fee schedule."
  },

  "M105": {
    short: "Break not supported, reduced payment.",
    full: "Break in therapy not supported. Payment approved at reduced level."
  },

  "M107": {
    short: "Hematocrit level exceeded.",
    full: "Payment reduced as 90-day rolling average hematocrit exceeded 36.5%."
  },

  "M109": {
    short: "Teleconsultation bundled payment.",
    full: "Bundled payment made for teleconsultation. Provider must share payment with referring practitioner."
  },

  "M111": {
    short: "Chiropractic service without x-ray.",
    full: "Chiropractic treatment not covered when patient refuses x-ray."
  },

  "M112": {
    short: "Competitive bidding payment applied.",
    full: "Reimbursement based on DMEPOS Competitive Bidding Program."
  },

  "M113": {
    short: "Service started before contract period.",
    full: "Patient began using this item before current competitive bidding contract period."
  },

  "M114": {
    short: "Processed under demonstration program.",
    full: "Service processed under DMEPOS Competitive Bidding or demonstration project."
  },

  "M115": {
    short: "Non-contract supplier denial.",
    full: "Item denied when provided by non-contract supplier."
  },

  "M116": {
    short: "Demonstration project ending.",
    full: "Processed under a demonstration project which is ending."
  },

  "M117": {
    short: "Electronic submission required.",
    full: "Not covered unless submitted via electronic claim."
  },

  "M119": {
    short: "Invalid or inactive NDC.",
    full: "Missing, invalid, deactivated or withdrawn National Drug Code."
  },

  "M120": {
    short: "Cryosurgical ablation required.",
    full: "Service is payable only when performed with a covered cryosurgical ablation."
  },
  "M121": {
    short: "Payable only with cryosurgical ablation.",
    full: "We pay for this service only when performed with a covered cryosurgical ablation."
  },

  "M122": {
    short: "Invalid level of subluxation.",
    full: "Missing or invalid level of subluxation."
  },

  "M123": {
    short: "Drug details missing.",
    full: "Missing or invalid name, strength, or dosage of the drug furnished."
  },

  "M124": {
    short: "Equipment ownership not indicated.",
    full: "Missing indication of whether the patient owns the equipment requiring the part or supply."
  },

  "M125": {
    short: "Duration of need missing.",
    full: "Missing or invalid information on the period of time the service or equipment is needed."
  },

  "M126": {
    short: "Lab codes missing.",
    full: "Missing or invalid individual lab codes included in the test."
  },

  "M127": {
    short: "Medical record missing.",
    full: "Missing patient medical record for this service."
  },

  "M129": {
    short: "X-ray availability not indicated.",
    full: "Missing indication of x-ray availability for review."
  },

  "M130": {
    short: "Lens invoice missing.",
    full: "Missing invoice or statement certifying the actual cost of the lens."
  },

  "M131": {
    short: "Physician financial relationship form missing.",
    full: "Missing physician financial relationship form."
  },

  "M132": {
    short: "Pacemaker registration missing.",
    full: "Missing pacemaker registration form."
  },

  "M133": {
    short: "Purchased test performer not identified.",
    full: "Claim did not identify who performed the purchased diagnostic test or the amount charged."
  },

  "M134": {
    short: "Financial interest conflict.",
    full: "Performed by a facility or supplier in which the provider has a financial interest."
  },

  "M135": {
    short: "Plan of treatment missing.",
    full: "Missing or invalid plan of treatment."
  },

  "M136": {
    short: "Physician supervision not indicated.",
    full: "Missing indication that the service was supervised or evaluated by a physician."
  },

  "M137": {
    short: "Demonstration project coinsurance.",
    full: "Part B coinsurance under a demonstration project or pilot program."
  },

  "M138": {
    short: "Patient not enrolled in demonstration.",
    full: "Patient identified as demonstration participant but not enrolled at time of service."
  },

  "M139": {
    short: "Coverage limit exceeded.",
    full: "Denied services exceed the coverage limit for the demonstration."
  },

  "M141": {
    short: "Physician certified plan of care missing.",
    full: "Missing physician certified plan of care."
  },

  "M142": {
    short: "ADA certification missing.",
    full: "Missing American Diabetes Association Certificate of Recognition."
  },

  "M143": {
    short: "Provider license update required.",
    full: "The provider must update license information with the payer."
  },

  "M144": {
    short: "Post-op care included in surgery payment.",
    full: "Pre- and post-operative care payment is included in the allowance for the surgery or procedure."
  },
  "MA01": {
    short: "Appeal allowed within 120 days.",
    full: "Alert: If you do not agree with what we approved for these services, you may appeal within 120 days."
  },

  "MA02": {
    short: "Appeal allowed within 180 days.",
    full: "Alert: If you do not agree with this determination, you have the right to appeal within 180 days."
  },

  "MA04": {
    short: "Primary payer information missing.",
    full: "Secondary payment cannot be considered without payment information from the primary payer."
  },

  "MA07": {
    short: "Claim forwarded to Medicaid.",
    full: "Alert: The claim information has been forwarded to Medicaid for review."
  },

  "MA08": {
    short: "Claim not forwarded to Medigap.",
    full: "Alert: Claim information was not forwarded because supplemental coverage is not with a Medigap plan."
  },

  "MA09": {
    short: "Processed as assigned claim.",
    full: "Alert: Claim submitted as unassigned but processed as assigned."
  },

  "MA10": {
    short: "Patient overpaid.",
    full: "Alert: The patients payment was in excess of the amount owed. Refund required."
  },

  "MA12": {
    short: "Billing rights not established.",
    full: "You have not established the right to bill for services furnished by another individual."
  },

  "MA13": {
    short: "Penalties possible for billing patient.",
    full: "Alert: You may be subject to penalties if you bill the patient incorrectly."
  },

  "MA14": {
    short: "Employer-sponsored plan restriction.",
    full: "Alert: Services outside the employer-sponsored prepaid plan are not covered."
  },

  "MA15": {
    short: "Claim separated for processing.",
    full: "Alert: Your claim has been separated to expedite handling."
  },

  "MA16": {
    short: "Black Lung Program applies.",
    full: "Patient covered under the Federal Black Lung Program."
  },

  "MA17": {
    short: "Primary payer paid at correct rate.",
    full: "We are the primary payer and have paid at the primary rate."
  },

  "MA18": {
    short: "Forwarded to supplemental insurer.",
    full: "Alert: Claim information forwarded to the patients supplemental insurer."
  },

  "MA19": {
    short: "Incorrect Medigap info.",
    full: "Alert: Information was not sent to Medigap insurer due to invalid data."
  },

  "MA20": {
    short: "SNF stay not covered.",
    full: "Skilled Nursing Facility stay not covered when care is primarily for convenience."
  },

  "MA21": {
    short: "SSA data mismatch.",
    full: "SSA records indicate mismatch with name or gender."
  },

  "MA22": {
    short: "Payment under $1 suppressed.",
    full: "Payment of less than $1.00 suppressed."
  },

  "MA23": {
    short: "Demand bill approved.",
    full: "Demand bill approved as a result of medical review."
  },

  "MA24": {
    short: "SNF overlap in benefit period.",
    full: "Christian Science Sanitarium or SNF bill in same benefit period."
  },

  "MA25": {
    short: "Hospice provider change limit.",
    full: "Patient may not change hospice provider more than once per benefit period."
  },
  "MA26": {
    short: "Previously informed of rule.",
    full: "Alert: Our records indicate that you were previously informed of this rule."
  },

  "MA27": {
    short: "Invalid entitlement number or name.",
    full: "Missing, incomplete, or invalid entitlement number or name on the claim."
  },

  "MA28": {
    short: "No appeal rights for non-assigned providers.",
    full: "Alert: Receipt of this notice does not confer appeal rights to non-assigned providers."
  },

  "MA30": {
    short: "Invalid type of bill.",
    full: "Missing, incomplete, or invalid type of bill."
  },

  "MA31": {
    short: "Invalid billing period dates.",
    full: "Missing, incomplete, or invalid beginning and ending dates of the period billed."
  },

  "MA32": {
    short: "Invalid covered days.",
    full: "Missing, incomplete, or invalid number of covered days."
  },

  "MA33": {
    short: "Invalid non-covered days.",
    full: "Missing, incomplete, or invalid number of non-covered days."
  },

  "MA34": {
    short: "Invalid coinsurance days.",
    full: "Missing, incomplete, or invalid number of coinsurance days."
  },

  "MA35": {
    short: "Invalid lifetime reserve days.",
    full: "Missing, incomplete, or invalid number of lifetime reserve days."
  },

  "MA36": {
    short: "Invalid patient name.",
    full: "Missing, incomplete, or invalid patient name."
  },

  "MA37": {
    short: "Invalid patient address.",
    full: "Missing, incomplete, or invalid patients address."
  },

  "MA39": {
    short: "Invalid gender.",
    full: "Missing, incomplete, or invalid gender."
  },

  "MA40": {
    short: "Invalid admission date.",
    full: "Missing, incomplete, or invalid admission date."
  },

  "MA41": {
    short: "Invalid admission type.",
    full: "Missing, incomplete, or invalid admission type."
  },

  "MA42": {
    short: "Invalid admission source.",
    full: "Missing, incomplete, or invalid admission source."
  },

  "MA43": {
    short: "Invalid patient status.",
    full: "Missing, incomplete, or invalid patient status."
  },

  "MA44": {
    short: "No appeal rights.",
    full: "Alert: No appeal rights. Adjudicative decision based on law."
  },

  "MA45": {
    short: "Payment held in special account.",
    full: "Alert: A portion or all of your payment is being held in a special account."
  },

  "MA46": {
    short: "No additional payment.",
    full: "Alert: New information considered but no additional payment will be issued."
  },

  "MA47": {
    short: "Provider opted out of Medicare.",
    full: "Provider opted out of Medicare. Claim cannot be paid and patient is responsible."
  },

  "MA48": {
    short: "Responsible party info missing.",
    full: "Missing, incomplete, or invalid name or address of responsible party or primary payer."
  },

  "MA50": {
    short: "Invalid clinical trial number.",
    full: "Missing, incomplete, or invalid investigational device exemption or clinical trial number."
  },
  "MA53": {
    short: "Invalid competitive bidding ID.",
    full: "Missing, incomplete, or invalid Competitive Bidding Demonstration Project identification."
  },

  "MA54": {
    short: "Hospice certification not received.",
    full: "Physician certification or election consent for hospice care not received timely."
  },

  "MA55": {
    short: "Religious care election revoked.",
    full: "Not covered as patient received medical care, revoking election for religious non-medical care."
  },

  "MA56": {
    short: "Provider opted out, limiting charge applies.",
    full: "Provider opted out of Medicare. Patient responsible, but limiting charge applies."
  },

  "MA57": {
    short: "Religious care election revoked by patient.",
    full: "Patient submitted written request to revoke election for religious non-medical care."
  },

  "MA58": {
    short: "Release of information missing.",
    full: "Missing, incomplete, or invalid release of information indicator."
  },

  "MA59": {
    short: "Patient overpaid.",
    full: "Alert: Patient overpaid. Refund required within 30 days."
  },

  "MA60": {
    short: "Invalid patient relationship.",
    full: "Missing, incomplete, or invalid patient relationship to insured."
  },

  "MA61": {
    short: "Invalid SSN.",
    full: "Missing, incomplete, or invalid Social Security Number."
  },

  "MA62": {
    short: "Telephone review decision.",
    full: "Alert: This is a telephone review decision."
  },

  "MA63": {
    short: "Invalid principal diagnosis.",
    full: "Missing, incomplete, or invalid principal diagnosis."
  },

  "MA64": {
    short: "Third payer responsibility.",
    full: "We are the third payer. Primary and secondary payments required."
  },

  "MA65": {
    short: "Invalid admitting diagnosis.",
    full: "Missing, incomplete, or invalid admitting diagnosis."
  },

  "MA66": {
    short: "Invalid principal procedure.",
    full: "Missing, incomplete, or invalid principal procedure code."
  },

  "MA67": {
    short: "Correction to prior claim.",
    full: "Alert: Correction to a prior claim."
  },

  "MA68": {
    short: "Claim not crossed over.",
    full: "Alert: Claim not crossed over due to incomplete secondary insurance information."
  },

  "MA69": {
    short: "Invalid remarks.",
    full: "Missing, incomplete, or invalid remarks."
  },

  "MA70": {
    short: "Provider signature missing.",
    full: "Missing, incomplete, or invalid provider representative signature."
  },

  "MA71": {
    short: "Signature date missing.",
    full: "Missing, incomplete, or invalid provider representative signature date."
  },

  "MA72": {
    short: "Patient overpaid assigned services.",
    full: "Alert: Patient overpaid for assigned services. Refund required."
  },

  "MA73": {
    short: "Demonstration informational notice.",
    full: "Informational remittance for Medicare demonstration. No payment issued."
  },

  "MA74": {
    short: "Replacement payment issued.",
    full: "Alert: This payment replaces an earlier lost, damaged, or returned payment."
  },

  "MA75": {
    short: "Patient signature missing.",
    full: "Missing, incomplete, or invalid patient or authorized representative signature."
  },
  "MA76": {
    short: "Invalid provider identifier.",
    full: "Missing, incomplete, or invalid provider identifier."
  },

  "MA77": {
    short: "Patient overpaid.",
    full: "Alert: Patient overpaid. Refund required within 30 days."
  },

  "MA79": {
    short: "Billed above interim rate.",
    full: "Billed in excess of interim rate."
  },

  "MA80": {
    short: "Informational notice only.",
    full: "Informational notice. No payment issued for this claim."
  },

  "MA81": {
    short: "Provider signature missing.",
    full: "Missing, incomplete, or invalid provider or supplier signature."
  },

  "MA83": {
    short: "Primary/secondary payer not indicated.",
    full: "Did not indicate whether we are the primary or secondary payer."
  },

  "MA84": {
    short: "Not enrolled in clinical trial phase.",
    full: "Patient identified as clinical trial participant but not approved at time of service."
  },

  "MA88": {
    short: "Primary payer address missing.",
    full: "Missing, incomplete, or invalid insured address or phone number for primary payer."
  },

  "MA89": {
    short: "Invalid relationship to insured.",
    full: "Missing, incomplete, or invalid patient relationship to insured for primary payer."
  },

  "MA90": {
    short: "Invalid employment status.",
    full: "Missing, incomplete, or invalid employment status code for primary insured."
  },

  "MA91": {
    short: "Appeal decision issued.",
    full: "Alert: This determination is the result of the appeal you filed."
  },

  "MA92": {
    short: "Other insurance info missing.",
    full: "Missing plan information for other insurance."
  },

  "MA93": {
    short: "Non-PIP claim.",
    full: "Non-PIP (Periodic Interim Payment) claim."
  },

  "MA94": {
    short: "Hospice physician statement missing.",
    full: "Missing required statement certifying attending physician is not hospice employee."
  },

  "MA96": {
    short: "Patient not enrolled in managed care.",
    full: "Claim rejected. Patient not enrolled in Medicare managed care plan."
  },

  "MA97": {
    short: "Invalid managed care contract number.",
    full: "Missing, incomplete, or invalid Medicare Managed Care contract or clinical trial number."
  },

  "MA99": {
    short: "Invalid Medigap information.",
    full: "Missing, incomplete, or invalid Medigap information."
  },

  "MA100": {
    short: "Date of illness missing.",
    full: "Missing, incomplete, or invalid date of current illness or symptoms."
  },

  "MA103": {
    short: "Hemophilia add-on.",
    full: "Hemophilia add-on."
  },

  "MA106": {
    short: "PIP claim.",
    full: "PIP (Periodic Interim Payment) claim."
  },

  "MA107": {
    short: "Paper claim field limit exceeded.",
    full: "Paper claim contains more than three data items in field 19."
  },

  "MA108": {
    short: "Paper claim error.",
    full: "Paper claim contains more than one data item in field 23."
  },

  "MA109": {
    short: "ASC guidelines applied.",
    full: "Claim processed according to ambulatory surgical guidelines."
  },

  "MA110": {
    short: "Purchased test indicator missing.",
    full: "Missing, incomplete, or invalid indication of purchased diagnostic tests."
  },

  "MA111": {
    short: "Purchased test details missing.",
    full: "Missing purchase price or performing lab information for diagnostic test."
  },

  "MA112": {
    short: "Group practice info missing.",
    full: "Missing, incomplete, or invalid group practice information."
  },

  "MA113": {
    short: "Invalid TIN.",
    full: "Incomplete or invalid Taxpayer Identification Number (TIN)."
  },

  "MA114": {
    short: "Service location missing.",
    full: "Missing, incomplete, or invalid information on where services were furnished."
  },
    }
};
