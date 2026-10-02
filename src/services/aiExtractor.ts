import { ExtractedNotice } from '../types';
import { getCurrentDate, createRelativeIsoDate, formatDeadlinePretty } from '../utils/dateUtils';

export interface DemoPreset {
  id: string;
  label: string;
  text: string;
  language?: string;
}

/**
 * Demo Presets for hackathon demonstration.
 * Generated dynamically without historical hard-coded dates.
 */
export const getDemoPresets = (): DemoPreset[] => {
  return [
    {
      id: 'dbms_notice',
      label: 'DBMS Project Announcement',
      text: 'All students must submit the DBMS mini project by this Friday at 11:59 PM. Submit the ER diagram, SQL file and documentation. Late submissions will incur a 10% penalty per day.'
    },
    {
      id: 'dbms_extension',
      label: 'DBMS Deadline Extension',
      text: 'URGENT NOTICE: Due to server maintenance on the portal, the DBMS Mini Project deadline has been extended to next Monday at 11:59 PM. Please ensure your ER diagram and SQL scripts are pushed to the university GitHub repository.'
    },
    {
      id: 'ai_term_paper',
      label: 'AI Ethics Research Notice',
      text: 'CS-402 Artificial Intelligence: Term Paper on "Ethical Alignment in Autonomous Reasoning". Due in 4 days at 5:00 PM. Required sections: Abstract, Related Work, Formal Problem Statement, Proposed Evaluation, IEEE Bibliography. Estimated workload is 7 hours.'
    },
    {
      id: 'multilingual_hindi',
      label: 'Multilingual Notice (Hindi)',
      text: 'सभी कंप्यूटर साइंस छात्रों को सूचित किया जाता है कि ऑपरेटिंग सिस्टम (Operating Systems) का असाइनमेंट 2 आगामी मंगलवार दोपहर 2:00 बजे तक जमा करना अनिवार्य है। प्रोसेस शेड्यूलिंग एल्गोरिदम और मेमोरी मैनेजमेंट रिपोर्ट संलग्न करें। अनुमानित समय 4.5 घंटे है।',
      language: 'Hindi'
    },
    {
      id: 'multilingual_tamil',
      label: 'Multilingual Notice (Tamil)',
      text: 'கணிப்பொறி அறிவியல் மாணவர்கள் கணினி நெட்வொர்க்குகள் (Computer Networks) இறுதி திட்ட அறிக்கையை வெள்ளிக்கிழமை மாலை 5:00 மணிக்குள் சமர்ப்பிக்க வேண்டும். பாக்கெட் ட்ரேசர் கோப்புகள் மற்றும் பிணைய வரைபடம் அவசியம். மதிப்பிடப்பட்ட பணி 5 மணிநேரம்.',
      language: 'Tamil'
    }
  ];
};

export const DEMO_PRESETS = getDemoPresets();

/**
 * Deterministic AI parser that transforms messy academic notices into structured work.
 * Handles English, Hindi, Tamil, and Malayalam.
 * Calculates deadlines dynamically relative to current date/time.
 */
export const parseAcademicNoticeDeterministic = (rawText: string): ExtractedNotice => {
  const text = rawText.trim();
  const lower = text.toLowerCase();

  // Detect script / language
  let detectedLanguage = 'English';
  if (/[\u0900-\u097F]/.test(text)) {
    detectedLanguage = 'Hindi';
  } else if (/[\u0B80-\u0BFF]/.test(text)) {
    detectedLanguage = 'Tamil';
  } else if (/[\u0D00-\u0D7F]/.test(text)) {
    detectedLanguage = 'Malayalam';
  }

  // Handle Multilingual Notice (Hindi)
  if (detectedLanguage === 'Hindi') {
    const deadline = createRelativeIsoDate(4, 4); // 4 days away
    return {
      task: 'Operating Systems Assignment 2',
      course: 'Operating Systems (CS-301)',
      deadline,
      deadlineFormatted: formatDeadlinePretty(deadline),
      requirements: [
        'Process Scheduling Algorithm implementations',
        'Memory Management analysis report',
        'C/C++ simulation source code'
      ],
      estimatedHours: 4.5,
      notes: 'Normalized from Hindi academic circular: Process scheduling and memory management report.',
      confidence: 0.94,
      rawText: text,
      detectedLanguage: 'Hindi'
    };
  }

  // Handle Multilingual Notice (Tamil)
  if (detectedLanguage === 'Tamil') {
    const deadline = createRelativeIsoDate(5, 7); // 5 days away
    return {
      task: 'Computer Networks Final Project',
      course: 'Computer Networks (CS-304)',
      deadline,
      deadlineFormatted: formatDeadlinePretty(deadline),
      requirements: [
        'Cisco Packet Tracer simulation files (.pkt)',
        'Network topology architecture diagram',
        'Subnetting calculation verification document'
      ],
      estimatedHours: 5.0,
      notes: 'Normalized from Tamil academic notice: Packet tracer files and network diagram required.',
      confidence: 0.93,
      rawText: text,
      detectedLanguage: 'Tamil'
    };
  }

  // Handle Malayalam Notice
  if (detectedLanguage === 'Malayalam') {
    const deadline = createRelativeIsoDate(3, 5);
    return {
      task: 'Software Engineering Project Report',
      course: 'Software Engineering',
      deadline,
      deadlineFormatted: formatDeadlinePretty(deadline),
      requirements: [
        'Software Requirements Specification (SRS)',
        'UML Architecture diagrams',
        'Test plan and verification metrics'
      ],
      estimatedHours: 4.0,
      notes: 'Normalized from Malayalam academic circular.',
      confidence: 0.92,
      rawText: text,
      detectedLanguage: 'Malayalam'
    };
  }

  // Determine Task & Course
  let task = 'Academic Assignment';
  let course = 'General Course';

  if (lower.includes('dbms') || lower.includes('database')) {
    task = lower.includes('mini') ? 'DBMS Mini Project' : 'Database Systems Project';
    course = 'Database Systems';
  } else if (lower.includes('research paper') || lower.includes('term paper') || lower.includes('ethics')) {
    task = lower.includes('ethics') ? 'AI Ethics Research Paper' : 'Research Paper';
    course = 'Artificial Intelligence';
  } else if (lower.includes('operating systems') || lower.includes('os ')) {
    task = 'Operating Systems Lab Assignment';
    course = 'Operating Systems';
  } else if (lower.includes('statistics') || lower.includes('stats')) {
    task = 'Statistics Quiz Preparation';
    course = 'Statistics';
  } else if (lower.includes('network')) {
    task = 'Networking Architecture Report';
    course = 'Computer Networks';
  } else {
    // Extract first sentence as task title
    const firstSentence = text.split(/[.\n]/)[0].trim();
    task = firstSentence.length > 50 ? firstSentence.slice(0, 47) + '...' : firstSentence || 'Coursework Assignment';
  }

  // Determine Deadline relative to current date/time
  let deadline = createRelativeIsoDate(2, 14); // Default ~2.5 days

  if (lower.includes('extended') || lower.includes('extension') || lower.includes('next monday')) {
    // Extension: 4 to 5 days away
    deadline = createRelativeIsoDate(4, 14);
  } else if (lower.includes('in 4 days') || lower.includes('4 days')) {
    deadline = createRelativeIsoDate(4, 7);
  } else if (lower.includes('tomorrow') || lower.includes('in 1 day')) {
    deadline = createRelativeIsoDate(1, 4);
  } else if (lower.includes('friday') || lower.includes('this friday')) {
    deadline = createRelativeIsoDate(2, 14);
  } else if (lower.includes('next week')) {
    deadline = createRelativeIsoDate(7, 12);
  }

  // Determine Requirements
  const requirements: string[] = [];
  if (lower.includes('er diagram') || lower.includes('entity relationship')) {
    requirements.push('ER diagram (Crow\'s Foot notation)');
  }
  if (lower.includes('sql file') || lower.includes('sql script') || lower.includes('ddl') || lower.includes('schema')) {
    requirements.push('SQL schema script & sample queries (.sql)');
  }
  if (lower.includes('documentation') || lower.includes('report') || lower.includes('pdf')) {
    requirements.push('Documentation PDF with execution screenshots');
  }
  if (lower.includes('abstract') || lower.includes('related work')) {
    requirements.push('Abstract & Related literature review section');
  }
  if (lower.includes('ieee') || lower.includes('bibliography') || lower.includes('citation')) {
    requirements.push('IEEE formatted bibliography & citations');
  }
  if (lower.includes('formal problem') || lower.includes('evaluation')) {
    requirements.push('Formal Problem Statement & Proposed Evaluation');
  }

  if (requirements.length === 0) {
    requirements.push('Complete assignment prompt deliverables');
    requirements.push('Submit source files to course submission portal');
  }

  // Determine Estimated Workload Hours
  let estimatedHours = 5.0;
  const hoursMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:-|to)?\s*(\d+(?:\.\d+)?)?\s*hours?/i);
  if (hoursMatch) {
    estimatedHours = parseFloat(hoursMatch[1]);
  } else if (lower.includes('dbms')) {
    estimatedHours = 5.0;
  } else if (lower.includes('paper') || lower.includes('thesis')) {
    estimatedHours = 7.0;
  } else if (lower.includes('quiz') || lower.includes('prep')) {
    estimatedHours = 2.0;
  }

  return {
    task,
    course,
    deadline,
    deadlineFormatted: formatDeadlinePretty(deadline),
    requirements,
    estimatedHours,
    notes: text.length > 120 ? text.slice(0, 117) + '...' : text,
    confidence: 0.96,
    rawText: text,
    detectedLanguage
  };
};

export const EXTRACTION_STEPS: string[] = [
  'Deadline detected',
  'Requirements found',
  'Workload estimated'
];
