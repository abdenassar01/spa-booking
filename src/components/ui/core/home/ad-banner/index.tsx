import React from 'react';
import { Image, ScrollView } from 'react-native';
//import PagerView from 'react-native-pager-view';

export function AdBanner() {
  return (
    <ScrollView horizontal className="border">
      {[
        'http://crewsec.compiledideas.dev/v1/storage/images/download/cca30c49-9275-4efe-ab19-7a7d26282929_hero_section_3.webp',
        'http://crewsec.compiledideas.dev/v1/storage/images/download/ccf86ce7-5b93-4502-8065-5bdfca8f3e0d_hero_section_2.webp',
        'http://crewsec.compiledideas.dev/v1/storage/images/download/12ea2fbc-f714-47c9-bafa-1737ac472488_hero_section_4.webp',
        'http://crewsec.compiledideas.dev/v1/storage/images/download/616ddac2-5158-4194-9265-8b6a243e0730_product_placeholder.webp',
      ].map((image) => (
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          className="h-40 w-full"
        />
      ))}
    </ScrollView>
  );
}
