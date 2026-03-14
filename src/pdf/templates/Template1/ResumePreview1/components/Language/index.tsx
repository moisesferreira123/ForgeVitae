import ComponentHTML from "../../../../../../components/ComponentHTML";
import { useResumeData } from "../../../../../../store/resumeData";
import type { LanguageSection } from "../../../../../../types/languageTypes";

export default function Language() {
  const data = (useResumeData().sections['language'] as LanguageSection).languages;

  return (
    <section className="pdf-list">
      <h2 className="text-[12pt] font-bold border-b-2 border-gray-200 mb-1 uppercase tracking-wide">Idiomas</h2>
      <ul className="text-[10pt] pl-2 list-none space-y-1">
        {data.map((language, index) => (
          <li key={`language-${index}`}>
            <strong>{language.language}:</strong> {language.level}
            <p>
              <ComponentHTML HTMLstring={language.description} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}