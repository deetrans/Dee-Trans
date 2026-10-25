export type PortfolioSample = {
  title: string;
  category: string;
  languages: string;
  objective: string;
  sourceSample?: string;
  targetSample?: string;
  approach: string;
  skills: string[];
};

/**
 * Demonstration samples. These are illustrative examples created to show the
 * type of work DEE Trans coordinates — they are NOT completed client projects.
 * Example translations shown here are illustrative and would receive full
 * linguistic review before any real publication.
 */
export const PORTFOLIO_SAMPLES: PortfolioSample[] = [
  {
    title: "Product Page Localization",
    category: "Translation & Localization",
    languages: "English → French",
    objective: "Adapt an e-commerce product page so it reads naturally for French-speaking customers while keeping the brand tone.",
    sourceSample: "“Built to last. Our stainless-steel bottle keeps drinks cold for 24 hours — wherever the day takes you.”",
    targetSample: "« Conçue pour durer. Notre bouteille en acier inoxydable garde vos boissons fraîches pendant 24 heures — où que votre journée vous mène. »",
    approach: "Translate meaning and tone rather than word-for-word phrasing, keep measurements and product claims accurate, and adapt idioms for the target market.",
    skills: ["Marketing translation", "Cultural adaptation", "Terminology consistency"],
  },
  {
    title: "Training Video Subtitles",
    category: "Subtitle Translation & Subtitling",
    languages: "English → Spanish",
    objective: "Prepare SRT subtitles for a short corporate training video so Spanish-speaking staff can follow along.",
    sourceSample: "00:00:04,120 --> 00:00:06,480\nWelcome to this short safety briefing.",
    targetSample: "00:00:04,120 --> 00:00:06,480\nBienvenidos a esta breve charla de seguridad.",
    approach: "Keep each subtitle within readable length and timing limits, preserve the speaker's meaning, and follow the client's formatting requirements.",
    skills: ["SRT translation", "Timing & readability", "Audiovisual localization"],
  },
  {
    title: "Website Copy Proofreading",
    category: "Proofreading & Linguistic Review",
    languages: "English",
    objective: "Review a draft landing page for grammar, clarity, and consistent tone before publication.",
    sourceSample: "“Our team are commited to delivering you the best service possible, everytime.”",
    targetSample: "“Our team is committed to delivering the best service possible, every time.”",
    approach: "Correct spelling and grammar, remove awkward phrasing, and flag anything that could confuse the intended audience.",
    skills: ["Proofreading", "Style consistency", "Attention to detail"],
  },
  {
    title: "Interview Transcription",
    category: "Audio Transcription",
    languages: "English",
    objective: "Produce a clean-read transcript of a recorded research interview with speaker labels and timestamps.",
    sourceSample: "Audio excerpt: two speakers discussing customer feedback (approx. 45 seconds).",
    targetSample: "Interviewer [00:12]: What prompted the change?\nParticipant [00:15]: Mainly the feedback we got in the spring survey.",
    approach: "Transcribe in the agreed style (clean-read), label speakers, add timestamps at the requested intervals, and proofread the final transcript.",
    skills: ["Clean-read transcription", "Speaker identification", "Timestamping"],
  },
  {
    title: "App Interface Localization Test",
    category: "App Localization Testing",
    languages: "English → German",
    objective: "Check a mobile app's German interface for truncation, untranslated strings, and locale formatting issues.",
    sourceSample: "Settings screen, German locale: button label “Einstellungen speichern” clipped at small screen width.",
    targetSample: "Defect report: “Button label truncated on 360px width. Suggest shorter label ‘Speichern’ or adaptive layout.”",
    approach: "Walk through the agreed screens in the target locale, log each linguistic or layout defect with a screenshot, and suggest practical fixes.",
    skills: ["Localization testing", "Defect reporting", "Locale formatting checks"],
  },
  {
    title: "Review Sentiment Annotation",
    category: "Data Annotation",
    languages: "Multilingual (English, French)",
    objective: "Label a sample batch of customer reviews by sentiment following client-provided annotation guidelines.",
    sourceSample: "“Delivery was slow, but the product itself is excellent.”",
    targetSample: "Labels: sentiment = mixed; aspects = delivery (negative), product quality (positive).",
    approach: "Apply the client's guidelines consistently, run a small pilot batch to align on edge cases, then annotate with agreed quality checks.",
    skills: ["Text classification", "Guideline application", "Quality checks"],
  },
];
