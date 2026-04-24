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
  // textIcon: {
  //   flexGrow: 0,
  //   flexShrink: 0,
  //   flexBasis: 'auto',
  // },
  separator: {
    color: '#9ca3af',
  },
  info: {
    flexDirection: 'row',
    gap: 3,
    borderRightWidth: 1.5,
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderRightStyle: 'solid',
    textDecoration: 'none',
    paddingRight: 9,
    minWidth: 0
  },
  lastInfo: {
    borderRightWidth: 0,
    paddingRight: 0
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
                style={[
                  styles.info,
                  styles.lastInfo
                ]}
              >
                {Icon && <Icon />}
                <Text>{data.fields[key].value}</Text>
              </Link>
            );

            return (
              <Link 
                key={`${key}-pdf`}  
                src={data.fields[key].link}
                style={[
                  styles.info,
                ]}
              >
                {Icon && <Icon />}
                <Text>{data.fields[key].value}</Text>
              </Link>
            );
          }

          if(isLast) return (
            <View key={`${key}-pdf`} 
              style={[
                styles.info,
                styles.lastInfo
              ]}
            >
              {Icon && <Icon />}
              <Text>{data.fields[key].value}</Text>
            </View>
          );

          return (
            <View key={`${key}-pdf`}  style={styles.info}>
              {Icon && <Icon />}
              <Text>{data.fields[key].value}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}