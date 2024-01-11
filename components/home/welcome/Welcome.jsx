import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const jobsTypes = ["Full-time", "Part-time", "Contractor"]
  const [activeJobType, setActiveJobType] = useState("Full-time")
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>
          Hello Victor
        </Text>
        <Text style={styles.welcomeMessage}>
          Find your perfect job
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          {/* pode dar uym erro nesse styles.searchInput... algum bug de font */}
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(value) => setSearchTerm(value)}
            placeholder='what are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome