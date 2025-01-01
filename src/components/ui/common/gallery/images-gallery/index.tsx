import React, { useEffect, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const images = [
  'https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=',
  'https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg',
  'https://images.herzindagi.info/image/2022/Apr/makeup-things-to-keep-in-mind.jpg',
];

export function ImagesGallery() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <View className="mt-2" style={{ height: Dimensions.get('window').width }}>
      <Carousel
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').width}
        onProgressChange={(_, slideProgress) => {
          if (slideProgress % 1 === 0) {
            setActiveSlide(slideProgress);
          }
        }}
        data={images}
        renderItem={({ item }) => (
          <Image
            className="aspect-square w-full object-cover"
            key={item}
            source={{ uri: item }}
          />
        )}
      />

      <View className="mb-3 mt-2 flex-row justify-center gap-1">
        {images.map((_, index) => (
          <Dot key={index} active={index === activeSlide} />
        ))}
      </View>
    </View>
  );
}

const Dot = ({ active }: { active: boolean }) => {
  const width = useSharedValue(8);

  useEffect(() => {
    if (active) {
      width.value = withSpring(30);
    } else {
      width.value = withSpring(8);
    }
  }, [active]);

  return (
    <Animated.View style={{ width }} className={`h-2 rounded-full bg-white`} />
  );
};
