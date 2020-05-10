import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  public services: any = [];
  public selectedService: any;
  public width = 'w-0';
  public class = 'hidden';
  public document: any;

  constructor() { }

  ngOnInit() {
    this.services = [
      {
        title: 'MOMS Licensing',
        desc: '',
        flag: 'sg',
        image: '/assets/MOMS-logo.png',
        heading1: '',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'DHA Licensing',
        abb: 'Dubai Health Authority',
        desc: 'The main motto of the DHA licensing was to ensure the safe delivery of high standard healthcare services to the people in Dubai. There is a need to obtain DHA license for every Healthcare professional who needs to keep the clinical practice in any healthcare facility within the DHA jurisdiction (Dubai) which was valid all the time during their practice. DHA license requirements will depends on unified licensing guideline. And based on the DHA exam i.e. DHA license exam the license will be given to the health care professionals who qualified in that exam.',
        flag: 'ae',
        image: '/assets/DHA-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'MOH Licensing',
        abb: 'Ministry Of Health Authority, United Arab Emirates',
        desc: 'The MOH License is an official permit offered to the medical professionals wanting to work in Sharjah Emirate and other northern Emirates in UAE such as Ajaman, Fujairah, Ras Al Khaimah and Umm Al Quwain.  Besides the submission of the relevant documents, the applicants also need to clear an examination conducted by the Ministry of Health and Prevention in UAE. The licensing procedure of MOH starts with the submission of documents. The candidate needs to clear a Prometric test for being considered as eligible for the license. There are other verification’s too including Credential and Data Flow processes',
        flag: 'ae',
        image: '/assets/MOH-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'DHCC Licensing',
        abb: ' Dubai Healthcare City',
        desc: 'DHCC stands for Dubai Healthcare City which allows healthcare professionals from more than 30 countries to attend for DHCC exam to obtain the DHCC license. This license will be used to work as a physician in Dubai. The main motto of DHCC is to raise the number of healthcare professionals in UAE and to boost the economy of UAE. At present 11 exams were available for different healthcare professionals. DHCC based healthcare professionals were handled by CPQ means Center for Healthcare Planning.',
        flag: 'ae',
        image: '/assets/DHCC-logo.png',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'HAAD Licensing',
        abb: 'Department of Health-Abu Dhabi',
        desc: 'HAAD license will authorizes you to provide professional healthcare practice in Abu Dhabi. HAAD Licensing is very important to delivery high standards of healthcare services. So initially there is a need to know about HAAD licensing requirements such as HAAD exam i.e. HAAD license exam for different healthcare professionals. After fulfilling of all requirements healthcare professionals with different specialties can able to get license to work in Emirate of Abu Dhabi. License should be current & valid during their clinical practice. License should be renew before 3 months prior to the date of expiry. Another requirement is healthcare professionals should obtain no objection certificate (NOC) from their respective Hospital management.',
        flag: 'ae',
        image: '/assets/HAAD-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'SCHS Licensing',
        abb: 'Saudi Commission for Health Specialties',
        desc: 'The Saudi Commission for Health Specialties (SCHS) leverages the Saudi Dataflow Group’s specialized Primary Source Verification (PSV) solutions to screen the credentials of healthcare professionals practicing in the Kingdom.',
        flag: 'sa',
        image: '/assets/SCHS-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'QCHP Licensing',
        abb: 'Qatar Council for Healthcare Practitioners',
        desc: 'The Qatar Council for Healthcare Practitioners (QCHP) leverages the Qatar Dataflow Group’s specialized Primary Source Verification (PSV) solutions to screen the professional credentials of healthcare practitioners working in the country.',
        flag: 'qa',
        image: '/assets/QCHCP-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'OMSB Licensing',
        abb: 'Oman Medical Specialty Board',
        desc: 'Oman Medical Specialty Board (OMSB) leverages the Oman Dataflow Group’s specialized Primary Source Verification (PSV) solutions to screen the credentials of healthcare professionals practicing in the Sultanate.',
        flag: 'om',
        image: '/assets/OMSB-logo.png',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'NHRA Licensing',
        abb: 'National Health Regulatory Authority',
        desc: 'National Health Regulatory Authority leverages the Bahrain Dataflow Group’s specialized Primary Source Verification (PSV) solutions to screen the credentials of healthcare professionals practicing in Bahrain.',
        flag: 'bh',
        image: '/assets/NHRA-logo.jpeg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'Kuwait Licensing',
        abb: '',
        desc: 'DHAMAN leverages the Kuwait Dataflow Group’s specialized Primary Source Verification (PSV) solutions to screen the credentials of healthcare professionals practicing in the Kuwait.',
        flag: 'kw',
        image: '/assets/DHAMAN-logo.jpg',
        heading1: 'LICENSE REQUIRED PROFESSIONALS',
        headingList: ['Physician / Doctor', 'General Dentists & Orthodontists', 'Allied Health Professionals', 'Nurse']
      },
      {
        title: 'PROMETRIC',
        abb:'',
        desc: 'All foreign medical personnel planning to work at hospitals / healthcare facilities in Middle East have to write an exam often referred to as "Prometric" to register in the Healthcare Commission or council in the country of employment.',
        desc1: 'This exam is a medium to check whether healthcare Professionals are competent enough in meeting the different needs of the international clients.',
        desc2: 'This Exam is applicable for different categories of Healthcare Professionals such as Doctors, Pharmacists, Nurses, Paramedics, Technicians etc.',
        desc2Class:'font-bold',
        desc3: 'The question pattern and exam eligibility varies for every country in Middle East.',
        flag: '',
        image: '/assets/prometric-logo.jpeg',
      },
      {
        title: 'Certificate Attestation',
        desc: 'Certificate attestation is compulsory when you move to another country for various purposes like higher studies, employment, etc. You are required to attest your educational and non-educational documents to prove its legitimacy.',
        flag: '',
        image: '/assets/Certificate-Attestation.jpeg',
        desc1: 'The main three types of attestation are as follows,',
        desc1Class: 'font-bold',
        desc1List: [
          'State Attestation: Prior to MEA attestation, the state attestation is needed based on the type of certificate.',
          'MEA Attestation or Apostille MEA attestation: MEA Attestation or Apostille MEA attestation is prepared after attestation by appropriate state authorities.',
          'Embassy Attestation , Embassy/Consulate attestation.',
          'Embassy Attestation is prepared after the MEA attestation.'
        ],
        desc2: 'CmedVerify simplifies the entire process of attestation/Apostille for below Gulf Countries',
        desc2Class: 'font-bold',
        desc2List: [
          'SAUDI Embassy Attestation',
          'UAE Embassy Attestation',
          'Qatar Embassy Attestation',
          'Bahrain Embassy Attestation',
          'OMAN Embassy Attestation',
          'Kuwait Embassy Attestation'
        ]
      } ,
      {
        title: 'Certificate Verification',
        desc: 'Certificate Verification is the process of confirming the authenticity of certificates obtained abroad by a specialized international company (DataFlow) contacting the certificate issuer.',
        desc1: 'The Purpose of Verification:',
        desc1Class: 'text-base font-bold',
        desc2: 'To create a safe healthcare practice by preventing counterfeiting and forgery of any kind. It is one of the basic criteria established by local and international commissions for the accreditation of hospitals and healthcare facilities for the purpose of having practitioners who are able to practice health professions efficiently and safely.',
        desc3: 'What is DATAFLOW Group',
        desc3Class: 'font-bold',
        desc3Text: 'The DataFlow Group is a leading global provider of specialised Primary Source Verification (PSV) solutions, and background screening and immigration compliance services. The DataFlow Group partners with clients across the public and private sectors to assist them in mitigating potential risk by exposing fraudulent. Background checks are done mainly to avoid the risks of frauds. They provide screening for:',
        desc3List:[
          'Educational Documents',
          'Employment Documents',
          'Passports',
          'Practice Licenses',
          'Birth Certificates',
          'Marriage Certificates'
        ],
        desc4: 'THE PURPOSE OF DATAFLOW PRIMARY SOURCE VERIFICATION',
        desc4Class:'font-bold',
        desc4Text: 'Dataflow verification report is a mandatory requirement abroad for getting employment opportunities. Background checks are necessary to avoid frauds from entering reputed organizations. To get a job abroad, you need to undergo thorough screening process and background check for proving that you have no prior criminal history.',
        flag: '',
        image: '/assets/certificate-verifcation.jpeg'
      }
    ];
  }

  showInfo(service) {
    this.selectedService = service;
    this.width = 'w-1/2 p-3';
    this.class = 'block';
    document.getElementsByTagName("body")[0].style.overflowY = 'hidden';
  }
  clearInfo() {
    this.selectedService = undefined;
    this.width = 'w-0';
    this.class = 'hidden';
    document.getElementsByTagName("body")[0].style.overflowY = 'auto';
  }

}
