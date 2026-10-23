import { Languages, Captions, SpellCheck, AudioLines, PenLine, ShieldCheck, Smartphone, Tags, type LucideIcon } from "lucide-react";
import hero from "@/assets/hero.jpg";
import translation from "@/assets/translation.jpg";
import subtitling from "@/assets/subtitling.jpg";
import transcription from "@/assets/transcription.jpg";
import about from "@/assets/about.jpg";
import apptesting from "@/assets/apptesting.jpg";

export type Field = {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "number";
  options?: string[];
  placeholder?: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  headline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  offerings: string[];
  explainer?: { title: string; items: { term: string; text: string }[] } | { title: string; body: string };
  workflow: string[];
  formats?: string[];
  fields: Field[];
  cta: string;
};

const yesNo = ["Yes", "No"];

export const SERVICES: Service[] = [
  {
    slug: "translation-localization",
    name: "Translation & Localization",
    short: "Translate documents, websites, software, and digital content while preserving meaning, tone, and cultural relevance.",
    icon: Languages,
    image: translation,
    imageAlt: "Translator reviewing printed documents with a pen beside a laptop",
    headline: "Translation & Localization That Connects You With Your Audience",
    description: "DEE Trans supports multilingual communication by translating and adapting content for its intended audience, language, and cultural context.",
    seoTitle: "Translation & Localization Services | DEE Trans",
    seoDescription: "Document, website, software and app translation and localization, adapted for language, audience and culture by DEE Trans.",
    offerings: [
      "Document translation",
      "Website translation",
      "Software and app localization",
      "Business and corporate translation",
      "Legal and compliance content, subject to qualified resources",
      "Banking and financial content, subject to qualified resources",
      "Technical translation",
      "Marketing and product content",
      "Localization of digital content",
      "Terminology and consistency review",
    ],
    workflow: [
      "Assess: we review your files, language pair, subject matter, and deadline.",
      "Assign: the project goes to a linguist with relevant language and subject expertise.",
      "Translate: the content is translated and adapted for the target audience.",
      "Review: an agreed review step checks accuracy, terminology, and consistency.",
      "Deliver: you receive the files in the requested format.",
    ],
    fields: [
      { name: "content_type", label: "Content type", type: "select", options: ["Document", "Website", "Software / app", "Marketing", "Technical", "Legal / compliance", "Financial", "Other"] },
      { name: "word_count", label: "Approximate word count", type: "number" },
    ],
    cta: "Request a Translation Quote",
  },
  {
    slug: "subtitle-translation",
    name: "Subtitle Translation & Subtitling",
    short: "Translate subtitles, prepare SRT files, and support audiovisual localization and subtitle review.",
    icon: Captions,
    image: subtitling,
    imageAlt: "Subtitle specialist working with a video timeline and subtitle tracks on two monitors",
    headline: "Subtitle Translation and Audiovisual Localization",
    description: "DEE Trans supports multilingual video projects through subtitle translation, subtitle creation, subtitle review, and audiovisual language services.",
    seoTitle: "Subtitle Translation & SRT Subtitling Services | DEE Trans",
    seoDescription: "SRT subtitle translation, subtitle creation, review, timing checks and audiovisual localization for video projects.",
    offerings: [
      "SRT subtitle translation",
      "Subtitle proofreading and review",
      "Subtitle creation from dialogue, scripts, or transcripts",
      "Subtitle timing and synchronization review",
      "Subtitle formatting and readability checks",
      "Video and audiovisual localization",
      "Subtitle quality assurance",
      "Accessibility-related subtitle workflows, when requested and supported",
    ],
    formats: ["SRT", "VTT", "Other client-requested subtitle formats, where supported"],
    workflow: [
      "Receive the video, source subtitles, transcript, or script.",
      "Confirm source language, target language, video duration, and output requirements.",
      "Translate, prepare, or review the subtitles.",
      "Check linguistic quality, formatting, and timing as agreed.",
      "Deliver the completed subtitle files.",
    ],
    fields: [
      { name: "video_duration", label: "Total video duration (minutes)", type: "number" },
      { name: "video_count", label: "Number of videos or episodes", type: "number" },
      { name: "existing_subtitles", label: "Existing subtitle file?", type: "select", options: yesNo },
      { name: "output_format", label: "Requested output format", type: "select", options: ["SRT", "VTT", "Other"] },
    ],
    cta: "Request Subtitle Translation",
  },
  {
    slug: "proofreading-review",
    name: "Proofreading & Linguistic Review",
    short: "Improve grammar, spelling, clarity, fluency, terminology, and consistency.",
    icon: SpellCheck,
    image: translation,
    imageAlt: "Professional proofreading a printed document",
    headline: "Polished Language. Clear Communication.",
    description: "DEE Trans helps clients improve existing content through careful proofreading and linguistic review, with attention to accuracy, clarity, consistency, and natural expression.",
    seoTitle: "Proofreading & Linguistic Review Services | DEE Trans",
    seoDescription: "Proofreading, editing and bilingual translation review for grammar, terminology, fluency and consistency.",
    offerings: [
      "Grammar and spelling proofreading",
      "Punctuation and style review",
      "Translation proofreading",
      "Bilingual linguistic review",
      "Terminology consistency",
      "Fluency and naturalness review",
      "Tone and register review",
      "Formatting and language checks",
    ],
    explainer: {
      title: "Proofreading, editing, or bilingual review?",
      items: [
        { term: "Proofreading", text: "A final check of a finished text for spelling, grammar, punctuation, and formatting errors." },
        { term: "Editing", text: "Deeper work on clarity, flow, style, and structure, which may involve rewriting sentences." },
        { term: "Bilingual review", text: "A comparison of a translation against its source to check accuracy, omissions, and terminology." },
      ],
    },
    workflow: [
      "Share the document and tell us the level of review you need.",
      "We confirm language, scope, and deadline.",
      "The reviewer works through the text with tracked changes or comments.",
      "You receive the reviewed file and any notes.",
    ],
    fields: [
      { name: "review_type", label: "Review type", type: "select", options: ["Proofreading", "Editing", "Bilingual translation review", "Not sure"] },
      { name: "document_type", label: "Document type", type: "text" },
      { name: "word_count", label: "Approximate word count", type: "number" },
    ],
    cta: "Request Proofreading",
  },
  {
    slug: "audio-transcription",
    name: "Audio Transcription",
    short: "Convert audio and video recordings into accurate, readable transcripts in the requested language and format.",
    icon: AudioLines,
    image: transcription,
    imageAlt: "Transcription specialist with headphones viewing an audio waveform",
    headline: "Accurate Audio Transcription Across Languages",
    description: "DEE Trans converts spoken content into written transcripts for business, media, research, education, and other project needs.",
    seoTitle: "Audio & Video Transcription Services | DEE Trans",
    seoDescription: "Multilingual audio and video transcription, verbatim or clean-read, with speaker labels and timestamps on request.",
    offerings: [
      "Audio transcription",
      "Video transcription",
      "Multilingual transcription",
      "Verbatim transcription",
      "Clean-read transcription",
      "Speaker identification, when requested",
      "Timestamping, when requested",
      "Transcript formatting",
      "Transcript proofreading",
      "Transcription for subtitle workflows",
    ],
    formats: ["TXT", "DOCX", "SRT, when subtitle-style timestamps are required", "Other requested formats, where supported"],
    explainer: {
      title: "What affects a transcription project",
      body: "Recording quality, background noise, overlapping speakers, accents, and language complexity all affect how a recording is handled. Sharing a sample helps us assess the work accurately.",
    },
    workflow: [
      "Upload your recordings or share a link.",
      "We confirm language, duration, style, and output format.",
      "The recording is transcribed in the agreed style.",
      "The transcript is checked and delivered.",
    ],
    fields: [
      { name: "duration", label: "Total audio/video duration (minutes)", type: "number" },
      { name: "file_count", label: "Number of files", type: "number" },
      { name: "speakers", label: "Number of speakers, if known", type: "number" },
      { name: "style", label: "Transcription style", type: "select", options: ["Verbatim", "Clean-read", "Not sure"] },
      { name: "timestamps", label: "Timestamps", type: "select", options: ["None", "Per paragraph", "Per speaker change", "Regular intervals"] },
      { name: "output_format", label: "Desired output format", type: "select", options: ["TXT", "DOCX", "SRT", "Other"] },
    ],
    cta: "Request Audio Transcription",
  },
  {
    slug: "copywriting-transcreation",
    name: "Copywriting & Transcreation",
    short: "Create and adapt engaging content for different audiences, cultures, and communication objectives.",
    icon: PenLine,
    image: about,
    imageAlt: "Content professionals developing campaign copy together",
    headline: "Words That Speak to Your Audience",
    description: "DEE Trans supports original content creation and cultural adaptation, helping clients communicate naturally and effectively across languages and audiences.",
    seoTitle: "Copywriting & Transcreation Services | DEE Trans",
    seoDescription: "Marketing and website copywriting, brand messaging and transcreation that adapts your message for each culture.",
    offerings: [
      "Marketing copywriting",
      "Website copywriting",
      "Product descriptions",
      "Advertising and campaign content",
      "Brand messaging",
      "Multilingual content adaptation",
      "Transcreation",
      "Tone-of-voice adaptation",
      "Localization of creative content",
    ],
    explainer: {
      title: "Copywriting vs. transcreation",
      items: [
        { term: "Copywriting", text: "Creates original content from a brief, written for a specific audience and objective." },
        { term: "Transcreation", text: "Adapts an existing message creatively, preserving its intent, emotional impact, and cultural relevance rather than its exact words." },
      ],
    },
    workflow: [
      "Share your brief, audience, and brand voice.",
      "We agree on scope, volume, and review rounds.",
      "Copy is written or adapted for each language.",
      "You review, we refine, and the final copy is delivered.",
    ],
    fields: [
      { name: "content_type", label: "Content type", type: "text", placeholder: "e.g. landing page, ad campaign" },
      { name: "audience", label: "Target audience", type: "text" },
      { name: "brand_voice", label: "Brand voice", type: "text" },
      { name: "objective", label: "Communication objective", type: "text" },
      { name: "volume", label: "Word count or content volume", type: "text" },
    ],
    cta: "Discuss Your Copywriting Project",
  },
  {
    slug: "linguistic-quality-assurance",
    name: "Linguistic Quality Assurance (LQA)",
    short: "Evaluate translated content for accuracy, consistency, terminology, cultural appropriateness, and guideline compliance.",
    icon: ShieldCheck,
    image: translation,
    imageAlt: "Linguistic reviewer inspecting translated content",
    headline: "Quality Assurance for Multilingual Content",
    description: "DEE Trans provides linguistic quality assurance to identify language issues, improve consistency, and assess translated content against agreed project guidelines.",
    seoTitle: "Linguistic Quality Assurance (LQA) Services | DEE Trans",
    seoDescription: "LQA for translations, subtitles, websites and software: accuracy, terminology, fluency and locale checks against your guidelines.",
    offerings: [
      "Translation accuracy checks",
      "Fluency and naturalness review",
      "Terminology validation",
      "Style and tone consistency",
      "Cultural and locale suitability",
      "Subtitle LQA",
      "Website and software language QA",
      "Linguistic defect identification",
      "Quality scoring or reporting, when defined by the client",
    ],
    explainer: {
      title: "About quality scores",
      body: "Any quality score or evaluation follows a rubric agreed with you before work begins, such as your own error typology or a framework you specify.",
    },
    workflow: [
      "Confirm languages, content, and quality criteria.",
      "Review the translated content against the source and project guidelines.",
      "Identify and categorize linguistic issues.",
      "Provide corrections, comments, or a quality report.",
      "Deliver findings in the agreed format.",
    ],
    fields: [
      { name: "content_type", label: "Content type", type: "text" },
      { name: "project_size", label: "Project size", type: "text", placeholder: "words, strings, minutes…" },
      { name: "quality_guidelines", label: "Quality guidelines", type: "textarea" },
      { name: "terminology", label: "Terminology references", type: "text" },
      { name: "review_format", label: "Requested review format", type: "select", options: ["Tracked changes", "Comments", "Error report / spreadsheet", "Scored report"] },
    ],
    cta: "Request LQA",
  },
  {
    slug: "app-testing",
    name: "App Testing & Localization Testing",
    short: "Test multilingual apps, websites, and software interfaces for language errors, display problems, and locale issues.",
    icon: Smartphone,
    image: apptesting,
    imageAlt: "Localization tester reviewing a mobile app interface on a phone and laptop",
    headline: "Test Your App Across Languages and Locales",
    description: "DEE Trans supports linguistic and localization testing for multilingual apps, websites, and software interfaces, helping identify language defects and user-facing localization issues.",
    seoTitle: "App Localization & Linguistic Testing | DEE Trans",
    seoDescription: "Linguistic and localization testing for apps, websites and software: truncation, rendering, locale formats and untranslated strings.",
    offerings: [
      "Linguistic testing of app interfaces",
      "Localization testing",
      "Language and terminology checks",
      "Text truncation and overflow detection",
      "Incorrect character or script rendering",
      "Locale formatting checks, such as dates and numbers",
      "Placeholder and untranslated-string checks",
      "Navigation and interface language review",
      "Linguistic defect reporting",
      "Language-related usability observations",
    ],
    explainer: {
      title: "Linguistic testing, not full QA",
      body: "Our testing focuses on how language appears and behaves in your product. It is not automated testing, security testing, or complete functional testing.",
    },
    workflow: [
      "Share the build, access instructions, and target locales.",
      "We agree on test scope and defect reporting format.",
      "Testers review the interface in each locale.",
      "Defects are logged with screenshots and suggested fixes.",
    ],
    fields: [
      { name: "product_name", label: "App, website, or software name", type: "text" },
      { name: "platform", label: "Platform", type: "select", options: ["iOS", "Android", "Web", "Desktop", "Other"] },
      { name: "test_scope", label: "Test scope", type: "textarea" },
      { name: "environment", label: "Test environment or access instructions", type: "textarea" },
      { name: "deliverables", label: "Expected deliverables", type: "text" },
      { name: "defect_format", label: "Defect reporting format", type: "select", options: ["Spreadsheet", "Your bug tracker", "Document", "Other"] },
    ],
    cta: "Discuss App Testing",
  },
  {
    slug: "data-annotation",
    name: "Data Annotation",
    short: "Label, classify, and review linguistic data for AI, machine learning, language technology, and research.",
    icon: Tags,
    image: hero,
    imageAlt: "Language-data specialist working at a laptop",
    headline: "Linguistic Data Annotation for AI and Research",
    description: "DEE Trans supports language-data projects by labeling, classifying, reviewing, and organizing linguistic content according to client-provided instructions.",
    seoTitle: "Linguistic Data Annotation Services | DEE Trans",
    seoDescription: "Text classification, sentiment, intent, NER, speech annotation and dataset review for AI and research projects.",
    offerings: [
      "Text classification",
      "Sentiment annotation",
      "Intent labeling",
      "Named entity recognition",
      "Language identification",
      "Linguistic tagging",
      "Speech and transcription annotation",
      "Subtitle and text alignment",
      "Dataset review",
      "Annotation quality checks",
      "Custom linguistic annotation tasks",
    ],
    explainer: {
      title: "Every dataset is different",
      body: "The workflow, tooling, languages, dataset size, and quality criteria are agreed for each project before annotation begins.",
    },
    workflow: [
      "Share a sample, your guidelines, and the tool you use.",
      "We run a pilot batch to align on the guidelines.",
      "Annotation proceeds with agreed quality checks.",
      "Labeled data is delivered in your format.",
    ],
    fields: [
      { name: "data_type", label: "Data type", type: "select", options: ["Text", "Audio", "Video", "Subtitles", "Mixed"] },
      { name: "categories", label: "Annotation categories", type: "text" },
      { name: "dataset_size", label: "Dataset size", type: "text" },
      { name: "guidelines", label: "Annotation guidelines", type: "textarea" },
      { name: "tooling", label: "Tool or platform requirements", type: "text" },
      { name: "qa_requirements", label: "Quality assurance requirements", type: "text" },
    ],
    cta: "Discuss Your Data Project",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
