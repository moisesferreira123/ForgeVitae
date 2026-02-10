import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Criando os estilos (Equivalente ao seu Tailwind)
const styles = StyleSheet.create({
  page: {
    padding: '15mm',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica', // React-pdf tem Helvetica por padrão
    color: '#141414',
    display: 'flex',
    flexDirection: 'column',
  },
  // HEADER
  header: {
    textAlign: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    gap: 6,
    flexWrap: 'wrap',
  },
  separator: {
    color: '#9ca3af',
  },
  link: {
    textDecoration: 'underline',
    fontStyle: 'italic',
  },
  // SEÇÕES
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    borderBottomWidth: 1.5,
    borderBottomColor: '#e5e7eb',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  bodyText: {
    fontSize: 10,
    paddingLeft: 4,
    lineHeight: 1.4,
  },
  // PROJETOS
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 6,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  projectTech: {
    fontWeight: 'normal',
  },
  projectLinks: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  projectDescription: {
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 2,
    marginBottom: 2,
  },
  bulletList: {
    marginLeft: 12,
  },
  bulletItem: {
    fontSize: 9,
    flexDirection: 'row',
    marginBottom: 1,
  },
  bulletPoint: {
    width: 10,
  },
  // EDUCAÇÃO
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 4,
  },
  dateLocation: {
    textAlign: 'right',
  },
  smallItalic: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#4b5563',
  }
});

export const ResumePDF1 = () => (
  <Document title="Currículo - Moisés Ferreira">
    <Page size="A4" style={styles.page}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>Moisés Ferreira</Text>
        <View style={styles.contactRow}>
          <Text>(84) 99152-2678</Text>
          <Text style={styles.separator}>|</Text>
          <Text>moises.ferreira.118@ufrn.edu.br</Text>
          <Text style={styles.separator}>|</Text>
          <Text>Parnamirim, RN</Text>
        </View>
        <View style={[styles.contactRow, { marginTop: 2 }]}>
          <Text style={styles.link}>github.com/moisesferreira123</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.link}>linkedin.com/in/moises-ferreira-099278334</Text>
        </View>
      </View>

      {/* HABILIDADES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.bodyText}>
          HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, React, Hooks, Node.js, Express, Prisma, SQL (PostgreSQL, MySQL), Java, Spring Boot, Hibernate, JPA, API Restful, Git, GitHub.
        </Text>
      </View>

      {/* OBJETIVO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objetivo</Text>
        <Text style={styles.bodyText}>
          Estudante de Ciência da Computação na UFRN, buscando oportunidade de estágio na área de desenvolvimento web.
        </Text>
      </View>

      {/* PROJETOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos</Text>
        
        {/* Projeto 1 */}
        <View style={{ paddingLeft: 4 }}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>
              Typing Speed Test | <Text style={styles.projectTech}>React, Node, Prisma, TiDB, Tailwind CSS</Text>
            </Text>
            <Text style={styles.projectLinks}>Front | Back | Live Site</Text>
          </View>
          <Text style={styles.projectDescription}>Aplicação web de teste de velocidade de digitação com métricas em tempo real.</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text>Implementação de LocalStorage para Personal Best WPM offline.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text>Lógica de estado com Hooks para cronômetros e cálculos instantâneos.</Text>
            </View>
          </View>
        </View>

        {/* Projeto 2 */}
        <View style={{ paddingLeft: 4, marginTop: 8 }}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>
              Tic-Tac-Toe | <Text style={styles.projectTech}>JavaScript, HTML, Tailwind CSS</Text>
            </Text>
            <Text style={styles.projectLinks}>GitHub | Live Site</Text>
          </View>
          <Text style={styles.projectDescription}>Jogo da Velha com algoritmo Minimax (AI Imbatível).</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text>Desenvolvimento do algoritmo Minimax para árvore de decisão de IA.</Text>
            </View>
          </View>
        </View>
      </View>

      {/* IDIOMAS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Idiomas</Text>
        <View style={styles.bodyText}>
          <Text>• <Text style={{fontWeight: 'bold'}}>Português:</Text> Nativo</Text>
          <Text>• <Text style={{fontWeight: 'bold'}}>Inglês:</Text> Intermediário (Leitura)</Text>
        </View>
      </View>

      {/* EDUCAÇÃO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <View style={styles.eduRow}>
          <View>
            <Text style={[styles.bodyText, {fontWeight: 'bold', paddingLeft: 0}]}>UFRN</Text>
            <Text style={styles.smallItalic}>Bacharelado em Ciência da Computação</Text>
          </View>
          <View style={styles.dateLocation}>
            <Text style={{fontSize: 9}}>Mar. 2023 -- Presente</Text>
            <Text style={styles.smallItalic}>Natal, RN</Text>
          </View>
        </View>
      </View>

    </Page>
  </Document>
);