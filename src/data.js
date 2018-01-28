export const steps = [
  {
    id: 'section-1',
    title:'Your data',
    items: [{ 
        id: 1, 
        title: 'Your company has a list of places where it keeps personal information and the ways data flows between them', 
        role: [ 'controller', 'processor'], 
        description: 'This could be a list of databases (eg Mysql), but it could also include offline datastores (paper).',
        links: [
          {href: "https://advisera.com/eugdpracademy/gdpr/records-of-processing-activities/",
           title: 'GDPR Article 30 – Records of processing activities'
          }
        ]  
      },
      { 
        id: 2, 
        title: 'Your company has a list of all types of personal information it holds, the source of that information, who you share it with, what you do with it and how long you will keep it', 
        role: ['processor', 'controller'], 
        description: 'This is a list of the actual types (columns) of information being held (eg Name, social security nr, address,..). For each type, a source should be documented, the parties this information is shared with, the purpose of the information and the duration for which the company will keep this information.',
        links: [
          ''
        ]  
      },
      { 
        id: 3, 
        title: 'Your company has a publicy accessible privacy policy that outlines all you processes related to personal data. ', 
        role: ['processor', 'controller'], 
        description: 'You should include information about all processes related to the processing of personal information. This document should have include or have links to the types of personal information the company holds, and where it holds them.',
        links: [
          ''
        ]  
      },
      { 
        id: 4, 
        title: 'Your privacy policy should include a lawful basis to explain why the company needs to process personal information', 
        role: [ 'controller'], 
        description: 'It should contain a reason for data processing, eg the fulfillment of a contract.',
        links: [
          ''
        ]  
      }
    ]
  },
  {
    id: 'section-2',
    title:'Accountability & management',
    items: [{ 
        id: 1, 
        title: 'Your company has appointed a Data Protection Officer (DPO)', 
        role: ['processor', 'controller'], 
        description: 'This person should have knowledge of GDPR guidelines as well as knowledge about the internal processes that involve personal information',
        links: [
          ''
        ]  
      },
      { 
        id: 2, 
        title: 'Create awareness among decision makers about GPDR guidelines', 
        role: ['processor', 'controller'], 
        description: 'Make sure key people and decision makers have up-to-date knowledge about the data protection legislation',
        links: [
          ''
        ]  
      },
      { 
        id: 3, 
        title: 'Make sure your technical security is up to date. ', 
        role: ['processor', 'controller'], 
        description: 'For SaaS software companies, use the SaaS CTO security checklist as a starting point below.',
        links: [
          {title: "SaaS CTO security checklis",
           href: 'https://cto-security-checklist.sqreen.io/'
          }
        ]  
      },
      { 
        id: 4, 
        title: 'Train staff to be aware of data protection', 
        role: ['processor'], 
        description: 'A lot of security vulnerabilities involve cooperation of an unwitting person with access to internal systems. Make sure your employees are aware of these risks.',
        links: [
          ''
        ]  
      },
      { 
        id: 5, 
        title: 'You have a list of sub-processors and your privacy policy mentions your use of this sub-processor', 
        role: ['processor'], 
        description: 'You should inform your customers of the use of any sub-processor. They should consent by accepting your privacy policy',
        links: [
          ''
        ]  
      },
      { 
        id: 6, 
        title: 'If your business operates outside the EU, you have appointed a representative within the EU.', 
        role: ['processor'], 
        description: '',
        links: [
          ''
        ]  
      },{ 
        id: 7, 
        title: 'You report data breaches involving personal data to the local authority ', 
        role: ['processor', 'controller'], 
        description: '',
        links: [
          ''
        ]  
      },{ 
        id: 8, 
        title: 'There is a contract in place with any data processors that you share data with ', 
        role: [ 'controller'], 
        description: '',
        links: [
          ''
        ]  
      }
    ]
  },
  {
    id: 'section-3',
    title:'New rights',
    items: [,
      { 
        id: 1, 
        title: 'Your customers can easily request access to their personal information', 
        role: ['processor', 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]   
      },
      { 
        id: 2, 
        title: 'Your customers can easily update their own personal information to keep it accurate', 
        role: ['processor', 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]  
      },
      { 
        id: 3, 
        title: 'You automatically delete data that your business no longer has any use for', 
        role: ['processor', 'controller'], 
        description: 'You should automate deletion of data types according to your own privacy policy. Data should be deleted when it is no longer required.',
        links: [
          ''
        ]  
      },
      { 
        id: 4, 
        title: 'Your customers can easily request deletion of their personal data', 
        role: ['processor', 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]   
      },
      { 
        id: 5, 
        title: 'Your customers can easily request that you stop processing their data', 
        role: ['processor', 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]  
      },
      { 
        id: 6, 
        title: 'Your customers can easily request that their data be delivered to themselves or a 3rd party', 
        role: ['processor', 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]    
      },
      { 
        id: 7, 
        title: 'Your customers can easily object the processing of their data', 
        role: ['controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]    
      },
      { 
        id: 8, 
        title: 'Your customers can easily object to profiling or automated decision making that could impact them', 
        role: ['controller'], 
        description: 'This is only applicable if your company does profiling or any other automated decision making. If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]    
      }
    ]
  },
  {
    id: 'section-4',
    title:'Consent',
    items: [{ 
        id: 1, 
        title: 'Ask consent when you start processing information about a person', 
        role: [ 'controller'], 
        description: '',
        links: [
          ''
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
          }
        ]  
      },
      { 
        id: 3, 
        title: 'It should be as easy for your customers to withdraw consent as it was to give it in the first place', 
        role: [ 'controller'], 
        description: 'If you do not already have a process defined for this, we\'ve made an easy online form below.',
        links: [
            { title: "GDPRform.io: automated online GPDR Form for exercising data subject's rights",
             href: 'http://yourcompany.gdprform.io'
            }          
        ]  
      },
      { 
        id: 4, 
        title: 'If you process children\'s personal data, verify their age and aks their consent', 
        role: [ 'controller'], 
        description: '',
        links: [
          ''
        ]  
      },
      { 
        id: 5, 
        title: 'When you update your privacy policy, you inform existing customers', 
        role: [ 'controller'], 
        description: 'for example, by emailing upcoming changes of your privacy policy. Your communication should include in a simple way what has changed.',
        links: [
          ''
        ]  
      }
    ]
  },
  {
    id: 'section-5',
    title:'Follow-up',
    items: [{ 
        id: 1, 
        title: 'You regularly review policies for changes, effectiveness, changes in handling of data, changes to the state of affairs of other countries your data flows to,..', 
        role: [ 'controller'], 
        description: '',
        links: [
          ''
        ]  
      }
    ]
  },
  {
    id: 'section-6',
    title:'Special cases',
    items: [{ 
        id: 1, 
        title: 'Your business understands when you must conduct a DPIA for high-risk processing of sensitivie data', 
        role: [ 'controller'], 
        description: 'This is only applicable for large-scale data processing, profiling,..',
        links: [
          'https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-nieuwe-europese-privacywetgeving/data-protection-impact-assessment-dpia'
        ]  
      },
      { 
        id: 2, 
        title: 'You should only transfer data outside of the EU to countries that offer an appropriate level of protection', 
        role: ['processor', 'controller'], 
        description: 'You should also disclose cross-border data flows in your privacy policy.',
        links: [
          ''
        ]  
      }
    ]
  }
]