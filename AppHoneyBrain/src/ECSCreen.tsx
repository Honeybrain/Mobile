import React, { useContext } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Nav/navigationTypes';
import { useTranslation } from "react-i18next";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../NightMode/ThemeContext';

const textLines = [
  "1. A picture is worth a thousand words.",
  "2. Don't count your chickens before they hatch.",
  "3. Actions speak louder than words.",
  "4. All that glitters is not gold.",
  "5. Beggars can't be choosers.",
  "6. The early bird catches the worm.",
  "7. When in Rome, do as the Romans do.",
  "8. You can't have your cake and eat it too.",
  "9. The pen is mightier than the sword.",
  "10. Every cloud has a silver lining.",
  "11. Hindsight is 20/20.",
  "12. Rome wasn't built in a day.",
  "13. Two heads are better than one.",
  "14. Where there's smoke, there's fire.",
  "15. You're a chip off the old block.",
  "16. A stitch in time saves nine.",
  "17. The apple doesn't fall far from the tree.",
  "18. A watched pot never boils.",
  "19. Beauty is in the eye of the beholder.",
  "20. Don't bite the hand that feeds you.",
  "21. Easy come, easy go.",
  "22. Every dog has its day.",
  "23. Fortune favors the bold.",
  "24. It's a piece of cake.",
  "25. Let the cat out of the bag.",
  "26. No news is good news.",
  "27. Put all your eggs in one basket.",
  "28. The grass is always greener on the other side.",
  "29. The whole nine yards.",
  "30. You can't make an omelette without breaking eggs.",
  "31. A friend in need is a friend indeed.",
  "32. Don't judge a book by its cover.",
  "33. Every man has his price.",
  "34. The pot calling the kettle black.",
  "35. When the going gets tough, the tough get going.",
  "36. You scratch my back, and I'll scratch yours.",
  "37. A rolling stone gathers no moss.",
  "38. Birds of a feather flock together.",
  "39. Curiosity killed the cat.",
  "40. Don't put all your eggs in one basket.",
  "41. Easier said than done.",
  "42. Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
  "43. It takes two to tango.",
  "44. Jump on the bandwagon.",
  "45. Kill two birds with one stone.",
  "46. Like father, like son.",
  "47. Necessity is the mother of invention.",
  "48. Out of the frying pan and into the fire.",
  "49. Speak of the devil.",
  "50. Two wrongs don't make a right."]

type EnteringConnectionsProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Ip'>;
};

const EnteringConnections: React.FC<EnteringConnectionsProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  // Styles conditionnels basés sur le mode nuit
  const containerBackgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? 'white' : 'black';
  const scrollViewBackgroundColor = isDarkMode ? '#1a1a1a' : '#f0f0f0';

  return(
    <SafeAreaView style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Text style={[GlobalStyles.title, { color: textColor }]}>{t('ECScreen.EnteringConnections')}</Text>
      <View
      style={[styles.scrollViewWrapper, { borderColor: isDarkMode ? 'darkgrey' : 'lightgrey' }]}
      >
        <ScrollView
            horizontal={true}
            >
          <ScrollView
            style={styles.scrollView}
            bounces={false}
          >
          {textLines.map((line, index) => (
            <Text
              key={index}
              style={[
                styles.scrollViewText,
                // { backgroundColor: scrollViewBackgroundColor, color: textColor },
                index % 2 === 0 ? styles.evenLine : styles.oddLine,
              ]}
            >
              {line}
            </Text>
          ))}
          </ScrollView>
        </ScrollView>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  scrollView: {
  },
  scrollViewWrapper: {
    padding: 5,
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    height: '80%',
  },
  scrollViewText: {
    fontSize: 16
  },
  evenLine: {
    backgroundColor: '#e0e0e0',
  },
  oddLine: {
    backgroundColor: '#f0f0f0',
  },
});

export default EnteringConnections;