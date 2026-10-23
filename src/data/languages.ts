export type Region = { id: string; name: string; languages: string[]; note?: string };

const list = (s: string) =>
  s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

export const REGIONS: Region[] = [
  {
    id: "african",
    name: "African Languages",
    note: "A starter list, not an exhaustive catalogue.",
    languages: list(
      "Acholi, Afar, Afrikaans, Akan, Amharic, Anuak, Arabic (Egyptian), Arabic (Hassaniya), Arabic (Maghrebi), Arabic (Sudanese), Arabic (Chadian), Arabic (Tunisian), Amazigh / Berber varieties, Baka, Bambara, Bari, Bemba, Bena, Bissa, Bobo, Bubi, Chichewa, Chokwe, Comorian, Dagaare, Dinka, Dioula / Dyula, Dogon languages, Duala / Douala, Edo, Efik, Ewe, Fang, Fante, Fulfulde / Fula / Pulaar, Ga, Ganda / Luganda, Gikuyu / Kikuyu, Giriama, Gogo, Gonja, Gourmanchéma, Gumuz, Hausa, Herero, Himba, Ibibio, Idoma, Igbo, Ijaw / Ijo, Ila, Isoko, Jola / Diola, Jukun, Kabyle, Kalenjin languages, Kanuri, Karamojong, Kasem, Kikongo, Kimbundu, Kinyarwanda, Kirundi, Kissi, Kituba, Kongo, Krio, Kusaal, Kwangali, Lango, Lega, Lendu, Lingala, Lozi, Luba-Kasai / Tshiluba, Luba-Katanga, Luo, Lusoga, Maasai / Maa, Madi, Makonde, Malagasy, Mandinka, Malinke, Mande languages, Marghi, Meru, Mina / Gen, Mongo, Mooré / Mossi, Mbochi, Mundang, Nama, Northern Ndebele, Southern Ndebele, Ndonga, Ngambay, Nigerian Pidgin, Nuer, Nobiin, Nkore / Runyankore, Nyankole, Oromo, Oshiwambo / Ovambo, Otjiherero, Portuguese (African varieties), Punu, Ronga, Runyoro, Sango, Sena, Sesotho, Setswana, Shona, Sidamo / Sidaama, Silozi / Lozi, Somali, Soninke, Sotho (Northern), Sotho (Southern), Sukuma, Swahili (East African), Swahili (Congolese), Swati / siSwati, Tamasheq, Tamazight varieties, Tigre, Tigrinya, Tiv, Tonga (Zambia / Zimbabwe), Tsonga / Xitsonga, Tumbuka, Turkana, Twi (Akan), Umbundu, Urhobo, Venda / Tshivenda, Wolaytta, Wolof, Xhosa / isiXhosa, Yoruba, Zarma, Zulu / isiZulu",
    ),
  },
  {
    id: "european",
    name: "European Languages",
    languages: list(
      "Albanian, Basque, Belarusian, Bosnian, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hungarian, Icelandic, Irish, Italian, Latvian, Lithuanian, Luxembourgish, Macedonian, Maltese, Norwegian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, Ukrainian, Welsh",
    ),
  },
  {
    id: "asian",
    name: "Asian Languages",
    languages: list(
      "Bengali, Burmese, Cantonese, Chinese (Simplified), Chinese (Traditional), Filipino, Gujarati, Hindi, Indonesian, Japanese, Javanese, Kannada, Kazakh, Khmer, Korean, Lao, Malay, Malayalam, Marathi, Mongolian, Nepali, Odia, Pashto, Persian, Punjabi, Sinhala, Tamil, Telugu, Thai, Tibetan, Urdu, Uzbek, Vietnamese",
    ),
  },
  {
    id: "middle-east",
    name: "Middle Eastern Languages",
    languages: list(
      "Arabic (Modern Standard), Arabic (Gulf), Arabic (Levantine), Arabic (Iraqi), Armenian, Azerbaijani, Hebrew, Kurdish (Kurmanji), Kurdish (Sorani), Persian (Farsi), Turkish",
    ),
  },
  {
    id: "north-america",
    name: "North American Languages",
    languages: list("English (US), English (Canada), French (Canada), Haitian Creole, Spanish (US), Spanish (Mexico)"),
  },
  {
    id: "south-america",
    name: "South American Languages",
    languages: list("Spanish (Latin America), Portuguese (Brazil), Quechua, Guarani, Aymara"),
  },
  {
    id: "caribbean",
    name: "Central American & Caribbean Languages",
    languages: list("Spanish (Central America), English (Caribbean), French (Caribbean), Haitian Creole, Jamaican Patois, Papiamento"),
  },
  {
    id: "oceania",
    name: "Oceanian Languages",
    languages: list("English (Australia), English (New Zealand), Fijian, Māori, Samoan, Tongan, Tok Pisin"),
  },
  {
    id: "other",
    name: "Other Languages & Regional Varieties",
    languages: list("Esperanto, Latin, Sign language workflows (on request), Other language / specify"),
  },
];

export const ALL_LANGUAGES: string[] = Array.from(
  new Set(REGIONS.flatMap((r) => r.languages)),
).sort((a, b) => a.localeCompare(b));

export const COVERAGE_NOTICE =
  "DEE Trans works with a range of languages and language pairs. Availability, specialist expertise, and delivery requirements are confirmed for each project.";
