import { useProdileFieldKeys } from "../../../../../../store/profileFieldsKeys";
import { useResumeData,  } from "../../../../../../store/resumeData";
import type { ProfileSection } from "../../../../../../types/profileTypes";
import { View } from "lucide-react";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 22.5,
    fontWeight: 'bold',
    marginBottom: 6,
    lineHeight: 1.25
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
})

export default function Profile() {
  const data = useResumeData().sections['profile'] as ProfileSection;
  const { keys } = useProdileFieldKeys();

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.fields['name'].value}</Text>
      <View style={styles.contactRow}>
        <Text>(84) 99152-2678</Text>
        <Text style={styles.separator}>|</Text>
        <Text>moises.ferreira.118@ufrn.edu.br</Text>
        <Text style={styles.separator}>|</Text>
        <Text>Parnamirim, RN</Text>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.link}>github.com/moisesferreira123</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.link}>linkedin.com/in/moises-ferreira-099278334</Text>
      </View>
    </View>
  );
}