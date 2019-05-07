/**
 * Auto-generated action file for "U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services" API.
 *
 * Generated at: 2019-05-07T14:40:22.801Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / epa-gov-cwa-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/cwa_rest_services.get_facility_info'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "output",
    "p_fn",
    "p_sa",
    "p_sa1",
    "p_ct",
    "p_co",
    "p_fips",
    "p_st",
    "p_zip",
    "p_frs",
    "p_reg",
    "p_sic",
    "p_ncs",
    "p_pen",
    "xmin",
    "ymin",
    "xmax",
    "ymax",
    "p_usmex",
    "p_sic2",
    "p_sic4",
    "p_fa",
    "p_ff",
    "p_act",
    "p_maj",
    "p_mact",
    "p_fea",
    "p_feay",
    "p_feaa",
    "p_iea",
    "p_ieay",
    "p_ieaa",
    "p_qiv",
    "p_iv",
    "p_impw",
    "p_imp_pol",
    "p_imp_cau_grp",
    "p_trep",
    "p_pm",
    "p_pd",
    "p_ico",
    "p_huc",
    "p_pid",
    "p_med",
    "p_ysl",
    "p_ysly",
    "p_ysla",
    "p_qs",
    "p_sfs",
    "p_tribeid",
    "p_tribename",
    "p_tribedist",
    "p_pstat",
    "p_ptype",
    "p_pcomp",
    "p_plimits",
    "p_pcss",
    "p_pexp",
    "p_owop",
    "p_agoo",
    "p_idt1",
    "p_idt2",
    "p_pityp",
    "p_pfead1",
    "p_pfead2",
    "p_pfeat",
    "p_pccs",
    "p_pexcd",
    "p_psncq",
    "p_pctrack",
    "p_dwd",
    "p_pt",
    "p_pdwdist",
    "p_pswdpc",
    "p_pswdmp",
    "p_pswpol",
    "p_pswcas",
    "p_pswparam",
    "p_pswvio",
    "p_wbd",
    "p_radwbd",
    "p_frswbd",
    "p_fntype",
    "p_pidall",
    "p_months_last_dmr",
    "p_last_dmr_within",
    "p_indsw",
    "p_msgp_ptype",
    "p_mon_type",
    "p_iagency",
    "p_isws",
    "p_iswss",
    "p_iswssID",
    "p_ds1",
    "p_ds2",
    "p_da1",
    "p_da2",
    "p_MS4",
    "p_ooFN",
    "p_ooFNtype",
    "p_ooSA",
    "p_ooSA1",
    "p_ooCt",
    "p_ooSt",
    "p_ooZip",
    "p_fac_ico",
    "p_icoo",
    "p_fac_icos",
    "p_ejscreen",
    "p_alrexceed",
    "p_limit_addr",
    "p_lat",
    "p_long",
    "p_radius",
    "p_decouple",
    "p_ejscreen_over80cnt",
    "p_bio_flag",
    "p_bio_fac_type",
    "p_bio_trtmnt_procs",
    "p_bio_analy_method_catgry",
    "p_bio_total_volume_amt",
    "p_bio_mgmt_prctce_type",
    "p_bio_mgmt_prctce_stype",
    "p_bio_mgmt_prctce_handler",
    "p_bio_mgmt_container",
    "p_bio_mgmt_pathogen",
    "p_bio_mgmt_pathred",
    "p_bio_mgmt_vector",
    "p_insp_deficiencies",
    "p_bio_mgmt_def_category",
    "p_bio_mgmt_deficiencies",
    "p_bio_vio_code",
    "p_bio_current_vio",
    "p_bio_qtrs_in_vio",
    "p_bio_rpt_year",
    "p_bio_insp_deficiencies",
    "p_bio_vio_last_year",
    "p_msgp_rpt_year",
    "p_vio_last_year",
    "responseset",
    "callback",
    "qcolumns",
    "p_pretty_print"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "output": "output",
    "p_fn": "p_fn",
    "p_sa": "p_sa",
    "p_sa1": "p_sa1",
    "p_ct": "p_ct",
    "p_co": "p_co",
    "p_fips": "p_fips",
    "p_st": "p_st",
    "p_zip": "p_zip",
    "p_frs": "p_frs",
    "p_reg": "p_reg",
    "p_sic": "p_sic",
    "p_ncs": "p_ncs",
    "p_pen": "p_pen",
    "xmin": "xmin",
    "ymin": "ymin",
    "xmax": "xmax",
    "ymax": "ymax",
    "p_usmex": "p_usmex",
    "p_sic2": "p_sic2",
    "p_sic4": "p_sic4",
    "p_fa": "p_fa",
    "p_ff": "p_ff",
    "p_act": "p_act",
    "p_maj": "p_maj",
    "p_mact": "p_mact",
    "p_fea": "p_fea",
    "p_feay": "p_feay",
    "p_feaa": "p_feaa",
    "p_iea": "p_iea",
    "p_ieay": "p_ieay",
    "p_ieaa": "p_ieaa",
    "p_qiv": "p_qiv",
    "p_iv": "p_iv",
    "p_impw": "p_impw",
    "p_imp_pol": "p_imp_pol",
    "p_imp_cau_grp": "p_imp_cau_grp",
    "p_trep": "p_trep",
    "p_pm": "p_pm",
    "p_pd": "p_pd",
    "p_ico": "p_ico",
    "p_huc": "p_huc",
    "p_pid": "p_pid",
    "p_med": "p_med",
    "p_ysl": "p_ysl",
    "p_ysly": "p_ysly",
    "p_ysla": "p_ysla",
    "p_qs": "p_qs",
    "p_sfs": "p_sfs",
    "p_tribeid": "p_tribeid",
    "p_tribename": "p_tribename",
    "p_tribedist": "p_tribedist",
    "p_pstat": "p_pstat",
    "p_ptype": "p_ptype",
    "p_pcomp": "p_pcomp",
    "p_plimits": "p_plimits",
    "p_pcss": "p_pcss",
    "p_pexp": "p_pexp",
    "p_owop": "p_owop",
    "p_agoo": "p_agoo",
    "p_idt1": "p_idt1",
    "p_idt2": "p_idt2",
    "p_pityp": "p_pityp",
    "p_pfead1": "p_pfead1",
    "p_pfead2": "p_pfead2",
    "p_pfeat": "p_pfeat",
    "p_pccs": "p_pccs",
    "p_pexcd": "p_pexcd",
    "p_psncq": "p_psncq",
    "p_pctrack": "p_pctrack",
    "p_dwd": "p_dwd",
    "p_pt": "p_pt",
    "p_pdwdist": "p_pdwdist",
    "p_pswdpc": "p_pswdpc",
    "p_pswdmp": "p_pswdmp",
    "p_pswpol": "p_pswpol",
    "p_pswcas": "p_pswcas",
    "p_pswparam": "p_pswparam",
    "p_pswvio": "p_pswvio",
    "p_wbd": "p_wbd",
    "p_radwbd": "p_radwbd",
    "p_frswbd": "p_frswbd",
    "p_fntype": "p_fntype",
    "p_pidall": "p_pidall",
    "p_months_last_dmr": "p_months_last_dmr",
    "p_last_dmr_within": "p_last_dmr_within",
    "p_indsw": "p_indsw",
    "p_msgp_ptype": "p_msgp_ptype",
    "p_mon_type": "p_mon_type",
    "p_iagency": "p_iagency",
    "p_isws": "p_isws",
    "p_iswss": "p_iswss",
    "p_iswssID": "p_iswssID",
    "p_ds1": "p_ds1",
    "p_ds2": "p_ds2",
    "p_da1": "p_da1",
    "p_da2": "p_da2",
    "p_MS4": "p_MS4",
    "p_ooFN": "p_ooFN",
    "p_ooFNtype": "p_ooFNtype",
    "p_ooSA": "p_ooSA",
    "p_ooSA1": "p_ooSA1",
    "p_ooCt": "p_ooCt",
    "p_ooSt": "p_ooSt",
    "p_ooZip": "p_ooZip",
    "p_fac_ico": "p_fac_ico",
    "p_icoo": "p_icoo",
    "p_fac_icos": "p_fac_icos",
    "p_ejscreen": "p_ejscreen",
    "p_alrexceed": "p_alrexceed",
    "p_limit_addr": "p_limit_addr",
    "p_lat": "p_lat",
    "p_long": "p_long",
    "p_radius": "p_radius",
    "p_decouple": "p_decouple",
    "p_ejscreen_over80cnt": "p_ejscreen_over80cnt",
    "p_bio_flag": "p_bio_flag",
    "p_bio_fac_type": "p_bio_fac_type",
    "p_bio_trtmnt_procs": "p_bio_trtmnt_procs",
    "p_bio_analy_method_catgry": "p_bio_analy_method_catgry",
    "p_bio_total_volume_amt": "p_bio_total_volume_amt",
    "p_bio_mgmt_prctce_type": "p_bio_mgmt_prctce_type",
    "p_bio_mgmt_prctce_stype": "p_bio_mgmt_prctce_stype",
    "p_bio_mgmt_prctce_handler": "p_bio_mgmt_prctce_handler",
    "p_bio_mgmt_container": "p_bio_mgmt_container",
    "p_bio_mgmt_pathogen": "p_bio_mgmt_pathogen",
    "p_bio_mgmt_pathred": "p_bio_mgmt_pathred",
    "p_bio_mgmt_vector": "p_bio_mgmt_vector",
    "p_insp_deficiencies": "p_insp_deficiencies",
    "p_bio_mgmt_def_category": "p_bio_mgmt_def_category",
    "p_bio_mgmt_deficiencies": "p_bio_mgmt_deficiencies",
    "p_bio_vio_code": "p_bio_vio_code",
    "p_bio_current_vio": "p_bio_current_vio",
    "p_bio_qtrs_in_vio": "p_bio_qtrs_in_vio",
    "p_bio_rpt_year": "p_bio_rpt_year",
    "p_bio_insp_deficiencies": "p_bio_insp_deficiencies",
    "p_bio_vio_last_year": "p_bio_vio_last_year",
    "p_msgp_rpt_year": "p_msgp_rpt_year",
    "p_vio_last_year": "p_vio_last_year",
    "responseset": "responseset",
    "callback": "callback",
    "qcolumns": "qcolumns",
    "p_pretty_print": "p_pretty_print"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/cwa_rest_services.get_facility_info',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}