export const steps = [
  {
    id: 'data',
    title:'Data',
    items: [
      {
        id: 1,
        title: 'Your company has a list of all types of personal information it holds, the source of that information, who you share it with, what you do with it and how long you will keep it',
        role: ['processor', 'controller'],
        description: 'This is a list of the actual types (columns) of information being held (eg Name, social security nr, address,..). For each type, a source should be documented, the parties this information is shared with, the purpose of the information and the duration for which the company will keep this information.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
            title: 'GDPR Article 30 – Records of processing activities'
          },
          {
            href: "https://gdprplug.in/gdpr-data-map/",
            title: "GDPR Data Map Template"
          }
        ]
      },
      {
        id: 2,
        title: 'Your company has a list of places where it keeps personal information and the ways data flows between them',
        role: [ 'processor', 'controller'],
        description: 'This could be a list of databases (eg Mysql), but it could also include offline datastores (paper).',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 3,
        title: 'Your company has a publicly accessible privacy policy that outlines all processes related to personal data.',
        role: ['processor', 'controller'],
        description: 'You should include information about all processes related to the handling of personal information. This document should include (or have links to) the types of personal information the company holds, and where it holds them. ',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          }
        ]
      },
      {
        id: 4,
        title: 'Your privacy policy should include a lawful basis to explain why the company needs to process personal information',
        role: [ 'controller'],
        description: 'It should contain a reason for data processing, eg the fulfillment of a contract.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/lawfulness-of-processing/",
           title: 'GDPR Article 6 – Lawfulness of processing'
          }
        ]
      }
    ]
  },
  {
    id: 'accountability-management',
    title:'Accountability & management',
    items: [{
        id: 1,
        title: 'Your company has appointed a Data Protection Officer (DPO)',
        role: ['processor', 'controller'],
        description: 'A DPO is only required in three scenarios: (1) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity; (2) the core activities of the business consist of processing operations which, by virtue of their nature, scope, and/or purposes, require regular and systematic monitoring of data subjects on a large scale, or (3) the core activities of the business consist of processing on a large scale special categories of data (sensitive data) pursuant to Article 9 and personal data relating to criminal convictions or offenses pursuant to Article 10. If a DPO is required, the DPO should have knowledge of GDPR guidelines as well as knowledge about the internal processes that involve personal information.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/designation-of-the-data-protection-officer/",
           title: 'GDPR Article 37 – Designation of the data protection officer'
          }
        ]
      },
      {
        id: 2,
        title: 'Create awareness among decision makers about GDPR guidelines',
        role: ['processor', 'controller'],
        description: 'Make sure key people and decision makers have up-to-date knowledge about the data protection legislation.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 3,
        title: 'Make sure your technical security is up to date. ',
        role: ['processor', 'controller'],
        description: 'For SaaS software companies, use the SaaS CTO security checklist as a starting point below.',
        links: [
          {title: "SaaS CTO security checklist",
           href: 'https://www.goldfiglabs.com/guide/saas-cto-security-checklist/'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 4,
        title: 'Train staff to be aware of data protection',
        role: ['processor'],
        description: 'A lot of security vulnerabilities involve cooperation of an unwitting person with access to internal systems. Make sure your employees are aware of these risks.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          }
        ]
      },
      {
        id: 5,
        title: 'You have a list of sub-processors and your privacy policy mentions your use of this sub-processor',
        role: ['processor'],
        description: 'You should inform your customers of the use of any sub-processor. They should consent by accepting your privacy policy.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processor/",
            title: 'GDPR Article 28 – Processor'
          },
          {
            href: "https://www.compliancerank.com",
            title: "ComplianceRank - Keep track of the compliance of cloud services & subprocessors"
          }
        ]
      },
      {
        id: 6,
        title: 'If your business operates outside the EU, you have appointed a representative within the EU.',
        role: ['processor', 'controller'],
        description: 'If you have a business outside of the EU and you collect data on EU citizens, you should assign a representative in one of the member states for your business. This person should handle all issues related to processing. In particular, a local authority should be able to contact this person.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/representatives-of-controllers-or-processors-not-established-in-the-union/",
           title: 'GDPR Article 27 – Representatives of controllers or processors not established in the Union'
          }
        ]
      },{
        id: 7,
        title: 'You report data breaches involving personal data to the local authority and to the people (data subjects) involved',
        role: ['processor', 'controller'],
        description: 'Personal data breaches should be reported within 72 hours to the local authority. You should report what data has been lost, what the consequences are and what countermeasures you have taken. Unless the data leaked was encrypted, you should also report the breach to the person (data subject) whose data you lost.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/notification-of-a-personal-data-breach-to-the-supervisory-authority/",
           title: 'GDPR Article 33 – Notification of a personal data breach to the supervisory authority'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/communication-of-a-personal-data-breach-to-the-data-subject/",
           title: 'GDPR Article 34 – Communication of a personal data breach to the data subject'
          }
        ]
      },{
        id: 8,
        title: 'There is a contract in place with any data processors that you share data with',
        role: [ 'controller'],
        description: 'The contract should contain explicit instructions for the storage or processing of data by the processor. The contract should set out the subject matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects and the obligations and rights of the controller. For example, this could include a contract with your hosting provider. The same contract requirements apply when a processor engages a sub-processor to assist it in fulfilling processing activities on behalf of the controller',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/processor/",
            title: 'GDPR Article 28 – Processor'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/processing-under-the-authority-of-the-controller-or-processor/",
           title: 'GDPR Article 29 – Processing under the authority of the controller or processor'
          },
          {
            href: "https://www.compliancerank.com",
            title: "ComplianceRank - Track hosting centers, DPAs & infrastructure partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  },
  {
    id: 'new-rights',
    title:'New rights',
    items: [,
      {
        id: 1,
        title: 'Your customers can easily request access to their personal information',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-of-access-by-the-data-subject/",
              title: 'GDPR Article 15 – Right of access by the data subject'
            }
        ]
      },
      {
        id: 2,
        title: 'Your customers can easily update their own personal information to keep it accurate',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-rectification/",
              title: 'GDPR Article 16 – Right to rectification'
            }
        ]
      },
      {
        id: 3,
        title: 'You automatically delete data that your business no longer has any use for',
        role: ['processor', 'controller'],
        description: 'You should automate deletion of data you no longer need. For example, you should automatically delete data for customers whose contracts have not been renewed.',
        links: [
            {href: "https://advisera.com/eugdpracademy/gdpr/principles-relating-to-processing-of-personal-data/",
              title: 'GDPR Article 5 – Principles relating to processing of personal data'
            }
        ]
      },
      {
        id: 4,
        title: 'Your customers can easily request deletion of their personal data',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-erasure-right-to-be-forgotten/",
              title: 'GDPR Article 17 – Right to erasure (‘right to be forgotten’)'
            }
        ]
      },
      {
        id: 5,
        title: 'Your customers can easily request that you stop processing their data',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-restriction-of-processing/",
              title: 'GDPR Article 18 – Right to restriction of processing'
            }
        ]
      },
      {
        id: 6,
        title: 'Your customers can easily request that their data be delivered to themselves or a 3rd party',
        role: ['processor', 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/right-to-data-portability/",
              title: 'GDPR Article 20 – Right to data portability'
            }
        ]
      },
      {
        id: 7,
        title: 'Your customers can easily object to profiling or automated decision making that could impact them',
        role: ['controller'],
        description: 'This is only applicable if your company does profiling or any other automated decision making. If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/automated-individual-decision-making-including-profiling/",
              title: 'Article 22 – Automated individual decision-making, including profiling'
            }
        ]
      }
    ]
  },
  {
    id: 'consent',
    title:'Consent',
    items: [{
        id: 1,
        title: 'Where processing is based on consent, such consent must be freely given, specific, informed, and revocable',
        role: [ 'controller'],
        description: 'If your website collects personal information in some way, you should have an easily visble link to your privacy policy and confirm that the user accepts your terms and conditions. Consent requires an affirmative action, so pre-ticked boxes are not permitted.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
           title: 'GDPR Article 7 – Conditions for consent'
          }
        ]
      },
      {
        id: 2,
        title: 'Your privacy policy should be written in clear and understandable terms ',
        role: [ 'controller'],
        description: 'It should be written in clear and simple terms and not conceal it\'s intent in any way. Failing to do so could void the agreement entirely. When providing services to children, the privacy policy should be easy enough for them to understand.',
        links: [
          { title: "Watchdog service for terms of service: Terms of Service; Didn't Read",
           href: 'https://tosdr.org/'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
           title: 'GDPR Article 7.2 – Conditions for consent'
          }
        ]
      },
      {
        id: 3,
        title: 'It should be as easy for your customers to withdraw consent as it was to give it in the first place',
        role: [ 'controller'],
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPR Form: Easy-to-configure web form to manage data requests from your customers & website visitors.",
             href: 'https://www.gdprform.io'
            },
            {href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
              title: 'GDPR Article 7.3 – Conditions for consent'
            }
        ]
      },
      {
        id: 4,
        title: 'If you process children\'s personal data, verify their age and ask consent from their legal guardian',
        role: [ 'controller'],
        description: 'For children younger than 16, you need to make sure a legal guardian has given consent for data processing. If consent is given via your website, you should try to make sure approval was actually given by the legal guardian (and not by the child).',
        links: [
            {href: "https://advisera.com/eugdpracademy/gdpr/conditions-applicable-to-childs-consent-in-relation-to-information-society-services/",
              title: 'GDPR Article 8 – Conditions applicable to child’s consent in relation to information society services'
            }
        ]
      },
      {
        id: 5,
        title: 'When you update your privacy policy, you inform existing customers',
        role: [ 'controller'],
        description: 'for example, by emailing upcoming changes of your privacy policy. Your communication should explain in a simple way what has changed.',
        links: [
          {
            href: "https://advisera.com/eugdpracademy/gdpr/conditions-for-consent/",
            title: 'GDPR Article 7 – Conditions for consent'
          }
        ]
      }
    ]
  },
  {
    id: 'follow-up',
    title:'Follow-up',
    items: [{
        id: 1,
        title: 'You regularly review policies for changes, effectiveness, changes in handling of data and changes to the state of affairs of other countries your data flows to.',
        role: [ 'controller'],
        description: 'You should follow up on best practies and changes to the policies in your local environment. Sign up at the bottom of this page to receive major updates to this list.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-by-design-and-by-default/",
           title: 'GDPR Article 25 – Data protection by design and by default'
          },
          {
            href: "https://www.compliancerank.com",
            title: "ComplianceRank - Track hosting centers, DPAs & infrastructure partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  },
  {
    id: 'special-cases',
    title:'Special cases',
    items: [{
        id: 1,
        title: 'Your business understands when you must conduct a DPIA for high-risk processing of sensitive data.',
        role: [ 'controller'],
        description: 'This is only applies to businesses carrying out large-scale data processing, profiling and other activities with high risk to the rights and freedoms of people. A special assessment should be carried out in these cases.',
        links: [
          {href: 'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-nieuwe-europese-privacywetgeving/data-protection-impact-assessment-dpia',
           title: 'DPIA according to the Dutch local authority (Dutch)'
          },
          {href: "https://advisera.com/eugdpracademy/gdpr/data-protection-impact-assessment/",
           title: 'GDPR Article 35 – Data protection impact assessment'
          }
        ]
      },
      {
        id: 2,
        title: 'You should only transfer data outside of the EU to countries that offer an appropriate level of protection',
        role: ['processor', 'controller'],
        description: 'You should also disclose these cross-border data flows in your privacy policy.',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/transfers-on-the-basis-of-an-adequacy-decision/",
           title: 'GDPR Article 45 – Transfers on the basis of an adequacy decision'
          },
          {
            href: "https://www.compliancerank.com",
            title: "ComplianceRank - Track hosting center locations & hosting partners from cloud services & subprocessors"
          }
        ]
      }
    ]
  },
  {
    id: 'user-rights',
    title:'User Rights',
    items: [
      {
        id: 1,
        title: 'Right to receive transparent information, communication and modalities for the exercise of your rights.',
        role: [ 'subject'],
        description: 'The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to you in a concise, transparent, intelligible and easily accessible form, using clear and plain language, in particular for any information addressed specifically to a child. The information shall be provided in writing, or by other means, including, where appropriate, by electronic means. When requested by you, the information may be provided orally, provided that your identity is proven by other means.',
        links: [
          {href: 'https://gdpr-info.eu/art-12-gdpr/',
           title: 'GDPR Article 12'
          }
        ]
      },
      {
        id: 2,
        title: 'Right to receive specific information when your personal data are collected from you directly.',
        role: [ 'subject'],
        description: 'This information is : 1) The identity and the contact details of the controller and, where applicable, of the controller’s representative. 2) The contact details of the data protection officer, where applicable. 3) The purposes of the processing for which the personal data are intended as well as the legal basis for the processing. 4) Where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party. 5) The recipients or categories of recipients of the personal data, if any. 6) Where applicable, the fact that the controller intends to transfer personal data to a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means by which to obtain a copy of them or where they have been made available.',
        links: [
          {href: 'https://gdpr-info.eu/art-13-gdpr/',
           title: 'GDPR Article 13'
          }
        ]
      },
      {
        id: 3,
        title: 'Right to receive specific information when your personal data are not collected from you directly.',
        role: [ 'subject'],
        description: 'This information is : 1) The identity and the contact details of the controller and, where applicable, of the controller’s representative. 2) The contact details of the data protection officer, where applicable. 3) The purposes of the processing for which the personal data are intended as well as the legal basis for the processing. 4) The categories of personal data concerned. 5) The recipients or categories of recipients of the personal data, if any. 6)Where applicable, that the controller intends to transfer personal data to a recipient in a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means to obtain a copy of them or where they have been made available.',
        links: [
          {href: 'https://gdpr-info.eu/art-14-gdpr/',
           title: 'GDPR Article 14'
          }
        ]
      },
      {
        id: 4,
        title: 'Right of access: You have the right to obtain from the controller confirmation as to whether or not your personal data are being processed, and, where that is the case, access to your personal data.',
        role: [ 'subject'],
        description: 'You also have to right to access the following information: 1) The purposes of the processing. 2) The categories of personal data concerned. 3) The recipients or categories of recipient to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations. 4) Where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period. 5) The existence of the right to request from the controller rectification or erasure of personal data or restriction of processing of personal data concerning the data subject or to object to such processing. 6) The right to lodge a complaint with a supervisory authority. 7) Where the personal data are not collected from the data subject, any available information as to their source. 8) The existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.',
        links: [
          {href: 'https://gdpr-info.eu/art-15-gdpr/',
           title: 'GDPR Article 15'
          }
        ]
      },
      {
        id: 5,
        title: 'Right to rectification: You have the right to obtain from the controller without undue delay the rectification of inaccurate personal data.',
        role: [ 'subject'],
        description: 'Taking into account the purposes of the processing, you have the right to have incomplete personal data completed, including by means of providing a supplementary statement.',
        links: [
          {href: 'https://gdpr-info.eu/art-16-gdpr/',
           title: 'GDPR Article 16'
          }
        ]
      },
      {
        id: 6,
        title: 'Right to erasure: You have the right to obtain from the controller the erasure of your personal data without undue delay.',
        role: [ 'subject'],
        description: 'The controller shall have the obligation to erase your personal data without undue delay where one of the following grounds applies: 1) The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed. 2) The data subject withdraws consent on which the processing is based according to point (a) of Article 6(1), or point (a) of Article 9(2), and where there is no other legal ground for the processing. 3) The data subject objects to the processing pursuant to Article 21(1) and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2). 4) The personal data have been unlawfully processed. 5) The personal data have to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject. 6) The personal data have been collected in relation to the offer of information society services referred to in Article 8(1).',
        links: [
          {href: 'https://gdpr-info.eu/art-17-gdpr/',
           title: 'GDPR Article 17'
          }
        ]
      },
      {
        id: 7,
        title: 'Right to restriction of processing: You have the right to obtain from the controller restriction of processing.',
        role: [ 'subject'],
        description: 'This right applies in the following situations: 1) The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data. 2) The processing is unlawful and the data subject opposes the erasure of the personal data and requests the restriction of their use instead. 3) The controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims. 4) The data subject has objected to processing pursuant to Article 21(1) pending the verification whether the legitimate grounds of the controller override those of the data subject.',
        links: [
          {href: 'https://gdpr-info.eu/art-18-gdpr/',
           title: 'GDPR Article 18'
          }
        ]
      },
      {
        id: 8,
        title: 'Right to be notified regarding rectification or erasure of your personal data or restriction of processing: The controller shall communicate any rectification or erasure of your personal data or restriction of processing.',
        role: [ 'subject'],
        description: 'This right is carried out in accordance with Article 16, Article 17(1) and Article 18 to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves disproportionate effort. The controller shall inform you about those recipients if you requests it.',
        links: [
          {href: 'https://gdpr-info.eu/art-19-gdpr/',
           title: 'GDPR Article 19'
          }
        ]
      },
      {
        id: 9,
        title: 'Right to portability: You have the right to receive your personal data, which you have provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which your personal data have been provided.',
        role: [ 'subject'],
        description: 'This processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and the processing is carried out by automated means.',
        links: [
          {href: 'https://gdpr-info.eu/art-20-gdpr/',
           title: 'GDPR Article 20'
          }
        ]
      },
      {
        id: 10,
        title: 'Right to object: You have the right to object, on grounds relating to your particular situation, at any time to processing of your personal data which is based on point (e) or (f) of Article 6(1), including profiling based on those provisions.',
        role: [ 'subject'],
        description: 'The controller shall no longer process your personal data unless the controller demonstrates compelling legitimate grounds for the processing which override your interests, rights and freedoms or for the establishment, exercise or defence of legal claims.',
        links: [
          {href: 'https://gdpr-info.eu/art-21-gdpr/',
           title: 'GDPR Article 21'
          }
        ]
      },
      {
        id: 11,
        title: 'Right not to be subject to a decision based solely on automated processing: You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects or similarly significantly affects you.',
        role: [ 'subject'],
        description: 'This does not applies if the decision: 1) is necessary for entering into, or performance of, a contract between the data subject and a data controller. 2) is authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests. 3) is based on the data subject’s explicit consent.',
        links: [
          {href: 'https://gdpr-info.eu/art-22-gdpr/',
           title: 'GDPR Article 22'
          }
        ]
      }
    ]
  }
]

export const roles = {
  'controller': 'Data Controller',
  'processor': 'Data Processor',
  'subject': 'Data Subject',
}
