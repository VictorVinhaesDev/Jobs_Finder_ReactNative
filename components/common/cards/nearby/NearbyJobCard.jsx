import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
        <Image
          source={{ uri: job.employer_logo || "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
          resizeMode='contain'
          style={styles.logoImage}
        />

      </TouchableOpacity>
      
      <View style={styles.textContainer}>
      {/* isso de numberoflines=1 vai fazer com que o texto seja cortado e fique em uma linha, assim evitando o overflow */}
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        </View>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
    </TouchableOpacity>
  )
}

export default NearbyJobCard