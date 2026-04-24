import { Svg, Path } from '@react-pdf/renderer';

export default function EmailPDF() {
  return (
    <Svg 
      viewBox="0 0 24 24" 
      style={{ 
        width: 10,  
        height: 10, 
      }}
    >
      {/* Primeiro Path: Corpo do envelope */}
      <Path
        fill="#000000"
        d="M19.68 20c1.414 0 2.56-1.194 2.56-2.667V10.5l-9.765 4.072a1.005 1.005 0 01-.475.095c-.232 0-.392-.034-.472-.099L1.76 10.5v6.833C1.76 18.806 2.906 20 4.32 20h15.36z"
      />
      {/* Segundo Path: Aba do envelope */}
      <Path
        fill="#000000"
        d="M12 11.9l10.24-4.267v-.966C22.24 5.194 21.094 4 19.68 4H4.32C2.906 4 1.76 5.194 1.76 6.667v.966L12 11.9z"
      />
    </Svg>
  );
}