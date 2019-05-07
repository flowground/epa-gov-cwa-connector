# ![LOGO](logo.png) U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services **flow**ground Connector

## Description

A generated **flow**ground connector for the U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services API (version 0.0.0).

Generated from: https://api.apis.guru/v2/specs/epa.gov/cwa/0.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:22+03:00

## API Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>CWA Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on facilities regulated under the Clean Water Act (CWA) and managed under the National Pollutant Discharge Elimination System (NPDES) program. The returned results reflect data drawn from EPA's ICIS-NPDES database.
<BR><BR>
The get_facilities, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_facility_info end point is self contained.
  The get_facility_info end point returns either an array of state, county or zip clusters with summary statistics per cluster or an array of facilities.
<br><br>
The recommended use scenario for get_facilities, get_qid, get_map, and get_downoad is:
<br>
<br><b>1)</b>  Use get_facilities to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of facility results.
<br><b>3)</b>  Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates that meet the QID query criteria.
<br><b>4)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
<br>
<br>
Use the qcolumns parameter to customize your search results.  Use the Metdata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
<br><br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>

## Authorization

This API does not require authorization.

## Actions

### Clean Water Act (CWA) Download Data Service

> Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Download Data Service

> Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Facility Search Service

> Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_sa` - _optional_ - Facility street address. Enter a complete or partial street address.
* `p_sa1` - _optional_ - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_frs` - _optional_ - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* `p_ncs` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_pen` - _optional_ - Last Penality Date Qualifier Filter.  Enter one of the following:   
- NEVER = No Penalties
- ANY = Any Penalty
- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
* `p_c1lat` - _optional_ - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c1lon` - _optional_ - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lat` - _optional_ - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lon` - _optional_ - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_sic2` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* `p_sic4` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* `p_fa` - _optional_ - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* `p_ff` - _optional_ - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
    Possible values: Y.
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
* `p_maj` - _optional_ - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
    Possible values: Y, N.
* `p_mact` - _optional_ - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_iv` - _optional_ - Facility has a violation status of 'In Viol' during any of the selected quarters. 

Range: Fiscal Year 2018 Quarter 3 to Fiscal Year 2015 Quarter 3

Multiple values are comma delimited.


||||||  Fiscal Years ||||||
- FY2018 or FY18 or 2018 or 18
- FY2017 or FY17 or 2017 or 17
- FY2016 or FY16 or 2016 or 16
- FY2015 or FY15 or 2015 or 15

||||| Fiscal Quarters |||||
- FY2018Q3 or FY18Q3 or 20183 or 183 or 13
- FY2018Q2 or FY18Q2 or 20182 or 182 or 12
- FY2018Q1 or FY18Q1 or 20181 or 181 or 11
- FY2017Q4 or FY17Q4 or 20174 or 174 or 10
- FY2017Q3 or FY17Q3 or 20173 or 173 or 9
- FY2017Q2 or FY17Q2 or 20172 or 172 or 8
- FY2017Q1 or FY17Q1 or 20171 or 171 or 7
- FY2016Q4 or FY16Q4 or 20164 or 164 or 6
- FY2016Q3 or FY16Q3 or 20163 or 163 or 5
- FY2016Q2 or FY16Q2 or 20162 or 162 or 4
- FY2016Q1 or FY16Q1 or 20161 or 161 or 3
- FY2015Q4 or FY15Q4 or 20154 or 154 or 2
- FY2015Q3 or FY15Q3 or 20153 or 153 or 1
* `p_impw` - _optional_ - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
    Possible values: Y, N.
* `p_imp_cau_grp` - _optional_ - Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
    Possible values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY.
* `p_imp_pol` - _optional_ - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
    Possible values: Y, N.
* `p_trep` - _optional_ - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
- NONE = Never has reported to TRI.
- CURR = Current TRI reporter.
- NONCURR = Has reported to TRI in the past but not for the current reporting year.
    Possible values: NONE, CURR, NOTCURR.
* `p_pm` - _optional_ - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
- NONE = 0%
- GT5 = greater than 5%
- GT10 = greater than 10%
- GT25 = greater than 25%
- GT50 = greater than 50%
- GT75 = greater than 75%
    Possible values: NONE, GT5, GT10, GT25, GT50, GT75.
* `p_pd` - _optional_ - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
- NONE = 0 population density per square mile
- GT100 = More than 100 population density per square mile
- GT500 = More than 500 population density per square mile
- GT1000 = More than 1000 population density per square mile
- GT5000 = More than 5000 population density per square mile
- GT10000 = More than 10000 population density per square mile
- GT20000 = More than 20000 population density per square mile
    Possible values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_huc` - _optional_ - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_med` - _optional_ - Filter Results by Media.
- A = Air
- M = RMP (Risk Management Plan)
- R = RCRA (Hazardous Waste)
- S = SDWA (Public Drinking Water Systems)
- ALL = Air and RCRA and Water
    Possible values: A, M, R, S, ALL.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_tribeid` - _optional_ - Numeric code for tribe (or list of tribes).
* `p_tribename` - _optional_ - Tribe Name Filter.  Enter a single tribe name to filter results.
* `p_tribedist` - _optional_ - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* `p_pstat` - _optional_ - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
- EFF = Effective
- EXP = Expired
- PND = Pending
- TRM = Terminated
- RET = Retired
- NON = Not Needed
- ADC = Admin Continued
* `p_ptype` - _optional_ - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
- NPD = NPDES Individual Permit
- NGP = NPDES Master General Permit
- GPC = General Permit Covered Facility
- SNN = State Issued Master General Permit (Non-NPDES)
- IIU = Individual IU Permit (Non-NPDES)
- SIN = Individual State Issued Permit (Non-NPDES)
- APR = Associated Permit Record
- UFT = Unpermitted Facility
* `p_pcomp` - _optional_ - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
- PRE = Pretreatment
- CAF = CAFO
- CSO = CSO
- POT = POTW
- BIO = Biosolids
- SWS = Storm Water Small MS4s
- SWM = Storm Water Medium/Large MS4s
- SWI = Storm Water Industrial
- SWC = Storm Water Construction
* `p_plimits` - _optional_ - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
    Possible values: Y, N.
* `p_pcss` - _optional_ - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
- ALL = returns all facilities, regardless of the number of outflows.
- GE1 = returns facilities with one or more outflows.
- GE10 = returns facilities with ten or more outflows.
- GE50 = returns facilities with fifty or more outflows.
    Possible values: ALL, GE1, GE10, GE50.
* `p_pexp` - _optional_ - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
- EXP = limit results to facilities with permits expired or administratively continued.
- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.
- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.
    Possible values: EXP, EXPLE1YR, EXPGT1YR.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following values to restrict results.
- Federal = Federal facilities regulated under the NPDES program.
- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.
- Non-POTW = Non-publicly owned treatment works. Often referred to as "non-municipals" or "industrials".
    Possible values: FEDERAL, POTW, NON-POTW.
* `p_agoo` - _optional_ - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
    Possible values: AND, OR.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_pccs` - _optional_ - Current Compliance Status:
||||||||||||||||||||||||||| 
Significant Noncompliance (SNC) 
|||||||||||||||||||||||||||
- SNC = E, S, X, T, D
- E = E(EffViol)
- S = S(CSchVio)
- X = X(EffNMth)
- T = T(CSchRpt)
- D = D(DMR NR)

|||||||||||||||||||||||||||
Noncompliance (NC)
|||||||||||||||||||||||||||
- NC = N, V
- N = N(RptViol)
- V = V(NonRNCV)

|||||||||||||||||||||||||||
New Violations (PQV)
|||||||||||||||||||||||||||
- PQV = New Violations (13th Quarter)

|||||||||||||||||||||||||||
No Violations (NV)
|||||||||||||||||||||||||||
- NV = R, P, M, U, W
, Blank, and No New Violations (no PQV)
- R = R(Resolvd)
- P = P(ResPend)
- M = C(Manual)
- U = U(N/A)
- W = W(N/A)
- Blank = (null)

May contain multiple comma-separated values.
* `p_pexcd` - _optional_ - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
- 0 = facilities with no exceedances
- GE0 = facilities with one or more exceedances
- GE10 = facilities with ten or more exceedances
- GE50 = facilities with fifty or more exceedances
- GE100 = facilities with one hundred or more exceedances
    Possible values: 0, GE0, GE10, GE50, GE100.
* `p_psncq` - _optional_ - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
- Z = Zero quarters in significant noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
    Possible values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12.
* `p_pctrack` - _optional_ - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
- Off
- Partial
- On
    Possible values: Off, Partial, On.
* `p_dwd` - _optional_ - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pt` - _optional_ - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pdwdist` - _optional_ - Distance (in miles) to downstream drinking water intake.
    Possible values: N, LT1, LT2, LT5, LT10, LT15.
* `p_pswdpc` - _optional_ - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* `p_pswdmp` - _optional_ - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
    Possible values: 1, 2, 3, 4, 5.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswcas` - _optional_ - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* `p_pswparam` - _optional_ - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_wbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_radwbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
* `p_frswbd` - _optional_ - Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_pidall` - _optional_ - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
    Possible values: Y, N.
* `p_months_last_dmr` - _optional_ - The number of months since the last Discharge Monitoring Report has been submitted.
* `p_last_dmr_within` - _optional_ - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
    Possible values: W, N.
* `p_indsw` - _optional_ - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_msgp_ptype` - _optional_ - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
- NOI = Notice of Intent
- NOE = No Exposure Certification
    Possible values: NOI, NOE.
* `p_mon_type` - _optional_
* `p_iagency` - _optional_ - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* `p_isws` - _optional_ - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* `p_iswss` - _optional_ - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* `p_iswssID` - _optional_ - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* `p_ds1` - _optional_ - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* `p_ds2` - _optional_ - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* `p_da1` - _optional_ - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* `p_da2` - _optional_ - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* `p_MS4` - _optional_ - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_ooFN` - _optional_ - Owner/Operator Name. Enter the owner/operator name of the facility.
* `p_ooFNtype` - _optional_ - Owner/Operator Name Multiple Selection Evaluator.  
    Possible values: ALL, EXACT, BEGINS, CONTAINS.
* `p_ooSA` - _optional_ - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* `p_ooSA1` - _optional_ - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* `p_ooCt` - _optional_ - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* `p_ooSt` - _optional_ - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* `p_ooZip` - _optional_ - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* `p_fac_ico` - _optional_ - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
    Possible values: Y, N.
* `p_icoo` - _optional_ - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* `p_fac_icos` - _optional_ - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* `p_ejscreen` - _optional_ - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* `p_alrexceed` - _optional_ - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* `p_limit_addr` - _optional_ - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
    Possible values: Y, N.
* `p_lat` - _optional_ - Latitude location in decimal degrees.
* `p_long` - _optional_ - Longitude location in decimal degrees.
* `p_radius` - _optional_ - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* `p_decouple` - _optional_ - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
    Possible values: Y, N.
* `p_ejscreen_over80cnt` - _optional_
* `p_bio_flag` - _optional_ - A Y value will select all biosolid-related permits.
* `p_bio_fac_type` - _optional_ - The code indicating the reporting obligation reason:

- POT = A POTW with a design flow rate equal to or greater than one million gallons per day
- CLI = A Class I Sludge Management Facility as defined in 40 CFR 503.9
- PPL = A POTW that serves 10,000 people or more
- OTH = Otherwise required to report (e.g., permit condition, enforcement action)
- NOA = None of the above
* `p_bio_trtmnt_procs` - _optional_ - The biosolids or sewage sludge treatment process or processes at the facility:

- AER = Aerobic Digestion
- AIR = Air Drying (or Sludge Drying Beds)
- ANA = Anaerobic Digestion
- COD = Beta Ray Irradiation
- COM = Lower Temperature Composting
- DEW = Pasteurization
- DIS = Gamma Ray Irradiation
- HEA = Heat Drying (e.g., Flash Dryer, Spray Dryer, Rotary Dryer)
- HET = Heat Treatment (Liquid Sewage Sludge Heated to 356 Deg. F/180 Deg. C or Higher for 30 min.)
- HTC = Higher Temperature Composting
- MET = Methane or Biogas Capture and Recovery
- OTH = Other Treatment Process
- PRE = Preliminary Operations (e.g., Sludge Grinding, Degritting, Blending)
- SLU = Sludge Lagoon
- STA = Lime Stabilization
- THE = Temporary Sludge Storage (Sewage Sludge Stored on Land 2 Years or Less, Not in Sewage Sludge Unit)
- THI = Thickening (Gravity and/or Flotation Thickening, Centrifugation, Belt Filter Press, Vacuum Filter)
- THM = Thermophilic Aerobic Digestion
- UND = Long-Term Sludge Storage (Sewage Sludge Stored on Land 2 Years or More, not in Sewage Sludge Unit)"
* `p_bio_analy_method_catgry` - _optional_ - The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:

- PAT = Pathogens
- MET = Metals
- NIT = Nitrogen Compounds
- OTH = Other Analytes
* `p_bio_total_volume_amt` - _optional_ - Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.

- EQ0 = 0
- IN0_1 = GT 0 but LT 1
- IN0_289  =  GT 0 but LT 290 MT/year
- IN290_1499  =  GE 290 but LT 1500 MT/year
- IN1500_14999  =  GE 1500 but LT 15,000
- GE15000  =  GE 15,000
* `p_bio_mgmt_prctce_type` - _optional_ - The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):

- BIN = Incineration
- BLN = Land Application
- BOT = Other Management Practice
- BSD = Surface Disposal
* `p_bio_mgmt_prctce_stype` - _optional_ - This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:

- ADV = Advanced Alkaline Stabilized Biosolids Distribution & Marketing
- AGR = Agricultural Land Application
- COM = Distribution and Marketing - Compost
- DEE = Deep-well Injection Disposal
- DIS = Disposal in a Municipal Landfill (under 40 CFR 258)
- DMO = Distribution and Marketing - Other
- HEA = Heat Dried Biosolids Distribution & Marketing
- OTL = Other Land Application Management Practice Detail
- OTO = Other Management Practice Detail
- RSA = Reclamation Site Application
- SEN = Sent to Cement Kiln for Use as Alternative Energy
- STO = Storage
- UIC = Use in Construction
- UPS = Used in Production of Syngas
- USE = Use as Daily Cover for Municipal Landfill (under 40 CFR 258)
* `p_bio_mgmt_prctce_handler` - _optional_ - This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.

- OWN = Owner or Operator
- OFF = Off-Site Third-Party Handler or Preparer
* `p_bio_mgmt_container` - _optional_ - The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:

- BUL = Bulk
- BAG = Bag or Container
* `p_bio_mgmt_pathogen` - _optional_ - This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:

- AAA = Class A
- AEQ = Class A EQ (sale/give away)
- BBB = Class B
- NAP = Not Applicable (Incineration)
* `p_bio_mgmt_pathred` - _optional_ - This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:

- A1 = Class A - Alternative 1: Time/Temperature
- A2 = Class A - Alternative 2: pH/Temperature/Percent Solids
- A3 = Class A - Alternative 3: Test Enteric Viruses and Helminth ova; Operating Parameters
- A4 = Class A - Alternative 4: Test Enteric Viruses and Helminth ova; No New Solids
- A51 = Class A - Alternative 5: PFRP 1: Composting
- A52 = Class A - Alternative 5: PFRP 2: Heat Drying
- A53 = Class A - Alternative 5: PFRP 3: Liquid heat treatment
- A54 = Class A - Alternative 5: PFRP 4: Thermophilic Aerobic Digestion (ATAD)
- A55 = Class A - Alternative 5 PFPR 5: Beta Ray Irradiation
- A56 = Class A - Alternative 5 PFPR 6: Gamma Ray Irradiation
- A57 = Class A - Alternative 5: PFRP 7: Pasteurization
- A6 = Class A - Alternative 6: PFRP Equivalency
- B1 = Class B - Alternative 1: Fecal Coliform Geometric Mean
- B21 = Class B - Alternative 2 PSRP 1: Aerobic Digestion
- B22 = Class B - Alternative 2 PSRP 2: Air Drying
- B23 = Class B - Alternative 2 PSRP 3: Anaerobic Digestion
- B24 = Class B - Alternative 2 PSRP 4: Composting
- B25 = Class B - Alternative 2 PSRP 5: Lime Stabilization
- B3 = Class B - Alternative 3: PSRP Equivalency
- PH = pH Adjustment (Domestic Septage)
* `p_bio_mgmt_vector` - _optional_ - The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:

- VR1 = Option 1 - Volatile Solids Reduction
- VR2 = Option 2 - Bench-Scale Volatile Solids Reduction (Anaerobic Bench Test)
- VR3 = Option 3 - Bench-Scale Volatile Solids Reduction (Aerobic Bench Test w/ Percent Solids - 2% or Less)
- VR4 = Option 4 - Specific Oxygen Uptake Rate
- VR5 = Option 5 - Aerobic Processing (Thermophilic Aerobic Digestion/Composting)
- VR6 = Option 6 - Alkaline Treatment
- VR7 = Option 7 - Drying (Equal to or Greater than 75 Percent)
- VR8 = Option 8 - Drying (Equal to or Greater than 90 Percent)
- VR9 = Option 9 - Sewage Sludge Injection
- V10 = Option 10 - Sewage Sludge Timely Incorporation into Land
- V11 = Option 11 - Sewage Sludge Covered at the End of Each Operating Day
* `p_insp_deficiencies` - _optional_
* `p_bio_mgmt_def_category` - _optional_ - This is the code indicating the type of NPDES special regulatory program deficiency:

- INC = Biosolids Incineration
- LNA = Biosolids Land Application
- LNB = Biosolids Land Application - Pathogen Class B
- OTB = Biosolids Other Management Practice
- SFD = Biosolids Surface Disposal
* `p_bio_mgmt_deficiencies` - _optional_ - The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
* `p_bio_vio_code` - _optional_ - The Biosolids Single Event Violation Code.  Enter one or mode codes.
* `p_bio_current_vio` - _optional_ - Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:

- Y = Yes
- N = No
    Possible values: Y, N.
* `p_bio_qtrs_in_vio` - _optional_ - The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
* `p_bio_rpt_year` - _optional_ - The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
* `p_bio_insp_deficiencies` - _optional_
* `p_bio_vio_last_year` - _optional_
* `p_msgp_rpt_year` - _optional_ - The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
* `p_vio_last_year` - _optional_
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `maplist` - _optional_ - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
    Possible values: Y, N.
* `summarylist` - _optional_ - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
    Possible values: Y, N.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Clean Water Act (CWA) Facility Search Service

> Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_sa` - _optional_ - Facility street address. Enter a complete or partial street address.
* `p_sa1` - _optional_ - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_frs` - _optional_ - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* `p_ncs` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_pen` - _optional_ - Last Penality Date Qualifier Filter.  Enter one of the following:   
- NEVER = No Penalties
- ANY = Any Penalty
- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
* `p_c1lat` - _optional_ - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c1lon` - _optional_ - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lat` - _optional_ - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lon` - _optional_ - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_sic2` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* `p_sic4` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* `p_fa` - _optional_ - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* `p_ff` - _optional_ - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
    Possible values: Y.
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
* `p_maj` - _optional_ - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
    Possible values: Y, N.
* `p_mact` - _optional_ - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_iv` - _optional_ - Facility has a violation status of 'In Viol' during any of the selected quarters. 

Range: Fiscal Year 2018 Quarter 3 to Fiscal Year 2015 Quarter 3

Multiple values are comma delimited.


||||||  Fiscal Years ||||||
- FY2018 or FY18 or 2018 or 18
- FY2017 or FY17 or 2017 or 17
- FY2016 or FY16 or 2016 or 16
- FY2015 or FY15 or 2015 or 15

||||| Fiscal Quarters |||||
- FY2018Q3 or FY18Q3 or 20183 or 183 or 13
- FY2018Q2 or FY18Q2 or 20182 or 182 or 12
- FY2018Q1 or FY18Q1 or 20181 or 181 or 11
- FY2017Q4 or FY17Q4 or 20174 or 174 or 10
- FY2017Q3 or FY17Q3 or 20173 or 173 or 9
- FY2017Q2 or FY17Q2 or 20172 or 172 or 8
- FY2017Q1 or FY17Q1 or 20171 or 171 or 7
- FY2016Q4 or FY16Q4 or 20164 or 164 or 6
- FY2016Q3 or FY16Q3 or 20163 or 163 or 5
- FY2016Q2 or FY16Q2 or 20162 or 162 or 4
- FY2016Q1 or FY16Q1 or 20161 or 161 or 3
- FY2015Q4 or FY15Q4 or 20154 or 154 or 2
- FY2015Q3 or FY15Q3 or 20153 or 153 or 1
* `p_impw` - _optional_ - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
    Possible values: Y, N.
* `p_imp_cau_grp` - _optional_ - Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
    Possible values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY.
* `p_imp_pol` - _optional_ - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
    Possible values: Y, N.
* `p_trep` - _optional_ - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
- NONE = Never has reported to TRI.
- CURR = Current TRI reporter.
- NONCURR = Has reported to TRI in the past but not for the current reporting year.
    Possible values: NONE, CURR, NOTCURR.
* `p_pm` - _optional_ - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
- NONE = 0%
- GT5 = greater than 5%
- GT10 = greater than 10%
- GT25 = greater than 25%
- GT50 = greater than 50%
- GT75 = greater than 75%
    Possible values: NONE, GT5, GT10, GT25, GT50, GT75.
* `p_pd` - _optional_ - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
- NONE = 0 population density per square mile
- GT100 = More than 100 population density per square mile
- GT500 = More than 500 population density per square mile
- GT1000 = More than 1000 population density per square mile
- GT5000 = More than 5000 population density per square mile
- GT10000 = More than 10000 population density per square mile
- GT20000 = More than 20000 population density per square mile
    Possible values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_huc` - _optional_ - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_med` - _optional_ - Filter Results by Media.
- A = Air
- M = RMP (Risk Management Plan)
- R = RCRA (Hazardous Waste)
- S = SDWA (Public Drinking Water Systems)
- ALL = Air and RCRA and Water
    Possible values: A, M, R, S, ALL.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_tribeid` - _optional_ - Numeric code for tribe (or list of tribes).
* `p_tribename` - _optional_ - Tribe Name Filter.  Enter a single tribe name to filter results.
* `p_tribedist` - _optional_ - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* `p_pstat` - _optional_ - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
- EFF = Effective
- EXP = Expired
- PND = Pending
- TRM = Terminated
- RET = Retired
- NON = Not Needed
- ADC = Admin Continued
* `p_ptype` - _optional_ - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
- NPD = NPDES Individual Permit
- NGP = NPDES Master General Permit
- GPC = General Permit Covered Facility
- SNN = State Issued Master General Permit (Non-NPDES)
- IIU = Individual IU Permit (Non-NPDES)
- SIN = Individual State Issued Permit (Non-NPDES)
- APR = Associated Permit Record
- UFT = Unpermitted Facility
* `p_pcomp` - _optional_ - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
- PRE = Pretreatment
- CAF = CAFO
- CSO = CSO
- POT = POTW
- BIO = Biosolids
- SWS = Storm Water Small MS4s
- SWM = Storm Water Medium/Large MS4s
- SWI = Storm Water Industrial
- SWC = Storm Water Construction
* `p_plimits` - _optional_ - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
    Possible values: Y, N.
* `p_pcss` - _optional_ - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
- ALL = returns all facilities, regardless of the number of outflows.
- GE1 = returns facilities with one or more outflows.
- GE10 = returns facilities with ten or more outflows.
- GE50 = returns facilities with fifty or more outflows.
    Possible values: ALL, GE1, GE10, GE50.
* `p_pexp` - _optional_ - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
- EXP = limit results to facilities with permits expired or administratively continued.
- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.
- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.
    Possible values: EXP, EXPLE1YR, EXPGT1YR.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following values to restrict results.
- Federal = Federal facilities regulated under the NPDES program.
- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.
- Non-POTW = Non-publicly owned treatment works. Often referred to as "non-municipals" or "industrials".
    Possible values: FEDERAL, POTW, NON-POTW.
* `p_agoo` - _optional_ - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
    Possible values: AND, OR.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_pccs` - _optional_ - Current Compliance Status:
||||||||||||||||||||||||||| 
Significant Noncompliance (SNC) 
|||||||||||||||||||||||||||
- SNC = E, S, X, T, D
- E = E(EffViol)
- S = S(CSchVio)
- X = X(EffNMth)
- T = T(CSchRpt)
- D = D(DMR NR)

|||||||||||||||||||||||||||
Noncompliance (NC)
|||||||||||||||||||||||||||
- NC = N, V
- N = N(RptViol)
- V = V(NonRNCV)

|||||||||||||||||||||||||||
New Violations (PQV)
|||||||||||||||||||||||||||
- PQV = New Violations (13th Quarter)

|||||||||||||||||||||||||||
No Violations (NV)
|||||||||||||||||||||||||||
- NV = R, P, M, U, W
, Blank, and No New Violations (no PQV)
- R = R(Resolvd)
- P = P(ResPend)
- M = C(Manual)
- U = U(N/A)
- W = W(N/A)
- Blank = (null)

May contain multiple comma-separated values.
* `p_pexcd` - _optional_ - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
- 0 = facilities with no exceedances
- GE0 = facilities with one or more exceedances
- GE10 = facilities with ten or more exceedances
- GE50 = facilities with fifty or more exceedances
- GE100 = facilities with one hundred or more exceedances
    Possible values: 0, GE0, GE10, GE50, GE100.
* `p_psncq` - _optional_ - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
- Z = Zero quarters in significant noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
    Possible values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12.
* `p_pctrack` - _optional_ - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
- Off
- Partial
- On
    Possible values: Off, Partial, On.
* `p_dwd` - _optional_ - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pt` - _optional_ - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pdwdist` - _optional_ - Distance (in miles) to downstream drinking water intake.
    Possible values: N, LT1, LT2, LT5, LT10, LT15.
* `p_pswdpc` - _optional_ - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* `p_pswdmp` - _optional_ - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
    Possible values: 1, 2, 3, 4, 5.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswcas` - _optional_ - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* `p_pswparam` - _optional_ - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_wbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_radwbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
* `p_frswbd` - _optional_ - Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_pidall` - _optional_ - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
    Possible values: Y, N.
* `p_months_last_dmr` - _optional_ - The number of months since the last Discharge Monitoring Report has been submitted.
* `p_last_dmr_within` - _optional_ - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
    Possible values: W, N.
* `p_indsw` - _optional_ - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_msgp_ptype` - _optional_ - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
- NOI = Notice of Intent
- NOE = No Exposure Certification
    Possible values: NOI, NOE.
* `p_mon_type` - _optional_
* `p_iagency` - _optional_ - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* `p_isws` - _optional_ - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* `p_iswss` - _optional_ - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* `p_iswssID` - _optional_ - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* `p_ds1` - _optional_ - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* `p_ds2` - _optional_ - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* `p_da1` - _optional_ - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* `p_da2` - _optional_ - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* `p_MS4` - _optional_ - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_ooFN` - _optional_ - Owner/Operator Name. Enter the owner/operator name of the facility.
* `p_ooFNtype` - _optional_ - Owner/Operator Name Multiple Selection Evaluator.  
    Possible values: ALL, EXACT, BEGINS, CONTAINS.
* `p_ooSA` - _optional_ - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* `p_ooSA1` - _optional_ - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* `p_ooCt` - _optional_ - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* `p_ooSt` - _optional_ - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* `p_ooZip` - _optional_ - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* `p_fac_ico` - _optional_ - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
    Possible values: Y, N.
* `p_icoo` - _optional_ - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* `p_fac_icos` - _optional_ - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* `p_ejscreen` - _optional_ - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* `p_alrexceed` - _optional_ - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* `p_limit_addr` - _optional_ - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
    Possible values: Y, N.
* `p_lat` - _optional_ - Latitude location in decimal degrees.
* `p_long` - _optional_ - Longitude location in decimal degrees.
* `p_radius` - _optional_ - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* `p_decouple` - _optional_ - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
    Possible values: Y, N.
* `p_ejscreen_over80cnt` - _optional_
* `p_bio_flag` - _optional_ - A Y value will select all biosolid-related permits.
* `p_bio_fac_type` - _optional_ - The code indicating the reporting obligation reason:

- POT = A POTW with a design flow rate equal to or greater than one million gallons per day
- CLI = A Class I Sludge Management Facility as defined in 40 CFR 503.9
- PPL = A POTW that serves 10,000 people or more
- OTH = Otherwise required to report (e.g., permit condition, enforcement action)
- NOA = None of the above
* `p_bio_trtmnt_procs` - _optional_ - The biosolids or sewage sludge treatment process or processes at the facility:

- AER = Aerobic Digestion
- AIR = Air Drying (or Sludge Drying Beds)
- ANA = Anaerobic Digestion
- COD = Beta Ray Irradiation
- COM = Lower Temperature Composting
- DEW = Pasteurization
- DIS = Gamma Ray Irradiation
- HEA = Heat Drying (e.g., Flash Dryer, Spray Dryer, Rotary Dryer)
- HET = Heat Treatment (Liquid Sewage Sludge Heated to 356 Deg. F/180 Deg. C or Higher for 30 min.)
- HTC = Higher Temperature Composting
- MET = Methane or Biogas Capture and Recovery
- OTH = Other Treatment Process
- PRE = Preliminary Operations (e.g., Sludge Grinding, Degritting, Blending)
- SLU = Sludge Lagoon
- STA = Lime Stabilization
- THE = Temporary Sludge Storage (Sewage Sludge Stored on Land 2 Years or Less, Not in Sewage Sludge Unit)
- THI = Thickening (Gravity and/or Flotation Thickening, Centrifugation, Belt Filter Press, Vacuum Filter)
- THM = Thermophilic Aerobic Digestion
- UND = Long-Term Sludge Storage (Sewage Sludge Stored on Land 2 Years or More, not in Sewage Sludge Unit)"
* `p_bio_analy_method_catgry` - _optional_ - The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:

- PAT = Pathogens
- MET = Metals
- NIT = Nitrogen Compounds
- OTH = Other Analytes
* `p_bio_total_volume_amt` - _optional_ - Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.

- EQ0 = 0
- IN0_1 = GT 0 but LT 1
- IN0_289  =  GT 0 but LT 290 MT/year
- IN290_1499  =  GE 290 but LT 1500 MT/year
- IN1500_14999  =  GE 1500 but LT 15,000
- GE15000  =  GE 15,000
* `p_bio_mgmt_prctce_type` - _optional_ - The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):

- BIN = Incineration
- BLN = Land Application
- BOT = Other Management Practice
- BSD = Surface Disposal
* `p_bio_mgmt_prctce_stype` - _optional_ - This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:

- ADV = Advanced Alkaline Stabilized Biosolids Distribution & Marketing
- AGR = Agricultural Land Application
- COM = Distribution and Marketing - Compost
- DEE = Deep-well Injection Disposal
- DIS = Disposal in a Municipal Landfill (under 40 CFR 258)
- DMO = Distribution and Marketing - Other
- HEA = Heat Dried Biosolids Distribution & Marketing
- OTL = Other Land Application Management Practice Detail
- OTO = Other Management Practice Detail
- RSA = Reclamation Site Application
- SEN = Sent to Cement Kiln for Use as Alternative Energy
- STO = Storage
- UIC = Use in Construction
- UPS = Used in Production of Syngas
- USE = Use as Daily Cover for Municipal Landfill (under 40 CFR 258)
* `p_bio_mgmt_prctce_handler` - _optional_ - This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.

- OWN = Owner or Operator
- OFF = Off-Site Third-Party Handler or Preparer
* `p_bio_mgmt_container` - _optional_ - The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:

- BUL = Bulk
- BAG = Bag or Container
* `p_bio_mgmt_pathogen` - _optional_ - This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:

- AAA = Class A
- AEQ = Class A EQ (sale/give away)
- BBB = Class B
- NAP = Not Applicable (Incineration)
* `p_bio_mgmt_pathred` - _optional_ - This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:

- A1 = Class A - Alternative 1: Time/Temperature
- A2 = Class A - Alternative 2: pH/Temperature/Percent Solids
- A3 = Class A - Alternative 3: Test Enteric Viruses and Helminth ova; Operating Parameters
- A4 = Class A - Alternative 4: Test Enteric Viruses and Helminth ova; No New Solids
- A51 = Class A - Alternative 5: PFRP 1: Composting
- A52 = Class A - Alternative 5: PFRP 2: Heat Drying
- A53 = Class A - Alternative 5: PFRP 3: Liquid heat treatment
- A54 = Class A - Alternative 5: PFRP 4: Thermophilic Aerobic Digestion (ATAD)
- A55 = Class A - Alternative 5 PFPR 5: Beta Ray Irradiation
- A56 = Class A - Alternative 5 PFPR 6: Gamma Ray Irradiation
- A57 = Class A - Alternative 5: PFRP 7: Pasteurization
- A6 = Class A - Alternative 6: PFRP Equivalency
- B1 = Class B - Alternative 1: Fecal Coliform Geometric Mean
- B21 = Class B - Alternative 2 PSRP 1: Aerobic Digestion
- B22 = Class B - Alternative 2 PSRP 2: Air Drying
- B23 = Class B - Alternative 2 PSRP 3: Anaerobic Digestion
- B24 = Class B - Alternative 2 PSRP 4: Composting
- B25 = Class B - Alternative 2 PSRP 5: Lime Stabilization
- B3 = Class B - Alternative 3: PSRP Equivalency
- PH = pH Adjustment (Domestic Septage)
* `p_bio_mgmt_vector` - _optional_ - The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:

- VR1 = Option 1 - Volatile Solids Reduction
- VR2 = Option 2 - Bench-Scale Volatile Solids Reduction (Anaerobic Bench Test)
- VR3 = Option 3 - Bench-Scale Volatile Solids Reduction (Aerobic Bench Test w/ Percent Solids - 2% or Less)
- VR4 = Option 4 - Specific Oxygen Uptake Rate
- VR5 = Option 5 - Aerobic Processing (Thermophilic Aerobic Digestion/Composting)
- VR6 = Option 6 - Alkaline Treatment
- VR7 = Option 7 - Drying (Equal to or Greater than 75 Percent)
- VR8 = Option 8 - Drying (Equal to or Greater than 90 Percent)
- VR9 = Option 9 - Sewage Sludge Injection
- V10 = Option 10 - Sewage Sludge Timely Incorporation into Land
- V11 = Option 11 - Sewage Sludge Covered at the End of Each Operating Day
* `p_insp_deficiencies` - _optional_
* `p_bio_mgmt_def_category` - _optional_ - This is the code indicating the type of NPDES special regulatory program deficiency:

- INC = Biosolids Incineration
- LNA = Biosolids Land Application
- LNB = Biosolids Land Application - Pathogen Class B
- OTB = Biosolids Other Management Practice
- SFD = Biosolids Surface Disposal
* `p_bio_mgmt_deficiencies` - _optional_ - The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
* `p_bio_vio_code` - _optional_ - The Biosolids Single Event Violation Code.  Enter one or mode codes.
* `p_bio_current_vio` - _optional_ - Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:

- Y = Yes
- N = No
    Possible values: Y, N.
* `p_bio_qtrs_in_vio` - _optional_ - The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
* `p_bio_rpt_year` - _optional_ - The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
* `p_bio_insp_deficiencies` - _optional_
* `p_bio_vio_last_year` - _optional_
* `p_msgp_rpt_year` - _optional_ - The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
* `p_vio_last_year` - _optional_
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `maplist` - _optional_ - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
    Possible values: Y, N.
* `summarylist` - _optional_ - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
    Possible values: Y, N.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Clean Water Act (CWA) Facility Enhanced Search Service

> Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
- CSV = Facility results formatted as comma delimited file download.
- GEOJSON = Facility results formatted as GeoJSON feature collection.
- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_sa` - _optional_ - Facility street address. Enter a complete or partial street address.
* `p_sa1` - _optional_ - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_frs` - _optional_ - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* `p_ncs` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_pen` - _optional_ - Last Penality Date Qualifier Filter.  Enter one of the following:   
- NEVER = No Penalties
- ANY = Any Penalty
- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
* `xmin` - _optional_ - Minimum longitude value in decimal degrees.
* `ymin` - _optional_ - Minimum latitude value in decimal degrees.
* `xmax` - _optional_ - Maximum longitude value in decimal degrees.
* `ymax` - _optional_ - Maximum latitude value in decimal degrees.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_sic2` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* `p_sic4` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* `p_fa` - _optional_ - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* `p_ff` - _optional_ - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
    Possible values: Y.
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
* `p_maj` - _optional_ - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
    Possible values: Y, N.
* `p_mact` - _optional_ - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_iv` - _optional_ - Facility has a violation status of 'In Viol' during any of the selected quarters. 

Range: Fiscal Year 2018 Quarter 3 to Fiscal Year 2015 Quarter 3

Multiple values are comma delimited.


||||||  Fiscal Years ||||||
- FY2018 or FY18 or 2018 or 18
- FY2017 or FY17 or 2017 or 17
- FY2016 or FY16 or 2016 or 16
- FY2015 or FY15 or 2015 or 15

||||| Fiscal Quarters |||||
- FY2018Q3 or FY18Q3 or 20183 or 183 or 13
- FY2018Q2 or FY18Q2 or 20182 or 182 or 12
- FY2018Q1 or FY18Q1 or 20181 or 181 or 11
- FY2017Q4 or FY17Q4 or 20174 or 174 or 10
- FY2017Q3 or FY17Q3 or 20173 or 173 or 9
- FY2017Q2 or FY17Q2 or 20172 or 172 or 8
- FY2017Q1 or FY17Q1 or 20171 or 171 or 7
- FY2016Q4 or FY16Q4 or 20164 or 164 or 6
- FY2016Q3 or FY16Q3 or 20163 or 163 or 5
- FY2016Q2 or FY16Q2 or 20162 or 162 or 4
- FY2016Q1 or FY16Q1 or 20161 or 161 or 3
- FY2015Q4 or FY15Q4 or 20154 or 154 or 2
- FY2015Q3 or FY15Q3 or 20153 or 153 or 1
* `p_impw` - _optional_ - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
    Possible values: Y, N.
* `p_imp_pol` - _optional_ - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
    Possible values: Y, N.
* `p_imp_cau_grp` - _optional_ - Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
    Possible values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY.
* `p_trep` - _optional_ - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
- NONE = Never has reported to TRI.
- CURR = Current TRI reporter.
- NONCURR = Has reported to TRI in the past but not for the current reporting year.
    Possible values: NONE, CURR, NOTCURR.
* `p_pm` - _optional_ - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
- NONE = 0%
- GT5 = greater than 5%
- GT10 = greater than 10%
- GT25 = greater than 25%
- GT50 = greater than 50%
- GT75 = greater than 75%
    Possible values: NONE, GT5, GT10, GT25, GT50, GT75.
* `p_pd` - _optional_ - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
- NONE = 0 population density per square mile
- GT100 = More than 100 population density per square mile
- GT500 = More than 500 population density per square mile
- GT1000 = More than 1000 population density per square mile
- GT5000 = More than 5000 population density per square mile
- GT10000 = More than 10000 population density per square mile
- GT20000 = More than 20000 population density per square mile
    Possible values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_huc` - _optional_ - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_med` - _optional_ - Filter Results by Media.
- A = Air
- M = RMP (Risk Management Plan)
- R = RCRA (Hazardous Waste)
- S = SDWA (Public Drinking Water Systems)
- ALL = Air and RCRA and Water
    Possible values: A, M, R, S, ALL.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_tribeid` - _optional_ - Numeric code for tribe (or list of tribes).
* `p_tribename` - _optional_ - Tribe Name Filter.  Enter a single tribe name to filter results.
* `p_tribedist` - _optional_ - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* `p_pstat` - _optional_ - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
- EFF = Effective
- EXP = Expired
- PND = Pending
- TRM = Terminated
- RET = Retired
- NON = Not Needed
- ADC = Admin Continued
* `p_ptype` - _optional_ - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
- NPD = NPDES Individual Permit
- NGP = NPDES Master General Permit
- GPC = General Permit Covered Facility
- SNN = State Issued Master General Permit (Non-NPDES)
- IIU = Individual IU Permit (Non-NPDES)
- SIN = Individual State Issued Permit (Non-NPDES)
- APR = Associated Permit Record
- UFT = Unpermitted Facility
* `p_pcomp` - _optional_ - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
- PRE = Pretreatment
- CAF = CAFO
- CSO = CSO
- POT = POTW
- BIO = Biosolids
- SWS = Storm Water Small MS4s
- SWM = Storm Water Medium/Large MS4s
- SWI = Storm Water Industrial
- SWC = Storm Water Construction
* `p_plimits` - _optional_ - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
    Possible values: Y, N.
* `p_pcss` - _optional_ - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
- ALL = returns all facilities, regardless of the number of outflows.
- GE1 = returns facilities with one or more outflows.
- GE10 = returns facilities with ten or more outflows.
- GE50 = returns facilities with fifty or more outflows.
    Possible values: ALL, GE1, GE10, GE50.
* `p_pexp` - _optional_ - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
- EXP = limit results to facilities with permits expired or administratively continued.
- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.
- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.
    Possible values: EXP, EXPLE1YR, EXPGT1YR.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following values to restrict results.
- Federal = Federal facilities regulated under the NPDES program.
- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.
- Non-POTW = Non-publicly owned treatment works. Often referred to as "non-municipals" or "industrials".
    Possible values: FEDERAL, POTW, NON-POTW.
* `p_agoo` - _optional_ - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
    Possible values: AND, OR.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_pccs` - _optional_ - Current Compliance Status:
||||||||||||||||||||||||||| 
Significant Noncompliance (SNC) 
|||||||||||||||||||||||||||
- SNC = E, S, X, T, D
- E = E(EffViol)
- S = S(CSchVio)
- X = X(EffNMth)
- T = T(CSchRpt)
- D = D(DMR NR)

|||||||||||||||||||||||||||
Noncompliance (NC)
|||||||||||||||||||||||||||
- NC = N, V
- N = N(RptViol)
- V = V(NonRNCV)

|||||||||||||||||||||||||||
New Violations (PQV)
|||||||||||||||||||||||||||
- PQV = New Violations (13th Quarter)

|||||||||||||||||||||||||||
No Violations (NV)
|||||||||||||||||||||||||||
- NV = R, P, M, U, W
, Blank, and No New Violations (no PQV)
- R = R(Resolvd)
- P = P(ResPend)
- M = C(Manual)
- U = U(N/A)
- W = W(N/A)
- Blank = (null)

May contain multiple comma-separated values.
* `p_pexcd` - _optional_ - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
- 0 = facilities with no exceedances
- GE0 = facilities with one or more exceedances
- GE10 = facilities with ten or more exceedances
- GE50 = facilities with fifty or more exceedances
- GE100 = facilities with one hundred or more exceedances
    Possible values: 0, GE0, GE10, GE50, GE100.
* `p_psncq` - _optional_ - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
- Z = Zero quarters in significant noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
    Possible values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12.
* `p_pctrack` - _optional_ - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
- Off
- Partial
- On
    Possible values: Off, Partial, On.
* `p_dwd` - _optional_ - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pt` - _optional_ - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pdwdist` - _optional_ - Distance (in miles) to downstream drinking water intake.
    Possible values: N, LT1, LT2, LT5, LT10, LT15.
* `p_pswdpc` - _optional_ - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* `p_pswdmp` - _optional_ - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
    Possible values: 1, 2, 3, 4, 5.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswcas` - _optional_ - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* `p_pswparam` - _optional_ - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_wbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_radwbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
* `p_frswbd` - _optional_ - Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_pidall` - _optional_ - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
    Possible values: Y, N.
* `p_months_last_dmr` - _optional_ - The number of months since the last Discharge Monitoring Report has been submitted.
* `p_last_dmr_within` - _optional_ - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
    Possible values: W, N.
* `p_indsw` - _optional_ - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_msgp_ptype` - _optional_ - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
- NOI = Notice of Intent
- NOE = No Exposure Certification
    Possible values: NOI, NOE.
* `p_mon_type` - _optional_
* `p_iagency` - _optional_ - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* `p_isws` - _optional_ - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* `p_iswss` - _optional_ - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* `p_iswssID` - _optional_ - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* `p_ds1` - _optional_ - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* `p_ds2` - _optional_ - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* `p_da1` - _optional_ - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* `p_da2` - _optional_ - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* `p_MS4` - _optional_ - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_ooFN` - _optional_ - Owner/Operator Name. Enter the owner/operator name of the facility.
* `p_ooFNtype` - _optional_ - Owner/Operator Name Multiple Selection Evaluator.  
    Possible values: ALL, EXACT, BEGINS, CONTAINS.
* `p_ooSA` - _optional_ - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* `p_ooSA1` - _optional_ - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* `p_ooCt` - _optional_ - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* `p_ooSt` - _optional_ - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* `p_ooZip` - _optional_ - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* `p_fac_ico` - _optional_ - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
    Possible values: Y, N.
* `p_icoo` - _optional_ - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* `p_fac_icos` - _optional_ - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* `p_ejscreen` - _optional_ - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* `p_alrexceed` - _optional_ - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* `p_limit_addr` - _optional_ - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
    Possible values: Y, N.
* `p_lat` - _optional_ - Latitude location in decimal degrees.
* `p_long` - _optional_ - Longitude location in decimal degrees.
* `p_radius` - _optional_ - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* `p_decouple` - _optional_ - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
    Possible values: Y, N.
* `p_ejscreen_over80cnt` - _optional_
* `p_bio_flag` - _optional_ - A Y value will select all biosolid-related permits.
* `p_bio_fac_type` - _optional_ - The code indicating the reporting obligation reason:

- POT = A POTW with a design flow rate equal to or greater than one million gallons per day
- CLI = A Class I Sludge Management Facility as defined in 40 CFR 503.9
- PPL = A POTW that serves 10,000 people or more
- OTH = Otherwise required to report (e.g., permit condition, enforcement action)
- NOA = None of the above
* `p_bio_trtmnt_procs` - _optional_ - The biosolids or sewage sludge treatment process or processes at the facility:

- AER = Aerobic Digestion
- AIR = Air Drying (or Sludge Drying Beds)
- ANA = Anaerobic Digestion
- COD = Beta Ray Irradiation
- COM = Lower Temperature Composting
- DEW = Pasteurization
- DIS = Gamma Ray Irradiation
- HEA = Heat Drying (e.g., Flash Dryer, Spray Dryer, Rotary Dryer)
- HET = Heat Treatment (Liquid Sewage Sludge Heated to 356 Deg. F/180 Deg. C or Higher for 30 min.)
- HTC = Higher Temperature Composting
- MET = Methane or Biogas Capture and Recovery
- OTH = Other Treatment Process
- PRE = Preliminary Operations (e.g., Sludge Grinding, Degritting, Blending)
- SLU = Sludge Lagoon
- STA = Lime Stabilization
- THE = Temporary Sludge Storage (Sewage Sludge Stored on Land 2 Years or Less, Not in Sewage Sludge Unit)
- THI = Thickening (Gravity and/or Flotation Thickening, Centrifugation, Belt Filter Press, Vacuum Filter)
- THM = Thermophilic Aerobic Digestion
- UND = Long-Term Sludge Storage (Sewage Sludge Stored on Land 2 Years or More, not in Sewage Sludge Unit)"
* `p_bio_analy_method_catgry` - _optional_ - The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:

- PAT = Pathogens
- MET = Metals
- NIT = Nitrogen Compounds
- OTH = Other Analytes
* `p_bio_total_volume_amt` - _optional_ - Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.

- EQ0 = 0
- IN0_1 = GT 0 but LT 1
- IN0_289  =  GT 0 but LT 290 MT/year
- IN290_1499  =  GE 290 but LT 1500 MT/year
- IN1500_14999  =  GE 1500 but LT 15,000
- GE15000  =  GE 15,000
* `p_bio_mgmt_prctce_type` - _optional_ - The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):

- BIN = Incineration
- BLN = Land Application
- BOT = Other Management Practice
- BSD = Surface Disposal
* `p_bio_mgmt_prctce_stype` - _optional_ - This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:

- ADV = Advanced Alkaline Stabilized Biosolids Distribution & Marketing
- AGR = Agricultural Land Application
- COM = Distribution and Marketing - Compost
- DEE = Deep-well Injection Disposal
- DIS = Disposal in a Municipal Landfill (under 40 CFR 258)
- DMO = Distribution and Marketing - Other
- HEA = Heat Dried Biosolids Distribution & Marketing
- OTL = Other Land Application Management Practice Detail
- OTO = Other Management Practice Detail
- RSA = Reclamation Site Application
- SEN = Sent to Cement Kiln for Use as Alternative Energy
- STO = Storage
- UIC = Use in Construction
- UPS = Used in Production of Syngas
- USE = Use as Daily Cover for Municipal Landfill (under 40 CFR 258)
* `p_bio_mgmt_prctce_handler` - _optional_ - This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.

- OWN = Owner or Operator
- OFF = Off-Site Third-Party Handler or Preparer
* `p_bio_mgmt_container` - _optional_ - The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:

- BUL = Bulk
- BAG = Bag or Container
* `p_bio_mgmt_pathogen` - _optional_ - This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:

- AAA = Class A
- AEQ = Class A EQ (sale/give away)
- BBB = Class B
- NAP = Not Applicable (Incineration)
* `p_bio_mgmt_pathred` - _optional_ - This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:

- A1 = Class A - Alternative 1: Time/Temperature
- A2 = Class A - Alternative 2: pH/Temperature/Percent Solids
- A3 = Class A - Alternative 3: Test Enteric Viruses and Helminth ova; Operating Parameters
- A4 = Class A - Alternative 4: Test Enteric Viruses and Helminth ova; No New Solids
- A51 = Class A - Alternative 5: PFRP 1: Composting
- A52 = Class A - Alternative 5: PFRP 2: Heat Drying
- A53 = Class A - Alternative 5: PFRP 3: Liquid heat treatment
- A54 = Class A - Alternative 5: PFRP 4: Thermophilic Aerobic Digestion (ATAD)
- A55 = Class A - Alternative 5 PFPR 5: Beta Ray Irradiation
- A56 = Class A - Alternative 5 PFPR 6: Gamma Ray Irradiation
- A57 = Class A - Alternative 5: PFRP 7: Pasteurization
- A6 = Class A - Alternative 6: PFRP Equivalency
- B1 = Class B - Alternative 1: Fecal Coliform Geometric Mean
- B21 = Class B - Alternative 2 PSRP 1: Aerobic Digestion
- B22 = Class B - Alternative 2 PSRP 2: Air Drying
- B23 = Class B - Alternative 2 PSRP 3: Anaerobic Digestion
- B24 = Class B - Alternative 2 PSRP 4: Composting
- B25 = Class B - Alternative 2 PSRP 5: Lime Stabilization
- B3 = Class B - Alternative 3: PSRP Equivalency
- PH = pH Adjustment (Domestic Septage)
* `p_bio_mgmt_vector` - _optional_ - The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:

- VR1 = Option 1 - Volatile Solids Reduction
- VR2 = Option 2 - Bench-Scale Volatile Solids Reduction (Anaerobic Bench Test)
- VR3 = Option 3 - Bench-Scale Volatile Solids Reduction (Aerobic Bench Test w/ Percent Solids - 2% or Less)
- VR4 = Option 4 - Specific Oxygen Uptake Rate
- VR5 = Option 5 - Aerobic Processing (Thermophilic Aerobic Digestion/Composting)
- VR6 = Option 6 - Alkaline Treatment
- VR7 = Option 7 - Drying (Equal to or Greater than 75 Percent)
- VR8 = Option 8 - Drying (Equal to or Greater than 90 Percent)
- VR9 = Option 9 - Sewage Sludge Injection
- V10 = Option 10 - Sewage Sludge Timely Incorporation into Land
- V11 = Option 11 - Sewage Sludge Covered at the End of Each Operating Day
* `p_insp_deficiencies` - _optional_
* `p_bio_mgmt_def_category` - _optional_ - This is the code indicating the type of NPDES special regulatory program deficiency:

- INC = Biosolids Incineration
- LNA = Biosolids Land Application
- LNB = Biosolids Land Application - Pathogen Class B
- OTB = Biosolids Other Management Practice
- SFD = Biosolids Surface Disposal
* `p_bio_mgmt_deficiencies` - _optional_ - The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
* `p_bio_vio_code` - _optional_ - The Biosolids Single Event Violation Code.  Enter one or mode codes.
* `p_bio_current_vio` - _optional_ - Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:

- Y = Yes
- N = No
    Possible values: Y, N.
* `p_bio_qtrs_in_vio` - _optional_ - The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
* `p_bio_rpt_year` - _optional_ - The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
* `p_bio_insp_deficiencies` - _optional_
* `p_bio_vio_last_year` - _optional_
* `p_msgp_rpt_year` - _optional_ - The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
* `p_vio_last_year` - _optional_
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Facility Enhanced Search Service

> Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
- CSV = Facility results formatted as comma delimited file download.
- GEOJSON = Facility results formatted as GeoJSON feature collection.
- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_sa` - _optional_ - Facility street address. Enter a complete or partial street address.
* `p_sa1` - _optional_ - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_frs` - _optional_ - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* `p_ncs` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_pen` - _optional_ - Last Penality Date Qualifier Filter.  Enter one of the following:   
- NEVER = No Penalties
- ANY = Any Penalty
- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
* `xmin` - _optional_ - Minimum longitude value in decimal degrees.
* `ymin` - _optional_ - Minimum latitude value in decimal degrees.
* `xmax` - _optional_ - Maximum longitude value in decimal degrees.
* `ymax` - _optional_ - Maximum latitude value in decimal degrees.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_sic2` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* `p_sic4` - _optional_ - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* `p_fa` - _optional_ - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* `p_ff` - _optional_ - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
    Possible values: Y.
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
* `p_maj` - _optional_ - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
    Possible values: Y, N.
* `p_mact` - _optional_ - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_iv` - _optional_ - Facility has a violation status of 'In Viol' during any of the selected quarters. 

Range: Fiscal Year 2018 Quarter 3 to Fiscal Year 2015 Quarter 3

Multiple values are comma delimited.


||||||  Fiscal Years ||||||
- FY2018 or FY18 or 2018 or 18
- FY2017 or FY17 or 2017 or 17
- FY2016 or FY16 or 2016 or 16
- FY2015 or FY15 or 2015 or 15

||||| Fiscal Quarters |||||
- FY2018Q3 or FY18Q3 or 20183 or 183 or 13
- FY2018Q2 or FY18Q2 or 20182 or 182 or 12
- FY2018Q1 or FY18Q1 or 20181 or 181 or 11
- FY2017Q4 or FY17Q4 or 20174 or 174 or 10
- FY2017Q3 or FY17Q3 or 20173 or 173 or 9
- FY2017Q2 or FY17Q2 or 20172 or 172 or 8
- FY2017Q1 or FY17Q1 or 20171 or 171 or 7
- FY2016Q4 or FY16Q4 or 20164 or 164 or 6
- FY2016Q3 or FY16Q3 or 20163 or 163 or 5
- FY2016Q2 or FY16Q2 or 20162 or 162 or 4
- FY2016Q1 or FY16Q1 or 20161 or 161 or 3
- FY2015Q4 or FY15Q4 or 20154 or 154 or 2
- FY2015Q3 or FY15Q3 or 20153 or 153 or 1
* `p_impw` - _optional_ - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
    Possible values: Y, N.
* `p_imp_pol` - _optional_ - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
    Possible values: Y, N.
* `p_imp_cau_grp` - _optional_ - Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
    Possible values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY.
* `p_trep` - _optional_ - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
- NONE = Never has reported to TRI.
- CURR = Current TRI reporter.
- NONCURR = Has reported to TRI in the past but not for the current reporting year.
    Possible values: NONE, CURR, NOTCURR.
* `p_pm` - _optional_ - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
- NONE = 0%
- GT5 = greater than 5%
- GT10 = greater than 10%
- GT25 = greater than 25%
- GT50 = greater than 50%
- GT75 = greater than 75%
    Possible values: NONE, GT5, GT10, GT25, GT50, GT75.
* `p_pd` - _optional_ - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
- NONE = 0 population density per square mile
- GT100 = More than 100 population density per square mile
- GT500 = More than 500 population density per square mile
- GT1000 = More than 1000 population density per square mile
- GT5000 = More than 5000 population density per square mile
- GT10000 = More than 10000 population density per square mile
- GT20000 = More than 20000 population density per square mile
    Possible values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_huc` - _optional_ - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_med` - _optional_ - Filter Results by Media.
- A = Air
- M = RMP (Risk Management Plan)
- R = RCRA (Hazardous Waste)
- S = SDWA (Public Drinking Water Systems)
- ALL = Air and RCRA and Water
    Possible values: A, M, R, S, ALL.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_tribeid` - _optional_ - Numeric code for tribe (or list of tribes).
* `p_tribename` - _optional_ - Tribe Name Filter.  Enter a single tribe name to filter results.
* `p_tribedist` - _optional_ - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* `p_pstat` - _optional_ - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
- EFF = Effective
- EXP = Expired
- PND = Pending
- TRM = Terminated
- RET = Retired
- NON = Not Needed
- ADC = Admin Continued
* `p_ptype` - _optional_ - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
- NPD = NPDES Individual Permit
- NGP = NPDES Master General Permit
- GPC = General Permit Covered Facility
- SNN = State Issued Master General Permit (Non-NPDES)
- IIU = Individual IU Permit (Non-NPDES)
- SIN = Individual State Issued Permit (Non-NPDES)
- APR = Associated Permit Record
- UFT = Unpermitted Facility
* `p_pcomp` - _optional_ - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
- PRE = Pretreatment
- CAF = CAFO
- CSO = CSO
- POT = POTW
- BIO = Biosolids
- SWS = Storm Water Small MS4s
- SWM = Storm Water Medium/Large MS4s
- SWI = Storm Water Industrial
- SWC = Storm Water Construction
* `p_plimits` - _optional_ - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
    Possible values: Y, N.
* `p_pcss` - _optional_ - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
- ALL = returns all facilities, regardless of the number of outflows.
- GE1 = returns facilities with one or more outflows.
- GE10 = returns facilities with ten or more outflows.
- GE50 = returns facilities with fifty or more outflows.
    Possible values: ALL, GE1, GE10, GE50.
* `p_pexp` - _optional_ - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
- EXP = limit results to facilities with permits expired or administratively continued.
- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.
- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.
    Possible values: EXP, EXPLE1YR, EXPGT1YR.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following values to restrict results.
- Federal = Federal facilities regulated under the NPDES program.
- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.
- Non-POTW = Non-publicly owned treatment works. Often referred to as "non-municipals" or "industrials".
    Possible values: FEDERAL, POTW, NON-POTW.
* `p_agoo` - _optional_ - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
    Possible values: AND, OR.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_pccs` - _optional_ - Current Compliance Status:
||||||||||||||||||||||||||| 
Significant Noncompliance (SNC) 
|||||||||||||||||||||||||||
- SNC = E, S, X, T, D
- E = E(EffViol)
- S = S(CSchVio)
- X = X(EffNMth)
- T = T(CSchRpt)
- D = D(DMR NR)

|||||||||||||||||||||||||||
Noncompliance (NC)
|||||||||||||||||||||||||||
- NC = N, V
- N = N(RptViol)
- V = V(NonRNCV)

|||||||||||||||||||||||||||
New Violations (PQV)
|||||||||||||||||||||||||||
- PQV = New Violations (13th Quarter)

|||||||||||||||||||||||||||
No Violations (NV)
|||||||||||||||||||||||||||
- NV = R, P, M, U, W
, Blank, and No New Violations (no PQV)
- R = R(Resolvd)
- P = P(ResPend)
- M = C(Manual)
- U = U(N/A)
- W = W(N/A)
- Blank = (null)

May contain multiple comma-separated values.
* `p_pexcd` - _optional_ - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
- 0 = facilities with no exceedances
- GE0 = facilities with one or more exceedances
- GE10 = facilities with ten or more exceedances
- GE50 = facilities with fifty or more exceedances
- GE100 = facilities with one hundred or more exceedances
    Possible values: 0, GE0, GE10, GE50, GE100.
* `p_psncq` - _optional_ - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
- Z = Zero quarters in significant noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
    Possible values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12.
* `p_pctrack` - _optional_ - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
- Off
- Partial
- On
    Possible values: Off, Partial, On.
* `p_dwd` - _optional_ - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pt` - _optional_ - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
    Possible values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000.
* `p_pdwdist` - _optional_ - Distance (in miles) to downstream drinking water intake.
    Possible values: N, LT1, LT2, LT5, LT10, LT15.
* `p_pswdpc` - _optional_ - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* `p_pswdmp` - _optional_ - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
    Possible values: 1, 2, 3, 4, 5.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswcas` - _optional_ - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* `p_pswparam` - _optional_ - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_wbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_radwbd` - _optional_ - 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
* `p_frswbd` - _optional_ - Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_pidall` - _optional_ - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
    Possible values: Y, N.
* `p_months_last_dmr` - _optional_ - The number of months since the last Discharge Monitoring Report has been submitted.
* `p_last_dmr_within` - _optional_ - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
    Possible values: W, N.
* `p_indsw` - _optional_ - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_msgp_ptype` - _optional_ - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
- NOI = Notice of Intent
- NOE = No Exposure Certification
    Possible values: NOI, NOE.
* `p_mon_type` - _optional_
* `p_iagency` - _optional_ - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* `p_isws` - _optional_ - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* `p_iswss` - _optional_ - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* `p_iswssID` - _optional_ - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* `p_ds1` - _optional_ - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* `p_ds2` - _optional_ - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* `p_da1` - _optional_ - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* `p_da2` - _optional_ - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* `p_MS4` - _optional_ - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
    Possible values: Y, N.
* `p_ooFN` - _optional_ - Owner/Operator Name. Enter the owner/operator name of the facility.
* `p_ooFNtype` - _optional_ - Owner/Operator Name Multiple Selection Evaluator.  
    Possible values: ALL, EXACT, BEGINS, CONTAINS.
* `p_ooSA` - _optional_ - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* `p_ooSA1` - _optional_ - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* `p_ooCt` - _optional_ - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* `p_ooSt` - _optional_ - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* `p_ooZip` - _optional_ - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* `p_fac_ico` - _optional_ - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
    Possible values: Y, N.
* `p_icoo` - _optional_ - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* `p_fac_icos` - _optional_ - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* `p_ejscreen` - _optional_ - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* `p_alrexceed` - _optional_ - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* `p_limit_addr` - _optional_ - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
    Possible values: Y, N.
* `p_lat` - _optional_ - Latitude location in decimal degrees.
* `p_long` - _optional_ - Longitude location in decimal degrees.
* `p_radius` - _optional_ - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* `p_decouple` - _optional_ - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
    Possible values: Y, N.
* `p_ejscreen_over80cnt` - _optional_
* `p_bio_flag` - _optional_ - A Y value will select all biosolid-related permits.
* `p_bio_fac_type` - _optional_ - The code indicating the reporting obligation reason:

- POT = A POTW with a design flow rate equal to or greater than one million gallons per day
- CLI = A Class I Sludge Management Facility as defined in 40 CFR 503.9
- PPL = A POTW that serves 10,000 people or more
- OTH = Otherwise required to report (e.g., permit condition, enforcement action)
- NOA = None of the above
* `p_bio_trtmnt_procs` - _optional_ - The biosolids or sewage sludge treatment process or processes at the facility:

- AER = Aerobic Digestion
- AIR = Air Drying (or Sludge Drying Beds)
- ANA = Anaerobic Digestion
- COD = Beta Ray Irradiation
- COM = Lower Temperature Composting
- DEW = Pasteurization
- DIS = Gamma Ray Irradiation
- HEA = Heat Drying (e.g., Flash Dryer, Spray Dryer, Rotary Dryer)
- HET = Heat Treatment (Liquid Sewage Sludge Heated to 356 Deg. F/180 Deg. C or Higher for 30 min.)
- HTC = Higher Temperature Composting
- MET = Methane or Biogas Capture and Recovery
- OTH = Other Treatment Process
- PRE = Preliminary Operations (e.g., Sludge Grinding, Degritting, Blending)
- SLU = Sludge Lagoon
- STA = Lime Stabilization
- THE = Temporary Sludge Storage (Sewage Sludge Stored on Land 2 Years or Less, Not in Sewage Sludge Unit)
- THI = Thickening (Gravity and/or Flotation Thickening, Centrifugation, Belt Filter Press, Vacuum Filter)
- THM = Thermophilic Aerobic Digestion
- UND = Long-Term Sludge Storage (Sewage Sludge Stored on Land 2 Years or More, not in Sewage Sludge Unit)"
* `p_bio_analy_method_catgry` - _optional_ - The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:

- PAT = Pathogens
- MET = Metals
- NIT = Nitrogen Compounds
- OTH = Other Analytes
* `p_bio_total_volume_amt` - _optional_ - Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.

- EQ0 = 0
- IN0_1 = GT 0 but LT 1
- IN0_289  =  GT 0 but LT 290 MT/year
- IN290_1499  =  GE 290 but LT 1500 MT/year
- IN1500_14999  =  GE 1500 but LT 15,000
- GE15000  =  GE 15,000
* `p_bio_mgmt_prctce_type` - _optional_ - The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):

- BIN = Incineration
- BLN = Land Application
- BOT = Other Management Practice
- BSD = Surface Disposal
* `p_bio_mgmt_prctce_stype` - _optional_ - This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:

- ADV = Advanced Alkaline Stabilized Biosolids Distribution & Marketing
- AGR = Agricultural Land Application
- COM = Distribution and Marketing - Compost
- DEE = Deep-well Injection Disposal
- DIS = Disposal in a Municipal Landfill (under 40 CFR 258)
- DMO = Distribution and Marketing - Other
- HEA = Heat Dried Biosolids Distribution & Marketing
- OTL = Other Land Application Management Practice Detail
- OTO = Other Management Practice Detail
- RSA = Reclamation Site Application
- SEN = Sent to Cement Kiln for Use as Alternative Energy
- STO = Storage
- UIC = Use in Construction
- UPS = Used in Production of Syngas
- USE = Use as Daily Cover for Municipal Landfill (under 40 CFR 258)
* `p_bio_mgmt_prctce_handler` - _optional_ - This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.

- OWN = Owner or Operator
- OFF = Off-Site Third-Party Handler or Preparer
* `p_bio_mgmt_container` - _optional_ - The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:

- BUL = Bulk
- BAG = Bag or Container
* `p_bio_mgmt_pathogen` - _optional_ - This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:

- AAA = Class A
- AEQ = Class A EQ (sale/give away)
- BBB = Class B
- NAP = Not Applicable (Incineration)
* `p_bio_mgmt_pathred` - _optional_ - This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:

- A1 = Class A - Alternative 1: Time/Temperature
- A2 = Class A - Alternative 2: pH/Temperature/Percent Solids
- A3 = Class A - Alternative 3: Test Enteric Viruses and Helminth ova; Operating Parameters
- A4 = Class A - Alternative 4: Test Enteric Viruses and Helminth ova; No New Solids
- A51 = Class A - Alternative 5: PFRP 1: Composting
- A52 = Class A - Alternative 5: PFRP 2: Heat Drying
- A53 = Class A - Alternative 5: PFRP 3: Liquid heat treatment
- A54 = Class A - Alternative 5: PFRP 4: Thermophilic Aerobic Digestion (ATAD)
- A55 = Class A - Alternative 5 PFPR 5: Beta Ray Irradiation
- A56 = Class A - Alternative 5 PFPR 6: Gamma Ray Irradiation
- A57 = Class A - Alternative 5: PFRP 7: Pasteurization
- A6 = Class A - Alternative 6: PFRP Equivalency
- B1 = Class B - Alternative 1: Fecal Coliform Geometric Mean
- B21 = Class B - Alternative 2 PSRP 1: Aerobic Digestion
- B22 = Class B - Alternative 2 PSRP 2: Air Drying
- B23 = Class B - Alternative 2 PSRP 3: Anaerobic Digestion
- B24 = Class B - Alternative 2 PSRP 4: Composting
- B25 = Class B - Alternative 2 PSRP 5: Lime Stabilization
- B3 = Class B - Alternative 3: PSRP Equivalency
- PH = pH Adjustment (Domestic Septage)
* `p_bio_mgmt_vector` - _optional_ - The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:

- VR1 = Option 1 - Volatile Solids Reduction
- VR2 = Option 2 - Bench-Scale Volatile Solids Reduction (Anaerobic Bench Test)
- VR3 = Option 3 - Bench-Scale Volatile Solids Reduction (Aerobic Bench Test w/ Percent Solids - 2% or Less)
- VR4 = Option 4 - Specific Oxygen Uptake Rate
- VR5 = Option 5 - Aerobic Processing (Thermophilic Aerobic Digestion/Composting)
- VR6 = Option 6 - Alkaline Treatment
- VR7 = Option 7 - Drying (Equal to or Greater than 75 Percent)
- VR8 = Option 8 - Drying (Equal to or Greater than 90 Percent)
- VR9 = Option 9 - Sewage Sludge Injection
- V10 = Option 10 - Sewage Sludge Timely Incorporation into Land
- V11 = Option 11 - Sewage Sludge Covered at the End of Each Operating Day
* `p_insp_deficiencies` - _optional_
* `p_bio_mgmt_def_category` - _optional_ - This is the code indicating the type of NPDES special regulatory program deficiency:

- INC = Biosolids Incineration
- LNA = Biosolids Land Application
- LNB = Biosolids Land Application - Pathogen Class B
- OTB = Biosolids Other Management Practice
- SFD = Biosolids Surface Disposal
* `p_bio_mgmt_deficiencies` - _optional_ - The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
* `p_bio_vio_code` - _optional_ - The Biosolids Single Event Violation Code.  Enter one or mode codes.
* `p_bio_current_vio` - _optional_ - Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:

- Y = Yes
- N = No
    Possible values: Y, N.
* `p_bio_qtrs_in_vio` - _optional_ - The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
* `p_bio_rpt_year` - _optional_ - The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
* `p_bio_insp_deficiencies` - _optional_
* `p_bio_vio_last_year` - _optional_
* `p_msgp_rpt_year` - _optional_ - The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
* `p_vio_last_year` - _optional_
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) GeoJSON Service

> Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- GEOJSON = Facility results formatted as GeoJSON feature collection (default).
- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) GeoJSON Service

> Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- GEOJSON = Facility results formatted as GeoJSON feature collection (default).
- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Info Clusters Service

> Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `p_qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Info Clusters Service

> Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
- GEOJSOND = Facility results formatted as GeoJSON feature collection download.
* `p_qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### Clean Water Act (CWA) Map Service

> The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `c1_lat` - _optional_ - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c1_long` - _optional_ - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_lat` - _optional_ - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_long` - _optional_ - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_id` - _required_ - Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters.

### Clean Water Act (CWA) Map Service

> The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `c1_lat` - _optional_ - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c1_long` - _optional_ - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_lat` - _optional_ - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_long` - _optional_ - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_id` - _required_ - Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters.

### Clean Water Act (CWA) Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `pageno` - _optional_ - Indicates the number of the page to display. It is used only when the results are paginated.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Clean Water Act (CWA) Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Facility Information`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `pageno` - _optional_ - Indicates the number of the page to display. It is used only when the results are paginated.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Clean Water Act (CWA) Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.

*Tags:* `Metadata`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### Clean Water Act (CWA) Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.

*Tags:* `Metadata`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### ECHO BP Tribes Lookup Service

> Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO BP Tribes Lookup Service

> Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO CWA Parameter Lookup Service

> Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO CWA Parameter Lookup Service

> Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO CWA Pollutants Lookup Service

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO CWA Pollutants Lookup Service

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO Federal Agency Lookup Service

> Look up Federal Agency Code

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO Federal Agency Lookup Service

> Look up Federal Agency Code

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO ICIS NPDES Inspection Types Lookup Service

> Returns the ICIS NPDES Compliance Monitoring Type Code and Description.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO ICIS NPDES Inspection Types Lookup Service

> Returns the ICIS NPDES Compliance Monitoring Type Code and Description.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO ICIS Law Sections Lookup Service

> Returns the ICIS Law Section Descriptions.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `statute_code` - _optional_
* `status_flag` - _optional_
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.
* `sort_order` - _optional_

### ECHO ICIS Law Sections Lookup Service

> Returns the ICIS Law Section Descriptions.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `statute_code` - _optional_
* `status_flag` - _optional_
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.
* `sort_order` - _optional_

### ECHO NAICS Codes Lookup Service

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO NAICS Codes Lookup Service

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.

### ECHO NPDES Parameters Lookup Service

> ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.

### ECHO NPDES Parameters Lookup Service

> ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.

### ECHO WBD Code Lookup Service

> USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `wbd_code` - _optional_ - Two-digit watershed code [Hydrologic Unit Code (HUC)].
* `wbd_level` - _optional_ - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

### ECHO WBD Code Lookup Service

> USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `wbd_code` - _optional_ - Two-digit watershed code [Hydrologic Unit Code (HUC)].
* `wbd_level` - _optional_ - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

### ECHO WBD Name Lookup Service

> USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `wbd_name` - _required_ - Watershed Name Filter.
* `wbd_level` - _optional_ - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

### ECHO WBD Name Lookup Service

> USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `wbd_name` - _required_ - Watershed Name Filter.
* `wbd_level` - _optional_ - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

## License

**flow**ground :- Telekom iPaaS / epa-gov-cwa-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
