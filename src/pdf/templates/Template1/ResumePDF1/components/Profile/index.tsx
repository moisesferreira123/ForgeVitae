import { useProdileFieldKeys } from "../../../../../../store/profileFieldsKeys";
import { useResumeData,  } from "../../../../../../store/resumeData";
import type { ProfileSection } from "../../../../../../types/profileTypes";
import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";

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
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    columnGap: 9,
    flexWrap: 'wrap',
  },
  info: {
    flexDirection: 'row',
    gap: 3,
    fontSize: 10,
    textDecoration: 'none',
    minWidth: 0
  },
  separator: {
    width: 1.5,
    height: 10, 
    backgroundColor: 'rgb(0, 0, 0)',
    marginLeft: 6, 
  }
})

export default function Profile() {
  const data = useResumeData().sections['profile'] as ProfileSection;
  const { keys } = useProdileFieldKeys();

  const visibleKeys = keys.filter(key => 
    key !== 'name' && data.fields[key].value !== ''
  );

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.fields['name'].value}</Text>
      <View style={styles.personalInfo}>
        {visibleKeys.map((key, index) => {
          console.log(visibleKeys);
          const isLast = index === visibleKeys.length-1;

          const Icon: React.ElementType | undefined = data.fields[key].IconPDF;

          if(data.fields[key].link !== undefined && data.fields[key].link !== '') {
            if(isLast) return (
              <Link 
                key={`${key}-pdf`} 
                src={data.fields[key].link}
                style={styles.info}
              >
                {Icon && <Icon />}
                <Text>{data.fields[key].value}</Text>
              </Link>
            );

            return (
              <Link 
                key={`${key}-pdf`}  
                src={data.fields[key].link}
                style={styles.info}
              >
                {Icon && <Icon />}
                <Text>{data.fields[key].value}</Text>
                {!isLast && <View style={styles.separator} />}
              </Link>
            );
          }

          if(isLast) return (
            <View key={`${key}-pdf`} 
              style={styles.info}
            >
              {Icon && <Icon />}
              <Text>{data.fields[key].value}</Text>
            </View>
          );

          return (
            <View key={`${key}-pdf`}  style={styles.info}>
              {Icon && <Icon />}
              <Text>{data.fields[key].value}</Text>
              {!isLast && <View style={styles.separator} />}
            </View>
          );
        })}
      </View>
    </View>
  );
}