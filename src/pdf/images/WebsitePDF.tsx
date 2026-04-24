import { Line, Path, Svg } from "@react-pdf/renderer";

export default function WebsitePDF() {
  return (
    <Svg 
      viewBox="0 0 24 24" 
      style={{ width: 10, height: 10 }} // Tamanho ajustado para currículo
    >
      {/* Primeiro Path: Lado esquerdo do link */}
      <Path
        d="M9 17H7A5 5 0 0 1 7 7h2"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Segundo Path: Lado direito do link */}
      <Path
        d="M15 7h2a5 5 0 1 1 0 10h-2"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Linha central: Conector */}
      <Line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
